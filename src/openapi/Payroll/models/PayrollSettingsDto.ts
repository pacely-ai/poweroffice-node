/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DaysInWeekHolidayPay } from './DaysInWeekHolidayPay';
import type { EmployerContributionRule } from './EmployerContributionRule';
import type { EmploymentType } from './EmploymentType';
import type { PayrollAccrualModeType } from './PayrollAccrualModeType';
import type { PayslipDeliveryType } from './PayslipDeliveryType';
import type { PayslipLanguageType } from './PayslipLanguageType';
import type { PayslipPasswordType } from './PayslipPasswordType';
import type { PayslipSendScheduleType } from './PayslipSendScheduleType';
import type { RemunerationPeriodType } from './RemunerationPeriodType';
import type { SalaryRemunerationType } from './SalaryRemunerationType';
import type { TaxRuleType } from './TaxRuleType';
import type { WorkingHoursArrangementType } from './WorkingHoursArrangementType';
/**
 * The payroll settings DTO contains all properties relevant to the payroll settings in Go.
 */
export type PayrollSettingsDto = {
    /**
     * The identifier of the general ledger balance account used for accrual of employer's contribution.
     * Only relevant if allow accrual of wages is set true.
     */
    readonly AccrualOfEmployerContributionBalanceAccountId?: number | null;
    /**
     * The identifier of the general ledger result account used for accrual of employer's contribution.
     * Only relevant if allow accrual of wages is set true.
     */
    readonly AccrualOfEmployerContributionResultAccountId?: number | null;
    /**
     * The identifier of the general ledger balance account used for accrual of holiday pay.
     * Only relevant if allow accrual of wages is set true.
     */
    readonly AccrualOfHolidayPayBalanceAccountId?: number | null;
    /**
     * The identifier of the general ledger result account used for accrual of holiday pay.
     * Only relevant if allow accrual of wages is set true.
     */
    readonly AccrualOfHolidayPayResultAccountId?: number | null;
    /**
     * The identifier of the general ledger balance account used for accrual of wages.
     * Only relevant if allow accrual of wages is set true.
     */
    readonly AccrualOfWagesBalanceAccountId?: number | null;
    /**
     * The identifier of the general ledger result account used for accrual of wages.
     * Only relevant if allow accrual of wages is set true.
     */
    readonly AccrualOfWagesResultAccountId?: number | null;
    /**
     * Property indicating whether to add financial activity tax for this client.
     * If true, several other properties can be set (related to financial activity tax).
     */
    readonly AddFinancialActivityTax?: boolean;
    /**
     * Property indicating whether accrual of wages can be set up and used.
     */
    readonly AllowAccrualOfWages?: boolean;
    /**
     * Property indicating whether different remuneration periods can be set per employee.
     */
    readonly AllowDifferentRemunerationPeriodPerEmployee?: boolean;
    /**
     * The identifier of the general ledger balance account used for attachment of earnings.
     */
    readonly AttachmentOfEarningsBalanceAccountId?: number | null;
    DaysInWeekHolidayPay?: DaysInWeekHolidayPay;
    /**
     * The identifier of the general ledger balance account used for the employer's contribution of allotted holiday pay.
     */
    readonly EmployerContributionAllottedHolidayPayBalanceAccountId?: number | null;
    /**
     * The identifier of the general ledger result account used for the cost of employer's contribution of allotted holiday pay.
     */
    readonly EmployerContributionAllottedHolidayPayResultAccountId?: number | null;
    /**
     * The identifier of the general ledger balance account used for the employer's contribution.
     */
    readonly EmployerContributionBalanceAccountId?: number | null;
    /**
     * The free allowance amount for employer contribution.
     * If null, the field will inherit the official free allowance amount of the current year based on the employer contribution rule for general industries.
     */
    readonly EmployerContributionFreeAllowanceAvailable?: number | null;
    /**
     * The identifier of the general ledger account used for the cost of employer's contribution upon payment of holiday pay.
     */
    readonly EmployerContributionPaymentOfHolidayPayAccountId?: number | null;
    /**
     * The identifier of the general ledger balance account used for the employer's contribution upon payment of holiday pay.
     */
    readonly EmployerContributionPaymentOfHolidayPayBalanceAccountId?: number | null;
    /**
     * The identifier of the general ledger result account used for the cost of employer's contribution.
     */
    readonly EmployerContributionResultAccountId?: number | null;
    EmployerContributionRule?: EmployerContributionRule;
    EmploymentType?: EmploymentType;
    /**
     * Property indicating whether payout of flextime hours is allowed.
     */
    readonly EnableFlexTimePayout?: boolean;
    /**
     * The identifier of the general ledger balance account used for the financial activity allotted holiday pay.
     */
    readonly FinancialActivityAllottedHolidayPayBalanceAccountId?: number | null;
    /**
     * The identifier of the general ledger result account used for the financial activity allotted holiday pay.
     */
    readonly FinancialActivityAllottedHolidayPayResultAccountId?: number | null;
    /**
     * The identifier of the general ledger account used for the financial activity payment of holiday pay.
     */
    readonly FinancialActivityPaymentOfHolidayPayAccountId?: number | null;
    /**
     * The identifier of the general ledger balance account used for the financial activity payment of holiday pay.
     */
    readonly FinancialActivityPaymentOfHolidayPayBalanceAccountId?: number | null;
    /**
     * The identifier of the general ledger balance account used for the financial activity tax.
     */
    readonly FinancialActivityTaxBalanceAccountId?: number | null;
    /**
     * The identifier of the general ledger result account used for the financial activity tax.
     */
    readonly FinancialActivityTaxResultAccountId?: number | null;
    /**
     * The number of hours that would represent full time week of employment.
     */
    readonly FullTimeHoursPerWeek?: number;
    /**
     * The identifier of the general ledger balance account used the holiday pay above 60 years.
     */
    readonly HolidayPayAbove60BalanceAccountId?: number | null;
    /**
     * The holiday pay percentage above 60 years.
     */
    readonly HolidayPayAbove60Percentage?: number;
    /**
     * The identifier of the general ledger result account used for the cost of holiday pay above 60 years.
     */
    readonly HolidayPayAbove60ResultAccountId?: number | null;
    /**
     * The identifier of the general ledger balance account used for the holiday pay.
     */
    readonly HolidayPayBalanceAccountId?: number | null;
    /**
     * The holiday pay percentage.
     */
    readonly HolidayPayPercentage?: number;
    /**
     * The identifier of the general ledger result account used for the cost of holiday pay.
     */
    readonly HolidayPayResultAccountId?: number | null;
    /**
     * The number of hours per year for a full time employment, in terms of FNO reporting.
     */
    readonly HoursPerYearFno?: number;
    /**
     * The date define which time transactions from the time tracking module in PowerOffice that can be included in payrolls.
     */
    readonly IncludeTimeTransactionsFromDate?: string | null;
    /**
     * Property indicating whether holiday pay above 60 years is limited to 6G.
     */
    readonly LimitHolidayPayAbove60To6G?: boolean;
    /**
     * Property indicating whether imported salary lines will be merged (if the lines have similar attributes)
     * when payrolls are created and imported salary lines included in the payroll.
     */
    readonly MergeImportedSalaryLines?: boolean;
    /**
     * The day in a month for the salary pay.
     * Relevant if monthly remuneration is used.
     * Must be an integer between 1 and 31.
     * If 31 is used, the salary will always be paid on the last day of the month.
     */
    readonly MonthlyPayDay?: number;
    /**
     * The identifier of the pay item used for deduction of negative flextime.
     * Relevant only if enableFlextimePayout is true.
     */
    readonly NegativeFlextimePayItemId?: string | null;
    /**
     * The number of holidays.
     */
    readonly NumberOfHolidays?: number;
    /**
     * The number of holidays above 60 years.
     */
    readonly NumberOfHolidaysAbove60?: number;
    /**
     * The identifier of the general ledger balance account used for the outstanding salary (salary owed/to be paid).
     */
    readonly OutstandingSalaryBalanceAccountId?: number | null;
    /**
     * The identifier of the general ledger balance account used for owed taxes.
     */
    readonly OwedTaxedBalanceAccountId?: number | null;
    PayslipDeliveryType?: PayslipDeliveryType;
    PayslipLanguageType?: PayslipLanguageType;
    PayslipPasswordType?: PayslipPasswordType;
    PayslipSendScheduleType?: PayslipSendScheduleType;
    /**
     * The pension age in terms of FNO reporting.
     */
    readonly PensionAgeFno?: number;
    /**
     * The pension schemes count.
     * Use pension scheme GET endpoint to get the pension schemes.
     */
    readonly PensionSchemesCount?: number;
    /**
     * The identifier of the pay item used for payout of positive flextime.
     * Relevant only if enableFlextimePayout is true.
     */
    readonly PositiveFlextimePayItemId?: string | null;
    /**
     * Property indicating whether a voucher should be posted when importing K27 (sick-pay related) from NAV.
     */
    readonly PostVoucherOnK27ImportFromNav?: boolean;
    /**
     * The identifier of general ledger account used to post the voucher when importing K27 from NAV.
     * Relevant only if post voucher on K27 import from NAV is set true.
     */
    readonly PostVoucherOnK27ImportFromNavAccountId?: number | null;
    RemunerationPeriod?: RemunerationPeriodType;
    RemunerationType?: SalaryRemunerationType;
    /**
     * The identifier of client bank account used for payment of salary.
     * If null, the primary client bank account is used.
     */
    readonly SalaryPaymentBankAccountId?: number | null;
    /**
     * Property indicating whether salary line comments will be available on the payslip.
     */
    readonly ShowCommentsOnPayslip?: boolean;
    /**
     * Property indicating whether the holiday pay earned the current year will be available on the payslip.
     */
    readonly ShowHolidayPayEarnedCurrentYearOnPayslip?: boolean;
    /**
     * Property indicating whether the holiday pay earned last year will be available on the payslip.
     */
    readonly ShowHolidayPayEarnedLastYearOnPayslip?: boolean;
    /**
     * Property indicating whether the company logo will be visible on the payslip.
     */
    readonly ShowLogoOnPayslip?: boolean;
    /**
     * Property indicating whether the pay item code will be displayed on the lines of the payslip.
     */
    readonly ShowPayItemsOnPayslip?: boolean;
    /**
     * Property indicating whether the project name will be displayed on the lines of the payslip.
     */
    readonly ShowProjectOnPayslip?: boolean;
    /**
     * The identifier of the pay item used for sick-pay refunds.
     */
    readonly SickPayRefundPayItemId?: string | null;
    SuggestedAccrualDate?: PayrollAccrualModeType;
    /**
     * The identifier of client bank account used for payment of tax deduction.
     * Must have a value if tax deduction bank guarantee (TaxDeductionBankGuarantee) is false.
     */
    readonly TaxDeductionBankAccountId?: number | null;
    /**
     * Property indicating whether bank guarantee for tax deduction should be used.
     * If property is false, the property 'TaxDeductionBankAccountId' should have value.
     */
    readonly TaxDeductionBankGuarantee?: boolean;
    TaxRule?: TaxRuleType;
    WorkingHoursArrangement?: WorkingHoursArrangementType;
};

