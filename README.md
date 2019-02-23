# Personal portfolio for web developer

## Origin

Fork of [Smakosh template](https://github.com/smakosh/gatsby-portfolio-dev), modified for my personal use.

## Changes from upstream

Of note: 

- New artwork (also [Undraw.co](https://undraw.co)). 
- GraphQL query changes 
 - Pull GitHub site URL if exists and provide demo link 
 - List languages used and style with GitHub color
 - Remove stars and forks
- Add honeypot to form submission to limit spam
- Don't cache service worker
- Add LinkedIn CTA and social

Also personalization of text, meta, favicon, social media, etc.

## Features

- [Gatsby](https://www.gatsbyjs.org/) static site
- Continuous deployment with [Netlify](https://netlify.com)
- Amazing illustrations by [Undraw.co](https://undraw.co)
- A contact form protected by Google reCaptcha
- Eslint/Prettier configured
- Scores 100% on a11y / Performance / PWA / SEO
- PWA (desktop & mobile)
- Easy to customize
- Nice project structure
- Tablet & mobile friendly
- Can be deployed with one click
- Functional components with Recompose, ready to migrate to React hooks!
- Fetches Github pinned projects

## Structure

```bash
.
├── data
│   └── config              # SEO related tags
├── src
│   ├── components          # Components
│   │   │── common          # Common components
│   │   │── landing         # Components used on the landing page
│   │   └── theme           # Header & Footer
│   └── pages               # Pages
└── static                  # Icons, favicon & SVG illustrations
```

## Prerequisites

[Yarn](https://yarnpkg.com/en/)

### Installing

Installing the dependencies

```bash
yarn
```

### Start the dev server

```bash
yarn start
```

### Clean the cache

This removes the `.cache/` & `public/` folders

```bash
yarn reset
```

## Personalization instructions

### Repos

For GraphQL to work, you need to add a GitHub personal access token. Login to GitHub and go to [Personal Access Tokens](https://github.com/settings/tokens). Create a token with `public_repo` access.

Create two new files `.env.development` and `.env.production` and put your token there.

(If you're deploying to Netlify, you can add it there to your "Build environment variables" instead of creating `.env.production`.)

```bash
GITHUB_TOKEN=xxxxxxxxxx
```
### Recaptcha 

To use the recaptcha this template has built-in, go to [Google reCaptcha](https://www.google.com/recaptcha/admin/create) and create one. Add your site to authorized domains (and you may want to add `localhost` for testing).

**_IMPORTANT_** Your **reCaptcha must be v2** to work with Netlify. A v3 reCaptcha, which Google defaults to, will error.

Add your public key to your site's data on `data/config.js`.

When deploying on Netlify, add your keys (including private) to their "Build environment variables." Use the following names:

```bash
SITE_RECAPTCHA_KEY=xxxxx

SITE_RECAPTCHA_SECRET=xxxxx
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.