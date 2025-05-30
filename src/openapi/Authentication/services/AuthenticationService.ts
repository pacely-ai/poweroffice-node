/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TokenResponseDto } from '../models/TokenResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AuthenticationService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Function to obtain a new access token to be used with Poweroffice Go API (v2).
     * Follows the The OAuth 2.0 Authorization Framework standard (link: https://www.rfc-editor.org/rfc/rfc6749).
     * The following Authorization Grants are supported: Client Credentials Grant.
     * The request header must be configur
     * Function to obtain a new access token to be used with Poweroffice Go API (v2).
     * Follows the The OAuth 2.0 Authorization Framework standard (link: https://www.rfc-editor.org/rfc/rfc6749).
     * The following Authorization Grants are supported: Client Credentials Grant.
     * The request header must be configured with the following:
     * 1. Content-type must be 'application/x-www-form-urlencoded' with charset=utf-8.
     * 2. Authorization must contain the word 'Basic ' followed by a Base64 encoded string containing the application key and client key. The keys must be separated by ':'.
     * And the request body must contain the parameter 'grant_type' with the value 'client_credentials'.
     * @returns TokenResponseDto OK
     * @throws ApiError
     */
    public postToken({
        formData,
    }: {
        /**
         * Only Client Credentials Grant is supported.
         */
        formData?: any,
    } = {} as any): CancelablePromise<TokenResponseDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Token',
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                400: `Bad Request`,
                429: `Too Many Requests`,
            },
        });
    }
}
