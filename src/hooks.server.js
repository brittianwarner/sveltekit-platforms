import { dev } from "$app/environment";
import { APP_ID } from "$env/static/private";

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  /**
   * The host of the event url for
   * determining appId
   *
   * @type string
   */
  const host = event.url.host;

  /**
   * The initial appId; If dev then this will
   * use the APP_ID environment variable
   *
   * @type string
   */
  let appId = dev ? APP_ID : host.split(".")[0];

  if (!appId) {
    appId = "default";
  }

  event.locals.appId = appId;

  const response = await resolve(event);
  return response;
}
