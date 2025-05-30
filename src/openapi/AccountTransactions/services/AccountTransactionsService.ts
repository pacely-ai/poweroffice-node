/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountTransactionDto } from '../models/AccountTransactionDto';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AccountTransactionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets all account transactions between two dates (inclusive). The dates represent the posted date (date of accounting effect). Multiple filtering options. (Auth roles: AccountTransaction,AccountTransaction_Full)
     * @returns AccountTransactionDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getAccountTransactions({
        fromDate,
        toDate,
        accountNos,
        agricultureDepartments,
        createdDateTimeOffsetGreaterThan,
        departmentCodes,
        includeSubProject,
        lastChangedDateTimeOffsetGreaterThan,
        productCodes,
        projectCodes,
        vatCodes,
        voucherNos,
        voucherTypes,
        resourceParameter,
    }: {
        /**
         * From date, inclusive. Get all transactions with a posted date from this date (inclusive). Note that (date time) offsets (if provided) is not taken into account, only date is used.
         */
        fromDate: string,
        /**
         * To date, inclusive. Get all transactions with a posted date up to this date (inclusive). Note that (date time) offsets (if provided) is not taken into account, only date is used.
         */
        toDate: string,
        /**
         * Filter by account numbers. Separate by comma [,] to filter on multiple account numbers. A range of numbers can be specified using dash/hyphen [-]. For example "1000-1999, 2500, 3000-" will result in transactions with account numbers from and including 1000 to 1999, 2500, 3000 and all above will be returned. If null or whitespace, the filter is not used.
         */
        accountNos?: string,
        /**
         * Filter by agriculture departments. Separate by comma [,] to filter on multiple names. If null or whitespace, all transactions with or without agriculture departments are returned (filter is not used).
         */
        agricultureDepartments?: string,
        /**
         * Filter by created timestamp. This filtering will return all transactions with a created timestamp greater than the timestamp provided. Can be used when polling for new entries from Go. Date not inclusive.
         */
        createdDateTimeOffsetGreaterThan?: string,
        /**
         * Filter by department codes. Separate by comma [,] to filter on multiple codes. If -1, then all transactions without department codes are returned. If null or whitespace, all transactions with or without department codes are returned (filter is not used).
         */
        departmentCodes?: string,
        /**
         * Include sub-project(s) for the currently filtered project(s). If projectCodes is null or whitespace, all (sub)projects are included (regardless of this variable).
         */
        includeSubProject?: boolean,
        /**
         * Filter by last changed timestamp. No changes with accounting effect can be made on a posted voucher in Go, making createdDateTimeOffsetGreaterThan the preferred filtering in order to get new account transactions from Go. However, simple changes like the description can be made on a posted voucher, which will effect the last changed timestamp. This filtering will return all transactions with a last changed timestamp greater than the timestamp provided. Can be used when polling for new transactions and where changes in description are needed from Go. If used, changed transactions should replace what was previously stored in the external system. Note again that no changes can be made that affects the accounting as such. Date not inclusive.
         */
        lastChangedDateTimeOffsetGreaterThan?: string,
        /**
         * Filter by product codes. Separate by comma [,] to filter on multiple codes. If -1, then all transactions without product codes are returned. If null or whitespace, the filter is not used.
         */
        productCodes?: string,
        /**
         * Filter by project codes. Separate by comma [,] to filter on multiple codes. If -1, then all transactions without project codes are returned. If null or whitespace, all transactions with or without project codes are returned (filter is not used).
         */
        projectCodes?: string,
        /**
         * Filter by vat codes. Separate by comma [,] to filter on multiple codes. If null or whitespace, the filter is not used.
         */
        vatCodes?: string,
        /**
         * Filter by voucher numbers. Separate by comma [,] to filter on multiple voucher numbers. A range of numbers can be specified using dash/hyphen [-]. For example "1-5, 7, 9-" will result in transactions with voucher numbers from and including 1 to 5, 7, 9 and all above will be returned. If null or whitespace, the filter is not used.
         */
        voucherNos?: string,
        /**
         * Filter by voucher types. Separate by comma [,] to filter on multiple voucher types. If null or whitespace, the filter is not used.
         */
        voucherTypes?: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<AccountTransactionDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/AccountTransactions',
            query: {
                'fromDate': fromDate,
                'toDate': toDate,
                'accountNos': accountNos,
                'agricultureDepartments': agricultureDepartments,
                'createdDateTimeOffsetGreaterThan': createdDateTimeOffsetGreaterThan,
                'departmentCodes': departmentCodes,
                'includeSubProject': includeSubProject,
                'lastChangedDateTimeOffsetGreaterThan': lastChangedDateTimeOffsetGreaterThan,
                'productCodes': productCodes,
                'projectCodes': projectCodes,
                'vatCodes': vatCodes,
                'voucherNos': voucherNos,
                'voucherTypes': voucherTypes,
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
