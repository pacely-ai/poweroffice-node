/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgricultureDepartment } from './AgricultureDepartment';
/**
 * Accrual (Norwegian: Periodisering)
 */
export type AccrualBase = {
    BalanceAccountAgricultureDepartment?: AgricultureDepartment;
    /**
     * The account id of the balance account used for the accrual balance
     * (norwegian: balansekonto benyttet for periodiseringen).
     */
    BalanceAccountId?: number | null;
    /**
     * The account number of the balance account used for the accrual balance
     * (norwegian: balansekonto benyttet for periodiseringen).
     */
    BalanceAccountNo?: number | null;
    /**
     * The start date of the accrual.
     */
    FromDate?: string;
    /**
     * Value indicating whether the accrual is active or not.
     */
    IsActive?: boolean;
    /**
     * The end date of the accrual.
     */
    ToDate?: string;
};

