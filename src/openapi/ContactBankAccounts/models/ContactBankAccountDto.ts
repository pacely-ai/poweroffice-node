/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Properties of a contact bank account.
 */
export type ContactBankAccountDto = {
    /**
     * The bank account number
     */
    BankAccountNumber?: string | null;
    /**
     * The bank code. Only applicable and used for countries that does not support bicSwift.
     */
    BankCode?: string | null;
    /**
     * The BIC/SWIFT code.
     */
    BicSwift?: string | null;
    /**
     * The identifier of the contact (customer/employee/supplier) this bank account is for.
     */
    readonly ContactId?: number;
    /**
     * The ISO 3166-1 alfa-2 country code. Default is NO.
     */
    CountryCode?: string | null;
    /**
     * The timestamp of the created date of the contact bank account. UTC time.
     */
    readonly CreateDateTimeOffset?: string;
    /**
     * The identifier of the contact bank account.
     */
    readonly Id?: number;
    /**
     * A value indicating whether this bank account is active.
     */
    IsActive?: boolean | null;
    /**
     * The timestamp of the last change of the contact bank account. UTC time.
     */
    readonly LastChangedDateTimeOffset?: string;
};

