# Personal website

## MDX meta format

### Project

```
---
title: My interesting project
description: This is a project that I am working on.
image: https://picsum.photos/500
gallery:
  - https://picsum.photos/250
  - https://picsum.photos/250
  - https://picsum.photos/250
  - https://picsum.photos/250
createdDate: 2022-03-06T13:16:04Z
updatedDate: 2022-03-06T13:16:04Z
meta:
  title: My First Project | jakemeredith.co.uk
---
```

### Blog post

```
---
title: My general post
category: General
image: https://picsum.photos/500
createdDate: 2022-03-06T13:16:04Z
updatedDate: 2022-03-06T13:16:04Z
meta:
title: My First Post | jakemeredith.co.uk
---
```

## Development

You will be utilizing Wrangler for local development to emulate the Cloudflare runtime. This is already wired up in your package.json as the `dev` script:

```sh
# start the remix dev server and wrangler
$ npm run dev
```

Open up [http://127.0.0.1:8788](http://127.0.0.1:8788) and you should be ready to go!

## Deployment

Cloudflare Pages are currently only deployable through their Git provider integrations.

If you don't already have an account, then [create a Cloudflare account here](https://dash.cloudflare.com/sign-up/pages) and after verifying your email address with Cloudflare, go to your dashboard and follow the [Cloudflare Pages deployment guide](https://developers.cloudflare.com/pages/framework-guides/deploy-anything).

Configure the "Build command" should be set to `npm run build`, and the "Build output directory" should be set to `public`.
