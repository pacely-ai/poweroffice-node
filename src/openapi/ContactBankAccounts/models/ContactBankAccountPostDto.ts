/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Properties to create a new contact bank account
 */
export type ContactBankAccountPostDto = {
    /**
     * The bank account number
     */
    BankAccountNumber: string | null;
    /**
     * The bank code. Only applicable and used for countries that does not support bicSwift.
     */
    BankCode?: string | null;
    /**
     * The BIC/SWIFT code.
     */
    BicSwift?: string | null;
    /**
     * The ISO 3166-1 alfa-2 country code. Default is NO.
     */
    CountryCode?: string | null;
    /**
     * A value indicating whether this bank account is active.
     */
    IsActive?: boolean | null;
};

