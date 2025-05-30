/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { ManualJournalEntryVoucherDto } from '../models/ManualJournalEntryVoucherDto';
import type { ManualJournalEntryVoucherLineDto } from '../models/ManualJournalEntryVoucherLineDto';
import type { ManualJournalEntryVoucherLinePostDto } from '../models/ManualJournalEntryVoucherLinePostDto';
import type { ManualJournalEntryVoucherPostDto } from '../models/ManualJournalEntryVoucherPostDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ManualJournalsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a manual voucher by id. (Auth roles: JournalEntryVoucher,JournalEntryVoucher_Full)
     * The integration only has access to vouchers that it has created or is the current approver of.
     * @returns ManualJournalEntryVoucherDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getManualJournalById({
        id,
    }: {
        /**
         * The identifier of a manual journal entry voucher.
         */
        id: string,
    } = {} as any): CancelablePromise<ManualJournalEntryVoucherDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/JournalEntryVouchers/ManualJournals/{id}',
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
     * Update manual journal entry voucher header. (Auth roles: JournalEntryVoucher_Full)
     * The integration only has access to vouchers that it has created or is the current approver of.
     * If the voucher is currently under approval by a different approver, the integration will not be able to update the voucher.
     * Manual journal entry voucher lines must be updated using a separate endpoint.
     * @returns ManualJournalEntryVoucherDto Given when a resource was updated successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchJournalEntryVouchersManualJournals({
        id,
        requestBody,
    }: {
        /**
         * The identifier of a manual journal entry.
         */
        id: string,
        /**
         * JSON Patch structure for updating a ManualJournalEntryVoucher. See ManualJournalEntryVoucherPatchDto schema for all available properties.
         * For more information on JSON patch and the various operations allowed, check out: https://datatracker.ietf.org/doc/html/rfc6902
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<ManualJournalEntryVoucherDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/JournalEntryVouchers/ManualJournals/{id}',
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
     * Create a manual journal entry. (Auth roles: JournalEntryVoucher_Full)
     * Use the voucher page endpoint to add a page to the manual journal entry voucher.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns ManualJournalEntryVoucherDto Given when a resource was created successfully
     * @throws ApiError
     */
    public postJournalEntryVouchersManualJournals({
        requestBody,
    }: {
        requestBody?: ManualJournalEntryVoucherPostDto,
    } = {} as any): CancelablePromise<any | ManualJournalEntryVoucherDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/JournalEntryVouchers/ManualJournals',
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
     * Add a line to a manual voucher. (Auth roles: JournalEntryVoucher_Full)
     * Returns the entire manual voucher with all lines, including the new one. The newest line can be identified by its created date.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns ManualJournalEntryVoucherDto Given when a resource was created successfully
     * @throws ApiError
     */
    public postJournalEntryVouchersManualJournalsVoucherLines({
        id,
        requestBody,
    }: {
        id: string,
        requestBody?: ManualJournalEntryVoucherLinePostDto,
    } = {} as any): CancelablePromise<any | ManualJournalEntryVoucherDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/JournalEntryVouchers/ManualJournals/{id}/VoucherLines',
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
     * Update a manual journal entry voucher line. (Auth roles: JournalEntryVoucher_Full)
     * @returns ManualJournalEntryVoucherLineDto Given when a resource was updated successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchJournalEntryVouchersManualJournalsVoucherLines({
        id,
        lineId,
        requestBody,
    }: {
        /**
         * The identifier of the manual voucher.
         */
        id: string,
        /**
         * The identifier of the manual journal entry voucher line.
         */
        lineId: number,
        /**
         * JSON Patch structure for updating a manual journal entry voucher line.
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<ManualJournalEntryVoucherLineDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/JournalEntryVouchers/ManualJournals/{id}/VoucherLines/{lineId}',
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
     * Delete a ManualJournalEntryVoucherLine from a ManualJournalEntryVoucher. (Auth roles: JournalEntryVoucher_Full)
     * @returns any Given when a resource was deleted successfully
     * @throws ApiError
     */
    public deleteJournalEntryVouchersManualJournalsVoucherLines({
        id,
        lineId,
    }: {
        /**
         * The identifier of the ManualJournalEntryVoucher.
         */
        id: string,
        /**
         * The identifier of the ManualJournalEntryVoucherLine.
         */
        lineId: number,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/JournalEntryVouchers/ManualJournals/{id}/VoucherLines/{lineId}',
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
