import { UntappdApiErrorResponse } from "../types/untappedApi.js";

export function isUntappdApiError(
  value: unknown,
): value is UntappdApiErrorResponse {
  return (
    typeof value === "object" &&
    value !== null &&
    "meta" in value &&
    typeof (value as any).meta === "object" &&
    "code" in (value as any).meta &&
    "error_detail" in (value as any).meta &&
    "error_type" in (value as any).meta
  );
}
