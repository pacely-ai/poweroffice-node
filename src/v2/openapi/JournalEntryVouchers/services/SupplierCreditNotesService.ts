/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { SupplierCreditNoteJournalEntryVoucherDto } from '../models/SupplierCreditNoteJournalEntryVoucherDto';
import type { SupplierCreditNoteJournalEntryVoucherPostDto } from '../models/SupplierCreditNoteJournalEntryVoucherPostDto';
import type { SupplierVoucherLineDto } from '../models/SupplierVoucherLineDto';
import type { SupplierVoucherLinePostDto } from '../models/SupplierVoucherLinePostDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SupplierCreditNotesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the specific journal entry supplier credit note by id. (Auth roles: JournalEntryVoucher,JournalEntryVoucher_Full)
     * Gets the specific journal entry supplier credit note by id.
     * Note that when querying journal entry voucher details, a response will only be produced for vouchers the integration have created using POST operations with journal entry voucher endpoints.
     * @returns SupplierCreditNoteJournalEntryVoucherDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getSupplierCreditNoteById({
        id,
    }: {
        /**
         * The identifier of a supplier credit note.
         */
        id: string,
    } = {} as any): CancelablePromise<SupplierCreditNoteJournalEntryVoucherDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/JournalEntryVouchers/SupplierCreditNotes/{id}',
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
     * Change an existing journal entry supplier credit note (Auth roles: JournalEntryVoucher_Full)
     * Change an existing journal entry supplier credit note. Changes cannot be made if the voucher is poster or sent to the approval workflow.
     * @returns SupplierCreditNoteJournalEntryVoucherDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchJournalEntryVouchersSupplierCreditNotes({
        id,
        requestBody,
    }: {
        /**
         * The identifier of the journal entry supplier credit note
         */
        id: string,
        /**
         * JSON Patch structure for updating an Supplier Credit Note. See SupplierCreditNoteJournalEntryVoucherPatchDto schema for all available properties. For more information on JSON patch and the various operations allowed, check out: https://datatracker.ietf.org/doc/html/rfc6902
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<SupplierCreditNoteJournalEntryVoucherDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/JournalEntryVouchers/SupplierCreditNotes/{id}',
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
                409: `Given when resource could not be deleted`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
    /**
     * Create a new journal entry supplier credit note. (Auth roles: JournalEntryVoucher_Full)
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns SupplierCreditNoteJournalEntryVoucherDto Given when a resource was created successfully
     * @throws ApiError
     */
    public postJournalEntryVouchersSupplierCreditNotes({
        requestBody,
    }: {
        requestBody?: SupplierCreditNoteJournalEntryVoucherPostDto,
    } = {} as any): CancelablePromise<any | SupplierCreditNoteJournalEntryVoucherDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/JournalEntryVouchers/SupplierCreditNotes',
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
     * Add a new supplier voucher line on a supplier credit note. (Auth roles: JournalEntryVoucher_Full)
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns SupplierCreditNoteJournalEntryVoucherDto Given when a resource was created successfully
     * @throws ApiError
     */
    public postJournalEntryVouchersSupplierCreditNotesVoucherLines({
        id,
        requestBody,
    }: {
        /**
         * The identifier of a supplier credit note.
         */
        id: string,
        /**
         * A supplier voucher line post dto.
         */
        requestBody?: SupplierVoucherLinePostDto,
    } = {} as any): CancelablePromise<any | SupplierCreditNoteJournalEntryVoucherDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/JournalEntryVouchers/SupplierCreditNotes/{id}/VoucherLines',
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
     * Update a supplier voucher line on a supplier credit note. (Auth roles: JournalEntryVoucher_Full)
     * @returns SupplierVoucherLineDto Given when a resource was updated successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchJournalEntryVouchersSupplierCreditNotesVoucherLines({
        id,
        lineId,
        requestBody,
    }: {
        /**
         * The identifier of the supplier credit note.
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
            url: '/JournalEntryVouchers/SupplierCreditNotes/{id}/VoucherLines/{lineId}',
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
     * Delete a supplier voucher line from a supplier voucher. (Auth roles: JournalEntryVoucher_Full)
     * @returns any Given when a resource was deleted successfully
     * @throws ApiError
     */
    public deleteJournalEntryVouchersSupplierCreditNotesVoucherLines({
        id,
        lineId,
    }: {
        /**
         * The identifier of the supplier credit note.
         */
        id: string,
        /**
         * The identifier of the supplier voucher line.
         */
        lineId: number,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/JournalEntryVouchers/SupplierCreditNotes/{id}/VoucherLines/{lineId}',
            path: {
                'id': id,
                'lineId': lineId,
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
