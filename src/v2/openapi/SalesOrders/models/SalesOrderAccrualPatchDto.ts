/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Accrual (Norwegian: Periodisering) for sales order lines
 */
export type SalesOrderAccrualPatchDto = {
    /**
     * The account id of the balance account used for the accrual balance
     * (norwegian: balansekonto benyttet for periodiseringen).
     */
    BalanceAccountId?: number | null;
    /**
     * The start date of the accrual.
     */
    FromDate?: string;
    /**
     * Value indicating whether the accrual is active or not.
     */
    IsActive?: boolean;
    /**
     * The account id of the result account used for the posting of the accrued revenue
     * (norwegian: resultatkonto benyttet for periodiseringen).
     */
    ResultAccountId?: number | null;
    /**
     * The end date of the accrual.
     */
    ToDate?: string;
};

