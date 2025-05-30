/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { SupplierDto } from '../models/SupplierDto';
import type { SupplierPostDto } from '../models/SupplierPostDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SuppliersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the specific supplier by id. (Auth roles: Supplier,Supplier_Full)
     * The supplier object is a contact entity, meaning the id might be shared with a customer and/or an employee if the contact is registered as both a supplier and customer/employee in Go.
     * @returns SupplierDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getSupplierById({
        id,
    }: {
        /**
         * The id of the supplier.
         */
        id: number,
    } = {} as any): CancelablePromise<SupplierDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Suppliers/{id}',
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
     * Change an existing supplier with a given id. (Auth roles: Supplier_Full)
     * @returns SupplierDto Given when resource was successfully updated
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchSuppliers({
        id,
        requestBody,
    }: {
        /**
         * The id of the supplier.
         */
        id: number,
        /**
         * JSON Patch structure for updating a Supplier. See SupplierPatchDto schema for all available properties. For more information on JSON patch and the various operations allowed, check out: https://datatracker.ietf.org/doc/html/rfc6902
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<SupplierDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/Suppliers/{id}',
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
     * Delete a supplier entity with a given id. (Auth roles: Supplier_Full)
     * If the supplier have links to transactions or other entities, or if the contact is an active customer/employee, this operation cannot be performed.
     * @returns any Given when supplier is deleted
     * @throws ApiError
     */
    public deleteSuppliers({
        id,
    }: {
        /**
         * The id of the supplier to delete.
         */
        id: number,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Suppliers/{id}',
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
     * Gets the suppliers available on the client. Multiple filtering options. (Auth roles: Supplier,Supplier_Full)
     * The supplier object is a contact entity, meaning the id might be shared with a customer and/or an employee if the contact is registered as both a supplier and customer/employee in Go.
     * @returns SupplierDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getSuppliers({
        contactGroupIds,
        externalImportReference,
        externalNos,
        lastChangedDateTimeOffsetGreaterThan,
        supplierCreatedDateTimeOffsetGreaterThan,
        supplierNos,
        resourceParameter,
    }: {
        /**
         * Filter by contact group IDs. Separate by comma to filter on multiple contact group IDs. If filterString is null or whitespace, query is returned as is.
         */
        contactGroupIds?: string,
        /**
         * Filter by external import reference. If filterString is null or whitespace, query is returned as is.
         */
        externalImportReference?: string,
        /**
         * Filter by supplier external numbers. SearchString should be in the form of "30000, 14153-19534, 150000-" where values for 30000, between (inclusive) 14153-19534 and all over 150000 (inclusive) will be retrieved. If filterString is null or whitespace, query is returned as is.
         */
        externalNos?: string,
        /**
         * Filter by the last changed timestamp property. This filtering will return all suppliers with a last changed timestamp greater than the timestamp provided. Can be used when polling for new entries. If used, changed suppliers should replace what was previously stored in the external system. Date not inclusive.
         */
        lastChangedDateTimeOffsetGreaterThan?: string,
        /**
         * Filter by the supplier created timestamp property. This filtering will return all suppliers with a created timestamp greater than the timestamp provided. Can be used when polling for new entries from Go. Date not inclusive.
         */
        supplierCreatedDateTimeOffsetGreaterThan?: string,
        /**
         * Filter by supplier numbers. SearchString should be in the form of "20000, 20100-20200, 20500-" where values for 20000, between (inclusive) 20100-20200 and all over 20500 (inclusive) will be retrieved. If filterString is null or whitespace, query is returned as is.
         */
        supplierNos?: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<SupplierDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Suppliers',
            query: {
                'contactGroupIds': contactGroupIds,
                'externalImportReference': externalImportReference,
                'externalNos': externalNos,
                'lastChangedDateTimeOffsetGreaterThan': lastChangedDateTimeOffsetGreaterThan,
                'supplierCreatedDateTimeOffsetGreaterThan': supplierCreatedDateTimeOffsetGreaterThan,
                'supplierNos': supplierNos,
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
     * Create one new supplier entity. (Auth roles: Supplier_Full)
     * If successful, the new entity will be returned with an id which is unique and can be used to reference the created object in relevant requests.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns SupplierDto Given when resource was successfully created
     * @throws ApiError
     */
    public postSuppliers({
        requestBody,
    }: {
        requestBody?: SupplierPostDto,
    } = {} as any): CancelablePromise<any | SupplierDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Suppliers',
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
}
