---
agent: Feedback
argument-hint: <assignment>
---

Generate feedback for the specified assignment across all student submissions:

1. Locate the assignment folder in each student's `20-assignments/` directory
2. Check if `20-assignments/**/workspace/main.ts` contains actual implementation (skip empty files)
3. Generate feedback using Feedback Agent for each non-empty submission
4. Save as `FEEDBACK.md` in each assignment's root folder

**Assignment name:** `<assignment>`
