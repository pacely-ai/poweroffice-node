/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientDto } from '../models/ClientDto';
import type { ClientPostDto } from '../models/ClientPostDto';
import type { NewIntegrationDto } from '../models/NewIntegrationDto';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ClientsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets all the clients the partner has access to. (Auth roles: ClientAdmin,ClientAdmin_Full)
     * @returns ClientDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getClientAdminClients({
        isActive,
        resourceParameter,
    }: {
        /**
         * Filter clients based on active status.
         */
        isActive?: boolean,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<ClientDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ClientAdmin/Clients',
            query: {
                'isActive': isActive,
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
     * Create a new client in Go, optionally based on a template client.
     * Elements inherited from a template client set, include roles, general ledger accounts, activities, branding themes, and Altinn settings. (Auth roles: ClientAdmin_Full)
     * If successful, the new entity will be returned with an (client) id which is unique and can be used to reference the created object in relevant requests.
     * @returns ClientDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public postClientAdminCreateNewClient({
        requestBody,
    }: {
        requestBody?: ClientPostDto,
    } = {} as any): CancelablePromise<ClientDto | any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ClientAdmin/CreateNewClient',
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
     * Add the (currently authenticated) partner integration to an existing client belonging to the partner, and get the client-key (Norsk: klientnøkkel) in return.
     * Further api-calls can then be performed on the specific client using the newly created client credentials. (Auth roles: ClientAdmin_Full)
     * @returns NewIntegrationDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public postClientAdminAddIntegrationToClient({
        clientId,
    }: {
        clientId: string,
    } = {} as any): CancelablePromise<NewIntegrationDto | any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ClientAdmin/AddIntegrationToClient/{clientId}',
            path: {
                'clientId': clientId,
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
}
