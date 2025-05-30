/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OutgoingInvoiceDto } from '../models/OutgoingInvoiceDto';
import type { OutgoingInvoiceLineDto } from '../models/OutgoingInvoiceLineDto';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class OutgoingInvoicesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the specific outgoing invoice / credit note by id.
     * The returned object are a lightweight version of an invoice, not containing any line details. (Auth roles: OutgoingInvoice,OutgoingInvoice_Full)
     * @returns OutgoingInvoiceDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getOutgoingInvoiceById({
        id,
    }: {
        /**
         * The id of the outgoing invoice / credit note.
         */
        id: string,
    } = {} as any): CancelablePromise<OutgoingInvoiceDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/OutgoingInvoices/{id}',
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
    /**
     * Gets the lines of the specific outgoing invoice / credit note (specified by id).
     * The returned objects are the line details.
     * Note that the line information might not be complete or present if the invoice was imported to Go (ie. not generated and sent from Go). (Auth roles: OutgoingInvoice,OutgoingInvoice_Full)
     * @returns OutgoingInvoiceLineDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getOutgoingInvoicesLines({
        id,
        resourceParameter,
    }: {
        id: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<OutgoingInvoiceLineDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/OutgoingInvoices/{id}/Lines',
            path: {
                'id': id,
            },
            query: {
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
     * Gets the sent outgoing invoices from the client.
     * The returned objects are a lightweight version of an invoice, not containing any line details.
     * Multiple filtering options. (Auth roles: OutgoingInvoice,OutgoingInvoice_Full)
     * @returns OutgoingInvoiceDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getOutgoingInvoices({
        balanceLastChangedDateTimeOffsetGreaterThan,
        customerNos,
        customMatchingReferences,
        departmentCodes,
        fromDate,
        includeSubProject,
        invoiceIds,
        invoiceNos,
        onlyCreatedByCurrentIntegration,
        onlyUnpaidInvoices,
        projectCodes,
        sentDateTimeOffsetGreaterThan,
        toDate,
        voucherNos,
        resourceParameter,
    }: {
        /**
         * Filter invoices with last changed timestamp in balance (remaining amount to be paid) greater than the provided timestamp. Can be used as a lightweight version of retrieving payment states of invoices. Timestamp not inclusive.
         */
        balanceLastChangedDateTimeOffsetGreaterThan?: string,
        /**
         * Filter by customer numbers. Separate by comma [,] to filter on multiple customer numbers. A range of numbers can be specified using dash/hyphen [-]. For example "10000-11000, 12000, 13000-" will result in invoices from customers with numbers from and including 10000 to 11000, 12000, 13000 and all above will be returned. If null or whitespace, the filter is not used.
         */
        customerNos?: string,
        /**
         * Filter by custom matching references. Separate by comma [,] to filter on multiple custom matching references.
         */
        customMatchingReferences?: string,
        /**
         * Filter by department codes. Note that this selects invoices with department set in the header of the invoice. The invoice lines might specify other departments or no department. Separate by comma [,] to filter on multiple codes. If -1, then all invoices without department codes are returned. If null or whitespace, the filter is not used.
         */
        departmentCodes?: string,
        /**
         * From date, inclusive. Get all invoices with an voucher (invoice) date from this date (inclusive). Note that (date time) offsets (if provided) is not taken into account, only date is used.
         */
        fromDate?: string,
        /**
         * Include sub-project(s) for the currently filtered project(s). If projectCodes is null or whitespace, all (sub)projects are included (regardless of this variable).
         */
        includeSubProject?: boolean,
        /**
         * Filter by invoice IDs. Separate by comma [,] to filter on multiple invoice IDs. If null or whitespace, the filter is not used.
         */
        invoiceIds?: string,
        /**
         * Filter by invoice numbers. Separate by comma [,] to filter on multiple invoice numbers. A range of numbers can be specified using dash/hyphen [-]. For example "1-5, 7, 9-" will result in invoices with numbers 1 to 5, 7, 9 and all above will be returned. If null or whitespace, the filter is not used.
         */
        invoiceNos?: string,
        /**
         * Filter on invoices that the current integration has created. Can be used to return only invoices that the (currently) querying integration has created. Note that invoices are considered created by an integration only if they are posted with the OutgoingInvoiceVoucher endpoint, or if the invoice was sent using the SalesOrders endpoint. If a sales order draft was posted/sent by a user in the GUI, it will be the user that posted/sent it that created the outgoing invoice.
         */
        onlyCreatedByCurrentIntegration?: boolean,
        /**
         * Filter on invoices that are unpaid (ie balance != 0).
         */
        onlyUnpaidInvoices?: boolean,
        /**
         * Filter by project codes. Separate by comma [,] to filter on multiple codes. If -1, then all invoices without project codes are returned. If null or whitespace, all invoices with or without project codes are returned (filter is not used).
         */
        projectCodes?: string,
        /**
         * Filter invoices based on the sent timestamp. The Sent timestamp of when the invoice was generated and sent from Go (which might differ from the invoice date). This property is only set on the invoices generated in Go, and blank if invoices was imported (using a file or the api). Using this filter is one option of retrieving new invoices from Go. Timestamp not inclusive.
         */
        sentDateTimeOffsetGreaterThan?: string,
        /**
         * To date, inclusive. Get all invoices with an voucher (invoice) date up to this date (inclusive). Note that (date time) offsets (if provided) is not taken into account, only date is used.
         */
        toDate?: string,
        /**
         * Filter by voucher numbers. Separate by comma [,] to filter on multiple voucher numbers. A range of numbers can be specified using dash/hyphen [-]. For example "1-5, 7, 9-" will result in invoices with voucher numbers from 1 to 5, 7, 9 and all above will be returned. If null or whitespace, the filter is not used.
         */
        voucherNos?: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<OutgoingInvoiceDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/OutgoingInvoices',
            query: {
                'balanceLastChangedDateTimeOffsetGreaterThan': balanceLastChangedDateTimeOffsetGreaterThan,
                'customerNos': customerNos,
                'customMatchingReferences': customMatchingReferences,
                'departmentCodes': departmentCodes,
                'fromDate': fromDate,
                'includeSubProject': includeSubProject,
                'invoiceIds': invoiceIds,
                'invoiceNos': invoiceNos,
                'onlyCreatedByCurrentIntegration': onlyCreatedByCurrentIntegration,
                'onlyUnpaidInvoices': onlyUnpaidInvoices,
                'projectCodes': projectCodes,
                'sentDateTimeOffsetGreaterThan': sentDateTimeOffsetGreaterThan,
                'toDate': toDate,
                'voucherNos': voucherNos,
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
