# CSS

`site.css` is the global stylesheet for the homepage.

## Rules

- Keep broad page layout and shared components in `site.css`.
- Split additional stylesheets only when a new page or feature creates a clearly separate ownership boundary.
- Prefer semantic class names that describe page roles, not temporary visual experiments.
- Keep light/dark colors in the shared custom properties at the top of the stylesheet and its dark-mode block; avoid hard-coded secondary text colors in components.
- Navigation stays sticky above 760px and visible in normal document flow on smaller screens. Anchor scroll padding must follow the header behavior.
- Preserve visible keyboard focus, long-name wrapping, and reduced-motion support when changing components.
- Both language pages share this stylesheet. Scope Chinese typography adjustments with `:lang(zh-CN)` and verify the language link at mobile and desktop widths.
