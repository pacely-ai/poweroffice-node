/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResourceParameters } from '../models/ResourceParameters';
import type { VoucherApprovalPostDto } from '../models/VoucherApprovalPostDto';
import type { VoucherApprovalStatusResponseDto } from '../models/VoucherApprovalStatusResponseDto';
import type { VoucherForApprovalDto } from '../models/VoucherForApprovalDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class VoucherApprovalService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List the vouchers that are sent to the integration for approval. The voucher details can be retrieved using the JournalEntryVoucher with the corresponding voucher types. (Auth roles: VoucherApproval_Full)
     * @returns VoucherForApprovalDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getVoucherApproval({
        resourceParameter,
        availableFromDateTimeOffsetGreaterThan,
    }: {
        resourceParameter?: ResourceParameters,
        /**
         * Filter vouchers based on when it became available with timestamp greater than the provided timestamp. Can be used as one way of getting changes in new vouchers available sins last called.
         * Timestamp not inclusive.
         *
         * Vouchers sent to the integration for approval may be removed from the list by the system, indicating they are no longer available for approval. Utilizing the availableFromDateTimeOffset
         * parameter allows for retrieving new vouchers since the last call. However, it does not provide visibility into vouchers that have been removed from the list.
         */
        availableFromDateTimeOffsetGreaterThan?: string,
    } = {} as any): CancelablePromise<Array<VoucherForApprovalDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/VoucherApproval',
            query: {
                'resourceParameter': resourceParameter,
                'availableFromDateTimeOffsetGreaterThan': availableFromDateTimeOffsetGreaterThan,
            },
            errors: {
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
    /**
     * Approve, reject or return a voucher update back to the client. (Auth roles: VoucherApproval_Full)
     * @returns VoucherApprovalStatusResponseDto Given when voucher was successfully approved or rejected.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public postVoucherApproval({
        voucherId,
        requestBody,
    }: {
        voucherId: string,
        requestBody?: VoucherApprovalPostDto,
    } = {} as any): CancelablePromise<VoucherApprovalStatusResponseDto | any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/VoucherApproval/{voucherId}',
            path: {
                'voucherId': voucherId,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Given when request is badly formatted.`,
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                404: `Given when voucher to be approved was not found`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
}
