/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SalesOrderCompleteDto } from '../models/SalesOrderCompleteDto';
import type { SalesOrderCompletePostDto } from '../models/SalesOrderCompletePostDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SalesOrderCompleteService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the specific (complete) sales order by id.
     * The returned object are a complete version of an sales order, including line details. (Auth roles: SalesOrders,SalesOrders_Full)
     * @returns SalesOrderCompleteDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getCompleteSalesOrderById({
        id,
        showInherited,
    }: {
        /**
         * The id of the sales order.
         */
        id: string,
        /**
         * Choose whether to display the properties as in Go GUI - with inherited values, or as the actual values set on the sales order.
         * When the sales order is sent and is converted to invoice, the inherited values will be used. Defaults to false.
         */
        showInherited?: boolean,
    } = {} as any): CancelablePromise<SalesOrderCompleteDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/SalesOrders/{id}/Complete',
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
     * Create a new sales order entity complete with lines. (Auth roles: SalesOrders_Full)
     * If successful, the new entity will be returned with an id which is unique and can be used to reference the created object in relevant requests.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns SalesOrderCompleteDto Given when resource was successfully created.
     * @throws ApiError
     */
    public postSalesOrdersComplete({
        requestBody,
    }: {
        requestBody?: SalesOrderCompletePostDto,
    } = {} as any): CancelablePromise<any | SalesOrderCompleteDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/SalesOrders/Complete',
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
}
