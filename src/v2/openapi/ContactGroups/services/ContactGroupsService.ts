/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactGroupDto } from '../models/ContactGroupDto';
import type { ContactGroupPostDto } from '../models/ContactGroupPostDto';
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ContactGroupsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get contact groups. (Auth roles: ContactGroup,ContactGroup_Full)
     * @returns ContactGroupDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getContactGroups({
        createdDateTimeOffsetGreaterThan,
        lastChangedDateTimeOffsetGreaterThan,
        names,
        resourceParameter,
    }: {
        /**
         * Filter by the contact group created timestamp property. This filtering will return all contact groups with a created timestamp greater than the timestamp provided. Can be used when polling for new entries from Go. Timestamp not inclusive.
         */
        createdDateTimeOffsetGreaterThan?: string,
        /**
         * Filter by the contact group last changed timestamp property. This filtering will return all contact groups with a last changed timestamp greater than the timestamp provided. Can be used when polling for new and/or changed entries from Go. Timestamp not inclusive.
         */
        lastChangedDateTimeOffsetGreaterThan?: string,
        /**
         * Filter by contact group names. SearchString should be separated by comma. If filterString is null or whitespace, query is returned as is.
         */
        names?: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<ContactGroupDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ContactGroups',
            query: {
                'createdDateTimeOffsetGreaterThan': createdDateTimeOffsetGreaterThan,
                'lastChangedDateTimeOffsetGreaterThan': lastChangedDateTimeOffsetGreaterThan,
                'names': names,
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
     * Create a new contact group. (Auth roles: ContactGroup_Full)
     * Contact groups can be assigned on contact entities (customers/employees/suppliers), and are primarily used for filtering purposes (filtering of contacts).
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns ContactGroupDto Given when resource was successfully created.
     * @throws ApiError
     */
    public postContactGroups({
        requestBody,
    }: {
        /**
         * Name is required.
         */
        requestBody?: ContactGroupPostDto,
    } = {} as any): CancelablePromise<any | ContactGroupDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ContactGroups',
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
     * Get a contact group by id. (Auth roles: ContactGroup,ContactGroup_Full)
     * @returns ContactGroupDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getContactGroupById({
        id,
    }: {
        /**
         * Id of contact group.
         */
        id: number,
    } = {} as any): CancelablePromise<ContactGroupDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ContactGroups/{id}',
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
     * Deletes a contact group by ID. (Auth roles: ContactGroup_Full)
     * @returns any Given when contact group is deleted
     * @throws ApiError
     */
    public deleteContactGroups({
        id,
    }: {
        id: number,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/ContactGroups/{id}',
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
     * Update a contact group. (Auth roles: ContactGroup_Full)
     * @returns ContactGroupDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchContactGroups({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<ContactGroupDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/ContactGroups/{id}',
            path: {
                'id': id,
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
