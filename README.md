# GRIDS: The Texas Advantage

Separate site from the GRPR interim preview. This repo is the Gray Reed Data Centers / GRIDS prototype (version 5 layout), structured so Bolt can import it and the marketing team can edit copy without touching the GRPR WordPress build.

## Open in Bolt

1. Sign in to [Bolt](https://bolt.new) and connect the DACDConsulting GitHub account if it is not already connected.
2. Open this project directly:

https://bolt.new/~/github.com/DACDConsulting/grids-texas-advantage

Or on the Bolt home screen choose GitHub, then Import from URL, and paste:

https://github.com/DACDConsulting/grids-texas-advantage

Bolt runs `npm install` and `npm run dev` from `package.json`. Stay on `main` for the review build. Use a Bolt branch when Gray Reed attorneys are marking up a draft.

## What to edit

| File | What it controls |
| --- | --- |
| `src/content.js` | Pillar copy, headlines, focus areas, messages |
| `src/main.js` | Page layout and in-page routing |
| `src/styles.css` | Gray Reed industry-page styles |
| `index.html` | Header, footer, logo, Pastel snippet |
| `public/gray-reed-logo.png` | Header logo |

Do not merge this repo into `grpr-interim-preview`. GRPR is the firm public-relations site. GRIDS is its own industry experience.

## Local preview

```bash
npm install
npm run dev
```

## Pastel

When the Gray Reed / marketing Pastel project is ready, paste the Pastel script into `index.html` just above the module script. Keep that snippet on this site only.

## Routes

Hash routes, so Bolt and static hosts both work:

- `#overview` Data Centers home
- `#policy` `#infrastructure` `#communities` `#opportunity` `#relationships` `#local-counsel`
