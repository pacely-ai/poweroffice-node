/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BankVoucherDto } from '../models/BankVoucherDto';
import type { BankVoucherPostDto } from '../models/BankVoucherPostDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BankVoucherPostingService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the specific bank voucher by id. (Auth roles: BankVoucher_Full)
     * Note that when querying Bank vouchers, a response will only be produced for vouchers the integration
     * have created using POST operations with the bank voucher endpoint.
     * @returns BankVoucherDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getBankVoucherById({
        id,
    }: {
        /**
         * The id of the bank voucher.
         */
        id: string,
    } = {} as any): CancelablePromise<BankVoucherDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Vouchers/BankJournals/{id}',
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
     * Directly post a new Bank voucher to the general ledger. (Auth roles: BankVoucher_Full)
     * Directly post a new Bank voucher to the general ledger of the client. Bank vouchers are typically used in
     * relation to payment transactions
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns BankVoucherDto Given when resource was created successfully
     * @throws ApiError
     */
    public postVouchersBankJournals({
        requestBody,
    }: {
        requestBody?: BankVoucherPostDto,
    } = {} as any): CancelablePromise<any | BankVoucherDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Vouchers/BankJournals',
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
