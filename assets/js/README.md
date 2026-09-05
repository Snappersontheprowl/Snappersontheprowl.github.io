# JavaScript

`site.js` updates the footer year and manages optional visual effects for both language pages: pause/resume, hero visibility, one-time scroll entry, and pointer-following card illumination.

## Rules

- The page should remain readable without JavaScript.
- Do not move primary content rendering into JavaScript unless a future feature explicitly requires it.
- Keep browser code dependency-free unless the site grows beyond simple GitHub Pages hosting.

## Motion ownership

- `data-motion` on the root controls whether decorative animation runs; user pause, reduced-motion preference, and document visibility determine its value.
- Intersection observers track hero visibility and start entry animations once. Entry effects never hide content in the stylesheet.
- Pointer updates use at most one pending animation-frame callback and run only for fine pointers with motion enabled.
- Pausing cancels active entry animations and pointer effects. The Chinese/English pause label follows the document language.
- Both homepages include the `.motion-toggle` control and `.hero-section` expected by this script.
