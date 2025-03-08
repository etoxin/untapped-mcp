import axios from "axios";
import { UNTAPPED_API_SEARCH, UNTAPPED_API_BASE } from "../constants.js";
import { isUntappdApiError } from "../libs/guards.js";
import { UntappdBeerSearchResult } from "../types/untappedApi.js";
import { config } from "../config.js";

export async function getBeerSearch(query: string) {
  try {
    const response = await axios.get<UntappdBeerSearchResult>(
      `${UNTAPPED_API_BASE}${UNTAPPED_API_SEARCH}`,
      {
        params: {
          q: query,
          client_id: config.untappd.clientId,
          client_secret: config.untappd.clientSecret,
        },
      },
    );

    return response.data;
  } catch (e: unknown) {
    if (axios.isAxiosError(e) && e.response) {
      throw new Error(
        `HTTP error! status: ${e.response.status}: ${JSON.stringify(e)}`,
      );
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
