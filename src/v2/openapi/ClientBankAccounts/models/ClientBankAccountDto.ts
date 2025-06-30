/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgricultureDepartment } from './AgricultureDepartment';
/**
 * Data transfer object for the client bank account.
 */
export type ClientBankAccountDto = {
    /**
     * A value indicating whether an incoming payment service integration is active on this bank account (typically an OCR service).
     */
    readonly ActiveIncomingPaymentService?: boolean | null;
    /**
     * A value indicating whether an outgoing payment service (remittance service) integration is active on this bank account.
     */
    readonly ActiveOutgoingPaymentServices?: boolean | null;
    AgricultureDepartment?: AgricultureDepartment;
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
     * The timestamp of the created date of the client bank account. UTC time.
     */
    readonly CreatedDateTimeOffset?: string;
    /**
     * The standard code of the currency associated with the client bank account.
     */
    CurrencyCode?: string | null;
    /**
     * The identifier of the general ledger account this bank account is associated with.
     */
    GeneralLedgerAccountId?: number;
    /**
     * The general ledger account this bank account is associated with.
     */
    readonly GeneralLedgerAccountNo?: number;
    /**
     * The identifier of the client bank account. This identifier is unique and assigned by PowerOffice Go when a new entity is saved.
     */
    readonly Id?: number;
    /**
     * A value indicating whether this bank account is active. Inactive bank accounts disable the usage of that bank account in the GUI.
     */
    IsActive?: boolean | null;
    /**
     * A value indicating whether this is a bank account containing client trust funds (example use cases: real estate brokers, lawyers).
     */
    IsClientTrustAccount?: boolean | null;
    /**
     * A value indicating whether this is the primary account for the clients day to day operations (Norwegian: Driftskonto).
     */
    readonly IsPrimaryAccount?: boolean | null;
    /**
     * The timestamp of the last change of the client bank account. UTC time.
     */
    readonly LastChangedDateTimeOffset?: string;
    /**
     * The overdraft limit for the bank account, if set. Available only for bank accounts with overdraft enabled.
     */
    OverdraftLimit?: number | null;
};

