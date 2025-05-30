/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CurrencyRateDto = {
    /**
     * The currency code.
     */
    readonly CurrencyCode?: string | null;
    /**
     * The base amount used for calculating the exchange rate. Typically, this is a fixed amount like 1 or 100 units of the base currency.
     */
    readonly ExchangeBase?: number;
    /**
     * The currency exchange rate
     */
    readonly ExchangeRate?: number;
    /**
     * The date of the currency rate
     */
    readonly RateDate?: string;
    /**
     * The reverse exchange rate
     */
    readonly ReverseExchangeRate?: number;
};

