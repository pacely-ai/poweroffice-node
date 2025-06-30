/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The payslip password type.<p>Members:</p><ul><li><i>None</i> - No password required.</li><li><i>Last5DigitsOfSsn</i> - The password is the last 5 digits of the employees social security number.</li><li><i>Last5DigitsOfBankAccountNo</i> - The password is the last 5 digits of the employees salary bank account number.</li><li><i>Postcode</i> - The password is the post code of the employees address.</li></ul>
 */
export enum PayslipPasswordType {
    NONE = 'None',
    LAST5DIGITS_OF_SSN = 'Last5DigitsOfSsn',
    LAST5DIGITS_OF_BANK_ACCOUNT_NO = 'Last5DigitsOfBankAccountNo',
    POSTCODE = 'Postcode',
}
