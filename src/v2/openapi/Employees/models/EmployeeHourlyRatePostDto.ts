/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The Employee Hourly Rate post DTO contains properties relevant to creating a new "EmployeeTimeHourlyRates" object in Go.
 */
export type EmployeeHourlyRatePostDto = {
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
     * The date from which this rate is to be used from.
     */
    ValidFromDate: string | null;
};

