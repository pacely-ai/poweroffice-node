/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResourceParameters } from '../models/ResourceParameters';
import type { TrialBalanceLineDto } from '../models/TrialBalanceLineDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TrialBalanceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the trial balance at a specific date (inclusive). Multiple filtering options (Auth roles: TrialBalance,TrialBalance_Full)
     * @returns TrialBalanceLineDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getTrialBalance({
        date,
        accountNos,
        agricultureDepartments,
        departmentCodes,
        hideAccountsWithZeroBalance,
        includeSubProject,
        productCode,
        projectCode,
        resourceParameter,
    }: {
        /**
         * The specific date (inclusive) to get trial balance for. Note that (date time) offsets (if provided) is not taken into account, only date is used.
         */
        date: string,
        /**
         * Filter by account numbers. Separate by comma [,] to filter on multiple account numbers. A range of numbers can be specified using dash/hyphen [-]. For example "1000-1999, 2500, 3000-" will result in transactions with account numbers from and including 1000 to 1999, 2500, 3000 and all above will be returned. If null or whitespace, the filter is not used.
         */
        accountNos?: string,
        /**
         * Filter by agriculture departments. Separate by comma [,] to filter on multiple names. If null or whitespace, all transactions with or without agriculture departments are returned (filter is not used).
         */
        agricultureDepartments?: string,
        /**
         * Filter by department codes. Separate by comma [,] to filter on multiple codes. If -1, then all transactions without department codes are returned. If null or whitespace, all transactions with or without department codes are returned (filter is not used).
         */
        departmentCodes?: string,
        /**
         * Hide all accounts that have balance = 0.
         */
        hideAccountsWithZeroBalance?: boolean,
        /**
         * Include sub-project(s) for the currently filtered project(s). If projectCodes is null or whitespace, all (sub)projects are included (regardless of this variable).
         */
        includeSubProject?: boolean,
        /**
         * Filter by product code. If null or whitespace, the filter is not used.
         */
        productCode?: string,
        /**
         * Filter by project code. If -1, then all transactions without project codes are returned. If null or whitespace, all transactions with or without project codes are returned (filter is not used).
         */
        projectCode?: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<TrialBalanceLineDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/TrialBalance',
            query: {
                'date': date,
                'accountNos': accountNos,
                'agricultureDepartments': agricultureDepartments,
                'departmentCodes': departmentCodes,
                'hideAccountsWithZeroBalance': hideAccountsWithZeroBalance,
                'includeSubProject': includeSubProject,
                'productCode': productCode,
                'projectCode': projectCode,
                'resourceParameter': resourceParameter,
            },
            errors: {
                400: `Given when request is badly formatted`,
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                404: `Given when resource was not found`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
}
