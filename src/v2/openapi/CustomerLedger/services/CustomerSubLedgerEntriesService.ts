/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerBalanceDto } from '../models/CustomerBalanceDto';
import type { CustomerLedgerEntryDto } from '../models/CustomerLedgerEntryDto';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CustomerSubLedgerEntriesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the customer balances at a given date (inclusive).
     * The balances represent the sum of accounts receivable for the customers at the given date.
     * NOTE: Customers without any ledger entries are not shown.
     * Multiple filtering options. (Auth roles: CustomerLedger,CustomerLedger_Full)
     * @returns CustomerBalanceDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getCustomerledgerCustomerBalances({
        date,
        contactGroupIds,
        includeOnlyOpenItems,
        subLedgerNumberSeriesIds,
        resourceParameter,
    }: {
        /**
         * Date, inclusive. Get all balances as of this date. Note that (date time) offsets (if provided) is not taken into account, only date is used.
         */
        date: string,
        /**
         * Filter balances by contact group IDs. This will return the balances for the customers belonging in the given contact groups. Separate by comma to filter on multiple contact group IDs. If filterString is null or whitespace, query is returned as is.
         */
        contactGroupIds?: string,
        /**
         * Sets whether or not to return balances for customers with only open items. If false, all active customers and their balances will be returned, including zero balances for customers with no open items. NOTE: Customers without any ledger entries are not shown.
         */
        includeOnlyOpenItems?: boolean,
        /**
         * Filter balances by sub-ledger number series IDs. This will return balances for the customers belonging in the given sub-ledger number series. Separate by comma to filter on multiple sub-ledger number series IDs. If filterString is null or whitespace, query is returned as is."
         */
        subLedgerNumberSeriesIds?: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<CustomerBalanceDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Customerledger/CustomerBalances',
            query: {
                'date': date,
                'contactGroupIds': contactGroupIds,
                'includeOnlyOpenItems': includeOnlyOpenItems,
                'subLedgerNumberSeriesIds': subLedgerNumberSeriesIds,
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
    /**
     * Gets all customer sub-ledger transactions that share a given match ID. (Auth roles: CustomerLedger,CustomerLedger_Full)
     * @returns CustomerLedgerEntryDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getCustomerledgerEntriesByMatchId({
        matchId,
        resourceParameter,
    }: {
        /**
         * The match ID to filter for.
         */
        matchId: number,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<CustomerLedgerEntryDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Customerledger/EntriesByMatchId',
            query: {
                'matchId': matchId,
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
    /**
     * Gets all customer sub-ledger transactions that are open items at a given date (inclusive). Multiple filtering options. (Auth roles: CustomerLedger,CustomerLedger_Full)
     * @returns CustomerLedgerEntryDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getCustomerledgerOpenItems({
        date,
        contactGroupIds,
        createdDateTimeOffsetGreaterThan,
        customerNos,
        customMatchingReferences,
        departmentCodes,
        externalNos,
        includeSubProject,
        invoiceNos,
        lastChangedDateTimeOffsetGreaterThan,
        onlyBalancesLessThanAmount,
        onlyCreatedByCurrentIntegration,
        projectCodes,
        subLedgerNumberSeriesIds,
        voucherTypes,
        resourceParameter,
    }: {
        /**
         * Date, inclusive. Get all open entries as of this date. Note that (date time) offsets (if provided) is not taken into account, only date is used.
         */
        date: string,
        /**
         * Filter by contact group IDs. This will return entries for the customers belonging in the given contact groups. Separate by comma to filter on multiple contact group IDs. If filterString is null or whitespace, query is returned as is.
         */
        contactGroupIds?: string,
        /**
         * Filter entries based on the created timestamp property. This filtering will return all entries with a created timestamp greater than the timestamp provided. Can be used when polling for new entries from Go. Date not inclusive.
         */
        createdDateTimeOffsetGreaterThan?: string,
        /**
         * Filter by customer numbers. Customer number also represent the customer sub-ledger account number. SearchString should be in the form of "10000-15999, 12500, 13000-" where values from 10000 to 15999, 12500 and all over 13000 will be selected. If filterString is null or whitespace, query is returned as is.
         */
        customerNos?: string,
        /**
         * Filter transactions on invoices with given custom matching references. Separate by comma to filter on multiple custom matching references.
         */
        customMatchingReferences?: string,
        /**
         * Filter entries on department codes. Separate by comma to filter on multiple codes. If blank, all transactions with or without department codes are returned (no filter). If -1, then all transactions without department codes are included.
         */
        departmentCodes?: string,
        /**
         * Filter by customer external numbers. SearchString should be in the form of "30000, 14153-19534, 150000-" where values for 30000, between (inclusive) 14153-19534 and all over 150000 (inclusive) will be retrieved. If filterString is null or whitespace, query is returned as is.
         */
        externalNos?: string,
        /**
         * Include Sub-project(s) for specified project. If projectCodes is null, all (sub)projects are included (regardless of this variable).
         */
        includeSubProject?: boolean,
        /**
         * Filter transactions for invoices with given invoice numbers. Separate by comma to filter on multiple invoice numbers.
         */
        invoiceNos?: string,
        /**
         * Filter entries based on the last changed timestamp property. The accounting entry in itself cannot change, but the match state of the sub-ledger entry might change. Using last changed filtering is one way of retrieving new matched items and as such the payment status of invoices. This filtering will return all entries with a last changed timestamp greater than the timestamp provided. Date not inclusive.
         */
        lastChangedDateTimeOffsetGreaterThan?: string,
        /**
         * Filter on transactions with balances less than amount. This will only provide entries with matches that are still open.
         */
        onlyBalancesLessThanAmount?: boolean,
        /**
         * Sets whether or not to return only entries that the current integration created. Can be used to reduce the number of entries if only the status of transactions that the querying integration created are relevant to report.
         */
        onlyCreatedByCurrentIntegration?: boolean,
        /**
         * Filter entries on project codes. Separate by comma to filter on multiple codes. If blank, all transactions with or without projects codes are returned (no filter). If -1, then all transactions without project codes are included.
         */
        projectCodes?: string,
        /**
         * Filter items by sub-ledger number series IDs. This will return entries for the customers belonging in the given sub-ledger number series. Separate by comma to filter on multiple sub-ledger number series IDs. If filterString is null or whitespace, query is returned as is."
         */
        subLedgerNumberSeriesIds?: string,
        /**
         * Filter by voucher types. Separate by comma to filter multiple voucher types. If blank, all transactions returned (no filter).
         */
        voucherTypes?: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<CustomerLedgerEntryDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Customerledger/OpenItems',
            query: {
                'date': date,
                'contactGroupIds': contactGroupIds,
                'createdDateTimeOffsetGreaterThan': createdDateTimeOffsetGreaterThan,
                'customerNos': customerNos,
                'customMatchingReferences': customMatchingReferences,
                'departmentCodes': departmentCodes,
                'externalNos': externalNos,
                'includeSubProject': includeSubProject,
                'invoiceNos': invoiceNos,
                'lastChangedDateTimeOffsetGreaterThan': lastChangedDateTimeOffsetGreaterThan,
                'onlyBalancesLessThanAmount': onlyBalancesLessThanAmount,
                'onlyCreatedByCurrentIntegration': onlyCreatedByCurrentIntegration,
                'projectCodes': projectCodes,
                'subLedgerNumberSeriesIds': subLedgerNumberSeriesIds,
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
    /**
     * Gets all customer sub-ledger transactions between two dates (inclusive). The dates represent the posted date (date of accounting effect). Multiple filtering options. (Auth roles: CustomerLedger,CustomerLedger_Full)
     * @returns CustomerLedgerEntryDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getCustomerledgerStatement({
        fromDate,
        toDate,
        contactGroupIds,
        createdDateTimeOffsetGreaterThan,
        customerNos,
        customMatchingReferences,
        departmentCodes,
        externalNos,
        includeSubProject,
        invoiceNos,
        lastChangedDateTimeOffsetGreaterThan,
        onlyBalancesLessThanAmount,
        onlyCreatedByCurrentIntegration,
        projectCodes,
        subLedgerNumberSeriesIds,
        voucherTypes,
        resourceParameter,
    }: {
        /**
         * From date, inclusive. Get all transactions with a posted date from this date (inclusive). Note that (date time) offsets (if provided) is not taken into account, only date is used.
         */
        fromDate: string,
        /**
         * To date, inclusive. Get all transactions with a posted date up to this date (inclusive). If date is less then the current date (today); the balance displayed on all entries will be the balance the entry was on that date. Note that (date time) offsets (if provided) is not taken into account, only date is used.
         */
        toDate: string,
        /**
         * Filter by contact group IDs. This will return entries for the customers belonging in the given contact groups. Separate by comma to filter on multiple contact group IDs. If filterString is null or whitespace, query is returned as is.
         */
        contactGroupIds?: string,
        /**
         * Filter entries based on the created timestamp property. This filtering will return all entries with a created timestamp greater than the timestamp provided. Can be used when polling for new entries from Go. Date not inclusive.
         */
        createdDateTimeOffsetGreaterThan?: string,
        /**
         * Filter by customer numbers. Customer number also represent the customer sub-ledger account number. SearchString should be in the form of "10000-15999, 12500, 13000-" where values from 10000 to 15999, 12500 and all over 13000 will be selected. If filterString is null or whitespace, query is returned as is.
         */
        customerNos?: string,
        /**
         * Filter transactions on invoices with given custom matching references. Separate by comma to filter on multiple custom matching references.
         */
        customMatchingReferences?: string,
        /**
         * Filter entries on department codes. Separate by comma to filter on multiple codes. If blank, all transactions with or without department codes are returned (no filter). If -1, then all transactions without department codes are included.
         */
        departmentCodes?: string,
        /**
         * Filter by customer external numbers. SearchString should be in the form of "30000, 14153-19534, 150000-" where values for 30000, between (inclusive) 14153-19534 and all over 150000 (inclusive) will be retrieved. If filterString is null or whitespace, query is returned as is.
         */
        externalNos?: string,
        /**
         * Include Sub-project(s) for specified project. If projectCodes is null, all (sub)projects are included (regardless of this variable).
         */
        includeSubProject?: boolean,
        /**
         * Filter transactions for invoices with given invoice numbers. Separate by comma to filter on multiple invoice numbers.
         */
        invoiceNos?: string,
        /**
         * Filter entries based on the last changed timestamp property. The accounting entry in itself cannot change, but the match state of the sub-ledger entry might change. Using last changed filtering is one way of retrieving new matched items and as such the payment status of invoices. This filtering will return all entries with a last changed timestamp greater than the timestamp provided. Date not inclusive.
         */
        lastChangedDateTimeOffsetGreaterThan?: string,
        /**
         * Filter on transactions with balances less than amount. This will only provide entries with matches. If, for instance, this filter is set true and combined with voucherType filter on outgoing invoices, this can be one way of retrieving payments on invoices. NOTE: We use absolute values, so for credit note entries where balance and amount is negative, we get transactions with amount greater than balance.
         */
        onlyBalancesLessThanAmount?: boolean,
        /**
         * Sets whether or not to return only entries that the current integration created. Can be used to reduce the number of entries if only the status of transactions that the querying integration created are relevant to report.
         */
        onlyCreatedByCurrentIntegration?: boolean,
        /**
         * Filter entries on project codes. Separate by comma to filter on multiple codes. If blank, all transactions with or without projects codes are returned (no filter). If -1, then all transactions without project codes are included.
         */
        projectCodes?: string,
        /**
         * Filter entries by sub-ledger number series IDs. This will return entries for the customers belonging in the given sub-ledger number series. Separate by comma to filter on multiple sub-ledger number series IDs. If filterString is null or whitespace, query is returned as is."
         */
        subLedgerNumberSeriesIds?: string,
        /**
         * Filter by voucher types. Separate by comma to filter multiple voucher types. If blank, all transactions returned (no filter).
         */
        voucherTypes?: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<CustomerLedgerEntryDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Customerledger/Statement',
            query: {
                'fromDate': fromDate,
                'toDate': toDate,
                'contactGroupIds': contactGroupIds,
                'createdDateTimeOffsetGreaterThan': createdDateTimeOffsetGreaterThan,
                'customerNos': customerNos,
                'customMatchingReferences': customMatchingReferences,
                'departmentCodes': departmentCodes,
                'externalNos': externalNos,
                'includeSubProject': includeSubProject,
                'invoiceNos': invoiceNos,
                'lastChangedDateTimeOffsetGreaterThan': lastChangedDateTimeOffsetGreaterThan,
                'onlyBalancesLessThanAmount': onlyBalancesLessThanAmount,
                'onlyCreatedByCurrentIntegration': onlyCreatedByCurrentIntegration,
                'projectCodes': projectCodes,
                'subLedgerNumberSeriesIds': subLedgerNumberSeriesIds,
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
