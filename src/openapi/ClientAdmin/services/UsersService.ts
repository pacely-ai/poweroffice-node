/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddPartnerUserPostDto } from '../models/AddPartnerUserPostDto';
import type { InviteUserPostDto } from '../models/InviteUserPostDto';
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { UserDto } from '../models/UserDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UsersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the users of the given client.
     * Note: Only clients that belong to the partner are available. (Auth roles: ClientAdmin,ClientAdmin_Full)
     * @returns UserDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getClientAdminUsers({
        clientId,
        resourceParameter,
    }: {
        /**
         * The id of the client to get users from.
         */
        clientId: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<UserDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ClientAdmin/{clientId}/Users',
            path: {
                'clientId': clientId,
            },
            query: {
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
     * Gets a specific user on a given client.
     * Note: Only clients that belong to the partner are available. (Auth roles: ClientAdmin,ClientAdmin_Full)
     * @returns UserDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getUserById({
        clientId,
        userId,
    }: {
        /**
         * The id of the client.
         */
        clientId: string,
        /**
         * The id of the user.
         */
        userId: string,
    } = {} as any): CancelablePromise<UserDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ClientAdmin/{clientId}/Users/{userId}',
            path: {
                'clientId': clientId,
                'userId': userId,
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
     * Change an existing user on a client with a given (user) Id. (Auth roles: ClientAdmin_Full)
     * @returns UserDto Given when resource was successfully updated.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchClientAdminUsers({
        clientId,
        userId,
        requestBody,
    }: {
        /**
         * The id of the client.
         */
        clientId: string,
        /**
         * The id of the user to update.
         */
        userId: string,
        /**
         * JSON Patch structure for updating a user. See UserPatchDto schema for all available properties. For more information on JSON patch and the various operations allowed, check out: https://datatracker.ietf.org/doc/html/rfc6902
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<UserDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/ClientAdmin/{clientId}/Users/{userId}',
            path: {
                'clientId': clientId,
                'userId': userId,
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
     * Invite a user to a client. (Auth roles: ClientAdmin_Full)
     * @returns UserDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public postClientAdminUsersInvite({
        clientId,
        requestBody,
    }: {
        clientId: string,
        requestBody?: InviteUserPostDto,
    } = {} as any): CancelablePromise<UserDto | any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ClientAdmin/{clientId}/Users/Invite',
            path: {
                'clientId': clientId,
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
     * Add an existing partner user to a client. (Auth roles: ClientAdmin_Full)
     * @returns UserDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public postClientAdminUsersAddPartnerUser({
        clientId,
        requestBody,
    }: {
        clientId: string,
        requestBody?: AddPartnerUserPostDto,
    } = {} as any): CancelablePromise<UserDto | any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ClientAdmin/{clientId}/Users/AddPartnerUser',
            path: {
                'clientId': clientId,
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
