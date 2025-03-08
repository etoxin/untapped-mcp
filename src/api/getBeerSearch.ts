import axios from "axios";
import { UNTAPPED_API_SEARCH, UNTAPPED_API_BASE } from "../constants.js";
import { isUntappdApiError } from "../libs/guards.js";
import { UntappdBeerSearchResult } from "../types/untappedApi.js";
const { UNTAPPED_API_CLIENT_ID, UNTAPPED_API_CLIENT_SECRET } = process.env;

export async function getBeerSearch(query: string) {
  try {
    const response = await axios.get<UntappdBeerSearchResult>(
      `${UNTAPPED_API_BASE}${UNTAPPED_API_SEARCH}`,
      {
        params: {
          q: query,
          client_id: UNTAPPED_API_CLIENT_ID,
          client_secret: UNTAPPED_API_CLIENT_SECRET,
        },
      },
    );

    return response.data;
  } catch (e: unknown) {
    if (axios.isAxiosError(e) && e.response) {
      throw new Error(`HTTP error! status: ${e.response.status}`);
    }
    if (e instanceof Error) {
      return e.message;
    }
    if (isUntappdApiError(e)) {
      return e.meta.error_detail;
    }
    return "An unknown error occurred";
  }
}
