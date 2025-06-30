/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientIntegrationInformationDto } from '../models/ClientIntegrationInformationDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ClientIntegrationInformationService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get information about the integration. (Auth)
     * @returns ClientIntegrationInformationDto OK
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getClientIntegrationInformation(): CancelablePromise<ClientIntegrationInformationDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ClientIntegrationInformation',
            errors: {
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
}
