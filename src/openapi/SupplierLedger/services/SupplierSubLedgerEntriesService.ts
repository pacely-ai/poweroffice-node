/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResourceParameters } from '../models/ResourceParameters';
import type { SupplierBalanceDto } from '../models/SupplierBalanceDto';
import type { SupplierLedgerEntryDto } from '../models/SupplierLedgerEntryDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SupplierSubLedgerEntriesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the supplier balances at a given date (inclusive).
     * The balances represent the sum of accounts payable for the suppliers at the given date.
     * NOTE: Suppliers without any ledger entries are not shown.
     * Multiple filtering options. (Auth roles: SupplierLedger,SupplierLedger_Full)
     * @returns SupplierBalanceDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getSupplierledgerSupplierBalances({
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
         * Filter balances by contact group IDs. This will return the balances for the supplier belonging in the given contact groups. Separate by comma to filter on multiple contact group IDs. If filterString is null or whitespace, query is returned as is.
         */
        contactGroupIds?: string,
        /**
         * Sets whether or not to return balances for suppliers with only open items. If false, all active suppliers and their balances will be returned, including zero balances for suppliers with no open items. NOTE: Suppliers without any ledger entries are not shown.
         */
        includeOnlyOpenItems?: boolean,
        /**
         * Filter balances by sub-ledger number series IDs. This will return balances for the suppliers belonging in the given sub-ledger number series. Separate by comma to filter on multiple sub-ledger number series IDs. If filterString is null or whitespace, query is returned as is."
         */
        subLedgerNumberSeriesIds?: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<SupplierBalanceDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Supplierledger/SupplierBalances',
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
     * Gets all supplier sub-ledger transactions that share a given match ID. (Auth roles: SupplierLedger,SupplierLedger_Full)
     * @returns SupplierLedgerEntryDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getSupplierledgerEntriesByMatchId({
        matchId,
        resourceParameter,
    }: {
        /**
         * The match ID to filter for.
         */
        matchId: number,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<SupplierLedgerEntryDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Supplierledger/EntriesByMatchId',
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
     * Gets all supplier sub-ledger transactions that are open items at a given date (inclusive). Multiple filtering options. (Auth roles: SupplierLedger,SupplierLedger_Full)
     * @returns SupplierLedgerEntryDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getSupplierledgerOpenItems({
        date,
        contactGroupIds,
        createdDateTimeOffsetGreaterThan,
        customMatchingReferences,
        departmentCodes,
        externalNos,
        includeSubProject,
        invoiceNos,
        lastChangedDateTimeOffsetGreaterThan,
        onlyBalancesGreaterThanAmount,
        onlyCreatedByCurrentIntegration,
        projectCodes,
        subLedgerNumberSeriesIds,
        supplierNos,
        voucherTypes,
        resourceParameter,
    }: {
        /**
         * Date, inclusive. Get all open entries as of this date. Note that (date time) offsets (if provided) is not taken into account, only date is used.
         */
        date: string,
        /**
         * Filter by contact group IDs. This will return entries for the suppliers belonging in the given contact groups. Separate by comma to filter on multiple contact group IDs. If filterString is null or whitespace, query is returned as is.
         */
        contactGroupIds?: string,
        /**
         * Filter entries based on the created timestamp property. This filtering will return all entries with a created timestamp greater than the timestamp provided. Can be used when polling for new entries from Go. Blank means no filter. Timestamp not inclusive.
         */
        createdDateTimeOffsetGreaterThan?: string,
        /**
         * Filter transactions on invoices with given custom matching references. Separate by comma to filter on multiple custom matching references.
         */
        customMatchingReferences?: string,
        /**
         * Filter entries on department codes. Separate by comma to filter on multiple codes. If blank, all transactions with or without department codes are returned (no filter). If -1, then all transactions without department codes are included.
         */
        departmentCodes?: string,
        /**
         * Filter by supplier external numbers. SearchString should be in the form of "30000, 14153-19534, 150000-" where values for 30000, between (inclusive) 14153-19534 and all over 150000 (inclusive) will be retrieved. If filterString is null or whitespace, query is returned as is.
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
         * Filter entries based on the last changed timestamp property. The accounting entry in itself cannot change, but the match state of the sub-ledger entry might change. Using last changed filtering is one way of retrieving new matched items and as such the payment status of invoices. This filtering will return all entries with a last changed timestamp greater than the timestamp provided. Timestamp not inclusive.
         */
        lastChangedDateTimeOffsetGreaterThan?: string,
        /**
         * Filter on transactions with balances greater than amount. This will only provide entries with matches that are still open.
         */
        onlyBalancesGreaterThanAmount?: boolean,
        /**
         * Sets whether or not to return only entries that the current integration created. Can be used to reduce the number of entries if only the status of transactions that the querying integration created are relevant to report.
         */
        onlyCreatedByCurrentIntegration?: boolean,
        /**
         * Filter entries on project codes. Separate by comma to filter on multiple codes. If blank, all transactions with or without projects codes are returned (no filter). If -1, then all transactions without project codes are included.
         */
        projectCodes?: string,
        /**
         * Filter items by sub-ledger number series IDs. This will return entries for the suppliers belonging in the given sub-ledger number series. Separate by comma to filter on multiple sub-ledger number series IDs. If filterString is null or whitespace, query is returned as is."
         */
        subLedgerNumberSeriesIds?: string,
        /**
         * Filter by supplier numbers. Supplier number also represent the supplier sub-ledger account number. SearchString should be in the form of "20000-25999, 22500, 23000-" where values from 20000 to 25999, 22500 and all over 23000 will be selected. If filterString is null or whitespace, query is returned as is.
         */
        supplierNos?: string,
        /**
         * Filter by voucher types. Separate by comma to filter multiple voucher types. If blank, all transactions returned (no filter).
         */
        voucherTypes?: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<SupplierLedgerEntryDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Supplierledger/OpenItems',
            query: {
                'date': date,
                'contactGroupIds': contactGroupIds,
                'createdDateTimeOffsetGreaterThan': createdDateTimeOffsetGreaterThan,
                'customMatchingReferences': customMatchingReferences,
                'departmentCodes': departmentCodes,
                'externalNos': externalNos,
                'includeSubProject': includeSubProject,
                'invoiceNos': invoiceNos,
                'lastChangedDateTimeOffsetGreaterThan': lastChangedDateTimeOffsetGreaterThan,
                'onlyBalancesGreaterThanAmount': onlyBalancesGreaterThanAmount,
                'onlyCreatedByCurrentIntegration': onlyCreatedByCurrentIntegration,
                'projectCodes': projectCodes,
                'subLedgerNumberSeriesIds': subLedgerNumberSeriesIds,
                'supplierNos': supplierNos,
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
     * Gets all supplier sub-ledger transactions between two dates (inclusive). The dates represent the posted date (date of accounting effect). Multiple filtering options. (Auth roles: SupplierLedger,SupplierLedger_Full)
     * @returns SupplierLedgerEntryDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getSupplierledgerStatement({
        fromDate,
        toDate,
        contactGroupIds,
        createdDateTimeOffsetGreaterThan,
        customMatchingReferences,
        departmentCodes,
        externalNos,
        includeSubProject,
        invoiceNos,
        lastChangedDateTimeOffsetGreaterThan,
        onlyBalancesGreaterThanAmount,
        onlyCreatedByCurrentIntegration,
        projectCodes,
        subLedgerNumberSeriesIds,
        supplierNos,
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
         * Filter by contact group IDs. This will return entries for the suppliers belonging in the given contact groups. Separate by comma to filter on multiple contact group IDs. If filterString is null or whitespace, query is returned as is.
         */
        contactGroupIds?: string,
        /**
         * Filter entries based on the created timestamp property. This filtering will return all entries with a created timestamp greater than the timestamp provided. Can be used when polling for new entries from Go. Timestamp not inclusive.
         */
        createdDateTimeOffsetGreaterThan?: string,
        /**
         * Filter transactions on invoices with given custom matching references. Separate by comma to filter on multiple custom matching references.
         */
        customMatchingReferences?: string,
        /**
         * Filter entries on department codes. Separate by comma to filter on multiple codes. If blank, all transactions with or without department codes are returned (no filter). If -1, then all transactions without department codes are included.
         */
        departmentCodes?: string,
        /**
         * Filter by supplier external numbers. SearchString should be in the form of "30000, 14153-19534, 150000-" where values for 30000, between (inclusive) 14153-19534 and all over 150000 (inclusive) will be retrieved. If filterString is null or whitespace, query is returned as is.
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
         * Filter entries based on the last changed timestamp property. The accounting entry in itself cannot change, but the match state of the sub-ledger entry might change. Using last changed filtering is one way of retrieving new matched items and as such the payment status of invoices. This filtering will return all entries with a last changed timestamp greater than the timestamp provided. Timestamp not inclusive.
         */
        lastChangedDateTimeOffsetGreaterThan?: string,
        /**
         * Filter on transactions with balances greater than amount. This will only provide entries with matches. If, for instance, this filter is set true and combined with voucherType filter on incoming invoices, this can be one way of retrieving payments on invoices. NOTE: We use absolute values, so for manual journal entries where balance and amount is positive, we get transactions with amount less than balance.
         */
        onlyBalancesGreaterThanAmount?: boolean,
        /**
         * Sets whether or not to return only entries that the current integration created. Can be used to reduce the number of entries if only the status of transactions that the querying integration created are relevant to report.
         */
        onlyCreatedByCurrentIntegration?: boolean,
        /**
         * Filter entries on project codes. Separate by comma to filter on multiple codes. If blank, all transactions with or without projects codes are returned (no filter). If -1, then all transactions without project codes are included.
         */
        projectCodes?: string,
        /**
         * Filter entries by sub-ledger number series IDs. This will return entries for the suppliers belonging in the given sub-ledger number series. Separate by comma to filter on multiple sub-ledger number series IDs. If filterString is null or whitespace, query is returned as is."
         */
        subLedgerNumberSeriesIds?: string,
        /**
         * Filter by supplier numbers. Supplier number also represent the supplier sub-ledger account number. SearchString should be in the form of "20000-25999, 22500, 23000-" where values from 20000 to 25999, 22500 and all over 23000 will be selected. If filterString is null or whitespace, query is returned as is.
         */
        supplierNos?: string,
        /**
         * Filter by voucher types. Separate by comma to filter multiple voucher types. If blank, all transactions returned (no filter).
         */
        voucherTypes?: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<SupplierLedgerEntryDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Supplierledger/Statement',
            query: {
                'fromDate': fromDate,
                'toDate': toDate,
                'contactGroupIds': contactGroupIds,
                'createdDateTimeOffsetGreaterThan': createdDateTimeOffsetGreaterThan,
                'customMatchingReferences': customMatchingReferences,
                'departmentCodes': departmentCodes,
                'externalNos': externalNos,
                'includeSubProject': includeSubProject,
                'invoiceNos': invoiceNos,
                'lastChangedDateTimeOffsetGreaterThan': lastChangedDateTimeOffsetGreaterThan,
                'onlyBalancesGreaterThanAmount': onlyBalancesGreaterThanAmount,
                'onlyCreatedByCurrentIntegration': onlyCreatedByCurrentIntegration,
                'projectCodes': projectCodes,
                'subLedgerNumberSeriesIds': subLedgerNumberSeriesIds,
                'supplierNos': supplierNos,
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
