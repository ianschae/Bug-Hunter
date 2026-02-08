# Bug Hunter

A simple static web page that loads with a **random UI bug** each time—or sometimes no bug at all. Use it to practice spotting layout, visibility, and interaction issues.

## Run locally

Open `index.html` in a browser, or serve the folder with any static server:

```bash
# Python
python3 -m http.server 8000

# Node (npx)
npx serve .
```

Then visit `http://localhost:8000` (or the port your server uses). Refresh to get a new random bug.

## Debug mode

Append `?debug=1` to the URL to see which bug is active in the bottom-right corner (e.g. `Bug: invisible-text` or `Bug: none`).

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**.
4. Branch: `main` (or `master`), folder: **/ (root)**.
5. Save. The site will be at `https://<username>.github.io/<repo>/`.

## Bug catalog

Each load randomly applies one of these, or none:

| Bug ID | What’s wrong |
|--------|----------------|
| *(none)* | Page is clean. |
| `misaligned-button` | Primary button shifted (e.g. far right). |
| `broken-spacing` | Card body has no padding or huge gap. |
| `off-screen` | Hero title pushed off viewport. |
| `stacked-wrong` | Form actions / nav stack vertically. |
| `centering-broken` | Hero and main content no longer centered. |
| `grid-gap-zero` | Form/nav items have no gap. |
| `max-width-gone` | Main content spans full viewport width. |
| `sticky-broken` | Header doesn’t stick on scroll. |
| `invisible-text` | Hero title same color as background. |
| `low-contrast` | Body text very light on light background. |
| `focus-ring-gone` | No visible focus outline (keyboard users). |
| `placeholder-invisible` | Input placeholder invisible. |
| `overflow-hidden` | Card body clipped, no scroll. |
| `text-overflow-missing` | Long text doesn’t ellipsis. |
| `scrollbar-hidden` | Scrollable area has no visible scrollbar. |
| `wrong-z-index` | Footer overlaps content. |
| `modal-behind` | Modal appears behind page. |
| `dropdown-under` | Dropdown menu under adjacent content. |
| `hover-broken` | Primary button has no hover state. |
| `wrong-cursor` | Buttons/links show default cursor. |
| `active-state-gone` | Button has no active/pressed state. |
| `disabled-looks-enabled` | Disabled button looks clickable. |
| `link-not-underlined` | Links look like body text. |
| `font-size-tiny` | Form labels too small to read. |
| `font-size-huge` | Card text oversized. |
| `line-height-cramped` | Paragraph line-height too tight. |
| `image-stretched` | Card image wrong aspect ratio. |
| `input-too-narrow` | Input field too narrow. |
| `border-flash` | Card has loud extra border. |
| `duplicate-content` | Hero title has ghost duplicate text. |
| `animation-flicker` | Primary button flickers. |
| `button-does-nothing` | Submit button doesn’t submit (JS). |

No build step required. Plain HTML, CSS, and JavaScript.
