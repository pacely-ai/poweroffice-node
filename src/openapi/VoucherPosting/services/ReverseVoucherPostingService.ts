/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ReverseVoucherPostingService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Request a reversal of a given voucher. (Auth roles: YearEndVoucher_Full)
     * Request a reversal of a given voucher. Can only be used for vouchers the integration created using the POST
     * /voucher endpoints. When requested, Go will automatically create a new reversal voucher that nullify the
     * original transactions. Reversing a voucher that has an invoice number or an external import reference, will
     * enable the values of these properties to be reused on a new corrected voucher.
     * @returns any The voucher reverse was successfully
     * @throws ApiError
     */
    public postVoucherReversal({
        id,
    }: {
        /**
         * The unique identifier of the voucher to be reversed.
         */
        id: string,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Vouchers/Reverse/{id}',
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
}
