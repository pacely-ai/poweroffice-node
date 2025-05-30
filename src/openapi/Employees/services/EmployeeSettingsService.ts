/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmployeePayrollSettingsDto } from '../models/EmployeePayrollSettingsDto';
import type { EmployeePensionSettingsDto } from '../models/EmployeePensionSettingsDto';
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EmployeeSettingsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the payroll settings for a given employee.
     * These settings will default inherit from the general payroll settings, if not overridden on the employee. (Auth roles: EmployeePayrollSettings,EmployeePayrollSettings_Full)
     * Note that in order to use this endpoint you need to have the special privilege "EmployeePayrollSettings".
     * @returns EmployeePayrollSettingsDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getEmployeePayrollSettings({
        employeeId,
    }: {
        /**
         * The id of the employee.
         */
        employeeId: number,
    } = {} as any): CancelablePromise<EmployeePayrollSettingsDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Employees/{employeeId}/PayrollSettings',
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
     * Change payroll settings for an employee with a given id. (Auth roles: EmployeePayrollSettings_Full)
     * Note that in order to use this endpoint you need to have the special privilege "EmployeePayrollSettings".
     * @returns EmployeePayrollSettingsDto Given when resource was successfully updated.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchEmployeesPayrollSettings({
        employeeId,
        requestBody,
    }: {
        /**
         * The id of the employee.
         */
        employeeId: number,
        /**
         * JSON Patch structure for updating employee payroll settings. See EmployeePayrollSettingsPatchDto schema for all available properties. For more information on JSON patch and the various operations allowed, check out: https://datatracker.ietf.org/doc/html/rfc6902
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<EmployeePayrollSettingsDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/Employees/{employeeId}/PayrollSettings',
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
     * Gets the pension settings for a given employee.
     * These settings will default inherit from the general payroll settings, if not overridden on the employee. (Auth roles: EmployeePensionSettings,EmployeePensionSettings_Full)
     * Note that in order to use this endpoint you need to have the special privilege "EmployeePensionSettings".
     * @returns EmployeePensionSettingsDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getEmployeePensionSettings({
        employeeId,
    }: {
        /**
         * The id of the employee.
         */
        employeeId: number,
    } = {} as any): CancelablePromise<EmployeePensionSettingsDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Employees/{employeeId}/PensionSettings',
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
     * Change pension settings for an employee with a given id. (Auth roles: EmployeePensionSettings_Full)
     * Note that in order to use this endpoint you need to have the special privilege "EmployeePensionSettings".
     * @returns EmployeePensionSettingsDto Given when resource was successfully updated.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchEmployeesPensionSettings({
        employeeId,
        requestBody,
    }: {
        /**
         * The id of the employee.
         */
        employeeId: number,
        /**
         * JSON Patch structure for updating employee pension settings. See EmployeePensionSettingsPatchDto schema for all available properties. For more information on JSON patch and the various operations allowed, check out: https://datatracker.ietf.org/doc/html/rfc6902
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<EmployeePensionSettingsDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/Employees/{employeeId}/PensionSettings',
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
