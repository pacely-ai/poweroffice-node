/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SalaryRemunerationType } from './SalaryRemunerationType';
/**
 * The Employment Salary post DTO contains all properties relevant to creating a new salary (line) on an employment relationship object in Go.
 */
export type EmploymentSalaryPostDto = {
    /**
     * The annual salary of the employment salary.
     * Only relevant for fixed wage salary.
     */
    AnnualSalary?: number | null;
    /**
     * The from-date for the effect of the employment salary.
     */
    FromDate: string | null;
    /**
     * The hourly rate of the employment salary.
     * Relevant to set for hourly wage salary and commission salary.
     * For fixed wage salary, the hourly rate is automatically calculated if null, but can be overridden.
     * The calculation is based on the full time hours per week property on the employment general information, multiplied by 52 weeks.
     * Relevant for fixed wage in terms of overtime/extra hours, for instance.
     */
    HourlyRate?: number | null;
    RemunerationType: SalaryRemunerationType;
};

