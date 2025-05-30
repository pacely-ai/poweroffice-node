/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientContactDto } from '../models/ClientContactDto';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ClientContactsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the contacts registered in the client organization settings. (Auth roles: CommonServices,CommonServices_Full)
     * @returns ClientContactDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getClientContacts({
        resourceParameter,
    }: {
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<ClientContactDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ClientContacts',
            query: {
                'resourceParameter': resourceParameter,
            },
            errors: {
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
}
