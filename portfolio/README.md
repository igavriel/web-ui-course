# Portfolio — project folder layout

This folder is self-contained for grading or hosting.

| File / folder                 | Role |
| ----------------------------- | ---- |
| `index.html`                  | Main page (sections, inline SVG icon sprite) |
| `assets/css/style.css`        | Layout, theme, and component styles |
| `assets/css/mediaqueries.css` | Responsive rules (desktop vs hamburger nav, breakpoints) |
| `assets/js/script.js`         | Theme toggle and mobile menu |
| `assets/img/`                 | Raster images (profile photo, project thumbnails) |
| `assets/`                     | `css/`, `js/`, and `img/` as above |

Paths in the HTML are relative to `index.html` (for example `assets/css/style.css`, `assets/js/script.js`, `./assets/img/profile-pic.png`).

Open `index.html` in a browser, or serve this directory over HTTP if you need full URL behavior for any future external sprite links.
