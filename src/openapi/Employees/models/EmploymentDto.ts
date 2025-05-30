/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmploymentFormType } from './EmploymentFormType';
import type { EmploymentSpecificationType } from './EmploymentSpecificationType';
import type { EmploymentType } from './EmploymentType';
import type { EndDateReasonType } from './EndDateReasonType';
import type { TaxRuleType } from './TaxRuleType';
import type { WorkingHoursArrangementType } from './WorkingHoursArrangementType';
/**
 * The Employment DTO contains properties relevant to an employment relationship object in Go.
 * Will only contain line count for salary-, fixed salary-, leave-, layout- and percentage of full time employment lines.
 */
export type EmploymentDto = {
    /**
     * The timestamp when the employment entity was created.
     */
    readonly CreatedDateTimeOffset?: string;
    /**
     * The identifier of the employee the employment belongs to.
     */
    readonly EmployeeId?: number;
    EmploymentForm?: EmploymentFormType;
    EmploymentSpecification?: EmploymentSpecificationType;
    EmploymentType?: EmploymentType;
    /**
     * The end date of the employment.
     */
    EndDate?: string | null;
    EndDateReason?: EndDateReasonType;
    /**
     * True when the employment is ended and the reporting (a-melding) is done and finalized.
     * If true, the employment will not be included in future reporting (a-melding).
     */
    readonly EndedAndReported?: boolean;
    /**
     * The identifier of the enterprise for the employment.
     */
    EnterpriseId?: number | null;
    /**
     * The number of fixed salary lines on this employment.
     */
    readonly FixedSalaryCount?: number;
    /**
     * The number of full-time equivalent (FTE) percentage lines on this employment.
     */
    readonly FtePercentageCount?: number;
    /**
     * The number of hours that would represent full time week of employment.
     */
    FullTimeHoursPerWeek?: number | null;
    /**
     * The id of the employment (employment relationship).
     */
    readonly Id?: number;
    /**
     * Indicates if the employment is the default employment for the employee.
     */
    IsDefault?: boolean | null;
    /**
     * The timestamp when the employment entity was last changed.
     */
    readonly LastChangedDateTimeOffset?: string;
    /**
     * The number of layoff lines on this employment.
     */
    readonly LayoffCount?: number;
    /**
     * The number of leave lines on this employment.
     */
    readonly LeaveCount?: number;
    /**
     * The profession code of the employment.
     * The code follow SSB's STYRK-98 standard with 7 digits.
     */
    ProfessionCode?: string | null;
    /**
     * The profession title of the employment.
     * Is directly connected to the profession code.
     */
    readonly ProfessionTitle?: string | null;
    /**
     * The id of the employment that will be reported.
     * Can be set to match the id of the previous payroll system.
     * If not set, Go will assign an id.
     */
    ReportingId?: string | null;
    /**
     * The number of salary lines on this employment.
     */
    readonly SalaryCount?: number;
    /**
     * The start date of the employment.
     */
    StartDate?: string | null;
    /**
     * The ISO 3166-1 alfa-2 country code (two characters).
     * Can only be set to Finland (FI) or Sweden (SE) if employment specification is set to cross border commuter.
     */
    TaxCountryCode?: string | null;
    TaxRule?: TaxRuleType;
    WorkingHoursArrangement?: WorkingHoursArrangementType;
};

