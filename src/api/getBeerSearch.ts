import { UNTAPPED_API_SEARCH, UNTAPPED_API_BASE } from "../constants.js";
import { isUntappdApiError } from "../libs/guards.js";
import { UntappdBeerSearchResult } from "../types/untappedApi.js";
const { UNTAPPED_API_CLIENT_ID, UNTAPPED_API_CLIENT_SECRET } = process.env;

export default async function getBeerSearch(query: string) {
  try {
    const response = await fetch(
      `${UNTAPPED_API_BASE}${UNTAPPED_API_SEARCH}?q=${query}&client_id=${UNTAPPED_API_CLIENT_ID}&client_secret=${UNTAPPED_API_CLIENT_SECRET}`,
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return (await response.json()) as UntappdBeerSearchResult;
  } catch (e: unknown) {
    if (e instanceof Error) {
      return e.message;
    }
    if (isUntappdApiError(e)) {
      return e.meta.error_detail;
    }
    return "An unknown error occurred";
  }
}
