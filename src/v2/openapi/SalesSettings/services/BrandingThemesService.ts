/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BrandingThemeDto } from '../models/BrandingThemeDto';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BrandingThemesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List the branding themes available on the client. (Auth roles: CommonServices,CommonServices_Full)
     * Get the branding themes available on the client.
     * Go provides a default set of branding themes on new clients, but any custom branding theme can be created and used on customers, projects and sales orders created in Go.
     * Branding themes hold a set of templates for various documents, such as invoices, reminders, quotes etc.
     * @returns BrandingThemeDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getBrandingThemes({
        resourceParameter,
    }: {
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<BrandingThemeDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/BrandingThemes',
            query: {
                'resourceParameter': resourceParameter,
            },
            errors: {
                400: `Given when request is badly formatted`,
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
    /**
     * Gets the specified branding theme by its id. (Auth roles: CommonServices,CommonServices_Full)
     * @returns BrandingThemeDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getBrandingThemeById({
        id,
    }: {
        /**
         * The id of the branding theme.
         */
        id: number,
    } = {} as any): CancelablePromise<BrandingThemeDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/BrandingThemes/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                404: `Given when resource was not found`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
}
