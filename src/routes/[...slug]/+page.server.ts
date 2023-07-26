import { page } from "$app/stores";
import { redirect } from "@sveltejs/kit";

/** @type {import("./$types").PageServerLoad} */
export async function load({ locals, url }) {
  type Config = {
    page: string;
  };

  let config: Config;

  config = (
    await import(/* @vite-ignore */ `../../lib/apps/${locals.appId}/config.js`)
  ).default;

  const { component, pageServerLoad } =
    config[url.pathname as keyof typeof config];

  if (!component) {
    throw redirect(301, "/");
  }
  let load;
  console.log(pageServerLoad);
  if (pageServerLoad) {
    load = (
      await import(
        /* @vite-ignore */ `../../lib/apps/${
          locals.appId
        }/loading/${component.toLowerCase()}.js`
      )
    ).default;
  }

  let loadResponse = {
    component,
    load: {},
  };

  if (load) {
    loadResponse.load = load();
  }
  console.log(loadResponse);
  return loadResponse;
}
