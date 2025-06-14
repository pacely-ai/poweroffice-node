/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Enum defining the processing type of a pay item.<p>Members:</p><ul><li><i>AttachmentOfEarnings</i> - Attachment of earnings.
 * This processing type require the deduction type field and the supplier id field to be set on a salary line.
 * Allows for setting the amount or the rate on salary lines depending on the deduction type.
 * Also allow for setting the following fields on salary lines - the start amount, supplier bank account, from and to date, use remittance and cid.</li><li><i>AttachmentOfEarningsTax</i> - Attachment of earnings to cover taxes.
 * Note that this processing type needs to be done after trade union and pension deduction.
 * This processing type require the deduction type field and the income year field to be set on a salary line.
 * Allows for setting the amount or the rate on salary lines depending on the deduction type.
 * Also allow for setting the following fields on salary lines - the start amount, from date and to date.</li><li><i>BackPaymentOfPensionAndAnnuities</i> - Post-payment of pension and annuity. Requires from / until date.
 * (Norwegian - Etterbetaling av pensjon og livrente).
 * This processing type require the amount field to be set on a salary line, and allows for the from and to date fields to be set.</li><li><i>CommuterWithNumberOfJourneys</i> - Travel cost and lodging (often commuters) that will report number of journeys.
 * This processing type require the amount field and number field to be set on a salary line.</li><li><i>CommuterWithPersonType</i> - Travel cost and lodging (often commuters) that will report type of commuter.
 * This processing type require the amount field and the person type field to be set on a salary line.</li><li><i>CommuterWithPersonTypeAndQuantity</i> - Travel cost and lodging (often commuters) that will report type of commuter and quantity.
 * This processing type require the amount field, the quantity field and the person type field to be set on a salary line.</li><li><i>CommuterWithPersonTypeQuantityAndRate</i> - Travel cost and lodging (often commuters) that will report type of commuter, quantity and calculate with a rate.
 * This processing type require the quantity field and the person type field to be set on a salary line, and allows for setting the rate field on a salary line.</li><li><i>CorrectionOfAdditionalEmployersContribution</i> - Correction of additional employer's contribution.
 * This processing type require the amount field to be set on salary lines, and the amount should be considered as the bases amount, not the direct employer contribution amount.</li><li><i>CorrectionOfEmployersContribution</i> - Correction of employer's contribution.
 * This processing type require the amount field to be set on salary lines, and the amount should be considered as the bases amount, not the direct employer contribution amount.</li><li><i>CorrectionOfEmployersContributionAfterUsedFreeAmount</i> - Correction of employer's contribution after used free amount.
 * This processing type require the amount field to be set on salary lines, and the amount should be considered as the bases amount, not the direct employer contribution amount.</li><li><i>DeductionWithBalance</i> - Deduction that has a start balance that should be reduced each payroll.
 * This processing type require setting the field deduction type on salary lines, and the deduction type allows for either amount or rate to be set.
 * Also allows for setting the fields from date and to date.</li><li><i>ElectronicCommunications</i> - The electronic communications.
 * This processing type allow for the amount field to be set on a salary line.</li><li><i>ExpenseRefund</i> - An expense refund.
 * This processing type require the amount field on a salary line, and allows for the vatcode id to be set on the salary line.
 * Vatcode will default to the vatcode of the account used, if not set.</li><li><i>FixedAmount</i> - Fixed amount.
 * This processing type require the amount field to be set on a salary line.</li><li><i>FixedAmountWithQuantity</i> - Fixed amount with variable quantity.
 * This processing type require both the amount field and the quantity field to be set on a salary line.</li><li><i>FixedAmountWithQuantitySubjectToWithholdingTax</i> - Fixed amount with quantity subject to withholding tax.
 * Link to another pay item. This processing type require both the amount field and the quantity field to be set on a salary line.</li><li><i>FixedSalary</i> - Fixed salary.
 * This processing type allows for the amount field to be set on salary lines.
 * For employees with employments that have fixed pay as the remuneration type, the amount field will default inherit the monthly pay calculated from the annal salary, unless overriden in the amount field on salary lines.</li><li><i>FiveDayWeek</i> - Daily wage, 5 day week.
 * This processing type require the quantity field to be set on salary lines.
 * Allow for the rate field to be set on salary lines.
 * The system will calculate a rate if not set/overridden on the salary line.</li><li><i>FreeCarOther</i> - Used when the car is very expensive and the benefit becomes unreasonably high.
 * This processing type require the car list price field to be set on a salary line, and either car registration number or car pool need to be set.
 * Also allows for setting the amount field.</li><li><i>FreeCarOutsideStandardRule</i> - Used on larger vehicles (more than 7500kg) or buses with more than 15 passenger seats.
 * This processing type require both the car registration date field and the car list price field to be set on a salary line,
 * and also allows for setting the fields for amount, home to work kilometers, and private driven kilometers.</li><li><i>FreeCarStandardRule</i> - The free car standard rule.
 * This processing type require both the car registration date field and the car list price field to be set on a salary line,
 * and either car registration number or car pool need to be set.
 * Also allows for setting the field work drive exceeds kilometer limit.</li><li><i>HolidayPay</i> - Holiday pay.
 * No tax should be calculated from this amount.
 * This processing type allow for the amount field to be set on a salary line.</li><li><i>HolidayPayCorrection</i> - Correction of holiday pay under 60.
 * This processing type require the amount field on a salary line, and allows for the income year field to be set on a salary line.</li><li><i>HolidayPayCorrectionOver60</i> - Correction of holiday pay over 60.
 * This processing type require the amount field on a salary line, and allows for the income year field to be set on a salary line.</li><li><i>HolidayPayFinalSettlement</i> - The holiday pay final settlement.
 * Used when an employee quits their job and want all of this years holiday pay paid.
 * Taxes should be calculated from this amount.
 * This must be calculated after all pay items that have IncludeInHolidayPay set to true.
 * This processing type require the amount field to be set on a salary line.</li><li><i>HolidayPayForSpecifiedYear</i> - Same as Holiday Pay, except the user is allowed to select the holiday pay year.
 * This processing type allow for the amount field and the income year field to be set on a salary line.</li><li><i>HolidayPayOver60Years</i> - The holiday pay for employees that are 60 years or older.
 * Taxes should be calculated from this amount.
 * This processing type allow for the amount field and the income year field to be set on a salary line.</li><li><i>HomeVisitsForCommuters</i> - Home visits for commuters.
 * This processing type require the amount field, the number field and the person type field to be set on a salary line.</li><li><i>HourlyWage</i> - Hourly wage.
 * This processing type require the quantity field to be set on a salary line, and allows for the rate field to be set on a salary line.
 * If the rate is not set/overridden on a salary line, the rate will inherit the hourly wage set or calculated from the current active employment salary of the employee.</li><li><i>Lott</i> - Lott that will report number of days.
 * This processing type require the amount field and the number field to be set on a salary line.</li><li><i>PensionDeduction</i> - Pension deduction limited to 2% of 1G.
 * This processing type require the deduction type field to be set on a salary line.
 * Allows for setting the amount or the rate on salary lines depending on the deduction type, as well as the member number.</li><li><i>PensionDeductionUnlimited</i> - Pension deduction not limited to 2% of 1G.
 * This processing type require the deduction type field to be set on a salary line.
 * Allows for setting the amount or the rate on salary lines depending on the deduction type, as well as the member number.</li><li><i>PercentOfFixedSalary</i> - Percent of fixed salary.
 * This processing type allows for the fields amount and rate to be set on a salary line.
 * The amount field is calculated by the system if not set/overriden on the salary line.
 * The rate will be given by the pay item, if not set/overridden on the salary line.</li><li><i>PercentOfHourlyWage</i> - Percent of hourly wage (overtime).
 * Allows the percentage property to be set on the pay item.
 * This processing type require the quantity field to be set on a salary line, and allows for the rate field to be set on a salary line.
 * If the rate is not set/overridden on a salary line, the rate will inherit the hourly wage set or calculated from the current active employment salary of the employee.
 * The percentage of the pay item will increase/decrease the rate accordingly.</li><li><i>QuantityAndFixedRate</i> - Rate based with quantity and a fixed rate specified on pay item level.
 * This processing type require the quantity field to be set on a salary line, the rate will be given by the pay item.
 * If rate is set on the salary line, it will override the rate set on the pay item.</li><li><i>QuantityAndFixedRateReportingZeroAsQuantity</i> - Rate based with quantity and a fixed rate specified on pay item level, that always reports 0 as quantity in A-melding (A02).
 * This processing type require the quantity field to be set on a salary line, the rate will be given by the pay item.
 * If rate is set on the salary line, it will override the rate set on the pay item.</li><li><i>QuantityAndRate</i> - Based on quantity and rate.
 * This processing type require both the quantity field and the rate field to be set on a salary line.</li><li><i>QuantityAndRateReportingZeroAsQuantity</i> - Rate based with quantity and rate, that always reports 0 as quantity in A02.
 * This processing type require both the quantity field and the rate field to be set on a salary line.</li><li><i>QuantityAndRateSubjectToWithholdingTax</i> - Pay items with this processing type is the same as "quantity and rate" but have a link to another pay item where extra tax should be withheld.
 * This processing type require both the quantity field and the rate field to be set on a salary line.</li><li><i>RetroactivePaymentFixedSalary</i> - Retroactive payment fixed salary.
 * This processing type calculates the difference between the expected amount and the amount given for each month in the payroll year.
 * It requires the amount field to be set on a salary line.</li><li><i>RetroactivePaymentHourlyRate</i> - Retroactive payment hourly rate.
 * This processing type calculates the difference between the expected amount and the amount given for each month in the payroll year.
 * It requires the amount field to be set on a salary line.</li><li><i>RetroactivePaymentOvertime</i> - Retroactive payment overtime.
 * This processing type calculates the difference between the expected amount and the amount given for each month in the payroll year.
 * It requires the amount field to be set on a salary line.</li><li><i>RetroactivePaymentDeductionForHoliday</i> - Retroactive payment deduction for holiday.
 * This processing type calculates the difference between the expected amount and the amount given for each month in the payroll year.
 * It requires the amount field to be set on a salary line.</li><li><i>SalaryAdvance</i> - Used when giving an employee a salary advance.
 * This processing type require the amount field to be set on a salary line.</li><li><i>SeafarersAllowanceDaysAtSea</i> - Special allowance for seafarers, based on the number of days at sea.
 * This processing type require the number field to be set on a salary line.</li><li><i>SeafarersAllowanceDeduction</i> - Special allowance for seafarers, with tax deduction.
 * Note that this processing type needs to be done after trade union and pension deduction.
 * No variables needed on a salary line with a pay item using this processing type.</li><li><i>SixDayWeek</i> - Daily wage, 6 day week.
 * This processing type require the quantity field to be set on salary lines.
 * Allow for the rate field to be set on salary lines.
 * The system will calculate a rate if not set/overridden on the salary line.</li><li><i>TradeUnionDeduction</i> - Trade union deduction.
 * This processing type require the supplier field to be set on a salary line.
 * Also allows for setting the following fields on a salary line - the amount, the rate, the minimum amount, the member number, the maximum amount, the supplier bank account id, the use remittance, and the cid.</li><li><i>WageDeductionForHoliday</i> - Deduction in fixed pay for taking a holiday.
 * This processing type allow for the amount field to be set on a salary line.</li><li><i>WageDeductionForHolidayOver60Years</i> - Deduction in fixed pay for taking a holiday.
 * This processing type allow for the amount field to be set on a salary line.</li><li><i>WorkCarKilometers</i> - Used for small commercial trucks less than 7501kg based on the number of km driven privately by the employee.
 * This processing type require both the car list price field and the private driven kilometers field to be set on a salary line, and also allows for setting the field amount.</li><li><i>WorkCarListPrice</i> - Used for small commercial trucks less than 7501kg based on the list price.
 * This processing type require setting the fields for car registration date, car list price and car registration number on a salary line.Also allows for setting the field amount.</li></ul>
 */
export enum ProcessingType {
    ATTACHMENT_OF_EARNINGS = 'AttachmentOfEarnings',
    ATTACHMENT_OF_EARNINGS_TAX = 'AttachmentOfEarningsTax',
    BACK_PAYMENT_OF_PENSION_AND_ANNUITIES = 'BackPaymentOfPensionAndAnnuities',
    COMMUTER_WITH_NUMBER_OF_JOURNEYS = 'CommuterWithNumberOfJourneys',
    COMMUTER_WITH_PERSON_TYPE = 'CommuterWithPersonType',
    COMMUTER_WITH_PERSON_TYPE_AND_QUANTITY = 'CommuterWithPersonTypeAndQuantity',
    COMMUTER_WITH_PERSON_TYPE_QUANTITY_AND_RATE = 'CommuterWithPersonTypeQuantityAndRate',
    CORRECTION_OF_ADDITIONAL_EMPLOYERS_CONTRIBUTION = 'CorrectionOfAdditionalEmployersContribution',
    CORRECTION_OF_EMPLOYERS_CONTRIBUTION = 'CorrectionOfEmployersContribution',
    CORRECTION_OF_EMPLOYERS_CONTRIBUTION_AFTER_USED_FREE_AMOUNT = 'CorrectionOfEmployersContributionAfterUsedFreeAmount',
    DEDUCTION_WITH_BALANCE = 'DeductionWithBalance',
    ELECTRONIC_COMMUNICATIONS = 'ElectronicCommunications',
    EXPENSE_REFUND = 'ExpenseRefund',
    FIXED_AMOUNT = 'FixedAmount',
    FIXED_AMOUNT_WITH_QUANTITY = 'FixedAmountWithQuantity',
    FIXED_AMOUNT_WITH_QUANTITY_SUBJECT_TO_WITHHOLDING_TAX = 'FixedAmountWithQuantitySubjectToWithholdingTax',
    FIXED_SALARY = 'FixedSalary',
    FIVE_DAY_WEEK = 'FiveDayWeek',
    FREE_CAR_OTHER = 'FreeCarOther',
    FREE_CAR_OUTSIDE_STANDARD_RULE = 'FreeCarOutsideStandardRule',
    FREE_CAR_STANDARD_RULE = 'FreeCarStandardRule',
    HOLIDAY_PAY = 'HolidayPay',
    HOLIDAY_PAY_CORRECTION = 'HolidayPayCorrection',
    HOLIDAY_PAY_CORRECTION_OVER60 = 'HolidayPayCorrectionOver60',
    HOLIDAY_PAY_FINAL_SETTLEMENT = 'HolidayPayFinalSettlement',
    HOLIDAY_PAY_FOR_SPECIFIED_YEAR = 'HolidayPayForSpecifiedYear',
    HOLIDAY_PAY_OVER60YEARS = 'HolidayPayOver60Years',
    HOME_VISITS_FOR_COMMUTERS = 'HomeVisitsForCommuters',
    HOURLY_WAGE = 'HourlyWage',
    LOTT = 'Lott',
    PENSION_DEDUCTION = 'PensionDeduction',
    PENSION_DEDUCTION_UNLIMITED = 'PensionDeductionUnlimited',
    PERCENT_OF_FIXED_SALARY = 'PercentOfFixedSalary',
    PERCENT_OF_HOURLY_WAGE = 'PercentOfHourlyWage',
    QUANTITY_AND_FIXED_RATE = 'QuantityAndFixedRate',
    QUANTITY_AND_FIXED_RATE_REPORTING_ZERO_AS_QUANTITY = 'QuantityAndFixedRateReportingZeroAsQuantity',
    QUANTITY_AND_RATE = 'QuantityAndRate',
    QUANTITY_AND_RATE_REPORTING_ZERO_AS_QUANTITY = 'QuantityAndRateReportingZeroAsQuantity',
    QUANTITY_AND_RATE_SUBJECT_TO_WITHHOLDING_TAX = 'QuantityAndRateSubjectToWithholdingTax',
    RETROACTIVE_PAYMENT_FIXED_SALARY = 'RetroactivePaymentFixedSalary',
    RETROACTIVE_PAYMENT_HOURLY_RATE = 'RetroactivePaymentHourlyRate',
    RETROACTIVE_PAYMENT_OVERTIME = 'RetroactivePaymentOvertime',
    RETROACTIVE_PAYMENT_DEDUCTION_FOR_HOLIDAY = 'RetroactivePaymentDeductionForHoliday',
    SALARY_ADVANCE = 'SalaryAdvance',
    SEAFARERS_ALLOWANCE_DAYS_AT_SEA = 'SeafarersAllowanceDaysAtSea',
    SEAFARERS_ALLOWANCE_DEDUCTION = 'SeafarersAllowanceDeduction',
    SIX_DAY_WEEK = 'SixDayWeek',
    TRADE_UNION_DEDUCTION = 'TradeUnionDeduction',
    WAGE_DEDUCTION_FOR_HOLIDAY = 'WageDeductionForHoliday',
    WAGE_DEDUCTION_FOR_HOLIDAY_OVER60YEARS = 'WageDeductionForHolidayOver60Years',
    WORK_CAR_KILOMETERS = 'WorkCarKilometers',
    WORK_CAR_LIST_PRICE = 'WorkCarListPrice',
}
