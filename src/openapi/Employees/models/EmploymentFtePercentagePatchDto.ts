/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The Employment full-time equivalent (FTE) percentage patch DTO contains properties relevant to altering a full-time equivalent (FTE) percentage (line) on an employment relationship object in Go.
 */
export type EmploymentFtePercentagePatchDto = {
    /**
     * The from-date for the effect of the employment full-time equivalent (FTE) percentage.
     */
    FromDate?: string | null;
    /**
     * The percentage of full-time equivalent (FTE) employment.
     * The value should be between 0 and 100 (reflects as 0% or 100% in the GUI).
     */
    FtePercentage?: number | null;
};

