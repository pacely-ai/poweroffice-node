/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssignmentAgreementStatus } from './AssignmentAgreementStatus';
import type { SubjectToAuditType } from './SubjectToAuditType';
/**
 * The available properties for the Quality Assignment General DTO in Go
 */
export type AssignmentGeneralDto = {
    /**
     * The date the assignment agreement was signed.
     */
    AgreementSignedDate?: string | null;
    /**
     * The identifier of the employee subledger account, identifying the employee set as the assignment associate for this quality assignment. If null, this property inherit from the assignment manager property. Employees can be queried and identified using the Employees endpoint
     */
    AssociateSubledgerAccountId?: number | null;
    /**
     * The id of the audit company. Relevant only the customer is subject for audit, i.e. AuditStatus is 'Yes'
     */
    AuditingCompanyId?: number | null;
    /**
     * The id of the auditor. Relevant only the customer is subject for audit, i.e. AuditStatus is 'Yes'
     */
    AuditorId?: number | null;
    /**
     * The current date of the quality assignment agreement.
     */
    CurrentAgreementDate?: string | null;
    /**
     * The id of the customer's contact person associated with the quality assignment. Contact persons can be queried and identified using the ContactPersons endpoint.
     */
    CustomerContactPersonId?: number | null;
    /**
     * The id of the customer subledger account, identifying the customer associated with the quality assignment. Customers can be queried and identified using the Customers endpoint.
     */
    CustomerSubledgerAccountId?: number | null;
    /**
     * The description of the quality assignment.
     */
    Description?: string | null;
    /**
     * The start date of the quality assignment. Date is inclusive.
     */
    EndDate?: string | null;
    /**
     * The identifier of the quality assignment entity. The id is assigned by Go when the assignment entity is created.
     */
    readonly Id?: number | null;
    /**
     * The identifier of the employee subledger account, identifying the employee set as the key account manager for this quality assignment. If null, this property inherit from the assignment manager property. Employees can be queried and identified using the Employees endpoint
     */
    KeyAccountManagerSubledgerAccountId?: number | null;
    /**
     * The identifier of the employee subledger account, identifying the employee set as the assignment manager for this quality assignment. Employees can be queried and identified using the Employees endpoint
     */
    ManagerSubledgerAccountId?: number | null;
    /**
     * The notice period, in months, if the agreement should be resigned.
     * Must be a positive integer between 1 and 24.
     */
    NoticePeriod?: number;
    /**
     * The identifier of the employee subledger account, identifying the employee set as the assignment payroll manager for this quality assignment. If null, this property inherit from the assignment manager property. Employees can be queried and identified using the Employees endpoint
     */
    PayrollManagerSubledgerAccountId?: number | null;
    /**
     * The id of the project associated with the quality assignment. Projects can be queried and identified using the Project endpoint.
     */
    ProjectId?: number | null;
    /**
     * A description of the purpose for contact.
     */
    PurposeForContact?: string | null;
    /**
     * A description of the reason for contact.
     */
    ReasonForContact?: string | null;
    /**
     * The date of the last revision of the assignment.
     */
    RevisedDate?: string | null;
    /**
     * The start date of the quality assignment. Date is inclusive.
     */
    StartDate?: string | null;
    Status?: AssignmentAgreementStatus;
    SubjectToAudit?: SubjectToAuditType;
};

