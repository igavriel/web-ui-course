# Digital Business Card

A responsive 3D-flip business card built with plain HTML, CSS, and vanilla JavaScript. No frameworks, no libraries, no build tools — open `index.html` in any browser to run it.

## Preview

- **Front** — Terminal-style dark card with a diagonal two-tone split, name, portfolio URL, and four ghosted SVG icons (git fork, `</>`, terminal, gamepad) arranged on a diagonal.
- **Back** — VS Code editor panel with Mac window controls, syntax-highlighted JSON contact details, line numbers, and a blue status bar.
- Click or press Enter/Space to flip between sides with a smooth 3D rotation.

## File structure

| File | Role |
| ------------ | ---- |
| `index.html` | Page markup, inline SVG icons, JSON contact block |
| `styles.css` | Layout, flip animation, front/back theming, responsive rules |
| `script.js`  | Flip toggle on click and keyboard |

## Customization

### Name and text

Edit `index.html`:
- Front name → `.front-name` (line 17)
- Front URL → `.front-url` (line 52)
- JSON fields → `.editor-body` code lines (lines 68–74)
- Tab filename → `.editor-filename` (line 64)

### Icons

Each icon is an inline `<svg>` element. Swap the SVG markup inside any `.front-icon` span (front side, 32×32) or inside `.statusbar-icons` (back status bar, 14×14). Keep the `width`/`height` attributes consistent.

### Colors

Edit `styles.css`:

| Element | Selector | Default |
| --- | --- | --- |
| Page background | `body` | `#0d0d1a` |
| Front upper-left | `.card-front` gradient stop 1 | `#262640` |
| Front lower-right | `.card-front` gradient stop 2 | `#1b1b30` |
| Editor background | `.card-back` | `#1e1e1e` |
| Title bar | `.editor-titlebar` | `#323233` |
| Status bar | `.editor-statusbar` | `#007acc` |
| JSON keys | `.key` | `#9cdcfe` |
| JSON strings | `.str` | `#ce9178` |
| JSON brackets | `.bracket` | `#ffd700` |

### Card size

In `.card-container`:
- `width: min(500px, 88vw)` — first value is desktop max, second is mobile scaling
- `aspect-ratio: 3.5 / 2` — standard business-card proportions
