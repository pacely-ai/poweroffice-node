/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The Employment full-time equivalent (FTE) percentage DTO contains properties relevant to a FTE percentage (line) on an employment relationship object in Go.
 */
export type EmploymentFtePercentageDto = {
    /**
     * The timestamp when the employment FTE percentage entity was created.
     */
    readonly CreatedDateTimeOffset?: string;
    /**
     * The identifier of the employee the employment belongs to.
     */
    readonly EmployeeId?: number;
    /**
     * The id of the employment (employment relationship) the FTE percentage line belongs to.
     */
    readonly EmploymentId?: number;
    /**
     * The from-date for the effect of the employment full-time equivalent (FTE) percentage.
     */
    FromDate?: string | null;
    /**
     * The percentage of full-time equivalent (FTE) employment.
     * The value should be between 0 and 100 (reflects as 0% or 100% in the GUI).
     */
    FtePercentage?: number | null;
    /**
     * The id of the employment FTE percentage (line).
     */
    readonly Id?: number;
    /**
     * The timestamp when the employment FTE percentage entity was last changed.
     */
    readonly LastChangedDateTimeOffset?: string;
};

