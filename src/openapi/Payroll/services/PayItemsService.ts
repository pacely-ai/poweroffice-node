/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PayItemDto } from '../models/PayItemDto';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PayItemsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets a specific pay item by id. (Auth roles: PayItem,PayItem_Full)
     * A pay item is used by the payroll system to identify how an individual salary line should be treated,
     * in order to report and post the salary in a correct manner on the payroll issued.
     * @returns PayItemDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getPayItemById({
        id,
    }: {
        /**
         * The id of the pay item.
         */
        id: string,
    } = {} as any): CancelablePromise<PayItemDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/PayItems/{id}',
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
     * Get all pay items for the client. (Auth roles: PayItem,PayItem_Full)
     * A pay item is used by the payroll system to identify how an individual salary line should be treated,
     * in order to report and post the salary in a correct manner on the payroll issued.
     * @returns PayItemDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getPayItems({
        codes,
        createdDateTimeOffsetGreaterThan,
        isActive,
        lastChangedDateTimeOffsetGreaterThan,
        resourceParameter,
    }: {
        /**
         * Filter by pay item codes. Separate by comma [,] to filter on multiple pay items. If null or whitespace, all pay items are returned (filter is not used).
         */
        codes?: string,
        /**
         * Filter by created timestamp property. This filtering will return all pay items with a created timestamp greater than the timestamp provided. Can be used when polling for new entries from Go. Timestamp not inclusive.
         */
        createdDateTimeOffsetGreaterThan?: string,
        /**
         * Filter pay items based on active status. True to only get pay items with active status, false to only get pay items with inactive status.
         */
        isActive?: boolean,
        /**
         * Filter by the last changed timestamp property. This filtering will return all pay items with a last changed timestamp greater than the timestamp provided. Can be used when polling for new or updated entries. Timestamp not inclusive.
         */
        lastChangedDateTimeOffsetGreaterThan?: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<PayItemDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/PayItems',
            query: {
                'codes': codes,
                'createdDateTimeOffsetGreaterThan': createdDateTimeOffsetGreaterThan,
                'isActive': isActive,
                'lastChangedDateTimeOffsetGreaterThan': lastChangedDateTimeOffsetGreaterThan,
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
}
