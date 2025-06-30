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
 * The Employment patch DTO contains properties relevant to altering an employment relationship object in Go.
 */
export type EmploymentPatchDto = {
    EmploymentForm?: EmploymentFormType;
    EmploymentSpecification?: EmploymentSpecificationType;
    EmploymentType?: EmploymentType;
    /**
     * The end date of the employment.
     */
    EndDate?: string | null;
    EndDateReason?: EndDateReasonType;
    /**
     * Value is set true if and when the employment is ended and the reporting (a-melding) is done and finalized.
     * If true, the employment will not be included in future reporting (a-melding).
     */
    EndedAndReported?: boolean | null;
    /**
     * The identifier of the enterprise for the employment.
     */
    EnterpriseId?: number | null;
    /**
     * The number of hours that would represent full time week of employment.
     */
    FullTimeHoursPerWeek?: number | null;
    /**
     * Indicates if the employment is the default employment for the employee.
     */
    IsDefault?: boolean | null;
    /**
     * The profession code of the employment.
     * The code follow SSB's STYRK-98 standard with 7 digits.
     */
    ProfessionCode?: string | null;
    /**
     * The id of the employment that will be reported.
     * Can be set to match the id of the previous payroll system.
     * If not set, Go will assign an id.
     */
    ReportingId?: string | null;
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

