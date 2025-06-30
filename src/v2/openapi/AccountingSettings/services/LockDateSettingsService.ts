/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LockDateSettingsDto } from '../models/LockDateSettingsDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class LockDateSettingsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the lock date on the client. (Auth roles: CommonServices,CommonServices_Full)
     * @returns LockDateSettingsDto Given when resource was successfully returned.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getLockDate(): CancelablePromise<LockDateSettingsDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/LockDateSettings',
            errors: {
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
}
