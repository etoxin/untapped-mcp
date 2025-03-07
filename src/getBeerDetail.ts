import { UNTAPPED_API_BASE, UNTAPPED_API_INFO } from "./constants.js";
const { UNTAPPED_API_CLIENT_ID, UNTAPPED_API_CLIENT_SECRET } = process.env;

export default async function GetBeerDetail(bid: string) {
  try {
    return await fetch(
      `${UNTAPPED_API_BASE}${UNTAPPED_API_INFO}/${bid}?client_id=${UNTAPPED_API_CLIENT_ID}&client_secret=${UNTAPPED_API_CLIENT_SECRET}`,
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      return e.message;
    }
    return "An unknown error occurred";
  }
}
