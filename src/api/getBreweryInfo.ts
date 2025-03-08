import axios from "axios";
import {
  UNTAPPED_API_BASE,
  UNTAPPED_API_BREWERY_INFO,
  UNTAPPED_API_INFO,
} from "../constants.js";
import { isUntappdApiError } from "../libs/guards.js";
import { UntappdBreweryInfoResult } from "../types/untappedApi.js";
import { config } from "../index.js";

export async function GetBreweryInfo(breweryId: string) {
  try {
    const response = await axios.get<UntappdBreweryInfoResult>(
      `${UNTAPPED_API_BASE}${UNTAPPED_API_BREWERY_INFO}/${breweryId}`,
      {
        params: {
          client_id: config.untappd.clientId,
          client_secret: config.untappd.clientSecret,
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
