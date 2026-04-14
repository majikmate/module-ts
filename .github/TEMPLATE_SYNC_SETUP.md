# Template Sync Workflow Setup

This workflow automatically creates pull requests from copy repositories back to
the template repository. It works across different organizations.

## How It Works

When you push changes to the `main` branch of a copy repository (created from
the template), this workflow will:

1. **Automatically detect** the template repository it was created from
2. Create a new branch in the template repository
3. Push your changes to that branch
4. Create a pull request in the template repository
5. **Auto-merge** if no conflicts exist, or leave open for manual review

## Typical Setup Scenario

- **Template Repository**: `majikmate/module-ts` (in majikmate organization)
- **Copy Repositories**: `HTLD-STH-SWP/2025-2awi-swp-*` (in Enterprise
  organization)
- **Token Location**: HTLD-STH-SWP organization secrets (configure once for all
  copies)

## Setup Instructions

### 1. Create a Personal Access Token (PAT)

The token must be created from an account with **write access to the template
repository** (majikmate/module-ts).

#### Option A: Use Your Personal Account (Quick Setup)

If you have write access to the template repository:

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a descriptive name: `Template Sync Token - Cross Org`
4. Select the following scopes:
   - ✅ `repo` (Full control of repositories)
   - ✅ `workflow` (Update GitHub Action workflows)
5. Click "Generate token"
6. **Copy the token immediately** (you won't be able to see it again)

#### Option B: Create a Bot Account (Recommended for Production)

For better security and auditing:

1. Create a dedicated GitHub account (e.g., `majikmate-sync-bot`)
2. Add this account as a **collaborator** to `majikmate/module-ts` with
   **Write** access
3. Generate a PAT from this bot account with `repo` and `workflow` scopes

### 2. Add the Token to the Copy Organization (Recommended)

Since all copy repositories are in the **HTLD-STH-SWP** (or similar Enterprise)
organization, configure the token once at the organization level:

1. Go to the **copy organization** settings:
   https://github.com/organizations/HTLD-STH-SWP/settings/secrets/actions
2. Click "New organization secret"
3. Name: `TEMPLATE_SYNC_TOKEN`
4. Value: Paste the PAT you created
5. Repository access:
   - Select **"All repositories"** for automatic access, OR
   - Choose **specific repositories** that need sync capability
6. Click "Add secret"

**Benefits**:

- ✅ Configure once, works for all copy repositories
- ✅ Centralized token management and rotation
- ✅ No per-repository configuration needed

#### Alternative: Repository-Level Secret

If you prefer per-repository configuration:

1. Go to each copy repository's Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Name: `TEMPLATE_SYNC_TOKEN`
4. Value: Paste the PAT you created
5. Click "Add secret"

### 3. The Workflow is Automatically Included

When you create a repository from the template, the workflow file is
automatically copied. It will:

- ✅ Automatically detect it's a template copy
- ✅ Extract the template repository details
- ✅ Start working immediately once the secret is configured
- ✅ Skip execution if the token is not configured (no errors)

## Important Security Considerations

### Cross-Organization Token Access

⚠️ **Important**: The `TEMPLATE_SYNC_TOKEN` grants **copy repositories write
access to the template repository**. This means any code pushed to copy repos
can create PRs (and potentially auto-merge) into the template.

### Recommended: Branch Protection on Template

To prevent accidental or unwanted changes to the template, enable branch
protection:

1. Go to: https://github.com/majikmate/module-ts/settings/branches
2. Add rule for `main` branch
3. **Recommended settings**:
   - ✅ "Require status checks to pass before merging"
   - ✅ "Require conversation resolution before merging"
   - ⚠️ "Require a pull request before merging" (blocks auto-merge, requires
     manual review)
   - ⚠️ "Require approvals" (blocks auto-merge, requires manual approval)

**Note**: If you require approvals, the workflow will create PRs but auto-merge
will be blocked. PRs will remain open for manual review and approval.

## Workflow Behavior

### When it Runs

- **Trigger**: Push to `main` branch or manual workflow dispatch
- **Condition**: Only in repositories created from a template
- **Skips**: Automatically skips if not a template copy or if token is missing

### What it Does

1. Detects the original template repository via GitHub API
2. Checks if there are new commits to sync
3. Creates a timestamped branch in the template repository
4. Pushes changes to the template repository
5. Creates a pull request with source details
6. **Checks mergeable state** with smart polling (up to 10 attempts)
7. **Auto-merges** if:
   - ✅ No conflicts exist (`clean` state)
   - ✅ No branch protection blocks
8. **Leaves open for manual review** if:
   - ⚠️ Conflicts detected
   - ⚠️ Branch protection requires approval
   - ⚠️ Status checks failing
9. Adds informative comments explaining the result
10. Cleans up branches after successful merge or on failure

### Auto-Merge States

| State      | Action                                   | Auto-Merge |
| ---------- | ---------------------------------------- | ---------- |
| `clean`    | ✅ Merges automatically                  | Yes        |
| `dirty`    | ⚠️ Has conflicts, requires manual review | No         |
| `blocked`  | ⚠️ Branch protection blocking            | No         |
| `unstable` | ⚠️ Failing status checks                 | No         |
| `behind`   | ⚠️ Base branch ahead, update needed      | No         |

## Troubleshooting

### Workflow Doesn't Run

- ✅ Verify you're pushing to the `main` branch
- ✅ Check repository was created using "Use this template"
- ✅ Verify the secret `TEMPLATE_SYNC_TOKEN` is configured in the copy
  organization or repository
- ✅ Ensure the workflow file exists in `.github/workflows/sync-to-template.yml`
- ✅ Check Actions are enabled for the repository

### Authentication Errors

- The PAT might be expired or invalid (tokens expire after set duration)
- The PAT needs `repo` and `workflow` scopes
- The account that created the PAT needs **write access** to the template
  repository
- Regenerate the token and update the organization secret

### Pull Request Creation Fails

- Ensure the PAT has permissions to create PRs in the template repository
- Verify the template repository exists and is accessible
- Check if there's a network/API issue with GitHub
- Review workflow logs for specific error messages

### Auto-Merge Not Working

- Check if branch protection rules require approvals
- Verify status checks aren't failing
- Review the PR comments for the specific reason
- Look at workflow logs for `mergeable_state` value

### "Not a template copy" Message

- The repository must be created using GitHub's "Use this template" feature
- Forked repositories don't have template metadata
- Manually cloned repositories won't work (must use template feature)

## Cross-Organization Scenarios

### Example 1: Template in Org A, Copies in Org B

**Setup:**

- Template: `org-a/template-repo`
- Copies: `org-b/project-1`, `org-b/project-2`
- Token: Store in `org-b` organization secrets
- Token owner: Must have write access to `org-a/template-repo`

### Example 2: Multiple Copy Organizations

**Setup:**

- Template: `main-org/template-repo`
- Copies: `team-a/copy-1`, `team-b/copy-2`, `team-c/copy-3`
- Token: Store in each organization's secrets separately OR in each repository
- Token owner: Must have write access to `main-org/template-repo`

### Example 3: Enterprise with Multiple Organizations

**Setup:**

- Template: `enterprise/templates/base-template`
- Copies: Various teams in same Enterprise
- Token: Can use Enterprise-level secrets (if available)
- Token owner: Service account with access to template

## Customization

You can customize the workflow by editing
`.github/workflows/sync-to-template.yml`:

- Change the trigger branch (currently `main`)
- Modify the PR title and body template
- Adjust mergeable state polling attempts (currently 10 attempts × 3 seconds)
- Change merge method (currently `merge`, can use `squash` or `rebase`)
- Add additional checks or validations
- Customize auto-merge behavior
- Add notifications (e.g., Slack, email)

## Advanced Features

### Concurrency Control

The workflow uses concurrency groups to prevent race conditions from multiple
rapid pushes:

```yaml
concurrency:
    group: sync-to-template-${{ github.repository }}
    cancel-in-progress: false
```

### Smart Mergeable State Detection

Instead of fixed delays, the workflow polls GitHub's mergeable state up to 10
times with 3-second intervals, ensuring reliable detection.

### Automatic Cleanup

- ✅ Deletes sync branches after successful merge
- ✅ Cleans up branches if workflow fails
- ✅ Updates existing PRs instead of creating duplicates

### Informative PR Comments

The workflow adds comments to PRs explaining:

- ✅ Successful auto-merge
- ⚠️ Why auto-merge was blocked (conflicts, checks, protection)
- 📊 Source repository and commit information

## Security Best Practices

1. **Use a dedicated bot account** for the PAT instead of personal accounts
2. **Enable branch protection** on the template repository
3. **Require status checks** to catch issues before merge
4. **Audit token access** periodically
5. **Rotate tokens** regularly (set calendar reminders)
6. **Use organization secrets** for centralized management
7. **Limit repository access** to only repos that need sync
8. **Review auto-merged changes** periodically to catch any issues

## FAQ

**Q: Can I use fine-grained tokens instead of classic tokens?**\
A: Yes, but ensure it has read/write permissions for `Contents`,
`Pull
Requests`, and `Metadata` on the template repository.

**Q: What happens if I push to a branch other than main?**\
A: The workflow only triggers on pushes to `main`. Other branches are ignored.

**Q: Can I sync only specific files or directories?**\
A: The workflow syncs all changes. You'd need to customize it to filter specific
paths.

**Q: What if two people push to different copies simultaneously?**\
A: Each creates a separate PR with a unique timestamped branch name.

**Q: Does this work with private repositories?**\
A: Yes, as long as the PAT has access to both the template and copy
repositories.

**Q: Can I trigger the sync manually?**\
A: Yes, the workflow includes `workflow_dispatch` trigger. Go to Actions → "Sync
changes to template" → "Run workflow".

**Q: What's the cost impact?**\
A: Minimal. Each sync uses ~1-3 minutes of GitHub Actions time. Organization
secrets don't incur additional costs.
