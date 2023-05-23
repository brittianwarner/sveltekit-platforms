/** @type {import('./$types').LayoutServerLoad} */
export async function load({ locals }) {
  /**
   * This subdomain extracted from the host to determine
   * which app folder to use and components to render
   *
   * @type string
   */
  const appId = locals.appId;
  return {
    appId,
  };
}

export const prerender = false;
