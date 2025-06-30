/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GeneralLedgerAccountDto } from '../models/GeneralLedgerAccountDto';
import type { GeneralLedgerAccountPostDto } from '../models/GeneralLedgerAccountPostDto';
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class GeneralLedgerAccountsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a list of general ledger accounts. (Auth roles: GeneralLedgerAccount,GeneralLedgerAccount_Full)
     * @returns GeneralLedgerAccountDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getGeneralLedgerAccounts({
        accountNos,
        agricultureDepartments,
        lastChangedDateTimeOffsetGreaterThan,
        resourceParameter,
    }: {
        /**
         * Filter by account numbers. Separate by comma [,] to filter on multiple account numbers. A range of numbers can be specified using dash/hyphen [-]. For example "1000-1999, 2500, 3000-" will result in accounts with account numbers from and including 1000 to 1999, 2500, 3000 and all above will be returned. If null or whitespace, the filter is not used.
         */
        accountNos?: string,
        /**
         * Filter by agriculture departments. Separate by comma [,] to filter on multiple agriculture departments.
         */
        agricultureDepartments?: string,
        /**
         * Filter by last changed timestamp.
         */
        lastChangedDateTimeOffsetGreaterThan?: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<GeneralLedgerAccountDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/GeneralLedgerAccounts',
            query: {
                'accountNos': accountNos,
                'agricultureDepartments': agricultureDepartments,
                'lastChangedDateTimeOffsetGreaterThan': lastChangedDateTimeOffsetGreaterThan,
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
     * Create a new general ledger account with setting. (Auth roles: GeneralLedgerAccount_Full)
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns GeneralLedgerAccountDto Given when resource was successfully created
     * @throws ApiError
     */
    public postGeneralLedgerAccounts({
        requestBody,
    }: {
        requestBody?: GeneralLedgerAccountPostDto,
    } = {} as any): CancelablePromise<any | GeneralLedgerAccountDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/GeneralLedgerAccounts',
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
     * Get a GeneralLedgerAccount by ID (Auth roles: GeneralLedgerAccount,GeneralLedgerAccount_Full)
     * @returns GeneralLedgerAccountDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getGeneralLedgerAccountById({
        id,
    }: {
        id: number,
    } = {} as any): CancelablePromise<GeneralLedgerAccountDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/GeneralLedgerAccounts/{id}',
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
     * Update an existing general ledger account. (Auth roles: GeneralLedgerAccount_Full)
     * @returns GeneralLedgerAccountDto Given when resource was successfully updated
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchGeneralLedgerAccounts({
        id,
        requestBody,
    }: {
        /**
         * The id of the general ledger account.
         */
        id: number,
        /**
         * JSON Patch structure for updating a General Ledger Account. See GeneralLedgerAccountPatchDto schema for all available properties. For more information on JSON patch and the various operations allowed, check out: https://datatracker.ietf.org/doc/html/rfc6902
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<GeneralLedgerAccountDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/GeneralLedgerAccounts/{id}',
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
    /**
     * Deletes a General Ledger Account with a given id. (Auth roles: GeneralLedgerAccount_Full)
     * @returns any Given when employee is deleted
     * @throws ApiError
     */
    public deleteGeneralLedgerAccounts({
        id,
    }: {
        id: number,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/GeneralLedgerAccounts/{id}',
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
