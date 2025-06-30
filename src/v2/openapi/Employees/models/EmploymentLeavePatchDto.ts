/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LeaveType } from './LeaveType';
/**
 * The Employment leave patch DTO contains properties relevant to altering a leave (line) on an employment relationship object in Go.
 */
export type EmploymentLeavePatchDto = {
    /**
     * Value indicating whether the fixed wage should be adjusted by the leave percentage.
     * If true then this leave percentage will be used to adjust the fixed wage.
     */
    AdjustFixedWage?: boolean | null;
    /**
     * The end date of the leave.
     */
    EndDate?: string | null;
    /**
     * Value is set true if and when the leave is ended and the reporting (a-melding) is done and finalized.
     * If true, the leave will not be included in future reporting (a-melding).
     */
    EndedAndReported?: boolean | null;
    /**
     * Value is set true if the employee should be excluded from payroll's while the leave is active.
     */
    ExcludeEmployeeFromPayroll?: boolean | null;
    /**
     * The percentage of leave of absence.
     * 100 represent fully absent,
     * 50 represent 50% absence from the current employment.
     */
    LeavePercentage?: number | null;
    /**
     * The id of the leave that will be reported.
     * If not set, Go will assign an id.
     * Not to be confused with the Id property.
     */
    ReportingId?: string | null;
    /**
     * The start date of the leave.
     */
    StartDate?: string | null;
    TypeOfLeave?: LeaveType;
};

