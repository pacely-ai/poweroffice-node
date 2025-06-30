/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Model for Error response, as defined in "The OAuth 2.0 Authorization Framework" (RFC 6749).
 * More info: https://tools.ietf.org/html/rfc6749#section-5.2
 */
export type ErrorResponseDto = {
    /**
     * One of 6 error codes.
     * More info: https://tools.ietf.org/html/rfc6749#section-5.2
     */
    readonly error?: string | null;
    /**
     * Human-readable ASCII [USASCII] text providing additional information, used to assist the client developer in understanding the error that occurred.
     */
    readonly error_description?: string | null;
};

