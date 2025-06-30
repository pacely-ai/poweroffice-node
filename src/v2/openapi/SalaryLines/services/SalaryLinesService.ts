/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { SalaryLineDto } from '../models/SalaryLineDto';
import type { SalaryLinePostDto } from '../models/SalaryLinePostDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SalaryLinesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get salary lines from the client. (Auth roles: SalaryLine,SalaryLine_Full)
     * Will only return salary lines that the integration has created.
     * @returns SalaryLineDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getSalaryLines({
        resourceParameter,
    }: {
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<SalaryLineDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/SalaryLines',
            query: {
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
     * Create a new salary line. (Auth roles: SalaryLine_Full)
     * If successful, the new entity will be returned with an id which is unique and can be used to reference the created object in relevant requests.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns SalaryLineDto Given when resource was successfully created.
     * @throws ApiError
     */
    public postSalaryLines({
        requestBody,
    }: {
        requestBody?: SalaryLinePostDto,
    } = {} as any): CancelablePromise<any | SalaryLineDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/SalaryLines',
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
     * Get a specific salary line by id. (Auth roles: SalaryLine,SalaryLine_Full)
     * Will only return the salary line if the integration created the salary line.
     * @returns SalaryLineDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getSalaryLineById({
        id,
    }: {
        /**
         * The id of the salary line.
         */
        id: number,
    } = {} as any): CancelablePromise<SalaryLineDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/SalaryLines/{id}',
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
     * Delete a salary line with a given id. (Auth roles: SalaryLine_Full)
     * Can only be done if the integration created the salary line, and the line is not locked (isLocked must be false).
     * Will (hard) delete the salary line from the client.
     * @returns any Given when salary line is deleted
     * @throws ApiError
     */
    public deleteSalaryLines({
        id,
    }: {
        /**
         * The id of the salary line to delete.
         */
        id: number,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/SalaryLines/{id}',
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
     * Change an existing salary line with a given id. (Auth roles: SalaryLine_Full)
     * Only salary lines that the integration has created can be changed.
     * @returns SalaryLineDto Given when resource was successfully updated
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchSalaryLines({
        id,
        requestBody,
    }: {
        /**
         * The id of the salary line.
         */
        id: number,
        /**
         * JSON Patch structure for updating a salary line. See SalaryLinePatchDto schema for all available properties. For more information on JSON patch and the various operations allowed, check out: https://datatracker.ietf.org/doc/html/rfc6902
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<SalaryLineDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/SalaryLines/{id}',
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
}
