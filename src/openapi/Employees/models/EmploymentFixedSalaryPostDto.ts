/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommuterPersonType } from './CommuterPersonType';
import type { DeductionType } from './DeductionType';
import type { TaxDeductionType } from './TaxDeductionType';
import type { TaxRuleType } from './TaxRuleType';
/**
 * The Employment Fixed Salary post DTO contains all properties relevant to creating a new fixed salary (line) on an employment relationship object in Go.
 */
export type EmploymentFixedSalaryPostDto = {
    /**
     * The identifier of the account this salary line should be posted on.
     * Sub-ledger accounts can also be referenced in this field.
     * If not set, the account from the pay item will be used.
     * If set, any account set on the pay item will be overridden for this given salary line.
     */
    AccountId?: number | null;
    /**
     * The amount of the salary line, in the client currency.
     * The relevance of setting amount depend on the pay item set.
     * For a pay item with a quantity and rate, the quantity and rate should be provided as drivers, and the system will calculate the amount.
     */
    Amount?: number | null;
    /**
     * The list price of the car, in the client currency.
     * Relevant only for pay items with free car/work car processing types, where the list price is required.
     */
    CarListPrice?: number | null;
    /**
     * The registration date of the car.
     * Relevant to set only for certain pay items with car/work car related processing types.
     */
    CarRegistrationDate?: string | null;
    /**
     * The registration number of the car.
     * Relevant to set only for certain pay items with car/work car related processing types.
     */
    CarRegistrationNo?: string | null;
    /**
     * The CID number (norwegian: KID), relevant if UseRemittance and SupplierBankAccountId is set.
     * Only relevant to set for pay items with the following processing types: TradeUnionDeduction and AttachmentOfEarnings.
     */
    Cid?: string | null;
    /**
     * A comment to the salary line.
     * Will be shown on the employee payslip if set.
     */
    Comment?: string | null;
    CommuterPersonType?: CommuterPersonType;
    DeductionType?: DeductionType;
    /**
     * The department identifier.
     * Relevant to set if the salary line should be posted with a given department dimension.
     * If not set, the department will inherit the department set on the employee if/when the salary line is included in a payroll.
     */
    DepartmentId?: number | null;
    /**
     * The from-date.
     * Relevant to set only for certain pay items that have deduction processing types, and if the deduction is relevant only for a certain time period.
     */
    FromDate?: string | null;
    /**
     * The number of kilometers driven between home and work.
     * Relevant only for pay items with the processing type FreeCarOutsideStandardRule.
     */
    HomeWorkKilometers?: number | null;
    /**
     * The income year.
     * Relevant only for pay items with certain processing types, such as holiday pay.
     */
    IncomeYear?: number | null;
    /**
     * Value indicating whether this (fixed) salary line should be included when creating a new payroll.
     * If true then this (fixed) salary line will be included in the payroll.
     * Defaults to true if not set.
     */
    IsActive?: boolean | null;
    /**
     * Value indicating whether this his salary line relate to a car-pool or not.
     * Only relevant to set for pay items with the processing type FreeCarStandardRule or FreeCarOther.
     * With these two processing types, either car-pool or car registration number must be set.
     * Defaults to false if not set.
     */
    IsCarPool?: boolean | null;
    /**
     * The maximum amount when calculating trade union deduction.
     * Relevant only for pay items with the processing type TradeUnionDeduction.
     */
    MaxAmount?: number | null;
    /**
     * The member number of the trade union or pension scheme.
     * Relevant only for pay items with the following processing types: TradeUnionDeduction, PensionDeduction or PensionDeductionUnlimited.
     */
    MemberNo?: string | null;
    /**
     * The minimum amount when calculating trade union deduction.
     * Relevant only for pay items with the processing type TradeUnionDeduction.
     */
    MinAmount?: number | null;
    /**
     * The number field.
     * Only relevant for pay items with certain processing types that require an input of the number of times an event have occurred.
     * For example the number of journeys for a commuter, if the processing type is CommuterWithNumberOfJourneys.
     */
    Number?: number | null;
    /**
     * The identifier of the opposite account this salary line should be posted on.
     * Sub-ledger accounts can also be referenced in this field.
     * If not set, the opposite account from the pay item will be used.
     * If set, any opposite account set on the pay item will be overridden for this given salary line.
     */
    OppositeAccountId?: number | null;
    /**
     * The identifier of the pay item.
     */
    PayItemId: string | null;
    /**
     * The number of kilometers driven with private use.
     * Relevant only for pay items with the processing type FreeCarOutsideStandardRule or WorkCarKilometers.
     */
    PrivateDrivenKilometers?: number | null;
    /**
     * The project identifier.
     * Relevant to set if the salary line should be posted with a given project dimension.
     */
    ProjectId?: number | null;
    /**
     * The quantity of the salary line.
     * The relevance of setting quantity and the interpretation of unit depend on the pay item set.
     * For a pay items defined with a quantity related processing types, the quantity should be provided as the driver.
     */
    Quantity?: number | null;
    /**
     * The rate of the salary line.
     * The relevance of setting rate depend on the pay item set.
     * For pay items defined with a variable rate, the rate should be provided as the driver.
     * For pay items with fixed rates, the rate is usually set on the pay item and will be overridden if set on a salary line.
     * Also note that hourly wage rates are usually calculated form the employment salary, and not needed to set on salary lines as the system automatically calculates the rate on the payroll.
     */
    Rate?: number | null;
    /**
     * The start amount of the salary line deduction, in the client currency.
     * Relevant only for pay items with the following deduction processing types: DeductionWithBalance, AttachmentOfEarnings and AttachmentOfEarningsTax.
     * If not set on a salary line with a pay item of one of these processing types, the deduction will repeat until stopped.
     * If set, the deduction will run until the start amount is fully covered.
     */
    StartAmount?: number | null;
    /**
     * The identifier of the supplier sub-ledger account to post deductions.
     * Only relevant to set for pay items with the following processing types: TradeUnionDeduction and AttachmentOfEarnings.
     */
    SupplierAccountId?: number | null;
    /**
     * The identifier of the supplier bank account.
     * Relevant only if UseRemittance is true, and for pay items with the following processing types: TradeUnionDeduction and AttachmentOfEarnings.
     */
    SupplierBankAccountId?: number | null;
    TaxDeduction?: TaxDeductionType;
    TaxRule?: TaxRuleType;
    /**
     * The to-date.
     * Relevant to set only for certain pay items that have deduction processing types, and if the deduction is relevant only for a certain time period.
     */
    ToDate?: string | null;
    /**
     * Value indicating whether to use remittance or not.
     * Only relevant to set for pay items with the following processing types: TradeUnionDeduction and AttachmentOfEarnings.
     * Defaults to true if not set.
     */
    UseRemittance?: boolean | null;
    /**
     * The VAT code identifier.
     * Relevant to set if the salary line is set with a pay item that have a processing type related to expense refund subject of VAT.
     */
    VatCodeId?: number | null;
    /**
     * Value indicating whether this his salary line relate to work drive that exceeds the kilometer limit or not.
     * Relevant only for pay items with the processing type FreeCarStandardRule.
     * Default to false if not set.
     */
    WorkDriveExceedsKilometerLimit?: boolean | null;
};

