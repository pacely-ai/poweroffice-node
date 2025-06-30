/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Enum defining the days in a week for the holiday pay settings
 * and how the wage deduction will be calculated.<p>Members:</p><ul><li><i>FiveDays</i> - A week have 5 working days,
 * and the calculation for wage deduction use 22 days in the denominator.</li><li><i>FiveDays_21_67</i> - A week have 5 working days,
 * and the calculation for wage deduction use 21.67 days in the denominator.</li><li><i>SixDays</i> - A week have 6 working days,
 * and the calculation for wage deduction use 26 days in the denominator.</li></ul>
 */
export enum DaysInWeekHolidayPay {
    FIVE_DAYS = 'FiveDays',
    FIVE_DAYS_21_67 = 'FiveDays_21_67',
    SIX_DAYS = 'SixDays',
}
