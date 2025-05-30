/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { ProductGroupDto } from '../models/ProductGroupDto';
import type { ProductGroupPostDto } from '../models/ProductGroupPostDto';
import type { ProductType } from '../models/ProductType';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProductGroupsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get product groups from the client. (Auth roles: Product,Product_Full)
     * @returns ProductGroupDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getProductGroups({
        codes,
        createdDateTimeOffsetGreaterThan,
        isArchived,
        lastChangedDateTimeOffsetGreaterThan,
        names,
        type,
        resourceParameter,
    }: {
        /**
         * Filter by product group codes. SearchString should be in the form of "1, ABC, 10B" (codes separated by comma). If filterString is null or whitespace, query is returned as is.
         */
        codes?: string,
        /**
         * Find product groups created after this timestamp.
         */
        createdDateTimeOffsetGreaterThan?: string,
        /**
         * Gets a value indicating whether the product group is archived (set inactive). Archived product groups will be unavailable for usage in the GUI.
         */
        isArchived?: boolean,
        /**
         * Find product groups that have been changed after this timestamp.
         */
        lastChangedDateTimeOffsetGreaterThan?: string,
        /**
         * Filter by product group names. SearchString should be in the form of "1, ABC, 10B" (codes separated by comma). If filterString is null or whitespace, query is returned as is.
         */
        names?: string,
        /**
         * Filter product groups by product type. Available values: Product, Service
         */
        type?: ProductType,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<ProductGroupDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ProductGroups',
            query: {
                'codes': codes,
                'createdDateTimeOffsetGreaterThan': createdDateTimeOffsetGreaterThan,
                'isArchived': isArchived,
                'lastChangedDateTimeOffsetGreaterThan': lastChangedDateTimeOffsetGreaterThan,
                'names': names,
                'type': type,
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
     * Create a new product group. (Auth roles: Product_Full)
     * The primary use of product groups are to assign products to the groups that can inherit similar properties from the group, and/or reporting purposes.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns ProductGroupDto Given when resource was successfully created.
     * @throws ApiError
     */
    public postProductGroups({
        requestBody,
    }: {
        requestBody?: ProductGroupPostDto,
    } = {} as any): CancelablePromise<any | ProductGroupDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ProductGroups',
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
     * Get a product group by its id. (Auth roles: Product,Product_Full)
     * @returns ProductGroupDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getProductGroupById({
        id,
    }: {
        /**
         * The id of a product group.
         */
        id: number,
    } = {} as any): CancelablePromise<ProductGroupDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ProductGroups/{id}',
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
     * Update an existing product group. (Auth roles: Product_Full)
     * @returns ProductGroupDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchProductGroups({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<ProductGroupDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/ProductGroups/{id}',
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
     * Deletes a product group by ID. (Auth roles: Product_Full)
     * @returns any Given when product group is deleted
     * @throws ApiError
     */
    public deleteProductGroups({
        id,
    }: {
        /**
         * The id of the product group to delete.
         */
        id: number,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/ProductGroups/{id}',
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
}
