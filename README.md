# Snappersontheprowl.github.io

This repository maintains the GitHub Pages homepage for `Snappersontheprowl`.

The site is intentionally kept as a build-free static site so GitHub Pages can serve it directly from the repository root.

## Project Structure

```text
.
├── AGENTS.md              Project collaboration rules for Codex sessions
├── README.md              Repository overview and maintenance workflow
├── TODO                   Active and deferred maintenance notes
├── index.html             Homepage content and document metadata
├── assets/
│   ├── README.md          Asset ownership and naming rules
│   ├── css/
│   │   ├── README.md
│   │   └── site.css       Global stylesheet
│   ├── images/
│   │   └── README.md      Placeholder for local served images
│   └── js/
│       ├── README.md
│       └── site.js        Small progressive-enhancement script
└── docs/
    └── README.md          Future site-maintenance and long-form docs
```

## Maintenance Boundaries

- `index.html` owns semantic content, public links, metadata, and page section order.
- `assets/css/site.css` owns layout, visual style, responsive behavior, and dark-mode styling.
- `assets/js/site.js` owns small non-essential behavior. The homepage should remain readable without JavaScript.
- `assets/images/` is for local image assets that are meant to be served by GitHub Pages.
- `docs/` is reserved for future maintenance notes or long-form site pages.

## Local Preview

Because the site has no build step, opening `index.html` directly works for basic preview.

For a local HTTP preview:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

## Validation

Format the static files:

```bash
npx --yes prettier --write index.html assets/css/site.css assets/js/site.js README.md assets/**/*.md docs/**/*.md
```

Check formatting:

```bash
npx --yes prettier --check index.html assets/css/site.css assets/js/site.js README.md assets/**/*.md docs/**/*.md
```

Validate HTML:

```bash
npx --yes html-validate --rule void-style:off --rule doctype-style:off index.html
```

`void-style` and `doctype-style` are disabled because Prettier's HTML output and `html-validate`'s default style preferences disagree on those formatting-only rules.

## Publishing

GitHub Pages serves the site from the repository root on the `main` branch.

After local changes:

```bash
git status --short --branch
git add .
git commit -m "Describe the homepage change"
git push
```

Codex sessions must also follow `AGENTS.md`, including the local-commit requirement after repository modifications.
