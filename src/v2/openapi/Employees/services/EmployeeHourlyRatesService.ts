/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmployeeHourlyRateDto } from '../models/EmployeeHourlyRateDto';
import type { EmployeeHourlyRatePostDto } from '../models/EmployeeHourlyRatePostDto';
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EmployeeHourlyRatesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets a specific hourly rate on a given employee. (Auth roles: EmployeeHourlyRates,EmployeeHourlyRates_Full)
     * @returns EmployeeHourlyRateDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getHourlyRateById({
        employeeId,
        hourlyRateId,
    }: {
        /**
         * The id of the employee.
         */
        employeeId: number,
        /**
         * The id of the hourly rate.
         */
        hourlyRateId: number,
    } = {} as any): CancelablePromise<EmployeeHourlyRateDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Employees/{employeeId}/HourlyRates/{hourlyRateId}',
            path: {
                'employeeId': employeeId,
                'hourlyRateId': hourlyRateId,
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
     * Change an existing hourly rate entry on an employee with a given (hourlRate) Id. (Auth roles: EmployeeHourlyRates_Full)
     * @returns EmployeeHourlyRateDto Given when resource was successfully updated.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchEmployeesHourlyRates({
        employeeId,
        hourlyRateId,
        requestBody,
    }: {
        /**
         * The id of the employee.
         */
        employeeId: number,
        /**
         * The id of the hourly rate to update.
         */
        hourlyRateId: number,
        /**
         * JSON Patch structure for updating an hourly rate. See EmployeeHourlyRatesPatchDto schema for all available properties. For more information on JSON patch and the various operations allowed, check out: https://datatracker.ietf.org/doc/html/rfc6902
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<EmployeeHourlyRateDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/Employees/{employeeId}/HourlyRates/{hourlyRateId}',
            path: {
                'employeeId': employeeId,
                'hourlyRateId': hourlyRateId,
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
     * Delete a specific set of hourly rates on a given employee. (Auth roles: EmployeeHourlyRates_Full)
     * @returns any Given when hourly rate is deleted
     * @throws ApiError
     */
    public deleteEmployeesHourlyRates({
        employeeId,
        hourlyRateId,
    }: {
        /**
         * The id of the employee the hourly rate belongs to.
         */
        employeeId: number,
        /**
         * The id of the hourly rate to delete.
         */
        hourlyRateId: number,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Employees/{employeeId}/HourlyRates/{hourlyRateId}',
            path: {
                'employeeId': employeeId,
                'hourlyRateId': hourlyRateId,
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
     * Gets all hourly rates registered on the employee. (Auth roles: EmployeeHourlyRates,EmployeeHourlyRates_Full)
     * @returns EmployeeHourlyRateDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getEmployeesHourlyRates({
        employeeId,
        validNow,
        resourceParameter,
    }: {
        /**
         * The id of the employee.
         */
        employeeId: number,
        /**
         * Sets a parameter filtering the hourly rates that are active and in effect at the time of the query (if set true). If false, the complete collection of hourly rates will be returned, including past rates and future sets (if any).
         */
        validNow?: boolean,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<EmployeeHourlyRateDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Employees/{employeeId}/HourlyRates',
            path: {
                'employeeId': employeeId,
            },
            query: {
                'validNow': validNow,
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
     * Create one new hourly rate entity. (Auth roles: EmployeeHourlyRates_Full)
     * If successful, the new entity will be returned with an id which is unique and can be used to reference the created object in relevant requests.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns EmployeeHourlyRateDto Given when resource was successfully created.
     * @throws ApiError
     */
    public postEmployeesHourlyRates({
        employeeId,
        requestBody,
    }: {
        /**
         * The id of the employee.
         */
        employeeId: number,
        /**
         * A employee hourly rate post dto
         */
        requestBody?: EmployeeHourlyRatePostDto,
    } = {} as any): CancelablePromise<any | EmployeeHourlyRateDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Employees/{employeeId}/HourlyRates',
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
