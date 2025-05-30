/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Enum defining the posting types of a pay item.<p>Members:</p><ul><li><i>GeneralLedgerAccount</i> - Posting on a general ledger account.</li><li><i>EmployeeLedgerAccount</i> - Posting on a employee ledger account.
 * If set, only the opposite account id is relevant to set.</li></ul>
 */
export enum PostingType {
    GENERAL_LEDGER_ACCOUNT = 'GeneralLedgerAccount',
    EMPLOYEE_LEDGER_ACCOUNT = 'EmployeeLedgerAccount',
}
