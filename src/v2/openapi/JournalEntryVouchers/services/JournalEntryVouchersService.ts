/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JournalEntryVoucherListItem } from '../models/JournalEntryVoucherListItem';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { SubmitForApprovalPostDto } from '../models/SubmitForApprovalPostDto';
import type { VoucherApprovalStatusResponseDto } from '../models/VoucherApprovalStatusResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class JournalEntryVouchersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List the journal entry vouchers on the client, returning lightweight journal entry voucher objects and their type. (Auth roles: JournalEntryVoucher,JournalEntryVoucher_Full)
     * To get the details, get the voucher by its identifier using the endpoint relevant for the voucher type.
     * @returns JournalEntryVoucherListItem Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getJournalEntryVouchers({
        createdDateTimeOffsetGreaterThan,
        lastChangedDateTimeOffsetGreaterThan,
        inApprovalWorkflow,
        isPosted,
        resourceParameter,
    }: {
        /**
         * Filter vouchers with created timestamp greater than the provided timestamp. Timestamp not inclusive.
         */
        createdDateTimeOffsetGreaterThan?: string,
        /**
         * Filter vouchers with last changed timestamp greater than the provided timestamp. Timestamp not inclusive.
         */
        lastChangedDateTimeOffsetGreaterThan?: string,
        /**
         * Filter by the approval state.
         */
        inApprovalWorkflow?: boolean,
        /**
         * Filter by the posted state.
         */
        isPosted?: boolean,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<JournalEntryVoucherListItem> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/JournalEntryVouchers',
            query: {
                'createdDateTimeOffsetGreaterThan': createdDateTimeOffsetGreaterThan,
                'lastChangedDateTimeOffsetGreaterThan': lastChangedDateTimeOffsetGreaterThan,
                'inApprovalWorkflow': inApprovalWorkflow,
                'isPosted': isPosted,
                'resourceParameter': resourceParameter,
            },
            errors: {
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
    /**
     * Delete a voucher, the accompanying lines and pages. (Auth roles: JournalEntryVoucher_Full)
     * Delete operations can only be done if the voucher is unposted and not in an approval workflow state.
     * The integration only has access to vouchers that it has created or is the current approver of.
     * This endpoint is common for all voucher services, and used regardless of voucher type.
     * @returns any Given when a resource was deleted successfully
     * @throws ApiError
     */
    public deleteJournalEntryVouchers({
        id,
    }: {
        /**
         * The identifier of a journal entry voucher.
         */
        id: string,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/JournalEntryVouchers/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                404: `Given when resource was not found`,
                409: `Given when resource could not be deleted`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
    /**
     * Submit a voucher for approval. (Auth roles: JournalEntryVoucher_Full)
     * Attempt to submit the journal entry voucher with the given id for approval.
     * Will only work if the client is configured with standard approver or the supplier of a supplier voucher is set with an approver.
     * If the voucher pass the validation rules in Go, it will be added in the approval workflow set in Go.
     * @returns VoucherApprovalStatusResponseDto Given when the resource was successfully submitted for approval
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public postJournalEntryVouchersSubmitForApproval({
        id,
        requestBody,
    }: {
        /**
         * Identifier of the vouhcer
         */
        id: string,
        requestBody?: SubmitForApprovalPostDto,
    } = {} as any): CancelablePromise<VoucherApprovalStatusResponseDto | any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/JournalEntryVouchers/{id}/submitForApproval',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                404: `Given when request was invalid`,
                409: `Given when the resource could not be submitted for approval`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
    /**
     * Retrieve the EHF-file from a voucher draft, if the voucher draft was created by EHF (Auth roles: JournalEntryVoucher, JournalEntryVoucher_Full)
     * @returns any Given when a resource was returned successfully
     * @throws ApiError
     */
    public getJournalEntryVouchersEhf({
        id,
    }: {
        id: string,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/JournalEntryVouchers/{id}/ehf',
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
