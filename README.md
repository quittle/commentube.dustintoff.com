# commentube.dustintoff.com

CommenTube — a YouTube video critiquing platform.

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

Pushes to `master` build and deploy automatically via GitHub Actions (`.github/workflows/build.yml`).
