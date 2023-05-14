import { dev } from "$app/environment";
import { APP_ID } from "$env/static/private";

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  const host = event.url.host;

  let appId = dev ? APP_ID : host.split(".")[0];

  if (!appId) {
    appId = "default";
  }

  event.locals.appId = appId;

  const response = await resolve(event);
  return response;
}
