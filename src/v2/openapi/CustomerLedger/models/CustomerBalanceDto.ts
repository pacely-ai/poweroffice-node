/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents a customer balance.
 */
export type CustomerBalanceDto = {
    /**
     * The current total balance of the customer, as of the date (inclusive) provided in the query.
     */
    readonly Balance?: number;
    /**
     * The customer account number for the related balance.
     * CustomerAccountNo will also represent the Customer number.
     * Customers can be queried and identified using the Customer service.
     */
    readonly CustomerAccountNo?: number | null;
    /**
     * The external number of the customer for the related balance, if set on the Customer entity.
     * An external number set on the customer is often used to reference the customer number in the external system, if the customer numbers are not kept in 1:1 sync between Go and the external system.
     * The field is available in the GUI with the name External Code.
     */
    readonly CustomerExternalNo?: number | null;
    /**
     * The identifier of the customer this balance is related to.
     * Customers can be queried and identified using the Customer service.
     */
    readonly CustomerId?: number | null;
    /**
     * The name of the customer for the related balance.
     * Customers can be queried and identified using the Customer service.
     */
    readonly CustomerName?: string | null;
};

