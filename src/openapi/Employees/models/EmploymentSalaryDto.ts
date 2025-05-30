/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SalaryRemunerationType } from './SalaryRemunerationType';
/**
 * The Employment Salary DTO contains properties relevant to a salary (line) on an employment relationship object in Go.
 */
export type EmploymentSalaryDto = {
    /**
     * The annual salary of the employment salary.
     * Only relevant for fixed wage salary.
     */
    AnnualSalary?: number | null;
    /**
     * The timestamp when the employment salary entity was created.
     */
    readonly CreatedDateTimeOffset?: string;
    /**
     * The identifier of the employee the employment belongs to.
     */
    readonly EmployeeId?: number;
    /**
     * The id of the employment (employment relationship) the salary line belongs to.
     */
    readonly EmploymentId?: number;
    /**
     * The from-date for the effect of the employment salary.
     */
    FromDate?: string | null;
    /**
     * The hourly rate of the employment salary.
     * Relevant to set for hourly wage salary and commission salary.
     * For fixed wage salary, the hourly rate is automatically calculated if null, but can be overridden.
     * The calculation is based on the full time hours per week property on the employment general information, multiplied by 52 weeks.
     * Relevant for fixed wage in terms of overtime/extra hours, for instance.
     */
    HourlyRate?: number | null;
    /**
     * The id of the employment salary (line).
     */
    readonly Id?: number;
    /**
     * The timestamp when the employment salary entity was last changed.
     */
    readonly LastChangedDateTimeOffset?: string;
    RemunerationType?: SalaryRemunerationType;
};

