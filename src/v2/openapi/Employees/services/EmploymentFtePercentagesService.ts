/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmploymentFtePercentageDto } from '../models/EmploymentFtePercentageDto';
import type { EmploymentFtePercentagePostDto } from '../models/EmploymentFtePercentagePostDto';
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EmploymentFtePercentagesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get full-time equivalent (FTE) percentage lines for the given employment (employment relationships) on an employee. (Auth roles: EmploymentFtePercentage,EmploymentFtePercentage_Full)
     * @returns EmploymentFtePercentageDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getEmployeesEmploymentsFtePercentages({
        employmentId,
        resourceParameter,
    }: {
        /**
         * The id of the employment.
         */
        employmentId: number,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<EmploymentFtePercentageDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Employees/Employments/{employmentId}/FtePercentages',
            path: {
                'employmentId': employmentId,
            },
            query: {
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
     * Create a new full-time equivalent (FTE) percentage (line) on a given employment. (Auth roles: EmploymentFtePercentage_Full)
     * If successful, the new entity will be returned with an id which is unique and can be used to reference the created object in relevant requests.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns EmploymentFtePercentageDto Given when resource was successfully created.
     * @throws ApiError
     */
    public postEmployeesEmploymentsFtePercentages({
        employmentId,
        requestBody,
    }: {
        /**
         * The id of the employment.
         */
        employmentId: number,
        requestBody?: EmploymentFtePercentagePostDto,
    } = {} as any): CancelablePromise<any | EmploymentFtePercentageDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Employees/Employments/{employmentId}/FtePercentages',
            path: {
                'employmentId': employmentId,
            },
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
     * Gets a specific full-time equivalent (FTE) percentage (line) on a given employment. (Auth roles: EmploymentFtePercentage,EmploymentFtePercentage_Full)
     * @returns EmploymentFtePercentageDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getFtePercentageById({
        employmentId,
        ftePercentageId,
    }: {
        /**
         * The id of the employment.
         */
        employmentId: number,
        /**
         * The id of the full-time equivalent (FTE) percentage (line).
         */
        ftePercentageId: number,
    } = {} as any): CancelablePromise<EmploymentFtePercentageDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Employees/Employments/{employmentId}/FtePercentages/{ftePercentageId}',
            path: {
                'employmentId': employmentId,
                'ftePercentageId': ftePercentageId,
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
     * Change an existing full-time equivalent (FTE) percentage (line) on a given employment. (Auth roles: EmploymentFtePercentage_Full)
     * @returns EmploymentFtePercentageDto Given when resource was successfully updated
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchEmployeesEmploymentsFtePercentages({
        employmentId,
        ftePercentageId,
        requestBody,
    }: {
        /**
         * The id of the employment.
         */
        employmentId: number,
        /**
         * The id of the full-time equivalent (FTE) percentage (line).
         */
        ftePercentageId: number,
        /**
         * JSON Patch structure for updating a full-time equivalent (FTE) percentage (line). See EmploymentFtePercentagePatchDto schema for all available properties. For more information on JSON patch and the various operations allowed, check out: https://datatracker.ietf.org/doc/html/rfc6902
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<EmploymentFtePercentageDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/Employees/Employments/{employmentId}/FtePercentages/{ftePercentageId}',
            path: {
                'employmentId': employmentId,
                'ftePercentageId': ftePercentageId,
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
     * Delete a specific full-time equivalent (FTE) percentage (line) on a given employment. (Auth roles: EmploymentFtePercentage_Full)
     * Note that there must be at least one full-time equivalent (FTE) percentage line on an employment, so if the last FTE percentage line is attempted to be deleted you will get a 409 Conflict response.
     * @returns any Given when FTE percentage line is deleted
     * @throws ApiError
     */
    public deleteEmployeesEmploymentsFtePercentages({
        employmentId,
        ftePercentageId,
    }: {
        /**
         * The id of the employment.
         */
        employmentId: number,
        /**
         * The id of the full-time equivalent (FTE) percentage (line).
         */
        ftePercentageId: number,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Employees/Employments/{employmentId}/FtePercentages/{ftePercentageId}',
            path: {
                'employmentId': employmentId,
                'ftePercentageId': ftePercentageId,
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
