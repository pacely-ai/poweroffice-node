/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BankJournalEntryVoucherDto } from '../models/BankJournalEntryVoucherDto';
import type { BankJournalEntryVoucherLineDto } from '../models/BankJournalEntryVoucherLineDto';
import type { BankJournalEntryVoucherLinePostDto } from '../models/BankJournalEntryVoucherLinePostDto';
import type { BankJournalEntryVoucherPostDto } from '../models/BankJournalEntryVoucherPostDto';
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BankJournalsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a BankJournalEntryVoucher by id. (Auth roles: JournalEntryVoucher,JournalEntryVoucher_Full)
     * The integration only has access to journals and vouchers that it has created or is the current approver of.
     * @returns BankJournalEntryVoucherDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getBankJournalById({
        id,
    }: {
        /**
         * The identifier of a BankJournalEntryVoucher.
         */
        id: string,
    } = {} as any): CancelablePromise<BankJournalEntryVoucherDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/JournalEntryVouchers/BankJournals/{id}',
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
     * Update BankJournalEntryVoucher header. (Auth roles: JournalEntryVoucher_Full)
     * The integration only has access to journals and vouchers that it has created or is the current approver of.
     * If the voucher is currently under approval by a different approver, the integration will not be able to update the voucher.
     * BankJournalEntryVoucherLines must be updated using a separate endpoint.
     * @returns BankJournalEntryVoucherDto Given when a resource was updated successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchJournalEntryVouchersBankJournals({
        id,
        requestBody,
    }: {
        /**
         * The identifier of a bank journal entry.
         */
        id: string,
        /**
         * JSON Patch structure for updating a BankJournalEntryVoucher. See BankJournalEntryVoucherPatchDto schema for all available properties.
         * For more information on JSON patch and the various operations allowed, check out: https://datatracker.ietf.org/doc/html/rfc6902
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<BankJournalEntryVoucherDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/JournalEntryVouchers/BankJournals/{id}',
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
     * Create a BankJournalEntryVoucher. (Auth roles: JournalEntryVoucher_Full)
     * Use the voucher page endpoint to add a page to the BankJournalEntryVoucher.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns BankJournalEntryVoucherDto Given when a resource was created successfully
     * @throws ApiError
     */
    public postJournalEntryVouchersBankJournals({
        requestBody,
    }: {
        requestBody?: BankJournalEntryVoucherPostDto,
    } = {} as any): CancelablePromise<any | BankJournalEntryVoucherDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/JournalEntryVouchers/BankJournals',
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
     * Add a line to a BankJournalEntryVoucher. (Auth roles: JournalEntryVoucher_Full)
     * Returns the entire BankJournalEntryVoucher with all lines, including the new one. The newest line can be identified by its created date.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns BankJournalEntryVoucherDto Given when a resource was created successfully
     * @throws ApiError
     */
    public postJournalEntryVouchersBankJournalsVoucherLines({
        id,
        requestBody,
    }: {
        id: string,
        requestBody?: BankJournalEntryVoucherLinePostDto,
    } = {} as any): CancelablePromise<any | BankJournalEntryVoucherDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/JournalEntryVouchers/BankJournals/{id}/VoucherLines',
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
     * Update a BankJournalEntryVoucherLine. (Auth roles: JournalEntryVoucher_Full)
     * @returns BankJournalEntryVoucherLineDto Given when a resource was updated successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchJournalEntryVouchersBankJournalsVoucherLines({
        id,
        lineId,
        requestBody,
    }: {
        /**
         * The identifier of the BankJournalEntryVoucher.
         */
        id: string,
        /**
         * The identifier of the BankJournalEntryVoucherLine.
         */
        lineId: number,
        /**
         * JSON Patch structure for updating a BankJournalEntryVoucherLine.
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<BankJournalEntryVoucherLineDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/JournalEntryVouchers/BankJournals/{id}/VoucherLines/{lineId}',
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
     * Delete a BankJournalEntryVoucherLine from a BankJournalEntryVoucher. (Auth roles: JournalEntryVoucher_Full)
     * @returns any Given when a resource was deleted successfully
     * @throws ApiError
     */
    public deleteJournalEntryVouchersBankJournalsVoucherLines({
        id,
        lineId,
    }: {
        /**
         * The identifier of the BankJournalEntryVoucher.
         */
        id: string,
        /**
         * The identifier of the BankJournalEntryVoucherLine.
         */
        lineId: number,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/JournalEntryVouchers/BankJournals/{id}/VoucherLines/{lineId}',
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
