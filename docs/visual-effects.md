# Visual effects

The two language pages use the same circuit-inspired visual treatment. Project content, links, and attribution stay in the HTML; effects are optional enhancements.

## Effects and ownership

| Effect                                    | Implementation                                                                                                                                            |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Circuit traces and moving signal segments | Matching decorative inline SVG in each page; CSS animates the stroke dash offset. The art is hidden from assistive technology and ignores pointer events. |
| Ambient cyan/blue color                   | Hero pseudo-elements with slow transform animation, behind readable content.                                                                              |
| Gradient title accents                    | Text remains real selectable HTML; forced-color mode restores normal text rendering.                                                                      |
| Card illumination                         | Shared JS updates CSS pointer coordinates on fine-pointer devices, with one pending animation-frame callback at most.                                     |
| Hover feedback                            | CSS raises cards/buttons slightly and shifts link arrows while motion is enabled.                                                                         |
| Scroll entry                              | IntersectionObserver starts a short Web Animation once per section/card. Content is visible before JS initializes and after animations are cancelled.     |
| Pause/resume                              | A localized button in the profile card controls decorative motion. It is hidden when JavaScript is absent or the system requests reduced motion.          |

Colors live in the light/dark custom properties in `assets/css/site.css`. DOM behavior lives in `assets/js/site.js`. The original CSS continues to own typography, layout, responsive behavior, and keyboard focus.

## Motion boundaries

- User pause stops signal/ambient animation, cancels entry animations, and clears pointer illumination. Resume restarts decorative motion.
- Reduced-motion preferences disable all decorative animations and movement effects, including when the preference changes during a visit.
- Hidden documents stop decorative motion. Hero animation also pauses when the hero leaves the viewport.
- Touch pointers do not trigger card illumination or hover movement.
- No third-party animation library, network animation asset, scroll interception, or continuous JavaScript render loop is used.
- Pause state is local to the currently loaded page. Reloading or switching language starts with the system motion preference.

## Verification

Inspect both languages at mobile and desktop sizes in light/dark modes. Confirm that SVG artwork does not create horizontal overflow or cover links. Exercise pause/resume with mouse and keyboard, move the pointer over cards, scroll into project sections, and toggle the system reduced-motion setting during the visit. Check language links and content with JavaScript disabled.

Screenshots show colors and composition; use a live local preview to assess signal motion, scroll entry, and pointer illumination. Automated accessibility results supplement visual review and do not establish complete accessibility compliance.

## Verification record — 2026-09-05

- Chromium layout checks passed for both languages at 320, 390, 640, 760, 768, 980, and 1440px without horizontal overflow. Desktop light/dark and mobile compositions were inspected from screenshots.
- Measured signal dash offsets advance during animation and freeze on keyboard pause; resume, pointer illumination, touch exclusion, and hero offscreen suspension passed.
- Observed scroll entry animations and confirmed that changing reduced-motion preference cancels running animations. No-JavaScript reading, section navigation, and language switching passed.
- axe reported no violations in the selected WCAG A/AA rules for either language in light/dark mode. Gradients and decorative elements still require visual review.
- HTML validation, JavaScript syntax, formatting, and Git whitespace checks passed. No browser engines other than Chromium were tested.
