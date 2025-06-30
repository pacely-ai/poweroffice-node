/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmploymentSalaryDto } from '../models/EmploymentSalaryDto';
import type { EmploymentSalaryPostDto } from '../models/EmploymentSalaryPostDto';
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EmploymentSalariesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get salary lines for the given employment (employment relationships) on an employee. (Auth roles: EmploymentSalary,EmploymentSalary_Full)
     * @returns EmploymentSalaryDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getEmployeesEmploymentsSalaries({
        employmentId,
        resourceParameter,
    }: {
        /**
         * The id of the employment.
         */
        employmentId: number,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<EmploymentSalaryDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Employees/Employments/{employmentId}/Salaries',
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
     * Create a new salary (line) on a given employment. (Auth roles: EmploymentSalary_Full)
     * If successful, the new entity will be returned with an id which is unique and can be used to reference the created object in relevant requests.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns EmploymentSalaryDto Given when resource was successfully created.
     * @throws ApiError
     */
    public postEmployeesEmploymentsSalaries({
        employmentId,
        requestBody,
    }: {
        /**
         * The id of the employment.
         */
        employmentId: number,
        requestBody?: EmploymentSalaryPostDto,
    } = {} as any): CancelablePromise<any | EmploymentSalaryDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Employees/Employments/{employmentId}/Salaries',
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
     * Gets a specific salary (line) on a given employment. (Auth roles: EmploymentSalary,EmploymentSalary_Full)
     * @returns EmploymentSalaryDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getSalaryById({
        employmentId,
        salaryId,
    }: {
        /**
         * The id of the employment.
         */
        employmentId: number,
        /**
         * The id of the salary (line).
         */
        salaryId: number,
    } = {} as any): CancelablePromise<EmploymentSalaryDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Employees/Employments/{employmentId}/Salaries/{salaryId}',
            path: {
                'employmentId': employmentId,
                'salaryId': salaryId,
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
     * Change an existing salary (line) on a given employment. (Auth roles: EmploymentSalary_Full)
     * @returns EmploymentSalaryDto Given when resource was successfully updated
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchEmployeesEmploymentsSalaries({
        employmentId,
        salaryId,
        requestBody,
    }: {
        /**
         * The id of the employment.
         */
        employmentId: number,
        /**
         * The id of the salary (line).
         */
        salaryId: number,
        /**
         * JSON Patch structure for updating a salary (line). See EmploymentSalaryPatchDto schema for all available properties. For more information on JSON patch and the various operations allowed, check out: https://datatracker.ietf.org/doc/html/rfc6902
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<EmploymentSalaryDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/Employees/Employments/{employmentId}/Salaries/{salaryId}',
            path: {
                'employmentId': employmentId,
                'salaryId': salaryId,
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
     * Delete a specific salary (line) on a given employment. (Auth roles: EmploymentSalary_Full)
     * Note that there must be at least one salary line on an employment, so if the last salary line is attempted to be deleted you will get a 409 Conflict response.
     * @returns any Given when salary line is deleted
     * @throws ApiError
     */
    public deleteEmployeesEmploymentsSalaries({
        employmentId,
        salaryId,
    }: {
        /**
         * The id of the employment.
         */
        employmentId: number,
        /**
         * The id of the salary (line).
         */
        salaryId: number,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Employees/Employments/{employmentId}/Salaries/{salaryId}',
            path: {
                'employmentId': employmentId,
                'salaryId': salaryId,
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
