/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { LocationDto } from '../models/LocationDto';
import type { LocationPostDto } from '../models/LocationPostDto';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class LocationsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the locations available on the client. Multiple filtering options. (Auth roles: Location,Location_Full)
     * The usage of locations is typically that of a dimension separating specific areas of activity for reporting purposes, especially relevant for projects.
     * @returns LocationDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getLocations({
        createdDateTimeOffsetGreaterThan,
        codes,
        resourceParameter,
    }: {
        /**
         * Filter by created timestamp. This filtering will return all location objects with a created timestamp greater than the timestamp provided. Can be used when polling for new location objects from Go. Blank means no filter. Date not inclusive.
         */
        createdDateTimeOffsetGreaterThan?: string,
        /**
         * Filter by location codes. Separate by comma [,] to filter on multiple codes. If null or whitespace, the filter is not used.
         */
        codes?: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<LocationDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Locations',
            query: {
                'createdDateTimeOffsetGreaterThan': createdDateTimeOffsetGreaterThan,
                'codes': codes,
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
     * Creates a new location. (Auth roles: Location_Full)
     * Name required.
     * Code must be unique. If not provided, it will be automatically assigned by Go.
     * IsActive defaults to false, if not provided.
     * @returns LocationDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public postLocations({
        requestBody,
    }: {
        requestBody?: LocationPostDto,
    } = {} as any): CancelablePromise<LocationDto | any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Locations',
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
     * Get a location by its ID. (Auth roles: Location,Location_Full)
     * @returns LocationDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getLocationById({
        id,
    }: {
        id: number,
    } = {} as any): CancelablePromise<LocationDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Locations/{id}',
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
     * Make changes to a location on the client. (Auth roles: Location_Full)
     * @returns LocationDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchLocations({
        id,
        requestBody,
    }: {
        /**
         * The id of the location.
         */
        id: number,
        /**
         * JSON Patch structure for updating a Location. See LocationPatchDto schema for all available properties. For more information on JSON patch and the various operations allowed, check out: https://datatracker.ietf.org/doc/html/rfc6902
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<LocationDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/Locations/{id}',
            path: {
                'id': id,
            },
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
     * Deletes a location by ID. (Auth roles: Location_Full)
     * @returns any Given when location is deleted
     * @throws ApiError
     */
    public deleteLocations({
        id,
    }: {
        /**
         * The id of the location to delete.
         */
        id: number,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Locations/{id}',
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
