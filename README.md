# Snappersontheprowl.github.io

This repository maintains the GitHub Pages homepage for `Snappersontheprowl`.

The site is intentionally kept as a build-free static site so GitHub Pages can serve it directly from the repository root.

## Project Structure

```text
.
├── AGENTS.md              Project collaboration rules for Codex sessions
├── README.md              Repository overview and maintenance workflow
├── TODO                   Active and deferred maintenance notes
├── index.html             English homepage and document metadata
├── index.zh-cn.html       Simplified Chinese homepage and document metadata
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
    ├── homepage-content.md  Content sources, editorial choices, and rendering checks
    └── visual-effects.md    Decorative effects, motion controls, and verification
```

## Maintenance Boundaries

- `index.html` and `index.zh-cn.html` own the English and Simplified Chinese content, public links, metadata, and page section order. Keep project facts, links, and section IDs synchronized.
- `assets/css/site.css` owns layout, visual style, responsive behavior, and dark-mode styling.
- `assets/js/site.js` owns small non-essential behavior. The homepage should remain readable without JavaScript.
- `assets/images/` is for local image assets that are meant to be served by GitHub Pages.
- `docs/` contains maintenance documentation. See [homepage content and sources](docs/homepage-content.md) before changing public claims or project placement.

## Homepage Content

The English and Simplified Chinese homepages introduce ZhengLecheng through selected projects, study notes, and a public GitHub contact entry. SPICEUnion is the main project feature; OrderedConcurrentPool and Awesome-Open-Analog-Circuits are supporting projects. Xyce study notes and the two upstream forks are presented separately, with explicit fork attribution. Git practice and the site's source remain available as secondary links.

Project descriptions are checked against public GitHub READMEs. Do not infer credentials, affiliations, or original authorship of upstream projects. Changing profile statistics and repository update dates are left on GitHub rather than copied into the page.

## Visual Effects

Both pages use a circuit-inspired hero with animated signal traces, ambient color, gradient title accents, pointer-following card illumination, and one-time scroll entry animations. The profile card includes a localized Pause/Resume effects button. System reduced-motion preferences disable motion; the button is hidden in that mode. On touch devices, card illumination and hover movement are disabled.

Content is visible in the original HTML, so JavaScript is not needed for reading or language navigation. Animation work pauses when the document is hidden, and hero background animation also pauses outside the viewport. See [visual effects](docs/visual-effects.md) for implementation boundaries and checks.

## Languages

- English: `index.html` (the default homepage).
- Simplified Chinese: `index.zh-cn.html`.
- Each page has a visible language link in the top navigation. Switching works without JavaScript and does not depend on browser language detection.
- Localized homepage files use `index.<language-tag>.html`, with lowercase language tags in filenames (for example, `zh-cn`). Shared CSS and JavaScript stay under `assets/`.
- When changing content, update both pages, including descriptions, navigation, image alternatives, and accessible labels. Keep published project names and upstream attribution intact.

## Local Preview

Because the site has no build step, opening `index.html` directly works for basic preview.

For a local HTTP preview:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Then open:

```text
http://localhost:8000/
http://localhost:8000/index.zh-cn.html
```

Save files and refresh the browser to inspect changes. Stop the server with `Ctrl+C`. When using VSCode over SSH, forward port `8000` through the Ports panel.

## Validation

Format the static files:

```bash
npx --yes prettier --write index.html index.zh-cn.html assets/css/site.css assets/js/site.js README.md assets/**/*.md docs/**/*.md
```

Check formatting:

```bash
npx --yes prettier --check index.html index.zh-cn.html assets/css/site.css assets/js/site.js README.md assets/**/*.md docs/**/*.md
```

Validate HTML:

```bash
npx --yes html-validate --rule void-style:off --rule doctype-style:off index.html index.zh-cn.html
```

`void-style` and `doctype-style` are disabled because Prettier's HTML output and `html-validate`'s default style preferences disagree on those formatting-only rules.

Check language switching in both directions and verify each document language and alternate-language link. For layout changes, inspect both pages at 320px and 390px mobile widths, a 768px tablet, and a 1440px desktop in light and dark modes. Check project-name wrapping, avatar loading, navigation links, keyboard focus, and anchor positions. Mobile navigation stays visible in normal document flow; desktop navigation is sticky. Reduced-motion preferences disable smooth scrolling. Core content and navigation work without JavaScript.

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
