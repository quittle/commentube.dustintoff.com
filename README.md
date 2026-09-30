# commentube.dustintoff.com

CommenTube — a YouTube video critiquing platform. A static site (two pages,
vanilla JS) built with [Vite](https://vite.dev) and deployed to S3.

## Development

```sh
npm install
npm run dev      # local dev server with hot reload
```

## Build & deploy

```sh
npm run build     # outputs to dist/
npm run deploy    # builds, then syncs dist/ to the S3 bucket
```

Pushes to `main` build and deploy automatically via GitHub Actions (`.github/workflows/build.yml`).

## History

The build was migrated from Bazel 0.10 + Travis CI to Vite in 2026. The old
`WORKSPACE`, `BUILD`, and `.travis.yml` were removed; `rules_web` is no longer
used.
