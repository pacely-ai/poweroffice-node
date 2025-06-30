/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OutgoingInvoiceVoucherDto } from '../models/OutgoingInvoiceVoucherDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class OutgoingInvoicePostingService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the specific Outgoing invoice voucher by id. (Auth roles: OutgoingInvoiceVoucher_Full)
     * Gets the specific outgoing invoice voucher by id. Note that when querying outgoing invoice vouchers,
     * a response will only be produced for vouchers the integration have created using POST operations with the
     * outgoing invoice voucher endpoint.
     * @returns OutgoingInvoiceVoucherDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getOutgoingInvoiceVoucherById({
        id,
    }: {
        /**
         * The id of the outgoing invoice voucher.
         */
        id: string,
    } = {} as any): CancelablePromise<OutgoingInvoiceVoucherDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Vouchers/OutgoingInvoiceJournals/{id}',
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
