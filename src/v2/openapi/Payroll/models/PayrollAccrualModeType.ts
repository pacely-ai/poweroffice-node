/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The payroll accrual mode.<p>Members:</p><ul><li><i>None</i> - Does not suggest accrual date when creating payroll.</li><li><i>LastDayOfPreviousMonth</i> - Suggests the last day of the previous month as accrual date.</li><li><i>SameDayPreviousMonth</i> - Suggest the same day (as the payroll date) of the previous month as accrual date.</li></ul>
 */
export enum PayrollAccrualModeType {
    NONE = 'None',
    LAST_DAY_OF_PREVIOUS_MONTH = 'LastDayOfPreviousMonth',
    SAME_DAY_PREVIOUS_MONTH = 'SameDayPreviousMonth',
}
