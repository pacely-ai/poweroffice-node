/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactPersonDto } from '../models/ContactPersonDto';
import type { ContactPersonPostDto } from '../models/ContactPersonPostDto';
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ContactPersonsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the contact persons associated with a given contact. (Auth roles: ContactPerson, ContactPerson_Full, Customer, Customer_Full, Supplier, Supplier_Full)
     * Gets the contact persons associated with a given contact (customer/supplier identifier).
     * Contact persons are not available for employee contacts
     * @returns ContactPersonDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getContactPersons({
        contactIds,
        createdDateTimeOffsetGreaterThan,
        externalCodes,
        lastChangedDateTimeOffsetGreaterThan,
        resourceParameter,
    }: {
        /**
         * Filter by contact IDs. Separate by comma to filter on multiple contact IDs. If filterString is null or whitespace, query is returned as is.
         */
        contactIds?: string,
        /**
         * Filter by the contact person created timestamp property.
         * This filtering will return all contact persons with a created timestamp greater than the timestamp provided.
         * Can be used when polling for new entries from Go. Timestamp not inclusive.
         */
        createdDateTimeOffsetGreaterThan?: string,
        /**
         * Filter by contact person external codes. SearchString should be separated by comma.
         * If filterString is null or whitespace, query is returned as is.
         */
        externalCodes?: string,
        /**
         * Filter by the contact person last changed timestamp property.
         * This filtering will return all contact persons with a last changed timestamp greater than the timestamp provided.Can be used when polling for new and/or changed entries from Go.
         * Timestamp not inclusive.
         */
        lastChangedDateTimeOffsetGreaterThan?: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<ContactPersonDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ContactPersons',
            query: {
                'contactIds': contactIds,
                'createdDateTimeOffsetGreaterThan': createdDateTimeOffsetGreaterThan,
                'externalCodes': externalCodes,
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
     * Get a contact person by id. (Auth roles: ContactPerson, ContactPerson_Full, Customer, Customer_Full, Supplier, Supplier_Full)
     * @returns ContactPersonDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getContactPersonById({
        contactId,
        id,
    }: {
        /**
         * Id of the contact (Customer or Supplier)
         */
        contactId: number,
        /**
         * Id of the contact person
         */
        id: number,
    } = {} as any): CancelablePromise<ContactPersonDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ContactPersons/{contactId}/{id}',
            path: {
                'contactId': contactId,
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
     * Update a contact person. (Auth roles: ContactPerson_Full, Customer_Full, Supplier_Full)
     * @returns ContactPersonDto Given when a resource was successfully returned
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchContactPersons({
        contactId,
        id,
        requestBody,
    }: {
        /**
         * Id of the contact the ContactPerson belongs to
         */
        contactId: number,
        /**
         * Id of the ContactPerson
         */
        id: number,
        /**
         * JsonPatchDocument
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<ContactPersonDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/ContactPersons/{contactId}/{id}',
            path: {
                'contactId': contactId,
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
    /**
     * Deletes a contact person by ID. (Auth roles: ContactPerson_Full, Customer_Full, Supplier_Full)
     * @returns any Given when contact group is deleted
     * @throws ApiError
     */
    public deleteContactPersons({
        contactId,
        id,
    }: {
        /**
         * Id of contact (customer or supplier)
         */
        contactId: number,
        /**
         * Id of contact person
         */
        id: number,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/ContactPersons/{contactId}/{id}',
            path: {
                'contactId': contactId,
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
     * Create a contact person. (Auth roles: ContactPerson_Full, Customer_Full, Supplier_Full)
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns ContactPersonDto Given when a resource was created successfully
     * @throws ApiError
     */
    public postContactPersons({
        contactId,
        requestBody,
    }: {
        /**
         * Id of the contact (Customer or Supplier)
         */
        contactId: number,
        /**
         * A contact person post dto
         */
        requestBody?: ContactPersonPostDto,
    } = {} as any): CancelablePromise<any | ContactPersonDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ContactPersons/{contactId}',
            path: {
                'contactId': contactId,
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
