import axios from "axios";
import { UNTAPPED_API_BASE, UNTAPPED_API_INFO } from "../constants.js";
import { isUntappdApiError } from "../libs/guards.js";
import { config } from "../index.js";
export async function GetBeerInfo(bid) {
    try {
        const response = await axios.get(`${UNTAPPED_API_BASE}${UNTAPPED_API_INFO}/${bid}`, {
            params: {
                client_id: config.untappd.clientId,
                client_secret: config.untappd.clientSecret,
            },
        });
        return response.data;
    }
    catch (e) {
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
