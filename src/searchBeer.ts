import { UNTAPPED_API_SEARCH, UNTAPPED_API_BASE } from "./constants.js";
const { UNTAPPED_API_CLIENT_ID, UNTAPPED_API_CLIENT_SECRET } = process.env;

export default async function searchBeer(query: string) {
  try {
    return await fetch(
      `${UNTAPPED_API_BASE}${UNTAPPED_API_SEARCH}?q=${query}&client_id=${UNTAPPED_API_CLIENT_ID}&client_secret=${UNTAPPED_API_CLIENT_SECRET}`,
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      return e.message;
    }
    return "An unknown error occurred";
  }
}
