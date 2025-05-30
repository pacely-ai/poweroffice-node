/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ManualVoucherDto } from '../models/ManualVoucherDto';
import type { ManualVoucherPostDto } from '../models/ManualVoucherPostDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ManualVoucherPostingService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the specific manual voucher by id. (Auth roles: ManualVoucher_Full)
     * Gets the specific manual voucher by id. Note that when querying manual vouchers, a response will only
     * be produced for vouchers the integration have created using POST operations with the manual voucher
     * endpoint.
     * @returns ManualVoucherDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getManualVoucherById({
        id,
    }: {
        /**
         * The id of the manual voucher.
         */
        id: string,
    } = {} as any): CancelablePromise<ManualVoucherDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Vouchers/ManualJournals/{id}',
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
     * Directly post a new manual voucher to the general ledger of the client. (Auth roles: ManualVoucher_Full)
     * Directly post a new manual voucher to the general ledger of the client. Manual vouchers contain general
     * voucher fields and features, and are often used if no other specific voucher types apply to the use case
     * of the transactions.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns ManualVoucherDto Given when resource was created successfully
     * @throws ApiError
     */
    public postVouchersManualJournals({
        requestBody,
    }: {
        requestBody?: ManualVoucherPostDto,
    } = {} as any): CancelablePromise<any | ManualVoucherDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Vouchers/ManualJournals',
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
}
