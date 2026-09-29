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

The static site is generated in `dist/`. Publish the contents of that directory to the `master` branch when ready. Deployment is manual; this repository does not use GitHub Actions.

The `public/CNAME` file is copied into `dist/` during the build to preserve the `raazon.com` custom domain.