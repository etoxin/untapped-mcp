export function isUntappdApiError(value) {
    return (typeof value === "object" &&
        value !== null &&
        "meta" in value &&
        typeof value.meta === "object" &&
        "code" in value.meta &&
        "error_detail" in value.meta &&
        "error_type" in value.meta);
}
