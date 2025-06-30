/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmploymentLayoffDto } from '../models/EmploymentLayoffDto';
import type { EmploymentLayoffPostDto } from '../models/EmploymentLayoffPostDto';
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EmploymentLayoffsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get layoff lines for the given employment (employment relationships) on an employee. (Auth roles: EmploymentLayoff,EmploymentLayoff_Full)
     * @returns EmploymentLayoffDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getEmployeesEmploymentsLayoffs({
        employmentId,
        resourceParameter,
    }: {
        /**
         * The id of the employment.
         */
        employmentId: number,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<EmploymentLayoffDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Employees/Employments/{employmentId}/Layoffs',
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
     * Create a new layoff (line) on a given employment. (Auth roles: EmploymentLayoff_Full)
     * If successful, the new entity will be returned with an id which is unique and can be used to reference the created object in relevant requests.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns EmploymentLayoffDto Given when resource was successfully created.
     * @throws ApiError
     */
    public postEmployeesEmploymentsLayoffs({
        employmentId,
        requestBody,
    }: {
        /**
         * The id of the employment.
         */
        employmentId: number,
        requestBody?: EmploymentLayoffPostDto,
    } = {} as any): CancelablePromise<any | EmploymentLayoffDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Employees/Employments/{employmentId}/Layoffs',
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
     * Gets a specific layoff (line) on a given employment. (Auth roles: EmploymentLayoff,EmploymentLayoff_Full)
     * @returns EmploymentLayoffDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getLayoffById({
        employmentId,
        layoffId,
    }: {
        /**
         * The id of the employment.
         */
        employmentId: number,
        /**
         * The id of the layoff (line).
         */
        layoffId: string,
    } = {} as any): CancelablePromise<EmploymentLayoffDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Employees/Employments/{employmentId}/Layoffs/{layoffId}',
            path: {
                'employmentId': employmentId,
                'layoffId': layoffId,
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
     * Change an existing layoff (line) on a given employment. (Auth roles: EmploymentLayoff_Full)
     * @returns EmploymentLayoffDto Given when resource was successfully updated
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchEmployeesEmploymentsLayoffs({
        employmentId,
        layoffId,
        requestBody,
    }: {
        /**
         * The id of the employment.
         */
        employmentId: number,
        /**
         * The id of the layoff (line).
         */
        layoffId: string,
        /**
         * JSON Patch structure for updating a layoff (line). See EmploymentLayoffPatchDto schema for all available properties. For more information on JSON patch and the various operations allowed, check out: https://datatracker.ietf.org/doc/html/rfc6902
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<EmploymentLayoffDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/Employees/Employments/{employmentId}/Layoffs/{layoffId}',
            path: {
                'employmentId': employmentId,
                'layoffId': layoffId,
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
     * Delete a specific layoff (line) on a given employment. (Auth roles: EmploymentLayoff_Full)
     * @returns any Given when layoff line is deleted
     * @throws ApiError
     */
    public deleteEmployeesEmploymentsLayoffs({
        employmentId,
        layoffId,
    }: {
        /**
         * The id of the employment.
         */
        employmentId: number,
        /**
         * The id of the layoff (line).
         */
        layoffId: string,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Employees/Employments/{employmentId}/Layoffs/{layoffId}',
            path: {
                'employmentId': employmentId,
                'layoffId': layoffId,
            },
            errors: {
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                404: `Given when resource was not found`,
                409: `Given when resource cannot be deleted`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
}
