/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BenefitDescriptionType } from './BenefitDescriptionType';
import type { BenefitType } from './BenefitType';
import type { FnoReportingType } from './FnoReportingType';
import type { PostingType } from './PostingType';
import type { ProcessingType } from './ProcessingType';
import type { RoundingPrecisionType } from './RoundingPrecisionType';
import type { SpecialIncomeConditionType } from './SpecialIncomeConditionType';
import type { TaxDeductionType } from './TaxDeductionType';
/**
 * The pay item DTO contains all properties relevant to a pay item in Go.
 */
export type PayItemDto = {
    /**
     * The Id of the general ledger account used, if the posting type is set to general ledger account.
     */
    readonly AccountId?: number | null;
    Benefit?: BenefitType;
    BenefitDescription?: BenefitDescriptionType;
    /**
     * The code of the pay item.
     */
    readonly Code?: string | null;
    /**
     * The timestamp the pay item entity was created.
     */
    readonly CreatedDateTimeOffset?: string;
    /**
     * The identifier of the separate pay item this instance is linked to,
     * if this pay item instance have a processing type that link to a deduction pay item.
     */
    readonly DeductionPayItemId?: string | null;
    /**
     * The continental shelf reporting of the pay item.
     * Null if no continental shelf reporting is relevant for the pay item (benefit), and it should not be reported to Altinn.
     * True if the benefit is earned on continental shelf.
     * False if the benefit is not earned on continental shelf.
     */
    readonly EarnedContinentalShelf?: boolean | null;
    /**
     * Defines the support vessel reporting type of the pay item.
     * The support vessel reporting of the pay item.
     * Null if no support vessel reporting is relevant for the pay item (benefit), and it should not be reported to Altinn.
     * True if the benefit is earned on support vessel.
     * False if the benefit is not earned on support vessel.
     */
    readonly EarnedSupportVessel?: boolean | null;
    /**
     * The earnings country code, relevant if report earnings country is to be reported on this pay item.
     * ISO 3166-1 alfa-2 country code (two characters).
     */
    readonly EarningsCountryCode?: string | null;
    /**
     * Value indicating whether this pay item should be included in the calculation of employer's contribution.
     */
    readonly EmployerContributionBasis?: boolean;
    FnoReporting?: FnoReportingType;
    /**
     * Value indicating whether this pay item should calculate ordinary tax when used in a half tax payroll.
     */
    readonly FullTaxOnHalfTaxPayrolls?: boolean;
    /**
     * Value indicating whether this pay item should be included in the calculation of holiday pay.
     */
    readonly HolidayPayBasis?: boolean;
    /**
     * The identifier of the pay item.
     */
    readonly Id?: string;
    /**
     * Value indicating whether this pay item should be included in the income reporting.
     */
    readonly IncludeInIncomeReport?: boolean;
    /**
     * Value indicating whether this instance is active.
     * Inactive pay items disable the usage of that pay item on salary lines.
     */
    readonly IsActive?: boolean;
    /**
     * The timestamp of the last change of the pay item.
     */
    readonly LastChangedDateTimeOffset?: string;
    /**
     * The name of the pay item.
     */
    readonly Name?: string | null;
    /**
     * The id of the general ledger account to post opposite transaction.
     */
    readonly OppositeAccountId?: number | null;
    /**
     * Value indicating whether this pay item should be included in the calculation of pension.
     */
    readonly PensionBasis?: boolean;
    /**
     * The percentage, relevant for pay items with percentage processing type.
     * Examples: A value of 50 reflect as 50% in the GUI, and a value of -50 reflect as -50% in the GUI.
     * Example of use case: Pay item for 50% overtime will have 150 set, in order to calculate the correct hourly wage when used.
     */
    readonly Percentage?: number | null;
    PostingType?: PostingType;
    ProcessingType?: ProcessingType;
    /**
     * The rate for of the pay item, relevant if the processing type include a fixed rate.
     * Rates set on the pay item will be overridden if a rate is set on the salary line using the pay item.
     */
    readonly Rate?: number | null;
    RoundingPrecision?: RoundingPrecisionType;
    SpecialIncomeCondition?: SpecialIncomeConditionType;
    /**
     * The tax country code, relevant if tax country is to be reported on this pay item.
     * ISO 3166-1 alfa-2 country code (two characters).
     */
    readonly TaxCountryCode?: string | null;
    TaxDeduction?: TaxDeductionType;
    /**
     * Value indicating whether this pay item should be included in the calculation of trade union basis.
     */
    readonly TradeUnionBasis?: boolean;
};

