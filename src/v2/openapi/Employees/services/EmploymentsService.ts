/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmploymentDto } from '../models/EmploymentDto';
import type { EmploymentLightDto } from '../models/EmploymentLightDto';
import type { EmploymentPostDto } from '../models/EmploymentPostDto';
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EmploymentsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets a specific employment on a given employee. (Auth roles: Employment,Employment_Full)
     * @returns EmploymentDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getEmploymentById({
        employeeId,
        employmentId,
    }: {
        /**
         * The id of the employee.
         */
        employeeId: number,
        /**
         * The id of the employment.
         */
        employmentId: number,
    } = {} as any): CancelablePromise<EmploymentDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Employees/{employeeId}/Employments/{employmentId}',
            path: {
                'employeeId': employeeId,
                'employmentId': employmentId,
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
     * Change an existing employment with a given id. (Auth roles: Employment_Full)
     * @returns EmploymentDto Given when resource was successfully updated
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchEmployeesEmployments({
        employeeId,
        employmentId,
        requestBody,
    }: {
        /**
         * The id of the employee.
         */
        employeeId: number,
        /**
         * The id of the employment.
         */
        employmentId: number,
        /**
         * JSON Patch structure for updating an employment. See EmploymentPatchDto schema for all available properties. For more information on JSON patch and the various operations allowed, check out: https://datatracker.ietf.org/doc/html/rfc6902
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<EmploymentDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/Employees/{employeeId}/Employments/{employmentId}',
            path: {
                'employeeId': employeeId,
                'employmentId': employmentId,
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
     * Delete a specific employment on a given employee. (Auth roles: Employment_Full)
     * Note that an employment cannot be deleted if it has been reported (a-melding).
     * @returns any Given when salary line is deleted
     * @throws ApiError
     */
    public deleteEmployeesEmployments({
        employeeId,
        employmentId,
    }: {
        /**
         * The id of the employee.
         */
        employeeId: number,
        /**
         * The id of the employment to delete.
         */
        employmentId: number,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Employees/{employeeId}/Employments/{employmentId}',
            path: {
                'employeeId': employeeId,
                'employmentId': employmentId,
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
     * Get all employments for all employees registered on the client. (Auth roles: Employment,Employment_Full)
     * Returns a lightweight (slimmed down) version of the employment entity.
     * @returns EmploymentLightDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getEmployeesEmployments({
        activeEmployments,
        employmentForm,
        lastChangedDateTimeOffsetGreaterThan,
        resourceParameter,
    }: {
        /**
         * Filter employments based on active status.
         * An employment is considered active if no endDate is set, or if the endDate set is at a future date.
         * The filter do not consider the EndedAndReported property, as a future endDate and reason might be reported on an employment still active until the end date.
         * True to only get employments with active status, false to only get employments with inactive status. If empty the filter is not used.
         */
        activeEmployments?: boolean,
        /**
         * Filter by employment form. If null or whitespace, the filter is not used.
         */
        employmentForm?: string,
        /**
         * Filter by the last changed timestamp property.
         * This filtering will return all employments with a last changed timestamp greater than the timestamp provided.
         * Can be used when polling for new entries or when changes has occured.
         * Note that the last changed property is unaffected by changes in sub entities of an employment (salary, leave, fixed salary lines and other "lists")
         * Date not inclusive.
         */
        lastChangedDateTimeOffsetGreaterThan?: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<EmploymentLightDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Employees/Employments',
            query: {
                'activeEmployments': activeEmployments,
                'employmentForm': employmentForm,
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
     * Get employments (employment relationships) on the employee. (Auth roles: Employment,Employment_Full)
     * Will only contain line count for salary-, fixed salary-, leave-, layout- and percentage of full time employment lines.
     * @returns EmploymentDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getEmployeesEmployments1({
        employeeId,
        resourceParameter,
    }: {
        /**
         * The id of the employee.
         */
        employeeId: number,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<EmploymentDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Employees/{employeeId}/Employments',
            path: {
                'employeeId': employeeId,
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
     * Create a new employment. (Auth roles: Employment_Full)
     * If successful, the new entity will be returned with an id which is unique and can be used to reference the created object in relevant requests.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns EmploymentDto Given when resource was successfully created.
     * @throws ApiError
     */
    public postEmployeesEmployments({
        employeeId,
        requestBody,
    }: {
        /**
         * The id of the employee.
         */
        employeeId: number,
        requestBody?: EmploymentPostDto,
    } = {} as any): CancelablePromise<any | EmploymentDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Employees/{employeeId}/Employments',
            path: {
                'employeeId': employeeId,
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
}
