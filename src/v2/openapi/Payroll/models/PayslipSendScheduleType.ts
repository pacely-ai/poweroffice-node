/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The payslip send schedule type.<p>Members:</p><ul><li><i>OnApproval</i> - The payslip is sent on approval.</li><li><i>OnPaymentDate</i> - The payslip is sent on the payment date.</li><li><i>OneDayBeforePayment</i> - The payslip is sent one day before the payment date.</li><li><i>TwoDaysBeforePayment</i> - The payslip is sent two days before the payment date.</li></ul>
 */
export enum PayslipSendScheduleType {
    ON_APPROVAL = 'OnApproval',
    ON_PAYMENT_DATE = 'OnPaymentDate',
    ONE_DAY_BEFORE_PAYMENT = 'OneDayBeforePayment',
    TWO_DAYS_BEFORE_PAYMENT = 'TwoDaysBeforePayment',
}
