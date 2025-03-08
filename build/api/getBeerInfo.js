import { UNTAPPED_API_BASE, UNTAPPED_API_INFO } from "../constants.js";
import { isUntappdApiError } from "../libs/guards.js";
const { UNTAPPED_API_CLIENT_ID, UNTAPPED_API_CLIENT_SECRET } = process.env;
export async function GetBeerInfo(bid) {
    try {
        const response = await fetch(`${UNTAPPED_API_BASE}${UNTAPPED_API_INFO}/${bid}?client_id=${UNTAPPED_API_CLIENT_ID}&client_secret=${UNTAPPED_API_CLIENT_SECRET}`);
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
