/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactBankAccountDto } from '../models/ContactBankAccountDto';
import type { ContactBankAccountPostDto } from '../models/ContactBankAccountPostDto';
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ContactBankAccountsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the bank accounts set on the client contacts (customer/employee/supplier). (Auth roles: ContactBankAccount, ContactBankAccount_Full, Customer, Customer_Full, Supplier, Supplier_Full, Employee, Employee_Full)
     * Queries can be done independent of the contact objects, but the response is coupled with the contact access privileges. Multiple filtering options.
     * Bank accounts set on contacts are used for payments and information purposes.
     * @returns ContactBankAccountDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getContactBankAccounts({
        bankAccountNumbers,
        contactIds,
        createdDateTimeOffsetGreaterThan,
        lastChangedDateTimeOffsetGreaterThan,
        resourceParameter,
    }: {
        /**
         * Filter by bank account numbers. Separate by comma to filter on multiple bank accounts. If filterString is null or whitespace, query is returned as is.
         */
        bankAccountNumbers?: string,
        /**
         * Filter contact bank accounts by the contact id's. Separate by comma to filter on multiple id's. If filterString is null or whitespace, the query will lookup all the contacts the integration has access and privileges for.
         */
        contactIds?: string,
        /**
         * Filter by the contact bank account created timestamp property.
         * This filtering will return all bank accounts with a created timestamp greater than the timestamp provided.
         * Can be used when polling for new entries from Go. Timestamp not inclusive.
         */
        createdDateTimeOffsetGreaterThan?: string,
        /**
         * Filter by the contact bank account last changed timestamp property.
         * This filtering will return all bank accounts with a last changed timestamp greater than the timestamp provided.
         * Can be used when polling for new and/or changed entries from Go. Timestamp not inclusive.
         */
        lastChangedDateTimeOffsetGreaterThan?: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<ContactBankAccountDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ContactBankAccounts',
            query: {
                'bankAccountNumbers': bankAccountNumbers,
                'contactIds': contactIds,
                'createdDateTimeOffsetGreaterThan': createdDateTimeOffsetGreaterThan,
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
     * Get a contact bank account given contact id and bank account id (customer/employee/supplier). (Auth roles: ContactBankAccount, ContactBankAccount_Full, Customer, Customer_Full, Supplier, Supplier_Full, Employee, Employee_Full)
     * @returns ContactBankAccountDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getContactBankAccountsById({
        contactId,
        id,
    }: {
        /**
         * The id of the contact
         */
        contactId: number,
        /**
         * The id of the bank account
         */
        id: number,
    } = {} as any): CancelablePromise<ContactBankAccountDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ContactBankAccounts/{contactId}/{id}',
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
     * Delete an existing bank account on a contact (customer/employee/supplier) with a given id. (Auth roles: ContactBankAccount, ContactBankAccount_Full, Customer_Full, Supplier_Full, Employee_Full)
     * @returns any Given when resource returned successfully
     * @throws ApiError
     */
    public deleteContactBankAccounts({
        contactId,
        id,
    }: {
        /**
         * The id of the contact
         */
        contactId: number,
        /**
         * The id of the contact bank account
         */
        id: number,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/ContactBankAccounts/{contactId}/{id}',
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
     * Update an existing bank account on a contact (customer/employee/supplier) with a given id. (Auth roles: ContactBankAccount, ContactBankAccount_Full, Customer_Full, Supplier_Full, Employee_Full)
     * @returns ContactBankAccountDto Given when a resource was successfully updated
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchContactBankAccounts({
        contactId,
        id,
        requestBody,
    }: {
        contactId: number,
        id: number,
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<ContactBankAccountDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/ContactBankAccounts/{contactId}/{id}',
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
     * Add new bank account on a contact (customer/employee/supplier) with a given id. (Auth roles: ContactBankAccount_Full, Customer_Full, Supplier_Full, Employee_Full)
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns ContactBankAccountDto Given when a resource was created successfully
     * @throws ApiError
     */
    public postContactBankAccounts({
        contactId,
        requestBody,
    }: {
        contactId: number,
        requestBody?: ContactBankAccountPostDto,
    } = {} as any): CancelablePromise<any | ContactBankAccountDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ContactBankAccounts/{contactId}',
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
