/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Months } from './Months';
/**
 * Financial settings on a client.
 */
export type FinancialSettingsDto = {
    /**
     * The start date of processing in Go. This is the date the client started using Go. Transactions can only be posted on or after this date. The date can also be used to identify the date of the startbalance in Go, which will be this date -1 day
     */
    readonly ConversionDate?: string;
    /**
     * The standard code of the currency the client use. As of now, only NOK is supported and this property will allways return NOK
     */
    readonly CurrencyCode?: string | null;
    /**
     * The general ledger account id of the account used for posting currency gains (agio). More information of accounts can be retrieved using the GeneralLedgerAccounts endpoint.
     */
    readonly CurrencyGainsAccountId?: number;
    /**
     * The general ledger account code of the account used for posting currency gains (agio). More information of accounts can be retrieved using the GeneralLedgerAccounts endpoint.
     */
    readonly CurrencyGainsAccountNo?: number;
    /**
     * The general ledger account id of the account used for posting currency losses (disagio). More information of accounts can be retrieved using the GeneralLedgerAccounts endpoint.
     */
    readonly CurrencyLossAccountId?: number;
    /**
     * The general ledger account code of the account used for posting currency losses (disagio). More information of accounts can be retrieved using the GeneralLedgerAccounts endpoint.
     */
    readonly CurrencyLossAccountNo?: number;
    FinancialYearEndMonth?: Months;
    /**
     * The last changed timestamp. Last changed will update when the settings are created, or whenever the settings are changed.
     */
    readonly LastChangedDateTimeOffset?: string;
    /**
     * A value indication whether the client use the trust account management functionality in Go.
     * Default to false, as the funcionality is optional for law firms, brokers and other firms subject of trust accounts.
     * If true, the client have dedicated trust bank accounts, and use projects in account transactions.
     */
    readonly UseTrustAccountManagement?: boolean | null;
};

