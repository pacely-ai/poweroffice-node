/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Data transfer object for the bank approver POST method.
 */
export type BankApproverPostDto = {
    /**
     * The identifier of the bank account.
     */
    BankAccountId: number;
    /**
     * From date, inclusive.
     * The user will have access to approval on the account from this date.
     */
    FromDate?: string | null;
    /**
     * To date, inclusive.
     * The user will have access to approval on the account until and including this date.
     * Afterwards, the user is deactivated on the client.
     */
    ToDate?: string | null;
    /**
     * The identifier of the user.
     */
    UserId: string;
};

