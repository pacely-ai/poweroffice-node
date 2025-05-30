/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BankApproverDto } from '../models/BankApproverDto';
import type { BankApproverPostDto } from '../models/BankApproverPostDto';
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ClientBankAccountApproversService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List all bank approvers. (Auth roles: ClientBankAccount,ClientBankAccount_Full)
     * @returns BankApproverDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getClientBankAccountsBankApprovers({
        bankAccountNumbers,
        userIds,
        resourceParameter,
    }: {
        /**
         * Filter by bank account numbers. Separate by comma [,] to filter on multiple bank accounts. If null or whitespace, all bank accounts are returned (filter is not used).
         */
        bankAccountNumbers?: string,
        /**
         * Filter by user ids. Separate by comma [,] to filter on multiple users. If null or whitespace, all users are returned (filter is not used).
         */
        userIds?: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<BankApproverDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ClientBankAccounts/BankApprovers',
            query: {
                'bankAccountNumbers': bankAccountNumbers,
                'userIds': userIds,
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
     * Create a new bank approver. (Auth roles: ClientBankAccount_Full)
     * If successful, the new entity will be returned with an id which is unique and can be used to reference the created object in relevant requests.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns BankApproverDto Given when resource was successfully created.
     * @throws ApiError
     */
    public postClientBankAccountsBankApprovers({
        requestBody,
    }: {
        /**
         * Bank approver post dto
         */
        requestBody?: BankApproverPostDto,
    } = {} as any): CancelablePromise<any | BankApproverDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ClientBankAccounts/BankApprovers',
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
     * Get a specific bank approver by Id. (Auth roles: ClientBankAccount,ClientBankAccount_Full)
     * @returns BankApproverDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getBankApproverById({
        id,
    }: {
        /**
         * The id of the bank approver.
         */
        id: number,
    } = {} as any): CancelablePromise<BankApproverDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ClientBankAccounts/BankApprovers/{id}',
            path: {
                'id': id,
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
     * Make changes to a specific bank approver. (Auth roles: ClientBankAccount_Full)
     * @returns BankApproverDto Given when resource was successfully updated.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchClientBankAccountsBankApprovers({
        id,
        requestBody,
    }: {
        /**
         * The id of the bank approver.
         */
        id: number,
        /**
         * JSON Patch structure for updating an approver. See BankApproverPatchDto schema for all available properties. For more information on JSON patch and the various operations allowed, check out: https://datatracker.ietf.org/doc/html/rfc6902
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<BankApproverDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/ClientBankAccounts/BankApprovers/{id}',
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
