/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { ProjectBillingMethod } from '../models/ProjectBillingMethod';
import type { ProjectDto } from '../models/ProjectDto';
import type { ProjectPostDto } from '../models/ProjectPostDto';
import type { ProjectStatusType } from '../models/ProjectStatusType';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProjectsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the projects available on the client. Multiple filtering options. (Auth roles: Project,Project_Full)
     * A project may be a standalone project or a subproject.
     * Subprojects will have the code notation code of main project.code of subproject.
     * Example: A project with code 10 have a subproject with code 2 in the user interface.
     * The code of the subprojcet when retrieved from the API will be 10.2 (and because of this, "." (dot) is reserved and cannot be used in project codes)
     * @returns ProjectDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getProjects({
        createdDateTimeOffsetGreaterThan,
        customerNos,
        departmentCodes,
        excludeArchivedProject,
        includeSubProjects,
        lastChangedDateTimeOffsetGreaterThan,
        name,
        projectBillingMethod,
        projectCodes,
        projectManagerEmployeeNos,
        status,
        resourceParameter,
    }: {
        /**
         * Filter on the created timestamp property. This filtering will return all projects with a created timestamp greater than the timestamp provided. Can be used when polling for new project from Go. Date not inclusive.
         */
        createdDateTimeOffsetGreaterThan?: string,
        /**
         * Filter by customer numbers. A project may only be assigned to one customer, and this search-string will return all projects related to the specified customer numbers provided.
         * Note that sub-projects will inherit the main projects' customer, unless specified otherwise on the sub-project.
         * If inherited, the sub-project customer number will return null, so it is preferable to use the filter includeSubProject in conjunction with this customer number filtering.
         * Separate by comma [,] to filter on multiple customer numbers. A range of numbers can be specified using dash/hyphen [-]. For example "10000-11000, 12000, 13000-" will result in customers with numbers from and including 10000 to 11000, 12000, 13000 and all above will be returned. If null or whitespace, the filter is not used.
         */
        customerNos?: string,
        /**
         * Filter projects on department codes. Separate by comma to filter on multiple codes.
         * If blank, all projects with or without department codes are returned (no filter). Note that subprojects will inherit the main project department, unless specified otherwise on the subproject.
         * If inherited, the subproject department code will return null, so it is preferable to use the filter includeSubProject in conjunction with this department code filtering
         */
        departmentCodes?: string,
        /**
         * Option to exclude archivedprojects. Default is false, meaning that all projects are returned if not set.
         */
        excludeArchivedProject?: boolean,
        /**
         * Include Sub-project(s) for specified projectCodes. If projectCodes is null, all (sub)projects are included (regardless of this variable). If projectCodes is set to subproject(s), this variable have no effect for those projects.
         */
        includeSubProjects?: boolean,
        /**
         * Filter projects on the last changed timestamp property. This filtering will return all projects with a last changed timestamp greater than the timestamp provided. Date not inclusive.
         */
        lastChangedDateTimeOffsetGreaterThan?: string,
        /**
         * Filter by the name of projects. Will return projects that contains the searchstring.
         */
        name?: string,
        /**
         * Filter by project billing method.
         */
        projectBillingMethod?: ProjectBillingMethod,
        /**
         * Filter by project codes. SearchString should be in the form of "1, ABC, 10B" (codes separated by comma). If filterString is null or whitespace, query is returned as is.
         */
        projectCodes?: string,
        /**
         * Filter by project managers via their employee numbers. SearchString should be in the form of "1-5, 8, 25-" where values from 1 to 15, 8 and all over 25 (inclusive) will be selected. If filterString is null or whitespace, query is returned as is.
         */
        projectManagerEmployeeNos?: string,
        /**
         * Filter by project status.
         */
        status?: ProjectStatusType,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<ProjectDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Projects',
            query: {
                'createdDateTimeOffsetGreaterThan': createdDateTimeOffsetGreaterThan,
                'customerNos': customerNos,
                'departmentCodes': departmentCodes,
                'excludeArchivedProject': excludeArchivedProject,
                'includeSubProjects': includeSubProjects,
                'lastChangedDateTimeOffsetGreaterThan': lastChangedDateTimeOffsetGreaterThan,
                'name': name,
                'projectBillingMethod': projectBillingMethod,
                'projectCodes': projectCodes,
                'projectManagerEmployeeNos': projectManagerEmployeeNos,
                'status': status,
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
     * Create a new project entity on the client. (Auth roles: Project_Full)
     * Create a new project entity on the client. To create a subproject, the parentProjectCode property must be set ass well and equal to the main project that the subproject will be a part of.
     * The response from the POST will return the notation code of main project.code of subproject as the code of the created subproject.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns ProjectDto Given when resource was successfully created.
     * @throws ApiError
     */
    public postProjects({
        requestBody,
    }: {
        requestBody?: ProjectPostDto,
    } = {} as any): CancelablePromise<any | ProjectDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Projects',
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
     * Get an existing project by it's id. (Auth roles: Project,Project_Full)
     * @returns ProjectDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getProjectById({
        id,
    }: {
        /**
         * The id of the project
         */
        id: number,
    } = {} as any): CancelablePromise<ProjectDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Projects/{id}',
            path: {
                'id': id,
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
     * Make changes to an existing project. (Auth roles: Project_Full)
     * @returns any Given when resource was successfully updated.
     * @throws ApiError
     */
    public patchProjects({
        id,
        requestBody,
    }: {
        /**
         * The id of the project
         */
        id: number,
        /**
         * JSON Patch structure for updating a Project. See ProjectPatchDto schema for all available properties. For more information on JSON patch and the various operations allowed, check out: https://datatracker.ietf.org/doc/html/rfc6902
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/Projects/{id}',
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
    /**
     * Delete a project entity with a given id. (Auth roles: Project_Full)
     * @returns any Given when project is deleted
     * @throws ApiError
     */
    public deleteProjects({
        id,
    }: {
        /**
         * The id of the department to delete.
         */
        id: number,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Projects/{id}',
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
}
