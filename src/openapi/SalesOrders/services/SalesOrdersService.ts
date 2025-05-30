/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { OrderStatus } from '../models/OrderStatus';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { SalesOrderDto } from '../models/SalesOrderDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SalesOrdersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the specific sales order by id. (Auth roles: SalesOrders,SalesOrders_Full)
     * The returned object are a lightweight version of an sales order, not containing any line details.
     * @returns SalesOrderDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getSalesOrderById({
        id,
        showInherited,
    }: {
        /**
         * The id of the sales order.
         */
        id: string,
        /**
         * Choose whether to display the properties as in Go GUI - with inherited values, or as the actual values set on the sales order.
         */
        showInherited?: boolean,
    } = {} as any): CancelablePromise<SalesOrderDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/SalesOrders/{id}',
            path: {
                'id': id,
            },
            query: {
                'showInherited': showInherited,
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
     * Change an existing sales order with a given id. (Auth roles: SalesOrders_Full)
     * @returns SalesOrderDto Given when resource was successfully updated.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchSalesOrders({
        id,
        requestBody,
    }: {
        /**
         * The id of the sales order.
         */
        id: string,
        /**
         * JSON Patch structure for updating an Sales Order. See SalesOrderPatchDto schema for all available properties. For more information on JSON patch and the various operations allowed, check out: https://datatracker.ietf.org/doc/html/rfc6902
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<SalesOrderDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/SalesOrders/{id}',
            path: {
                'id': id,
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
     * Delete an sales order entity with a given id. (Auth roles: SalesOrders_Full)
     * Deletes all sales order information, including header and lines.
     * @returns any Given when sales order is deleted
     * @throws ApiError
     */
    public deleteSalesOrders({
        id,
    }: {
        /**
         * The id of the sales order to delete.
         */
        id: string,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/SalesOrders/{id}',
            path: {
                'id': id,
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
    /**
     * Gets the orders from the client. (Auth roles: SalesOrders,SalesOrders_Full)
     * Orders can be in either draft or confirmed state, but neither are sent and posted invoices yet (they are considered outgoing invoice drafts).
     * The returned objects are a lightweight version of an sales order, not containing any line details.
     * Multiple filtering options.
     * @returns SalesOrderDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getSalesOrders({
        customerNos,
        departmentCodes,
        includeSubProject,
        lastChangedDateTimeOffsetGreaterThan,
        onlyCreatedByCurrentIntegration,
        orderStatus,
        projectCodes,
        showInherited,
        resourceParameter,
    }: {
        /**
         * Filter by customer numbers. Separate by comma [,] to filter on multiple customer numbers. A range of numbers can be specified using dash/hyphen [-]. For example "10000-15999, 12500, 13000-" will result in invoice drafts from customers with numbers from and including 10000 to 15999, 12500, 13000 and all above will be returned. If null or whitespace, the filter is not used.
         */
        customerNos?: string,
        /**
         * Filter by department codes. Note that this selects orders with department set in the header of the order. The order lines might specify other departments or no department. Separate by comma [,] to filter on multiple codes. If -1, then all orders without department codes are returned. If null or whitespace, the filter is not used.
         */
        departmentCodes?: string,
        /**
         * Include sub-project(s) for the currently filtered project(s). If projectCodes is null or whitespace, all (sub)projects are included (regardless of this variable).
         */
        includeSubProject?: boolean,
        /**
         * Filter orders with last changed timestamp greater than the provided timestamp. Can be used as one way of getting changes in orders or getting new orders. Timestamp not inclusive.
         */
        lastChangedDateTimeOffsetGreaterThan?: string,
        /**
         * Filter on invoices that the current integration has created. Can be used to reduce the number of invoices, if only the invoices that the (currently) querying integration created are relevant.
         */
        onlyCreatedByCurrentIntegration?: boolean,
        /**
         * Filter by order status.
         */
        orderStatus?: OrderStatus,
        /**
         * Filter by project codes. Separate by comma [,] to filter on multiple codes. If -1, then all orders without project codes are returned. If null or whitespace, all orders with or without project codes are returned (filter is not used).
         */
        projectCodes?: string,
        /**
         * Choose whether to display the properties as in Go GUI - with inherited values, or as the actual values set on the sales order.
         */
        showInherited?: boolean,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<SalesOrderDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/SalesOrders',
            query: {
                'customerNos': customerNos,
                'departmentCodes': departmentCodes,
                'includeSubProject': includeSubProject,
                'lastChangedDateTimeOffsetGreaterThan': lastChangedDateTimeOffsetGreaterThan,
                'onlyCreatedByCurrentIntegration': onlyCreatedByCurrentIntegration,
                'orderStatus': orderStatus,
                'projectCodes': projectCodes,
                'showInherited': showInherited,
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
}
