/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmployeeDto } from '../models/EmployeeDto';
import type { EmployeePostDto } from '../models/EmployeePostDto';
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EmployeesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the specific employee by id. (Auth roles: Employee,Employee_Full)
     * The employee object is a contact entity, meaning the id might be shared with a customer and/or a supplier if the contact is registered as both an employee and customer/supplier in Go.
     * @returns EmployeeDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getEmployeeById({
        employeeId,
    }: {
        /**
         * The id of the employee.
         */
        employeeId: number,
    } = {} as any): CancelablePromise<EmployeeDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Employees/{employeeId}',
            path: {
                'employeeId': employeeId,
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
     * Change an existing employee with a given id. (Auth roles: Employee_Full)
     * @returns EmployeeDto Given when resource was successfully updated.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchEmployees({
        employeeId,
        requestBody,
    }: {
        /**
         * The id of the employee.
         */
        employeeId: number,
        /**
         * JSON Patch structure for updating an Employee. See EmployeePatchDto schema for all available properties. For more information on JSON patch and the various operations allowed, check out: https://datatracker.ietf.org/doc/html/rfc6902
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<EmployeeDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/Employees/{employeeId}',
            path: {
                'employeeId': employeeId,
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
     * Delete an employee entity with a given id. (Auth roles: Employee_Full)
     * If the employee have links to transactions or other entities, or if the contact is an active customer/supplier, this operation cannot be performed.
     * @returns any Given when employee is deleted
     * @throws ApiError
     */
    public deleteEmployees({
        employeeId,
    }: {
        /**
         * The id of the employee to delete.
         */
        employeeId: number,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Employees/{employeeId}',
            path: {
                'employeeId': employeeId,
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
     * Gets the employees available on the client. Multiple filtering options. (Auth roles: Employee,Employee_Full)
     * The employee object is a contact entity, meaning the id might be shared with a customer and/or a supplier if the contact is registered as both an employee and customer/supplier in Go.
     * @returns EmployeeDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getEmployees({
        contactGroupIds,
        employeeCreatedDateTimeOffsetGreaterThan,
        employeeNos,
        externalImportReference,
        externalNos,
        lastChangedDateTimeOffsetGreaterThan,
        resourceParameter,
    }: {
        /**
         * Filter by contact group IDs. Separate by comma [,] to filter on multiple contact group IDs. If null or whitespace, the filter is not used.
         */
        contactGroupIds?: string,
        /**
         * Filter by the employee created timestamp. This filtering will return all employees with a created timestamp greater than the timestamp provided. Can be used when polling for new entries. Date not inclusive.
         */
        employeeCreatedDateTimeOffsetGreaterThan?: string,
        /**
         * Filter by employee numbers. Separate by comma [,] to filter on multiple employee numbers. A range of numbers can be specified using dash/hyphen [-]. For example "1, 100-200, 500-" will result in employees with number 1, from and including 100 to 200, 500 and all above will be returned. If null or whitespace, the filter is not used.
         */
        employeeNos?: string,
        /**
         * Filter by external import reference. If null or whitespace, the filter is not used.
         */
        externalImportReference?: string,
        /**
         * Filter by employee external numbers. Separate by comma [,] to filter on multiple employee external numbers. A range of numbers can be specified using dash/hyphen [-]. For example "30000, 14153-19534, 150000-" will result in employees with external number 30000, from and including 14153 to 19534, 150000 and all above will be returned. If null or whitespace, the filter is not used.
         */
        externalNos?: string,
        /**
         * Filter by the last changed timestamp. This filtering will return all employees with a last changed timestamp greater than the timestamp provided. Can be used when polling for new entries. If used, changed employees should replace what was previously stored in the external system. Date not inclusive.
         */
        lastChangedDateTimeOffsetGreaterThan?: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<EmployeeDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Employees',
            query: {
                'contactGroupIds': contactGroupIds,
                'employeeCreatedDateTimeOffsetGreaterThan': employeeCreatedDateTimeOffsetGreaterThan,
                'employeeNos': employeeNos,
                'externalImportReference': externalImportReference,
                'externalNos': externalNos,
                'lastChangedDateTimeOffsetGreaterThan': lastChangedDateTimeOffsetGreaterThan,
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
     * Create one new employee entity. (Auth roles: Employee_Full)
     * If successful, the new entity will be returned with an id which is unique and can be used to reference the created object in relevant requests.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns EmployeeDto Given when resource was successfully created.
     * @throws ApiError
     */
    public postEmployees({
        requestBody,
    }: {
        requestBody?: EmployeePostDto,
    } = {} as any): CancelablePromise<any | EmployeeDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Employees',
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
     * Change payout bank accounts for an employee with a given id. (Auth roles: EmployeeBankAccounts_Full)
     * Note that in order to use this endpoint you need to have the special privilege "EmployeeBankAccounts".
     * @returns EmployeeDto Given when resource was successfully updated.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchEmployeesBankAccounts({
        employeeId,
        requestBody,
    }: {
        /**
         * The id of the employee.
         */
        employeeId: number,
        /**
         * JSON Patch structure for updating employee bank accounts. See EmployeeBankAccountsPatchDto schema for all available properties. For more information on JSON patch and the various operations allowed, check out: https://datatracker.ietf.org/doc/html/rfc6902
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<EmployeeDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/Employees/{employeeId}/BankAccounts',
            path: {
                'employeeId': employeeId,
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
