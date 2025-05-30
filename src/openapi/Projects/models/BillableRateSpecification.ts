/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specifies how to retrieve the hourly rate when billing.<p>Members:</p><ul><li><i>Activity</i> - The hourly rate is retrieved from the TimeTracking.Activity.</li><li><i>Employee</i> - The hourly rate is retrieved from the Party.Employee.</li><li><i>Project</i> - The hourly rate is retrieved from the Projects.Project.</li></ul>
 */
export enum BillableRateSpecification {
    ACTIVITY = 'Activity',
    EMPLOYEE = 'Employee',
    PROJECT = 'Project',
}
