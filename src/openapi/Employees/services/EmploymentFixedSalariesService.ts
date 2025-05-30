/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmploymentFixedSalaryDto } from '../models/EmploymentFixedSalaryDto';
import type { EmploymentFixedSalaryPostDto } from '../models/EmploymentFixedSalaryPostDto';
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EmploymentFixedSalariesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets a specific fixed salary (line) on a given employment. (Auth roles: EmploymentFixedSalary,EmploymentFixedSalary_Full)
     * @returns EmploymentFixedSalaryDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getFixedSalaryById({
        employmentId,
        fixedSalaryId,
    }: {
        /**
         * The id of the employment.
         */
        employmentId: number,
        /**
         * The id of the fixed salary (line).
         */
        fixedSalaryId: string,
    } = {} as any): CancelablePromise<EmploymentFixedSalaryDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Employees/Employments/{employmentId}/FixedSalaries/{fixedSalaryId}',
            path: {
                'employmentId': employmentId,
                'fixedSalaryId': fixedSalaryId,
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
     * Change an existing fixed salary (line) on a given employment. (Auth roles: EmploymentFixedSalary_Full)
     * @returns EmploymentFixedSalaryDto Given when resource was successfully updated
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchEmployeesEmploymentsFixedSalaries({
        employmentId,
        fixedSalaryId,
        requestBody,
    }: {
        /**
         * The id of the employment.
         */
        employmentId: number,
        /**
         * The id of the fixed salary (line).
         */
        fixedSalaryId: string,
        /**
         * JSON Patch structure for updating a fixed salary (line). See EmploymentFixedSalaryPatchDto schema for all available properties. For more information on JSON patch and the various operations allowed, check out: https://datatracker.ietf.org/doc/html/rfc6902
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<EmploymentFixedSalaryDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/Employees/Employments/{employmentId}/FixedSalaries/{fixedSalaryId}',
            path: {
                'employmentId': employmentId,
                'fixedSalaryId': fixedSalaryId,
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
     * Delete a specific fixed salary (line) on a given employment. (Auth roles: EmploymentFixedSalary_Full)
     * @returns any Given when fixed salary line is deleted
     * @throws ApiError
     */
    public deleteEmployeesEmploymentsFixedSalaries({
        employmentId,
        fixedSalaryId,
    }: {
        /**
         * The id of the employment.
         */
        employmentId: number,
        /**
         * The id of the fixed salary (line).
         */
        fixedSalaryId: string,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Employees/Employments/{employmentId}/FixedSalaries/{fixedSalaryId}',
            path: {
                'employmentId': employmentId,
                'fixedSalaryId': fixedSalaryId,
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
    /**
     * Get fixed salary lines for the given employment (employment relationships) on an employee. (Auth roles: EmploymentFixedSalary,EmploymentFixedSalary_Full)
     * @returns EmploymentFixedSalaryDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getEmployeesEmploymentsFixedSalaries({
        employmentId,
        resourceParameter,
    }: {
        /**
         * The id of the employment.
         */
        employmentId: number,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<EmploymentFixedSalaryDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Employees/Employments/{employmentId}/FixedSalaries',
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
     * Create a new fixed salary (line) on a given employment. (Auth roles: EmploymentFixedSalary_Full)
     * If successful, the new entity will be returned with an id which is unique and can be used to reference the created object in relevant requests.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns EmploymentFixedSalaryDto Given when resource was successfully created.
     * @throws ApiError
     */
    public postEmployeesEmploymentsFixedSalaries({
        employmentId,
        requestBody,
    }: {
        /**
         * The id of the employment.
         */
        employmentId: number,
        requestBody?: EmploymentFixedSalaryPostDto,
    } = {} as any): CancelablePromise<any | EmploymentFixedSalaryDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Employees/Employments/{employmentId}/FixedSalaries',
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
}
