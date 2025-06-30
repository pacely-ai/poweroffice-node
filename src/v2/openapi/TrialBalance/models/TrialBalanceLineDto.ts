/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgricultureDepartment } from './AgricultureDepartment';
/**
 * TrialBalanceLine representing the balance on a General Ledger Account/> (Norwegian: Saldobalanse).
 */
export type TrialBalanceLineDto = {
    /**
     * The general ledger account id. The chart of accounts used on the client can be queried using the service GeneralLedgerAccount.
     */
    readonly AccountId?: number;
    /**
     * The name of the general ledger account. The chart of accounts used on the client can be queried using the service GeneralLedgerAccount.
     */
    readonly AccountName?: string | null;
    /**
     * The general ledger account number. The chart of accounts used on the client can be queried using the service GeneralLedgerAccount.
     */
    readonly AccountNo?: number;
    AgricultureDepartment?: AgricultureDepartment;
    /**
     * The balance amount for the Date provided. The balance includes transactions on that date. This amount is in the clients local currency.
     */
    readonly Balance?: number;
};

