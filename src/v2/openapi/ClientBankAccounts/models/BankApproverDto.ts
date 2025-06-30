/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Data transfer object for the bank approver.
 */
export type BankApproverDto = {
    /**
     * The identifier of the client bank account.
     */
    readonly BankAccountId?: number;
    /**
     * The client bank account number.
     */
    readonly BankAccountNumber?: string | null;
    /**
     * From date, inclusive.
     * The user will have access to approval on the account from this date.
     */
    readonly FromDate?: string | null;
    /**
     * The identifier of this bank approver (Bank Warrant).
     */
    readonly Id?: number;
    /**
     * Indicates whether the user is an active approver for the bank account.
     */
    readonly IsActiveApprover?: boolean;
    /**
     * To date, inclusive.
     * The user will have access to approval on the account until and including this date.
     * Afterwards, the user is deactivated on the client.
     */
    readonly ToDate?: string | null;
    /**
     * The identifier of the user.
     */
    readonly UserId?: string;
};

