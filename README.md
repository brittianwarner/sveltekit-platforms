# Sveltekit Platforms Starter Template

A simple starter template for building platforms on Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbrittianwarner%2Fsveltekit-platforms&env=APP_ID,default&envDescription=The%20APP_ID%20environment%20variable%20is%20only%20for%20switching%20app%20context%20in%20your%20local%20development%20environment.&project-name=sveltekit-platforms&repository-name=sveltekit-platforms&redirect-url=https%3A%2F%2Fgithub.com%2Fbrittianwarner%2Fsveltekit-platforms&demo-title=Sveltekit%20Platforms&demo-description=A%20simple%20starter%20template%20for%20building%20platforms%20on%20Vercel.&demo-url=https%3A%2F%2Fchangethis.platforms.page)

## Summary

Sveltekit Platforms is your starting point for developing a full scalable platforms implementation built with your favorite framework on Vercel. This is intended to be a simple template and can be extended in many ways to unlock even more.

To get started, deploy to Vercel using the button above and clone the repo. Each "app" can be found in the `/lib/apps` folder. This version uses the subdomain of the url host to determine which app components to render in real time.

### Example

[App1](https://app1.platforms.page)

[App2](https://app2.platforms.page)

[Default](https://default.platforms.page)

[Type any subdomain you want](https://anything-you-want.platforms.page)

Each subdomain above maps to an app in the `/lib/apps` folder.

The [config.js](https://github.com/brittianwarner/sveltekit-platforms/blob/master/src/lib/apps/app1/config.js/) file contains the page mappings needed to create more pages in your app. For example, [this](https://github.com/brittianwarner/sveltekit-platforms/blob/0be64c3132c53d5340245d3fee539e1493606b43/src/lib/apps/app1/config.js#L2) mapping in [app1](https://github.com/brittianwarner/sveltekit-platforms/tree/master/src/lib/apps/app1) the [About page](https://app1.platforms.page/about) is mapped to the [About.svelte](https://github.com/brittianwarner/sveltekit-platforms/blob/master/src/lib/apps/app1/components/About.svelte) component.

_More docs coming soon..._

## Developing

The `APP_ID` environment variable is required for local development and is used to switch context between apps. Find an example [here](https://github.com/brittianwarner/sveltekit-platforms/blob/master/.env.example).

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open

```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
