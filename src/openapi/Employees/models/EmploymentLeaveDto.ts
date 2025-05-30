/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LeaveType } from './LeaveType';
/**
 * The Employment Leave DTO contains properties relevant to a leave (line) on an employment relationship object in Go.
 */
export type EmploymentLeaveDto = {
    /**
     * Value indicating whether the fixed wage should be adjusted by the leave percentage.
     * If true then this leave percentage will be used to adjust the fixed wage.
     */
    AdjustFixedWage?: boolean | null;
    /**
     * The timestamp when the employment leave entity was created.
     */
    readonly CreatedDateTimeOffset?: string;
    /**
     * The identifier of the employee the employment belongs to.
     */
    readonly EmployeeId?: number;
    /**
     * The id of the employment (employment relationship) the leave line belongs to.
     */
    readonly EmploymentId?: number;
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
     * The id of the employment leave (line).
     */
    readonly Id?: string;
    /**
     * The timestamp when the employment leave entity was last changed.
     */
    readonly LastChangedDateTimeOffset?: string;
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

