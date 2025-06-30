/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { ProductDto } from '../models/ProductDto';
import type { ProductPostDto } from '../models/ProductPostDto';
import type { ProductType } from '../models/ProductType';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProductsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get the products from the client. (Auth roles: Product,Product_Full)
     * The primary use of products are to set products on sales order lines, but the products can also be used as a general dimension og other transactions, for reporting purposes.
     * @returns ProductDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getProducts({
        codes,
        createdDateTimeOffsetGreaterThan,
        isArchived,
        lastChangedDateTimeOffsetGreaterThan,
        stockOnHandLastChangedDatetimeOffsetGreaterThan,
        names,
        productGroupCodes,
        type,
        resourceParameter,
    }: {
        /**
         * Filter by product group codes. Search string should be in the form of "1, ABC, 10B" (codes separated by comma). If filter string is null or whitespace, query is returned as is.
         */
        codes?: string,
        /**
         * Find product groups created after this timestamp.
         */
        createdDateTimeOffsetGreaterThan?: string,
        /**
         * Gets a value indicating whether the product is archived (set inactive). Archived products will be unavailable for usage in the GUI.
         */
        isArchived?: boolean,
        /**
         * Find products that have been changed after this timestamp.
         */
        lastChangedDateTimeOffsetGreaterThan?: string,
        /**
         * Find products that have stock on hand changed after this timestamp.
         */
        stockOnHandLastChangedDatetimeOffsetGreaterThan?: string,
        /**
         * Filter by product name. Filter should be a comma separated string.
         */
        names?: string,
        /**
         * Filter by product group codes. Search string should be in the form of "12315, 12345, 22134" (codes separated by comma). If filter string is null or whitespace, query is returned as is.
         */
        productGroupCodes?: string,
        /**
         * Filter products by type. Available values: Product, Service
         */
        type?: ProductType,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<ProductDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Products',
            query: {
                'codes': codes,
                'createdDateTimeOffsetGreaterThan': createdDateTimeOffsetGreaterThan,
                'isArchived': isArchived,
                'lastChangedDateTimeOffsetGreaterThan': lastChangedDateTimeOffsetGreaterThan,
                'stockOnHandLastChangedDatetimeOffsetGreaterThan': stockOnHandLastChangedDatetimeOffsetGreaterThan,
                'names': names,
                'productGroupCodes': productGroupCodes,
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
     * Creates a new product. (Auth roles: Product_Full)
     * The primary use of products are to set products on sales order lines, but the products can also be used as a general dimension og other transactions, for reporting purposes.
     * @returns ProductDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public postProducts({
        requestBody,
    }: {
        requestBody?: ProductPostDto,
    } = {} as any): CancelablePromise<ProductDto | any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Products',
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Given when request is badly formatted`,
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
    /**
     * Get a product by its ID. (Auth roles: Product,Product_Full)
     * @returns ProductDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getProductById({
        id,
    }: {
        /**
         * The id of a product
         */
        id: number,
    } = {} as any): CancelablePromise<ProductDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Products/{id}',
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
     * Updates a product by ID. (Auth roles: Product_Full)
     * @returns ProductDto Given when product is updated
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchProducts({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<ProductDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/Products/{id}',
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
     * Deletes a product by ID. (Auth roles: Product_Full)
     * @returns any Given when product is deleted
     * @throws ApiError
     */
    public deleteProducts({
        id,
    }: {
        /**
         * The id of the product to delete.
         */
        id: number,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Products/{id}',
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
