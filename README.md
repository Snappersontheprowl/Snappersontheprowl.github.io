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
    ├── README.md          Documentation index and naming rules
    └── homepage-content.md  Content sources, editorial choices, and rendering checks
```

## Maintenance Boundaries

- `index.html` owns semantic content, public links, metadata, and page section order.
- `assets/css/site.css` owns layout, visual style, responsive behavior, and dark-mode styling.
- `assets/js/site.js` owns small non-essential behavior. The homepage should remain readable without JavaScript.
- `assets/images/` is for local image assets that are meant to be served by GitHub Pages.
- `docs/` contains maintenance documentation. See [homepage content and sources](docs/homepage-content.md) before changing public claims or project placement.

## Homepage Content

The English homepage introduces ZhengLecheng through selected projects, study notes, and a public GitHub contact entry. SPICEUnion is the main project feature; OrderedConcurrentPool and Awesome-Open-Analog-Circuits are supporting projects. Xyce study notes and the two upstream forks are presented separately, with explicit fork attribution. Git practice and the site's source remain available as secondary links.

Project descriptions are checked against public GitHub READMEs. Do not infer credentials, affiliations, or original authorship of upstream projects. Changing profile statistics and repository update dates are left on GitHub rather than copied into the page.

## Local Preview

Because the site has no build step, opening `index.html` directly works for basic preview.

For a local HTTP preview:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Then open:

```text
http://localhost:8000/
```

Save files and refresh the browser to inspect changes. Stop the server with `Ctrl+C`. When using VSCode over SSH, forward port `8000` through the Ports panel.

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

For layout changes, inspect 320px and 390px mobile widths, a 768px tablet, and a 1440px desktop in light and dark modes. Check project-name wrapping, avatar loading, navigation links, keyboard focus, and anchor positions. Mobile navigation stays visible in normal document flow; desktop navigation is sticky. Reduced-motion preferences disable smooth scrolling. Core content and navigation work without JavaScript.

## Publishing

The intended publishing source is the repository root on the `main` branch. Verify this in the repository's **Settings → Pages**; local files cannot confirm the remote Pages configuration.

After local changes:

```bash
git status --short --branch
git add <files-changed-for-this-update>
git commit -m "Describe the homepage change"
git push
```

Replace `<files-changed-for-this-update>` with the actual paths. Review `git diff` before staging. A local commit records the change; pushing to the configured publishing branch triggers publication. Codex sessions must also follow `AGENTS.md`, including the local-commit requirement after repository modifications.
