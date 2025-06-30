/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The Employment layoff patch DTO contains properties relevant to altering a layoff (line) on an employment relationship object in Go.
 */
export type EmploymentLayoffPatchDto = {
    /**
     * Value indicating whether the fixed wage should be adjusted by the layoff percentage.
     * If true then this layoff percentage will be used to adjust the fixed wage.
     */
    AdjustFixedWage?: boolean | null;
    /**
     * The end date of the layoff.
     */
    EndDate?: string | null;
    /**
     * Value is set true if and when the layoff is ended and the reporting (a-melding) is done and finalized.
     * If true, the layoff will not be included in future reporting (a-melding).
     */
    EndedAndReported?: boolean | null;
    /**
     * Value is set true if the employee should be excluded from payroll's while the layoff is active.
     */
    ExcludeEmployeeFromPayroll?: boolean | null;
    /**
     * The percentage of layoff absence.
     * 100 represent fully absent,
     * 50 represent 50% absence from the current employment.
     */
    LayoffPercentage?: number | null;
    /**
     * The id of the layoff that will be reported.
     * If not set, Go will assign an id.
     * Not to be confused with the Id property.
     */
    ReportingId?: string | null;
    /**
     * The start date of the layoff.
     */
    StartDate?: string | null;
};

