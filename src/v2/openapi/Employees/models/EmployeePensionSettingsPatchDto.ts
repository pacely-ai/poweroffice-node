/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FnoStatusType } from './FnoStatusType';
/**
 * The Employee pension settings patch DTO contains properties relevant to altering pension settings on an employee in Go.
 */
export type EmployeePensionSettingsPatchDto = {
    FnoStatus?: FnoStatusType;
    /**
     * The percentage related to the FNO status that is reported.
     */
    FnoStatusPercentage?: number | null;
    /**
     * The number of hours per year for a full time employment, in terms of FNO reporting.
     * If null, the general payroll settings is used.
     */
    HoursPerYearFno?: number | null;
    /**
     * Property indicating whether the employee should be included in the FNO pension reporting.
     */
    IncludeInFnoPensionReport?: boolean | null;
    /**
     * Property indicating whether the employee is receiving AFP (in terms of FNO pension report).
     */
    IsReceivingAfp?: boolean | null;
    /**
     * Property indicating whether the employee is unfit for work (in terms of FNO pension report).
     */
    IsUnfitForWork?: boolean | null;
    /**
     * The pension age in terms of FNO reporting.
     * If null, the general payroll settings is used.
     */
    PensionAgeFno?: number | null;
};

