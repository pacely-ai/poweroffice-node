/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PayrollSettingsDto } from '../models/PayrollSettingsDto';
import type { PensionSchemeDto } from '../models/PensionSchemeDto';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PayrollSettingsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get payroll settings for the client. (Auth roles: PayrollSettings,PayrollSettings_Full)
     * @returns PayrollSettingsDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getPayrollSettings(): CancelablePromise<PayrollSettingsDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/PayrollSettings',
            errors: {
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                404: `Given when resource was not found`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
    /**
     * Get the pension schemes set in the payroll settings for the client. (Auth roles: PayrollSettings,PayrollSettings_Full)
     * @returns PensionSchemeDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getPayrollSettingsPensionSchemes({
        resourceParameter,
    }: {
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<PensionSchemeDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/PayrollSettings/PensionSchemes',
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
}
