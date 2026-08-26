# raazon.com

Personal portfolio site for [Razon Komar Pal](https://raazon.com/). Built with Next.js and published as a static export on GitHub Pages.

| Branch | Purpose |
| --- | --- |
| `development` | Source code. Do all work here. |
| `master` | Built static files only. GitHub Pages serves this branch (`/` root). |

Do not merge `development` into `master`.

## Project structure

```text
.
├── app/                      # Next.js App Router pages
│   ├── layout.tsx            # Root layout, fonts, analytics
│   ├── page.tsx              # Homepage
│   ├── metadata.tsx          # Site metadata
│   └── resume/               # Resume page
├── page-components/          # Page-level sections
│   ├── homepage/             # Overview, projects, skills, posts
│   └── project/
├── components/               # Shared UI
│   ├── header/
│   ├── footer/
│   └── icon/
├── utils/                    # Helpers (site config, formatting)
├── styles/                   # Global SCSS
├── public/                   # Static assets copied into the export
│   ├── assets/               # CSS, images, JS plugins
│   ├── CNAME                 # Custom domain: raazon.com
│   └── .nojekyll             # Required so GitHub Pages serves _next/
├── next.config.ts            # Static export config
├── package.json
└── README.md
```

## Getting started

Work on the `development` branch:

```bash
git checkout development
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | What it does |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Production static export to `out/` |
| `npm run lint` | Lint the project |

## Deploy to GitHub Pages

Commit your changes on `development`, then publish the static build to `master`.

1. Build:

```bash
npm run build
```

2. Switch to `master` and replace it with the new `out/` files:

```bash
git checkout master
git rm -rf .
cp -R out/. .
```

3. Keep a small `.gitignore` so leftover folders are not committed:

```bash
printf '%s\n' 'node_modules/' '.next/' 'out/' '.env' '.DS_Store' '.vscode/' > .gitignore
```

4. Commit and push `master` (that is what GitHub Pages serves):

```bash
git add -A
git commit -m "Update site"
git push origin master
```

5. Switch back to work:

```bash
git checkout development
```

Wait 1–2 minutes, then hard-refresh [https://raazon.com/](https://raazon.com/).


## All commands togather
```
git checkout development                                                     ✔  9s  10:53:06 AM 
npm run build
git checkout master
git rm -rf .
cp -R out/. .
printf '%s\n' 'node_modules/' '.next/' 'out/' '.env' '.DS_Store' '.vscode/' > .gitignore
git add -A
git commit -m "Update site"
git push origin master
git checkout development
```