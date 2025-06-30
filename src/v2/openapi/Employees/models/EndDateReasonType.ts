/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The reason for the end of the employment at the end date. Must be provided if the end date is set.
 * This should be 1 to 1 with the EndDateReason enum in Go. (Server\Common\Payrolls\Enums\EndDateReasons.cs)<p>Members:</p><ul><li><i>EmploymentRelationshipShouldNeverHaveBeenReported</i> - The employment should never have been reported.</li><li><i>EmployerHasDismissedTheEmployee</i> - The employer has terminated the employment relationship.</li><li><i>EmployeeHasResigned</i> - The employee has resigned from his/her position.</li><li><i>ChangeOfPayrollSystemOrAccountant</i> - Changed payroll system or accountant.</li><li><i>ChangeOfOrganizationStructureOrChangedJobInternally</i> - Changes in organisational structure or internal job swap.</li><li><i>ContractCommitmentOrTemporaryEmploymentExpired</i> - Contract, temporary appointment or temporary position has been terminated.</li></ul>
 */
export enum EndDateReasonType {
    EMPLOYMENT_RELATIONSHIP_SHOULD_NEVER_HAVE_BEEN_REPORTED = 'EmploymentRelationshipShouldNeverHaveBeenReported',
    EMPLOYER_HAS_DISMISSED_THE_EMPLOYEE = 'EmployerHasDismissedTheEmployee',
    EMPLOYEE_HAS_RESIGNED = 'EmployeeHasResigned',
    CHANGE_OF_PAYROLL_SYSTEM_OR_ACCOUNTANT = 'ChangeOfPayrollSystemOrAccountant',
    CHANGE_OF_ORGANIZATION_STRUCTURE_OR_CHANGED_JOB_INTERNALLY = 'ChangeOfOrganizationStructureOrChangedJobInternally',
    CONTRACT_COMMITMENT_OR_TEMPORARY_EMPLOYMENT_EXPIRED = 'ContractCommitmentOrTemporaryEmploymentExpired',
}
