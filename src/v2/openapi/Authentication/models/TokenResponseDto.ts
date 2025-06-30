/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Model for Token response, as defined in "The OAuth 2.0 Authorization Framework" (RFC 6749).
 * More info: https://tools.ietf.org/html/rfc6749#section-5.1
 */
export type TokenResponseDto = {
    /**
     * Access tokens are credentials used to access protected resources. An access token is a string representing an authorization issued to the client.
     * More info: https://tools.ietf.org/html/rfc6749#section-1.4
     */
    readonly access_token?: string | null;
    /**
     * The access token type provides the client with the information required to successfully utilize the access token to make a protected resource request (along with type-specific attributes).
     * More info: https://www.rfc-editor.org/rfc/rfc6749#section-7.1
     */
    readonly token_type?: string | null;
    /**
     * The lifetime in seconds of the access token.
     * For example, the value "3600" denotes that the access token will expire in one hour from the time the response was generated.
     */
    readonly expires_in?: number;
};

