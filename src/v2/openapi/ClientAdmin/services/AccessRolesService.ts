/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessRoleDto } from '../models/AccessRoleDto';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { UserAccessRoleDto } from '../models/UserAccessRoleDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AccessRolesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the clients a given user have access to along with the access role the user have on the client. (Auth roles: ClientAdmin,ClientAdmin_Full)
     * @returns UserAccessRoleDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getClientAdminUserAccessRoles({
        userId,
        resourceParameter,
    }: {
        /**
         * The id of the user.
         */
        userId: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<UserAccessRoleDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ClientAdmin/{userId}/UserAccessRoles',
            path: {
                'userId': userId,
            },
            query: {
                'resourceParameter': resourceParameter,
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
     * Gets the access roles defined on a given client. (Auth roles: ClientAdmin,ClientAdmin_Full)
     * @returns AccessRoleDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getClientAdminAccessRoles({
        clientId,
        resourceParameter,
    }: {
        /**
         * The id of the client.
         */
        clientId: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<AccessRoleDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ClientAdmin/{clientId}/AccessRoles',
            path: {
                'clientId': clientId,
            },
            query: {
                'resourceParameter': resourceParameter,
            },
            errors: {
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                404: `Given when resource was not found`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
}
