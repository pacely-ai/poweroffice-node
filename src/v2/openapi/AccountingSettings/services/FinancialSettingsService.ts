/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FinancialSettingsDto } from '../models/FinancialSettingsDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class FinancialSettingsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the financial settings on the client, and conversion date. (Auth roles: CommonServices,CommonServices_Full)
     * Changes in agio (gains) and disagio (loss) accounts does not update the LastChangedDateTimeOffset property in FinancialSettings.
     * @returns FinancialSettingsDto Given when resource was successfully returned.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getFinancialSettings(): CancelablePromise<FinancialSettingsDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/FinancialSettings',
            errors: {
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
}
