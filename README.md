# raazon.com

Personal site built with [Astro](https://astro.build/) and the [Astro Nano theme](https://github.com/markhorn-dev/astro-nano).

## Development

```sh
npm install
npm run dev
```

## Build and publish

```sh
npm run build
npm run preview
```

The static site is generated in `dist/`. To build and publish its contents to the root of the `master` branch, run:

```sh
npm run deploy
```

This publishes directly to `master` without switching your current local branch. In the repository's GitHub Pages settings, select `master` as the deployment branch and `/ (root)` as the folder. Deployment is manual; this repository does not use GitHub Actions.

The `public/CNAME` file is copied into `dist/` during the build to preserve the `raazon.com` custom domain.