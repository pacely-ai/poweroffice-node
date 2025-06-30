/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResourceParameters } from '../models/ResourceParameters';
import type { SalesOrderAttachmentDto } from '../models/SalesOrderAttachmentDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SalesOrderAttachmentsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Lists the details of all attachments from a sales order. (Auth roles: SalesOrderAttachment,SalesOrderAttachment_Full)
     * To reduce the payload, the returned list do not contain the file. To retrieve the files, this must be done by getting each attachment by its identifier.
     * @returns SalesOrderAttachmentDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getSalesOrdersAttachments({
        salesOrderId,
        resourceParameter,
    }: {
        /**
         * The sales order identifier
         */
        salesOrderId: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<SalesOrderAttachmentDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/SalesOrders/{salesOrderId}/attachments',
            path: {
                'salesOrderId': salesOrderId,
            },
            query: {
                'resourceParameter': resourceParameter,
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
     * Add a attachment to an existing sales order. (Auth roles: SalesOrderAttachment_Full)
     * Create and add a new attachment to an existing sales order entity on the client.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns SalesOrderAttachmentDto Given when a resource was created successfully
     * @throws ApiError
     */
    public postSalesOrdersAttachments({
        salesOrderId,
        formData,
    }: {
        /**
         * The sales order identifier
         */
        salesOrderId: string,
        formData?: {
            /**
             * A file
             */
            file?: Blob;
        },
    } = {} as any): CancelablePromise<any | SalesOrderAttachmentDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/SalesOrders/{salesOrderId}/attachments',
            path: {
                'salesOrderId': salesOrderId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
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
     * Fetch an attachment (file) from a sales order by its identifier. (Auth roles: SalesOrderAttachment, SalesOrderAttachment_Full)
     * Use this method to fetch a attachment file.
     * @returns any Given when resource returned successfully
     * @throws ApiError
     */
    public getInvoiceAttachmentById({
        salesOrderId,
        id,
    }: {
        /**
         * The sales order identifier
         */
        salesOrderId: string,
        /**
         * The sales order attachment identifier
         */
        id: number,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/SalesOrders/{salesOrderId}/attachments/{id}',
            path: {
                'salesOrderId': salesOrderId,
                'id': id,
            },
            errors: {
                400: `Given when an error fetching the file occurs`,
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                404: `Given when resource was not found`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
    /**
     * Deletes an existing attachment from a sales order by its identifier (Auth roles: SalesOrderAttachment_Full)
     * @returns any Given when resource deleted successfully
     * @throws ApiError
     */
    public deleteSalesOrdersAttachments({
        salesOrderId,
        id,
    }: {
        /**
         * The sales order identifier
         */
        salesOrderId: string,
        /**
         * The sales order attachment identifier
         */
        id: number,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/SalesOrders/{salesOrderId}/attachments/{id}',
            path: {
                'salesOrderId': salesOrderId,
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
}
