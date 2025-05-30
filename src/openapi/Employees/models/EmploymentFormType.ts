/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The form of employment.<p>Members:</p><ul><li><i>Permanent</i> - Permanent employment.</li><li><i>Temporary</i> - Temporary employment.</li><li><i>PermanentEmploymentAndHiredOut</i> - Permanent employment and hired out.
 * New value from 2025, will be reported as Permanent before 2025.</li><li><i>TemporaryEmploymentAndHiredOut</i> - Temporary employment and hired out
 * New value from 2025, will be reported as Temporary before 2025.</li><li><i>TemporaryEmploymentAsOnCallCoverstaff</i> - Temporary employment as on-call coverstaff.
 * New value from 2025, will be reported as Temporary before 2025.</li></ul>
 */
export enum EmploymentFormType {
    PERMANENT = 'Permanent',
    TEMPORARY = 'Temporary',
    PERMANENT_EMPLOYMENT_AND_HIRED_OUT = 'PermanentEmploymentAndHiredOut',
    TEMPORARY_EMPLOYMENT_AND_HIRED_OUT = 'TemporaryEmploymentAndHiredOut',
    TEMPORARY_EMPLOYMENT_AS_ON_CALL_COVERSTAFF = 'TemporaryEmploymentAsOnCallCoverstaff',
}
