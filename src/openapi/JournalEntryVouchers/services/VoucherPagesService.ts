/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class VoucherPagesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Add a page to a voucher. (Auth roles: JournalEntryVoucher_Full)
     * You can only access vouchers and voucher pages you have created or is an approver of.
     * Posted vouchers or vouchers in approval at a different users can not be updated by the current integration or user.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public postJournalEntryVouchersVoucherPages({
        id,
        formData,
    }: {
        /**
         * The identifier of the voucher.
         */
        id: string,
        formData?: {
            /**
             * A FormFile
             */
            file?: Blob;
        },
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/JournalEntryVouchers/{id}/VoucherPages',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Given when request is badly formatted`,
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                409: `Given when resource conflict occur`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
    /**
     * Gets a voucher page image by id (Auth roles: JournalEntryVoucher, JournalEntryVoucher_Full)
     * You can only access vouchers and voucher pages you have created or is an approver of.
     * @returns any Given when resource returned successfully
     * @throws ApiError
     */
    public getJournalEntryVouchersVoucherPages({
        id,
        pageId,
    }: {
        /**
         * The identifier of the voucher.
         */
        id: string,
        /**
         * The id of a voucher page. Page ids can be found by querying the voucher endpoint first.
         */
        pageId: number,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/JournalEntryVouchers/{id}/VoucherPages/{pageId}',
            path: {
                'id': id,
                'pageId': pageId,
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
     * Delete a voucher page from a journal entry voucher draft. (Auth roles: JournalEntryVoucher_Full)
     * @returns any Given when a resource was deleted successfully
     * @throws ApiError
     */
    public deleteJournalEntryVouchersVoucherPages({
        id,
        pageId,
    }: {
        /**
         * The identifier of the voucher.
         */
        id: string,
        /**
         * The ID of the voucher page to delete.
         */
        pageId: number,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/JournalEntryVouchers/{id}/VoucherPages/{pageId}',
            path: {
                'id': id,
                'pageId': pageId,
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
}
