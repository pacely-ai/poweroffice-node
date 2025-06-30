/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { YearEndVoucherDto } from '../models/YearEndVoucherDto';
import type { YearEndVoucherPostDto } from '../models/YearEndVoucherPostDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class YearEndVoucherPostingService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the specific year end voucher by id. (Auth roles: YearEndVoucher_Full)
     * Gets the specific year end voucher by id. Note that when querying year end vouchers, a response will only be
     * produced for vouchers the integration have created using POST operations with the year end voucher endpoint
     * @returns YearEndVoucherDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getYearEndVoucherById({
        id,
    }: {
        /**
         * The id of the year end voucher.
         */
        id: string,
    } = {} as any): CancelablePromise<YearEndVoucherDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Vouchers/YearEndJournals/{id}',
            path: {
                'id': id,
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
     * Directly post a new year end vocuher to the general ledger of the client. (Auth roles: YearEndVoucher_Full)
     * Directly post a new year end voucher to the general ledger of the client. Year end vouchers are used for
     * the year end closing transactions.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns YearEndVoucherDto Given when resource was created successfully
     * @throws ApiError
     */
    public postVouchersYearEndJournals({
        requestBody,
    }: {
        requestBody?: YearEndVoucherPostDto,
    } = {} as any): CancelablePromise<any | YearEndVoucherDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Vouchers/YearEndJournals',
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Given when request is badly formatted`,
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                404: `Given when an input resources id was not found`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
}
