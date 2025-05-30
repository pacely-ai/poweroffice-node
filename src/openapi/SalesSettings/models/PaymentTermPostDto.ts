/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * DTO for creating payment terms.
 */
export type PaymentTermPostDto = {
    /**
     * The number of credit days for the payment term.
     * This define the number of days from an invoice is sent until it is due paid, if a sales order is invoiced using this payment term.
     */
    CreditDays: number | null;
    /**
     * Value indicating whether this payment term is active.
     */
    IsActive?: boolean | null;
    /**
     * A value indicating if this payment term is the standard payment term set on the client.
     * Customers and sales orders will default inherit the standard payment term from the client invoice settings.
     */
    IsDefault?: boolean | null;
    /**
     * The name of the payment term.
     * Max length is 128 characters.
     */
    Name: string | null;
};

