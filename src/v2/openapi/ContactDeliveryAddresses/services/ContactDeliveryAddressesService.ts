/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactDeliveryAddressDto } from '../models/ContactDeliveryAddressDto';
import type { ContactDeliveryAddressPostDto } from '../models/ContactDeliveryAddressPostDto';
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ContactDeliveryAddressesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the delivery addresses for a given contact (Auth roles: ContactDeliveryAddress, ContactDeliveryAddress_Full, Customer, Customer_Full, Supplier, Supplier_Full, Employee, Employee_Full)
     * Gets the delivery addresses for a given contact (customer/employee/supplier identifier).
     * The common use case of an delivery address is to set it on sales orders for customers.
     * @returns ContactDeliveryAddressDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getContactDeliveryAddresses({
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
         * Filter by the contact delivery address' created timestamp property.
         * This filtering will return all addresses with a created timestamp greater than the timestamp provided.
         * Can be used when polling for new entries from Go. Timestamp not inclusive.
         */
        createdDateTimeOffsetGreaterThan?: string,
        /**
         * Filter by contact delivery address external codes.  Separate by comma to filter on multiple external codes. If filterString is null or whitespace, query is returned as is. Case insensitive, ie. ABC == abc.
         */
        externalCodes?: string,
        /**
         * Filter by the contact delivery address' last changed timestamp property.
         * This filtering will return all contact delivery addresses with a last changed timestamp greater than the timestamp provided.
         * Can be used when polling for new and/or changed entries from Go. Timestamp not inclusive.
         */
        lastChangedDateTimeOffsetGreaterThan?: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<ContactDeliveryAddressDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ContactDeliveryAddresses',
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
     * Gets a delivery address by id for a given contact (Auth roles: ContactDeliveryAddress, ContactDeliveryAddress_Full, Customer, Customer_Full, Supplier, Supplier_Full, Employee, Employee_Full)
     * @returns ContactDeliveryAddressDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getContactDeliveryAddressById({
        contactId,
        id,
    }: {
        /**
         * The id of the contact
         */
        contactId: number,
        /**
         * The id of a delivery address
         */
        id: number,
    } = {} as any): CancelablePromise<ContactDeliveryAddressDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ContactDeliveryAddresses/{contactId}/{id}',
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
     * Change an existing delivery addresses for a given contact (customer/employee/supplier identifier). (Auth roles: ContactDeliveryAddress_Full, Customer_Full, Supplier_Full, Employee_Full)
     * CountryCode will default to "NO" if provided as null or empty string.
     * @returns ContactDeliveryAddressDto Given when a resource was successfully updated
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchContactDeliveryAddresses({
        contactId,
        id,
        requestBody,
    }: {
        /**
         * Id of the contact
         */
        contactId: number,
        /**
         * Id of the contact delivery address
         */
        id: number,
        /**
         * Json patch document
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<ContactDeliveryAddressDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/ContactDeliveryAddresses/{contactId}/{id}',
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
     * Deletes a delivery address by id for a given contact (Auth roles: ContactDeliveryAddress_Full, Customer_Full, Supplier_Full, Employee_Full)
     * @returns any Given when resource is deleted successfully
     * @throws ApiError
     */
    public deleteContactDeliveryAddresses({
        contactId,
        id,
    }: {
        /**
         * Id of the contact
         */
        contactId: number,
        /**
         * Id of the contact delivery address
         */
        id: number,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/ContactDeliveryAddresses/{contactId}/{id}',
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
     * Creates a delivery address for a given contact (customer/employee/supplier). (Auth roles: ContactDeliveryAddress_Full, Customer_Full, Supplier_Full, Employee_Full)
     * CountryCode must be a valid ISO 3166-1 alfa-2 code if provided. If not CountryCode is provided, it will default to "NO".
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns ContactDeliveryAddressDto Given when a resource was created successfully
     * @throws ApiError
     */
    public postContactDeliveryAddresses({
        contactId,
        requestBody,
    }: {
        /**
         * Id of the contact
         */
        contactId: number,
        /**
         * A contact delivery address post dto
         */
        requestBody?: ContactDeliveryAddressPostDto,
    } = {} as any): CancelablePromise<any | ContactDeliveryAddressDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ContactDeliveryAddresses/{contactId}',
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
