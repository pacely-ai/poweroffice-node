/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CurrencyDto } from '../models/CurrencyDto';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CurrenciesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the currencies set on the client. (Auth roles: CommonServices,CommonServices_Full)
     * Gets a list of all currencies available in Go.
     * The currencies in active use on the client has the property IsActive = true.
     * Active currencies can be used in GUI operations in Go, but does not affect which currencies that can be used when
     * posting transactions using the APIs
     * @returns CurrencyDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getCurrencies({
        currencyCode,
        isActive,
        resourceParameter,
    }: {
        /**
         * Filter by currency code.
         */
        currencyCode?: string,
        /**
         * Filter by isActive parameter..
         */
        isActive?: boolean,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<CurrencyDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Currencies',
            query: {
                'currencyCode': currencyCode,
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
}
