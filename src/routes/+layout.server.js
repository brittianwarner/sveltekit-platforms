/** @type {import('./$types').LayoutServerLoad} */
export async function load({ locals }) {
  return {
    appId: locals?.appId,
  };
}

export const prerender = false;
