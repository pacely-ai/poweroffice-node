/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Properties for creating a client bank account
 */
export type ClientBankAccountPostDto = {
    /**
     * A value indicating whether this bank account can be overdrawn (Norwegian: Kassekreditt).
     */
    AllowOverdraft?: boolean | null;
    /**
     * The bank account number.
     */
    BankAccountNumber: string;
    /**
     * The name of the bank.
     */
    BankName?: string | null;
    /**
     * The BIC Swift code of the bank.
     */
    BicSwift: string;
    /**
     * The ISO 3166-1 alfa-2 country code (two characters).
     */
    CountryCode: string;
    /**
     * The standard code of the currency associated with the client bank account.
     */
    CurrencyCode: string | null;
    /**
     * The identifier of the general ledger account this bank account is associated with.
     */
    GeneralLedgerAccountId: number;
    /**
     * A value indicating whether this bank account is active. Inactive bank accounts disable the usage of that bank account in the GUI.
     */
    IsActive?: boolean | null;
    /**
     * A value indicating whether this is a bank account containing client trust funds (example use cases: real estate brokers, lawyers).
     */
    IsClientTrustAccount?: boolean | null;
    /**
     * The overdraft limit for the bank account, if set. Available only for bank accounts with overdraft enabled.
     */
    OverdraftLimit?: number | null;
};

