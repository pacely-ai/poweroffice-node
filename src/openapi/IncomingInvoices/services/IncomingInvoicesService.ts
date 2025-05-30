/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IncomingInvoiceListItemDto } from '../models/IncomingInvoiceListItemDto';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class IncomingInvoicesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the posted incoming invoices from the client. The returned objects are a lightweight version of a supplier invoice (or credit note), not containing the cost transaction lines. Use the endpoint AccountTransactions if all voucher lines are needed. Multiple filtering options. (Auth roles: IncomingInvoice,IncomingInvoice_Full)
     * @returns IncomingInvoiceListItemDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getIncomingInvoiceListItem({
        fromDate,
        toDate,
        balanceLastChangedDateTimeOffsetGreaterThan,
        departmentCodes,
        includeSubProject,
        onlyUnpaidInvoices,
        projectCodes,
        supplierNos,
        voucherNos,
        voucherTypes,
        resourceParameter,
    }: {
        /**
         * From date, inclusive. Get all invoices with an voucher (invoice) date from this date (inclusive). Note that (date time) offsets (if provided) is not taken into account, only date is used.
         */
        fromDate?: string,
        /**
         * To date, inclusive. Get all invoices with an voucher (invoice) date up to this date (inclusive). Note that (date time) offsets (if provided) is not taken into account, only date is used.
         */
        toDate?: string,
        /**
         * Filter invoices with last changed timestamp in balance (remaining amount to be paid) greater than the provided timestamp. Can be used as a lightweight version of retrieving payment states of invoices. Timestamp not inclusive.
         */
        balanceLastChangedDateTimeOffsetGreaterThan?: string,
        /**
         * Filter invoices on department codes. Note that this selects invoices with department set in the header of the invoice. The invoice costlines might specify other departments or no department. Separate by comma to filter on multiple codes. If blank, all invoices with or without department codes are returned (no filter). If -1, then all invoices without department codes are included.
         */
        departmentCodes?: string,
        /**
         * Include Sub-project(s) for specified project. If projectCodes is null, all (sub)projects are included (regardless of this variable).
         */
        includeSubProject?: boolean,
        /**
         * Filter on invoices that are unpaid (ie balance != 0). No filter set will provide all invoices regardless of balance state, depending on other filters set.
         */
        onlyUnpaidInvoices?: boolean,
        /**
         * Filter invoices on project codes. Separate by comma to filter on multiple codes. If blank, all transactions with or without projects codes are returned (no filter).
         */
        projectCodes?: string,
        /**
         * Filter by supplier numbers. SearchString should be in the form of "20000-25999, 22500, 23000-" where invoices from suppliers with numbers from (and including) 20000 to 25999, 22500 and all over 23000 will be selected. If filterString is null or whitespace, query is returned as is.
         */
        supplierNos?: string,
        /**
         * Filter on invoices voucher number. SearchString should be in the form of "1-15, 42, 690-" where voucher numbers from (and including) 1 to 15, 42 and 690 to infinity are selected. All vouchers in Go are posted in the same ascending voucher number series.
         */
        voucherNos?: string,
        /**
         * Filter by voucher type. Defaults to incoming invoice and incoming credit note if no parameter is supplied.
         */
        voucherTypes?: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<IncomingInvoiceListItemDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/IncomingInvoices',
            query: {
                'fromDate': fromDate,
                'toDate': toDate,
                'balanceLastChangedDateTimeOffsetGreaterThan': balanceLastChangedDateTimeOffsetGreaterThan,
                'departmentCodes': departmentCodes,
                'includeSubProject': includeSubProject,
                'onlyUnpaidInvoices': onlyUnpaidInvoices,
                'projectCodes': projectCodes,
                'supplierNos': supplierNos,
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
    /**
     * Get an IncomingInvoiceListItem by Id (Auth roles: IncomingInvoice,IncomingInvoice_Full)
     * @returns IncomingInvoiceListItemDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getIncomingInvoices({
        id,
    }: {
        /**
         * Id of the IncomingInvoiceListItem
         */
        id: string,
    } = {} as any): CancelablePromise<IncomingInvoiceListItemDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/IncomingInvoices/{id}',
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
