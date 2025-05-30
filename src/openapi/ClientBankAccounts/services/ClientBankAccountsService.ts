/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientBankAccountDto } from '../models/ClientBankAccountDto';
import type { ClientBankAccountPostDto } from '../models/ClientBankAccountPostDto';
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ClientBankAccountsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the bank accounts registered on the client. (Auth roles: ClientBankAccount,ClientBankAccount_Full)
     * @returns ClientBankAccountDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getClientBankAccounts({
        bankAccountNumbers,
        createdDateTimeOffsetGreaterThan,
        lastChangedDateTimeOffsetGreaterThan,
        resourceParameter,
    }: {
        /**
         * Filter by client bank account number. Search string should be separated by comma. If filter string is null or whitespace, query is returned as is.
         */
        bankAccountNumbers?: string,
        /**
         * Filter by the client bank account created timestamp property. This filtering will return all client bank accounts with a created timestamp greater than the timestamp provided. Can be used when polling for new entries from Go. Timestamp not inclusive.
         */
        createdDateTimeOffsetGreaterThan?: string,
        /**
         * Filter by the client bank account last changed timestamp property. This filtering will return all client bank accounts with a last changed timestamp greater than the timestamp provided. Timestamp not inclusive.
         */
        lastChangedDateTimeOffsetGreaterThan?: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<ClientBankAccountDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ClientBankAccounts',
            query: {
                'bankAccountNumbers': bankAccountNumbers,
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
     * Create a new client bank account (Auth roles: ClientBankAccount_Full)
     * Bank account numbers are unique across all clients.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns ClientBankAccountDto Given when a resource was created successfully
     * @throws ApiError
     */
    public postClientBankAccounts({
        requestBody,
    }: {
        /**
         * A client bank account post dto
         */
        requestBody?: ClientBankAccountPostDto,
    } = {} as any): CancelablePromise<any | ClientBankAccountDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ClientBankAccounts',
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
     * Get a client bank account by id (Auth roles: ClientBankAccount,ClientBankAccount_Full)
     * @returns ClientBankAccountDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getClientBankAccountById({
        id,
    }: {
        /**
         * The identifier of a client bank account.
         */
        id: number,
    } = {} as any): CancelablePromise<ClientBankAccountDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ClientBankAccounts/{id}',
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
     * Update a bank account on the client (Auth roles: ClientBankAccount_Full)
     * @returns ClientBankAccountDto Given when a resource was updated successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchClientBankAccounts({
        id,
        requestBody,
    }: {
        /**
         * The identifier of a client bank account.
         */
        id: number,
        /**
         * JSON Patch structure for updating a ClientBankAccount. See ClientBankAccountPatchDto schema for all available properties.
         * For more information on JSON patch and the various operations allowed, check out: https://datatracker.ietf.org/doc/html/rfc6902
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<ClientBankAccountDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/ClientBankAccounts/{id}',
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
