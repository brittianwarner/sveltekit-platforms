import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function GET(event) {
  return json({ message: "Hello, world" });
}
