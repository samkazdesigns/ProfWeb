# Samuel Kaz — Design Portfolio Website

Personal portfolio website built from my resume and design portfolio.

**Live site:** https://samkazdesigns.github.io/ProfWeb/

## Structure

- `index.html` — the page content (hero, background, projects, skills, contact)
- `styles.css` — all styling (teal/orange theme matching the PDF portfolio)
- `script.js` — mobile menu, project images, scroll animations
- `assets/` — downloadable resume and portfolio PDFs
- `images/` — project photos (see `images/README.md` for how to add them)

## Editing

Open the folder in Claude Code and describe the change you want, or edit
`index.html` directly — each section is labeled with a comment like
`<!-- ===== PROJECTS ===== -->`.

What lives where:

- **Wording** (jobs, project bullets, bio) → `index.html`
- **Look** (colors, sizes, spacing, layout) → `styles.css`
- **Behavior** (menu, scroll animations, project images) → `script.js`
- **Individual project case studies** → `projects/`

### Editing with Cursor

[Cursor](https://cursor.com) is an AI code editor (a VS Code fork). To use it:

1. **File → Open Folder** → select this folder.
2. Use the AI shortcuts:
   - **Ctrl+K** — select code, describe a change in plain English; it rewrites
     just that spot and shows a diff to accept or reject.
   - **Ctrl+L** — chat panel for questions or multi-file changes
     (e.g. "add a new project card copying the existing format").
   - **Tab** — inline autocomplete while hand-editing.

To preview changes live, install the **Live Server** extension, then
right-click `index.html` → **Open with Live Server** for auto-refresh on save.
(Or just double-click `index.html` to open it in your browser and refresh.)

> **Note:** commit messages should be attributed only to `samkazdesigns` with
> no "Co-Authored-By" trailer. If you let Cursor write commit messages, check it
> doesn't add a co-author line, or commit manually with the commands below.

### Publishing

After making changes:

```
git add -A
git commit -m "Describe your change"
git push
```

GitHub Pages redeploys automatically about a minute after each push.
