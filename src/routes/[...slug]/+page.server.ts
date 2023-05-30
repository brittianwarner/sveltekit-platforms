import { redirect } from "@sveltejs/kit";

/** @type {import("./$types").PageServerLoad} */
export async function load({ locals, url }) {
  type Config = {
    page: string;
  };

  let config: Config;

  let componentName: string;

  config = (
    await import(/* @vite-ignore */ `../../lib/apps/${locals.appId}/config.js`)
  ).default;

  componentName = config[url.pathname as keyof typeof config];

  if (!componentName) {
    throw redirect(301, "/");
  }
}
