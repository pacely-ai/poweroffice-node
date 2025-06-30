/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Data transfer object for the bank approver PATCH method.
 */
export type BankApproverPatchDto = {
    /**
     * From date, inclusive.
     * The user will have access to approval on the account from this date.
     */
    FromDate?: string | null;
    /**
     * Indicates whether the user is an active approver for the bank account.
     */
    IsActiveApprover?: boolean | null;
    /**
     * To date, inclusive.
     * The user will have access to approval on the account until and including this date.
     * Afterwards, the user is deactivated on the client.
     */
    ToDate?: string | null;
};

