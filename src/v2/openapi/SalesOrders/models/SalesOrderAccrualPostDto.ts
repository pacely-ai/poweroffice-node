/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgricultureDepartment } from './AgricultureDepartment';
/**
 * Accrual (Norwegian: Periodisering) for sales order line
 */
export type SalesOrderAccrualPostDto = {
    BalanceAccountAgricultureDepartment?: AgricultureDepartment;
    /**
     * The account id of the balance account used for the accrual balance
     * (norwegian: balansekonto benyttet for periodiseringen).
     * Note that if BalanceAccountNo is set as well in the request, BalanceAccountId takes precedence and BalanceAccountNo is ignored.
     */
    BalanceAccountId?: number | null;
    /**
     * The account number of the balance account used for the accrual balance
     * (norwegian: balansekonto benyttet for periodiseringen).
     * Note that if BalanceAccountId is set as well in the request, BalanceAccountId takes precedence and BalanceAccountNo is ignored.
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
    ResultAccountAgricultureDepartment?: AgricultureDepartment;
    /**
     * The account id of the result account used for the posting of the accrued revenue
     * (norwegian: resultatkonto benyttet for periodiseringen).
     * Note that if ResultAccountNo is set as well in the request, ResultAccountId takes precedence and ResultAccountNo is ignored.
     */
    ResultAccountId?: number | null;
    /**
     * The account number of the result account used for the posting of the accrued revenue
     * (norwegian: resultatkonto benyttet for periodiseringen).
     * Note that if ResultAccountId is set as well in the request, ResultAccountId takes precedence and ResultAccountNo is ignored.
     */
    ResultAccountNo?: number | null;
    /**
     * The end date of the accrual.
     */
    ToDate?: string;
};

