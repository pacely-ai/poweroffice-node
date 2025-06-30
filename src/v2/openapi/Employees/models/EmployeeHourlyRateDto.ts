/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The Employee Hourly Rate DTO contains properties relevant to a "EmployeeTimeHourlyRates" object in Go
 */
export type EmployeeHourlyRateDto = {
    /**
     * The billable hourly rate for timetransactions registered with billable activities for this employee.
     * Must be a positive number.
     * Note that a hierarchy exist in Go for timetracking price settings of billable rates.
     */
    BillableRate?: number | null;
    /**
     * The hourly cost rate for timetransactions registered for this employee.
     * Must be a positive number.
     * This cost rate have no direct relation to payroll settings, and is primarily used for reporting purposes on timetracking entries.
     */
    CostRate?: number | null;
    /**
     * The identifier of the employee hourly rates.
     * This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited (PATCH), deleted (DELETE) or retrieved specifically (GET).
     */
    readonly Id?: number;
    /**
     * The date from which this rate is to be used from.
     */
    ValidFromDate?: string | null;
    /**
     * The date from which this rate is no longer in use.
     */
    readonly ValidToDate?: string;
};

