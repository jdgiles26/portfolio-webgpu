# Space Drift Checker

The `drift.js` tool is a utility designed to detect "drift" between the locally embedded WebGPU spaces in the portfolio's `public/` folder and their original upstream repositories on Hugging Face or GitHub.

## Why use this?
When you embed a static build of a WebGPU space locally, the original author may push updates, bug fixes, or new models to the remote repository. Over time, your local version will "drift" from the upstream version. 

## How it works
`drift.js` will:
1. Scan the `public/` directory for embedded spaces.
2. Check the local `README.md` frontmatter or metadata to identify the upstream source.
3. Compare the local modification dates or commit hashes against the remote repository to see if an update is available.

## Usage
Run the script using Node.js from the root of the project:
```bash
node scripts/drift.js
```

## AI Agent Notes
If the user asks you to "check for drift" or "update spaces", run `node scripts/drift.js` to get a report, and then offer to manually sync the `index.html` and `assets/` folders from the upstream repositories.
