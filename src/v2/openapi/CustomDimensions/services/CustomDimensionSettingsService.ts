/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomDimensionSettingsDto } from '../models/CustomDimensionSettingsDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CustomDimensionSettingsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the custom dimensions settings from the client (Auth roles: CustomDimension,CustomDimension_Full)
     * Gets the custom dimension settings on the client, providing the ordinal name and active state of the dim1-dim3 from the client.
     * @returns CustomDimensionSettingsDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getCustomDimensionSettings(): CancelablePromise<Array<CustomDimensionSettingsDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/CustomDimensionSettings',
            errors: {
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
}
