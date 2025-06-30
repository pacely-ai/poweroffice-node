/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Project billing method describing how a project is billed to the customer.<p>Members:</p><ul><li><i>FixedPrice</i> - Fixed price</li><li><i>Time</i> - Only billable hours</li><li><i>TimeAndExpenses</i> - Billable hours and other expenses</li></ul>
 */
export enum ProjectBillingMethod {
    FIXED_PRICE = 'FixedPrice',
    TIME = 'Time',
    TIME_AND_EXPENSES = 'TimeAndExpenses',
}
