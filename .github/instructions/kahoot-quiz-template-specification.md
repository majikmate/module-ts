# Kahoot Quiz Template (XLSX) – Specification

## Overview

- File format: `.xlsx` (Excel workbook).

- Worksheet: One table; default name is "Sheet1" (name does not matter for
  import).
- Columns (relevant):
  1. (optional) **No.** – numeric question ID/number (ignored by Kahoot; for
     overview only).
  2. **Question – max 120 characters**
  3. **Answer 1 – max 75 characters**
  4. **Answer 2 – max 75 characters**
  5. **Answer 3 – max 75 characters**
  6. **Answer 4 – max 75 characters**
  7. **Time limit (sec) – 5, 10, 20, 30, 60, 90, 120, or 240 secs**
  8. **Correct answer(s) – choose at least one**

(The titles above are exactly as defined in the template and should be used
verbatim.)

## Field Rules & Constraints

### Question

- Required
- Max 120 characters
- Free text (no Markdown/HTML required)

### Answer 1 … Answer 4

- At least two answers must be filled (e.g., Answer 1 and Answer 2).
- Max 75 characters per answer.
- Empty answer columns are allowed as long as the minimum number is filled.

### Time limit (sec)

- Required
- Allowed values only: `5`, `10`, `20`, `30`, `60`, `90`, `120`, `240`
  (seconds).

### Correct answer(s)

- Required
- Comma-separated list of the index numbers of the correct answers with respect
  to _Answer 1…4_.
  - Examples: `1`, `2`, `1,3`, `2,4`, `1,2,3,4`
- At least one correct answer must be specified.
- Indices must only refer to non-empty answers (i.e., if "Answer 4" is empty,
  `4` must not appear in the list).

### Optional column "No."

- May be left blank; has no effect on import (purely informational).

## Row Structure

- One question per table row.
- No additional columns are allowed.
- Keep the column order as described above.

## Minimal, Valid Example (Markdown table)

| Question - max 120 characters                                          | Answer 1 - max 75 characters | Answer 2 - max 75 characters | Answer 3 - max 75 characters | Answer 4 - max 75 characters | Time limit (sec) – 5, 10, 20, 30, 60, 90, 120, or 240 secs | Correct answer(s) - choose at least one |
| ---------------------------------------------------------------------- | ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------------------------------------- | --------------------------------------- |
| Which spreadsheet tools can read this sheet and export to xlsx format? | Excel                        | Google Docs                  | Numbers                      | LibreOffice                  | 60                                                         | 1,2,3,4                                 |
| What is 2 + 2?                                                         | 4                            | 3                            | 5                            | 22                           | 20                                                         | 1                                       |
| Select all prime numbers                                               | 2                            | 3                            | 4                            | 5                            | 30                                                         | 1,2,4                                   |

(The first example matches the template pattern; multiple correct answers are
allowed.)

## Generation Tips (programmatic)

- Header row exactly as above; no additional header rows needed before it.
- Encoding: Standard Excel – no special encoding required.
- Export: If you work in Google Sheets or Numbers, be sure to export as `.xlsx`.
- Validation:
  - `Question`: length ≤ 120
  - `Answer 1..4`: length ≤ 75
  - `Time limit`: one of the allowed integer values
  - `Correct answer(s)`: comma list from `{1,2,3,4}`; every index must point to
    a non-empty answer; at least one index present
  - At least **2** answers (Answer 1..4) are **non-empty**

## Common Mistakes (and how to avoid them)

- Invalid time value (e.g., `15`) → use only the permitted seconds values.
- Correct answer pointing to an empty field (e.g., `4`, but "Answer 4" is empty)
  → adjust indices to filled answers.
- Only one answer provided → provide at least two answers.
- Text too long → `Question` ≤ 120 characters, `Answer` ≤ 75 characters.

---

_This project is licensed under the [CC BY-SA 4.0](../../LICENSE)._
