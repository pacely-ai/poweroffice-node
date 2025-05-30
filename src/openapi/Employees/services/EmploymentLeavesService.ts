/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmploymentLeaveDto } from '../models/EmploymentLeaveDto';
import type { EmploymentLeavePostDto } from '../models/EmploymentLeavePostDto';
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EmploymentLeavesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get leave lines for the given employment (employment relationships) on an employee. (Auth roles: EmploymentLeave,EmploymentLeave_Full)
     * @returns EmploymentLeaveDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getEmployeesEmploymentsLeaves({
        employmentId,
        resourceParameter,
    }: {
        /**
         * The id of the employment.
         */
        employmentId: number,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<EmploymentLeaveDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Employees/Employments/{employmentId}/Leaves',
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
     * Create a new leave (line) on a given employment. (Auth roles: EmploymentLeave_Full)
     * If successful, the new entity will be returned with an id which is unique and can be used to reference the created object in relevant requests.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns EmploymentLeaveDto Given when resource was successfully created.
     * @throws ApiError
     */
    public postEmployeesEmploymentsLeaves({
        employmentId,
        requestBody,
    }: {
        /**
         * The id of the employment.
         */
        employmentId: number,
        requestBody?: EmploymentLeavePostDto,
    } = {} as any): CancelablePromise<any | EmploymentLeaveDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Employees/Employments/{employmentId}/Leaves',
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
     * Gets a specific leave (line) on a given employment. (Auth roles: EmploymentLeave,EmploymentLeave_Full)
     * @returns EmploymentLeaveDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getLeaveById({
        employmentId,
        leaveId,
    }: {
        /**
         * The id of the employment.
         */
        employmentId: number,
        /**
         * The id of the leave (line).
         */
        leaveId: string,
    } = {} as any): CancelablePromise<EmploymentLeaveDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Employees/Employments/{employmentId}/Leaves/{leaveId}',
            path: {
                'employmentId': employmentId,
                'leaveId': leaveId,
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
     * Change an existing leave (line) on a given employment. (Auth roles: EmploymentLeave_Full)
     * @returns EmploymentLeaveDto Given when resource was successfully updated
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchEmployeesEmploymentsLeaves({
        employmentId,
        leaveId,
        requestBody,
    }: {
        /**
         * The id of the employment.
         */
        employmentId: number,
        /**
         * The id of the leave (line).
         */
        leaveId: string,
        /**
         * JSON Patch structure for updating a leave (line). See EmploymentLeavePatchDto schema for all available properties. For more information on JSON patch and the various operations allowed, check out: https://datatracker.ietf.org/doc/html/rfc6902
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<EmploymentLeaveDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/Employees/Employments/{employmentId}/Leaves/{leaveId}',
            path: {
                'employmentId': employmentId,
                'leaveId': leaveId,
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
     * Delete a specific leave (line) on a given employment. (Auth roles: EmploymentLeave_Full)
     * @returns any Given when leave line is deleted
     * @throws ApiError
     */
    public deleteEmployeesEmploymentsLeaves({
        employmentId,
        leaveId,
    }: {
        /**
         * The id of the employment.
         */
        employmentId: number,
        /**
         * The id of the leave (line).
         */
        leaveId: string,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Employees/Employments/{employmentId}/Leaves/{leaveId}',
            path: {
                'employmentId': employmentId,
                'leaveId': leaveId,
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
