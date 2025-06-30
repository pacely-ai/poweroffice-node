/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DepartmentDto } from '../models/DepartmentDto';
import type { DepartmentPostDto } from '../models/DepartmentPostDto';
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DepartmentsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Departments can be divisions of an organization. The usages may also be that of a dimension separating specific
     * areas of activity for reporting purposes. (Auth roles: Department,Department_Full)
     * @returns DepartmentDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getDepartments({
        codes,
        createdDateTimeOffsetGreaterThan,
        createdFromImportJournalId,
        isActive,
        lastChangedDateTimeOffsetGreaterThan,
        managerEmployeeNo,
        name,
        resourceParameter,
    }: {
        /**
         * Filter by department codes. SearchString should be in the form of "1, ABC, 10B" (codes separated by comma). If filterString is null or whitespace, query is returned as is.
         */
        codes?: string,
        /**
         * Find departments created after this timestamp.
         */
        createdDateTimeOffsetGreaterThan?: string,
        /**
         * Find departments created by importJournal with ID.
         */
        createdFromImportJournalId?: string,
        /**
         * Filter by isActive.
         */
        isActive?: boolean,
        /**
         * Find departments that have been changed after this timestamp.
         */
        lastChangedDateTimeOffsetGreaterThan?: string,
        /**
         * Filter by department manager via their employee number.
         */
        managerEmployeeNo?: number,
        /**
         * Filter by department name.
         */
        name?: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<DepartmentDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Departments',
            query: {
                'codes': codes,
                'createdDateTimeOffsetGreaterThan': createdDateTimeOffsetGreaterThan,
                'createdFromImportJournalId': createdFromImportJournalId,
                'isActive': isActive,
                'lastChangedDateTimeOffsetGreaterThan': lastChangedDateTimeOffsetGreaterThan,
                'managerEmployeeNo': managerEmployeeNo,
                'name': name,
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
     * Create a new department. (Auth roles: Department_Full)
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns DepartmentDto Given when resource was successfully created.
     * @throws ApiError
     */
    public postDepartments({
        requestBody,
    }: {
        requestBody?: DepartmentPostDto,
    } = {} as any): CancelablePromise<any | DepartmentDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Departments',
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
     * Get department by ID (Auth roles: Department,Department_Full)
     * @returns any Given when resource returned successfully
     * @throws ApiError
     */
    public getDepartmentById({
        id,
    }: {
        /**
         * The ID of the department.
         */
        id: number,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Departments/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                404: `Given when resource is not found`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
    /**
     * Delete an existing department. (Auth roles: Department_Full)
     * @returns any Given when department is deleted
     * @throws ApiError
     */
    public deleteDepartments({
        id,
    }: {
        /**
         * Id of the department to delete.
         */
        id: number,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Departments/{id}',
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
     * Update an existing department. (Auth roles: Department_Full)
     * You must provide the ID of the department to update as part of the url.
     * @returns any Given when resource was successfully updated.
     * @throws ApiError
     */
    public patchDepartments({
        id,
        requestBody,
    }: {
        /**
         * Id of the department to update
         */
        id: number,
        /**
         * JSON Patch structure for updating a Department. See DepartmentPatchDto schema for all available properties. For more information on JSON patch and the various operations allowed, check out: https://datatracker.ietf.org/doc/html/rfc6902
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/Departments/{id}',
            path: {
                'id': id,
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
