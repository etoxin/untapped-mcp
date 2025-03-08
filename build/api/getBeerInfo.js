import { UNTAPPED_API_BASE, UNTAPPED_API_INFO } from "../constants.js";
import { isUntappdApiError } from "../libs/guards.js";
import { config } from "../index.js";
export async function GetBeerInfo(bid) {
    try {
        const response = await fetch(`${UNTAPPED_API_BASE}${UNTAPPED_API_INFO}/${bid}?client_id=${config.untappd.clientId}&client_secret=${config.untappd.clientSecret}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return (await response.json());
    }
    catch (e) {
        if (e instanceof Error) {
            return e.message;
        }
        if (isUntappdApiError(e)) {
            return e.meta.error_detail;
        }
        return "An unknown error occurred";
    }
}
