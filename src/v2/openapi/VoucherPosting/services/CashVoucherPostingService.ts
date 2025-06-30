/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CashVoucherDto } from '../models/CashVoucherDto';
import type { CashVoucherPostDto } from '../models/CashVoucherPostDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CashVoucherPostingService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the specific cash voucher by id. (Auth roles: CashVoucher_Full)
     * Note that when querying Cash vouchers, a response will only be produced for vouchers the integration
     * have created using POST operations with the cash voucher endpoint.
     * @returns CashVoucherDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getCashVoucherById({
        id,
    }: {
        /**
         * The id of the cash voucher.
         */
        id: string,
    } = {} as any): CancelablePromise<CashVoucherDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Vouchers/CashJournals/{id}',
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
     * Directly post a new Cash voucher to the general ledger. (Auth roles: CashVoucher_Full)
     * Directly post a new Cash voucher to the general ledger of the client. Cash vouchers are typically used in
     * relation to payment transactions
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns CashVoucherDto Given when resource was created successfully
     * @throws ApiError
     */
    public postVouchersCashJournals({
        requestBody,
    }: {
        requestBody?: CashVoucherPostDto,
    } = {} as any): CancelablePromise<any | CashVoucherDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Vouchers/CashJournals',
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
