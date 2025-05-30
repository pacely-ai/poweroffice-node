/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResourceParameters } from '../models/ResourceParameters';
import type { VoucherDocumentationDto } from '../models/VoucherDocumentationDto';
import type { VoucherDocumentationType } from '../models/VoucherDocumentationType';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class VoucherDocumentationService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get voucher documentation list. (Auth roles: VoucherDocumentation,VoucherDocumentation_Full)
     * Get a list of vouchers and the available filetypes.
     * @returns VoucherDocumentationDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getVoucherDocumentation({
        id,
        voucherNo,
        resourceParameter,
    }: {
        /**
         * Voucher identifier
         */
        id?: string,
        /**
         * Voucher number
         */
        voucherNo?: number,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<VoucherDocumentationDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/VoucherDocumentation',
            query: {
                'id': id,
                'voucherNo': voucherNo,
                'resourceParameter': resourceParameter,
            },
            errors: {
                400: `Given when request is badly formatted`,
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
    /**
     * Replace the documentation on a posted voucher (Auth roles: VoucherDocumentation_Full)
     * The voucher must have been imported by the API to be able to insert documentation with this service.
     * It is only possible to import PDF file. The max file size is 30Mb.
     * It is possible to import several times. The last import will replace the previous import.
     * Replacements can only be done by the same integration that imported the previous file.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public addVoucherDocumentation({
        id,
        formData,
    }: {
        /**
         * Identifier of the voucher the documentation should be attached to.
         */
        id: string,
        formData?: {
            /**
             * The PDF file you want to attach to a voucher.
             */
            file?: Blob;
        },
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/VoucherDocumentation',
            query: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
    /**
     * Get voucher documentation files as single zip file. (Auth roles: VoucherDocumentation,VoucherDocumentation_Full)
     * The available VoucherDocumentationType is listed in the GET VoucherDocumentation endpoint.
     * @returns any Given when resource returned successfully
     * @throws ApiError
     */
    public getVoucherDocumentation1({
        id,
        documentationType,
    }: {
        /**
         * Voucher identifier
         */
        id: string,
        /**
         * The type of documentation.
         */
        documentationType?: VoucherDocumentationType,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/VoucherDocumentation/Download',
            query: {
                'id': id,
                'documentationType': documentationType,
            },
            errors: {
                400: `Given when request is badly formatted`,
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
}
