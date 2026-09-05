# Homepage content and sources

Last checked: 2026-09-05. This document records editorial choices and public evidence; it is a maintenance reference, not a public navigation destination.

## Positioning

The homepage introduces ZhengLecheng / Snappersontheprowl through analog EDA tools, open circuit resources, and simulator study notes. This positioning is an editorial synthesis of the public repositories, not a quoted professional title. No employer, degree, affiliation, location, or private contact details are inferred.

Retain English as the main page language. Identify the SPICEUnion usage guide as Chinese at the link. Keep the page usable without JavaScript.

## Page order

1. Personal introduction: name, public avatar, work areas, and links to projects and GitHub.
2. Selected projects: SPICEUnion gets the main feature; OrderedConcurrentPool and the circuit catalog each get one supporting card.
3. Study and exploration: Xyce notes are distinct from the two upstream forks. Each fork links to both the user's repository and its upstream.
4. Secondary repository links: Git practice and this website's source, followed by the live repository list.
5. Contact: the public GitHub profile and an invitation to use project issues.

SPICEUnion is featured because its documented scope connects the simulation and concurrency work. This is an editorial choice, not a claim about popularity or the user's official project priorities.

## Public evidence

| Source                                                                                                   | Supported content and placement                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [GitHub profile](https://github.com/Snappersontheprowl)                                                  | Display name, username, and public avatar.                                                                                                                           |
| [Repository list](https://github.com/Snappersontheprowl?tab=repositories)                                | Eight visible repositories at inspection time; used to ensure all have an entry point.                                                                               |
| [SPICEUnion](https://github.com/Snappersontheprowl/SPICEUnion)                                           | C++17/Python simulation execution and result reading; Spectre/ngspice; ordered batches and task isolation.                                                           |
| [SPICEUnion usage guide](https://github.com/Snappersontheprowl/SPICEUnion/blob/main/doc/usage/README.md) | Direct Chinese documentation entry. Running simulations needs a separately installed simulator.                                                                      |
| [OrderedConcurrentPool](https://github.com/Snappersontheprowl/OrderedConcurrentPool)                     | Header-only C++17 worker pool returning batch results in input order. Its use by SPICEUnion is documented in SPICEUnion's README.                                    |
| [Awesome-Open-Analog-Circuits](https://github.com/Snappersontheprowl/Awesome-Open-Analog-Circuits)       | Catalog of reusable circuit assets organized around circuits and artifact availability. Cataloging does not imply authorship of the circuits.                        |
| [Xyce_study](https://github.com/Snappersontheprowl/Xyce_study)                                           | Personal source study, build notes, and functional verification. It is not the Xyce simulator project itself.                                                        |
| [virtuoso-bridge-lite fork](https://github.com/Snappersontheprowl/virtuoso-bridge-lite)                  | Fork of Arcadia-1/virtuoso-bridge-lite. The short description refers to the upstream project's purpose; no original authorship or personal contribution is asserted. |
| [AnalogGym fork](https://github.com/Snappersontheprowl/AnalogGym)                                        | Fork of CODA-Team/AnalogGym; analog circuit automation and benchmarking. No original authorship or personal contribution is asserted.                                |
| [git_study](https://github.com/Snappersontheprowl/git_study)                                             | Git practice, represented as a secondary link.                                                                                                                       |
| [Homepage repository](https://github.com/Snappersontheprowl/Snappersontheprowl.github.io)                | Website source link.                                                                                                                                                 |

## Content maintenance

- Recheck the public project README before updating capabilities; distinguish implemented features from plans.
- Keep each project description in one main location instead of repeating the same summary in several sections.
- Preserve explicit fork attribution and upstream links.
- Do not use the profile's Stars tab as project recognition: it lists repositories the account has starred. The old ambiguous Stars statistic was removed.
- Omit follower counts, repository counts, and update dates from the homepage; the live GitHub profile owns changing statistics.
- Use project names as published upstream. Let long names wrap rather than abbreviating identifiers or clipping text.
- Keep maintenance explanations in documentation, not visitor-facing page copy.

## Rendering acceptance

- Check 320, 390, 768, and 1440 CSS-pixel widths, plus responsive breakpoints when changing layout.
- Review light and dark modes, including secondary text, tags, and buttons.
- Verify no horizontal overflow or clipped project names, visible mobile navigation, loaded avatar, and correct local anchors.
- Desktop navigation is sticky; navigation at widths up to 760px stays in normal document flow to preserve mobile reading space.
- Check keyboard focus, Skip to content, Back to top, and reduced-motion behavior. The HTML footer includes a year even when JavaScript is disabled.
- Run HTML validation and formatting checks from the root README. Automated accessibility checks supplement visual and keyboard inspection; they do not establish full accessibility compliance.

## Verification record — 2026-09-05

- Chromium screenshots reviewed at 1440, 768, 390, and 320px; desktop and 390px mobile also reviewed in dark mode.
- Layout checks passed at 320, 390, 480, 640, 760, 768, 980, 1024, and 1440px without horizontal overflow; navigation remained visible.
- Section links, Back to top, keyboard skip/focus, reduced motion, no-JavaScript navigation/year, and links to all eight public repositories passed.
- axe reported no WCAG A/AA violations in the selected rule sets. It left three hero text elements over the grid and two decorative arrows for manual review. The grid/background color calculation gave a minimum 4.51:1 text contrast in light mode and 7.89:1 in dark mode; arrow colors also passed. This is a scoped check, not a full accessibility certification.
- HTML validation, Prettier, and Git whitespace checks passed. Verification was local; publishing configuration and other browser engines were not tested.
