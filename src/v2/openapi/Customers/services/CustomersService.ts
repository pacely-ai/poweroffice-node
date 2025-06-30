/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerDto } from '../models/CustomerDto';
import type { CustomerPostDto } from '../models/CustomerPostDto';
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CustomersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the specific customer by id. (Auth roles: Customer,Customer_Full)
     * The customer object is a contact entity, meaning the id might be shared with a supplier and/or an employee if the contact is registered as both a customer and supplier/employee in Go.
     * @returns CustomerDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getCustomerById({
        id,
    }: {
        /**
         * The id of the customer.
         */
        id: number,
    } = {} as any): CancelablePromise<CustomerDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Customers/{id}',
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
     * Change an existing customer with a given id. (Auth roles: Customer_Full)
     * @returns CustomerDto Given when resource was successfully updated
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchCustomers({
        id,
        requestBody,
    }: {
        /**
         * The id of the customer.
         */
        id: number,
        /**
         * JSON Patch structure for updating a Customer. See CustomerPatchDto schema for all available properties. For more information on JSON patch and the various operations allowed, check out: https://datatracker.ietf.org/doc/html/rfc6902
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<CustomerDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/Customers/{id}',
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
     * Delete a customer entity with a given id. (Auth roles: Customer_Full)
     * If the customer have links to transactions or other entities, or if the contact is an active supplier/employee, this operation cannot be performed.
     * @returns any Given when customer is deleted
     * @throws ApiError
     */
    public deleteCustomers({
        id,
    }: {
        /**
         * The id of the customer to delete.
         */
        id: number,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Customers/{id}',
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
     * Gets the customers available on the client. Multiple filtering options. (Auth roles: Customer,Customer_Full)
     * The customer object is a contact entity, meaning the id might be shared with a supplier and/or an employee if the contact is registered as both a customer and supplier/employee in Go.
     * @returns CustomerDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getCustomers({
        contactGroupIds,
        customerCreatedDateTimeOffsetGreaterThan,
        customerNos,
        externalImportReference,
        externalNos,
        lastChangedDateTimeOffsetGreaterThan,
        resourceParameter,
    }: {
        /**
         * Filter by contact group IDs. Separate by comma [,] to filter on multiple contact group IDs. If null or whitespace, all customers with or without contact group IDs are returned (filter is not used).
         */
        contactGroupIds?: string,
        /**
         * Filter by the customer created timestamp property. This filtering will return all customers with a created timestamp greater than the timestamp provided. Can be used when polling for new entries from Go. Timestamp not inclusive.
         */
        customerCreatedDateTimeOffsetGreaterThan?: string,
        /**
         * Filter by customer numbers. Separate by comma [,] to filter on multiple customer numbers. A range of numbers can be specified using dash/hyphen [-]. For example "10000-11000, 12000, 13000-" will result in customers with numbers from and including 10000 to 11000, 12000, 13000 and all above will be returned. If null or whitespace, the filter is not used.
         */
        customerNos?: string,
        /**
         * Filter by external import reference. If null or whitespace, the filter is not used.
         */
        externalImportReference?: string,
        /**
         * Filter by customer external numbers. SearchString should be in the form of "30000, 14153-19534, 150000-" where values for 30000, between (inclusive) 14153-19534 and all over 150000 (inclusive) will be retrieved. If filterString is null or whitespace, query is returned as is.
         */
        externalNos?: string,
        /**
         * Filter by the last changed timestamp property. This filtering will return all customers with a last changed timestamp greater than the timestamp provided. Can be used when polling for new entries. If used, changed customers should replace what was previously stored in the external system. Date not inclusive.
         */
        lastChangedDateTimeOffsetGreaterThan?: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<CustomerDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Customers',
            query: {
                'contactGroupIds': contactGroupIds,
                'customerCreatedDateTimeOffsetGreaterThan': customerCreatedDateTimeOffsetGreaterThan,
                'customerNos': customerNos,
                'externalImportReference': externalImportReference,
                'externalNos': externalNos,
                'lastChangedDateTimeOffsetGreaterThan': lastChangedDateTimeOffsetGreaterThan,
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
     * Create one new customer entity. (Auth roles: Customer_Full)
     * If successful, the new entity will be returned with an id which is unique and can be used to reference the created object in relevant requests.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns CustomerDto Given when resource was successfully created.
     * @throws ApiError
     */
    public postCustomers({
        requestBody,
    }: {
        requestBody?: CustomerPostDto,
    } = {} as any): CancelablePromise<any | CustomerDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Customers',
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
