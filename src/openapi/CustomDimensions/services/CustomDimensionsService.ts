/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomDimensionDto } from '../models/CustomDimensionDto';
import type { CustomDimensionPostDto } from '../models/CustomDimensionPostDto';
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CustomDimensionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the custom dimensions on the client. (Auth roles: CustomDimension,CustomDimension_Full)
     * @returns CustomDimensionDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getCustomDimension({
        codes,
        createdDateTimeOffsetGreaterThan,
        ordinal,
        externalImportReference,
        lastChangedDateTimeOffsetGreaterThan,
        resourceParameter,
    }: {
        /**
         * Filter by custom dimension codes. Search string should be in the form of 1, ABC, 10B (codes separated by comma).
         * If filter string is null or whitespace, query is returned as is. Note that the codes are not unique across dim1-dim3,
         * meaning that you might potentially get 3 objects returned if the code you filter on are used on all custom dimensions.
         * Filter on the dimension ordinal to return values for only one of the custom dimensions.
         */
        codes?: string,
        /**
         * Filter on the created date property.
         * This filtering will return all custom dimensions with a created date greater than the timestamp provided.
         * Can be used when polling for new custom dimensions from Go. Blank means no filter. Date not inclusive, and in UTC time.
         */
        createdDateTimeOffsetGreaterThan?: string,
        /**
         * Filter on the custom dimension ordinal (i.e. 1=dim1, 2=dim2 or 3=dim3), returning only values within the specific custom dimension ordinal.
         */
        ordinal?: string,
        /**
         * Filter by external import references. Search string should be in the form of 1, ABC, 10B (codes separated by comma).
         */
        externalImportReference?: string,
        /**
         * Filter on the last change date property.
         * This filtering will return all custom dimension objects with a last changed date greater than the timestamp provided.
         * Can be used when polling for new or changed custom dimension objects from Go. Blank means no filter. Date not inclusive, and in UTC time.
         */
        lastChangedDateTimeOffsetGreaterThan?: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<CustomDimensionDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/CustomDimensions',
            query: {
                'codes': codes,
                'createdDateTimeOffsetGreaterThan': createdDateTimeOffsetGreaterThan,
                'ordinal': ordinal,
                'externalImportReference': externalImportReference,
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
    /**
     * Creates a new custom dimension within the given ordinal. (Auth roles: CustomDimension_Full)
     * Name and Ordinal required.
     * The ordinal define whether the object instance is created within the dim1, dim2 or dim3 set.
     * Code must be unique within an ordinal. If code is not provided, it will be automatically assigned by Go.
     * IsActive defaults to true, if not provided.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns CustomDimensionDto Given when resource was created successfully
     * @throws ApiError
     */
    public postCustomDimensions({
        requestBody,
    }: {
        requestBody?: CustomDimensionPostDto,
    } = {} as any): CancelablePromise<any | CustomDimensionDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/CustomDimensions',
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
     * Gets a custom dimension by id. (Auth roles: CustomDimension,CustomDimension_Full)
     * @returns CustomDimensionDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getCustomDimensionById({
        id,
    }: {
        /**
         * The ID of a custom dimension.
         */
        id: number,
    } = {} as any): CancelablePromise<CustomDimensionDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/CustomDimensions/{id}',
            path: {
                'id': id,
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
     * Change an existing custom dimension with a given id. (Auth roles: CustomDimension_Full)
     * @returns CustomDimensionDto Given when resource was successfully updated
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchCustomDimensions({
        id,
        requestBody,
    }: {
        /**
         * Id of the custom dimension to be updated.
         */
        id: number,
        /**
         * A JsonPatchDocument with the update information.
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<CustomDimensionDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/CustomDimensions/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Given when request was badly formatted`,
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                404: `Given when resource was not found`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
    /**
     * Delete a custom dimension. (Auth roles: CustomDimension_Full)
     * @returns any Given when resource was successfully deleted
     * @throws ApiError
     */
    public deleteCustomDimensions({
        id,
    }: {
        /**
         * The ID of the custom dimension.
         */
        id: number,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/CustomDimensions/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                404: `Given when the resource was not found`,
                409: `Given when resource is in use and cannot be deleted`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
}
