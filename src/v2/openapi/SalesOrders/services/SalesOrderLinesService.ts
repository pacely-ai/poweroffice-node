/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { SalesOrderLineDto } from '../models/SalesOrderLineDto';
import type { SalesOrderLinePostDto } from '../models/SalesOrderLinePostDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SalesOrderLinesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     *  (Auth roles: SalesOrders,SalesOrders_Full)
     * @returns SalesOrderLineDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getSalesOrdersLines({
        id,
        resourceParameter,
    }: {
        /**
         * The id of the sales order.
         */
        id: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<SalesOrderLineDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/SalesOrders/{id}/Lines',
            path: {
                'id': id,
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
     * Create a new sales order line. (Auth roles: SalesOrders_Full)
     * If successful, the new entity will be returned with an id which is unique and can be used to reference the created object in relevant requests.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns SalesOrderLineDto Given when resource was successfully created.
     * @throws ApiError
     */
    public postSalesOrdersLines({
        id,
        requestBody,
    }: {
        /**
         * The id of the sales order.
         */
        id: string,
        requestBody?: SalesOrderLinePostDto,
    } = {} as any): CancelablePromise<any | SalesOrderLineDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/SalesOrders/{id}/Lines',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Given when request is badly formatted.`,
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                404: `Given when resource was not found`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
    /**
     * Gets the specific sales order line by id. (Auth roles: SalesOrders,SalesOrders_Full)
     * @returns SalesOrderLineDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getSalesOrderLineById({
        id,
        lineId,
    }: {
        /**
         * The id of the sales order.
         */
        id: string,
        /**
         * The id of the sales order line.
         */
        lineId: string,
    } = {} as any): CancelablePromise<SalesOrderLineDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/SalesOrders/{id}/Lines/{lineId}',
            path: {
                'id': id,
                'lineId': lineId,
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
     * Change an existing sales order line with a given id. (Auth roles: SalesOrders_Full)
     * @returns SalesOrderLineDto Given when resource was successfully updated.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchSalesOrdersLines({
        id,
        lineId,
        requestBody,
    }: {
        /**
         * The id of the sales order.
         */
        id: string,
        /**
         * The id of the sales order line.
         */
        lineId: string,
        /**
         * JSON Patch structure for updating an Sales Order line. See SalesOrderLinePatchDto schema for all available properties. For more information on JSON patch and the various operations allowed, check out: https://datatracker.ietf.org/doc/html/rfc6902
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<SalesOrderLineDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/SalesOrders/{id}/Lines/{lineId}',
            path: {
                'id': id,
                'lineId': lineId,
            },
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
    /**
     * Delete a sales order line with a given id. (Auth roles: SalesOrders_Full)
     * @returns any Given when sales order is deleted
     * @throws ApiError
     */
    public deleteSalesOrdersLines({
        id,
        lineId,
    }: {
        /**
         * The id of the sales order.
         */
        id: string,
        /**
         * The id of the sales order line to delete.
         */
        lineId: string,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/SalesOrders/{id}/Lines/{lineId}',
            path: {
                'id': id,
                'lineId': lineId,
            },
            errors: {
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                404: `Given when resource was not found`,
                409: `Given when resource is in use and cannot be deleted`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
}
