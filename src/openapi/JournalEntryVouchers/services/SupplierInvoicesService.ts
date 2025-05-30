/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { SupplierInvoiceJournalEntryVoucherDto } from '../models/SupplierInvoiceJournalEntryVoucherDto';
import type { SupplierInvoiceJournalEntryVoucherPostDto } from '../models/SupplierInvoiceJournalEntryVoucherPostDto';
import type { SupplierVoucherLineDto } from '../models/SupplierVoucherLineDto';
import type { SupplierVoucherLinePostDto } from '../models/SupplierVoucherLinePostDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SupplierInvoicesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Returns a supplier invoice by id. (Auth roles: JournalEntryVoucher,JournalEntryVoucher_Full)
     * The integration only has access to vouchers that it has created or is the current approver of.
     * @returns SupplierInvoiceJournalEntryVoucherDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getSupplierInvoiceById({
        id,
    }: {
        /**
         * The identifier of a supplier invoice.
         */
        id: string,
    } = {} as any): CancelablePromise<SupplierInvoiceJournalEntryVoucherDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/JournalEntryVouchers/SupplierInvoices/{id}',
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
     * Update supplier invoice header. (Auth roles: JournalEntryVoucher_Full)
     * The integration only has access to vouchers that it has created or is the current approver of.
     * If the voucher is currently under approval by a different approver, the integration will not be able to update the voucher.
     * Supplier invoice lines must be updated using a separate endpoint.
     * @returns SupplierInvoiceJournalEntryVoucherDto Given when a resource was updated successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchJournalEntryVouchersSupplierInvoices({
        id,
        requestBody,
    }: {
        /**
         * The identifier of a supplier invoice.
         */
        id: string,
        /**
         * JSON Patch structure for updating an Supplier Invoice. See SupplierInvoiceJournalEntryVoucherPatchDto schema for all available properties. For more information on JSON patch and the various operations allowed, check out: https://datatracker.ietf.org/doc/html/rfc6902
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<SupplierInvoiceJournalEntryVoucherDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/JournalEntryVouchers/SupplierInvoices/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Given when request is badly formatted`,
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                404: `Given when resource was not found`,
                409: `Given when resource conflict occur`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
    /**
     * Create a supplier invoice. (Auth roles: JournalEntryVoucher_Full)
     * Use the voucher page endpoint to add a page to the supplier invoice.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns SupplierInvoiceJournalEntryVoucherDto Given when a resource was created successfully
     * @throws ApiError
     */
    public postJournalEntryVouchersSupplierInvoices({
        requestBody,
    }: {
        requestBody?: SupplierInvoiceJournalEntryVoucherPostDto,
    } = {} as any): CancelablePromise<any | SupplierInvoiceJournalEntryVoucherDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/JournalEntryVouchers/SupplierInvoices',
            body: requestBody,
            mediaType: 'application/json-patch+json',
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
     * Add a new supplier voucher line on a supplier invoice. (Auth roles: JournalEntryVoucher_Full)
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns SupplierInvoiceJournalEntryVoucherDto Given when a resource was created successfully
     * @throws ApiError
     */
    public postJournalEntryVouchersSupplierInvoicesVoucherLines({
        id,
        requestBody,
    }: {
        /**
         * The identifier of a supplier invoice.
         */
        id: string,
        /**
         * A supplier voucher line post dto.
         */
        requestBody?: SupplierVoucherLinePostDto,
    } = {} as any): CancelablePromise<any | SupplierInvoiceJournalEntryVoucherDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/JournalEntryVouchers/SupplierInvoices/{id}/VoucherLines',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
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
     * Update a supplier voucher line on a supplier invoice. (Auth roles: JournalEntryVoucher_Full)
     * @returns SupplierVoucherLineDto Given when a resource was updated successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchJournalEntryVouchersSupplierInvoicesVoucherLines({
        id,
        lineId,
        requestBody,
    }: {
        /**
         * The identifier of the supplier invoice.
         */
        id: string,
        /**
         * The identifier of the supplier voucher line.
         */
        lineId: number,
        /**
         * JSON Patch structure for updating a supplier voucher line. See SupplierVoucherLinePatchDto schema for all available properties. For more information on JSON patch and the various operations allowed, check out: https://datatracker.ietf.org/doc/html/rfc6902
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<SupplierVoucherLineDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/JournalEntryVouchers/SupplierInvoices/{id}/VoucherLines/{lineId}',
            path: {
                'id': id,
                'lineId': lineId,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Given when request is badly formatted`,
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                404: `Given when resource was not found`,
                409: `Given when resource is in conflict`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
    /**
     * Delete a supplier voucher line from a supplier invoice. (Auth roles: JournalEntryVoucher_Full)
     * @returns any Given when a resource was deleted successfully
     * @throws ApiError
     */
    public deleteJournalEntryVouchersSupplierInvoicesVoucherLines({
        id,
        lineId,
    }: {
        /**
         * The identifier of the supplier invoice.
         */
        id: string,
        /**
         * The identifier of the supplier invoice line.
         */
        lineId: number,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/JournalEntryVouchers/SupplierInvoices/{id}/VoucherLines/{lineId}',
            path: {
                'id': id,
                'lineId': lineId,
            },
            errors: {
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                404: `Given when resource was not found`,
                409: `Given when resource conflict occur`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
}
