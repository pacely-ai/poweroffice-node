/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The Employee payout bank accounts patch DTO contains properties relevant to altering payout bank accounts on an employee in Go.
 */
export type EmployeeBankAccountsPatchDto = {
    /**
     * The identifier of the bank account used for expense payments to the employee (norwegian: "utlegg").
     * If SalaryBankAccountId is set, and this is not set, the value of SalaryBankAccountId will be used. (inherited)
     */
    ExpenseBankAccountId?: number | null;
    /**
     * The identifier of the bank account used for salary payments.
     */
    SalaryBankAccountId?: number | null;
    /**
     * The identifier of the bank account used for travel expense payments to the employee (norwegian: "reiseregninger").
     * If SalaryBankAccountId is set, and this is not set, the value of SalaryBankAccountId will be used. (inherited)
     */
    TravelExpenseBankAccountId?: number | null;
};

