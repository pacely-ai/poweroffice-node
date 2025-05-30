/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CurrencyRateDto } from '../models/CurrencyRateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CurrencyRatesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get currency rate. (Auth roles: CommonServices,CommonServices_Full)
     * Get a currency exchange rate between two currencies for a given date.
     * Currency rate for a future date is not available, and will return the newest available rate.
     * The rates are updated daily around 1600 CET.
     * Rates originate from European Central Bank [https://data.ecb.europa.eu/currency-converter]
     * @returns CurrencyRateDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getCurrencyRates({
        fromCurrency,
        toCurrency,
        asOnDate,
    }: {
        fromCurrency: string,
        toCurrency: string,
        asOnDate: string,
    } = {} as any): CancelablePromise<CurrencyRateDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/CurrencyRates',
            query: {
                'fromCurrency': fromCurrency,
                'toCurrency': toCurrency,
                'asOnDate': asOnDate,
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
