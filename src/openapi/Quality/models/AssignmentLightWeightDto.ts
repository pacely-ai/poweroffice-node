/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssignmentAgreementStatus } from './AssignmentAgreementStatus';
/**
 * The available properties for the Quality Assignment Light DTO
 */
export type AssignmentLightWeightDto = {
    /**
     * The date the assignment agreement was signed.
     */
    readonly AgreementSignedDate?: string | null;
    /**
     * The identifier of the employee subledger account, identifying the employee set as the assignment associate for this quality assignment. If null, this property inherit from the assignment manager property. Employees can be queried and identified using the Employees endpoint
     */
    readonly AssociateSubledgerAccountId?: number | null;
    /**
     * The current date of the quality assignment agreement.
     */
    readonly CurrentAgreementDate?: string | null;
    /**
     * The id of the customer's contact person associated with the quality assignment. Contact persons can be queried and identified using the ContactPersons endpoint.
     */
    readonly CustomerContactPersonId?: number | null;
    /**
     * The id of the customer subledger account, identifying the customer associated with the quality assignment. Customers can be queried and identified using the Customers endpoint.
     */
    readonly CustomerSubledgerAccountId?: number | null;
    /**
     * The description of the quality assignment.
     */
    readonly Description?: string | null;
    /**
     * The start date of the quality assignment. Date is inclusive.
     */
    readonly EndDate?: string | null;
    /**
     * The identifier of the quality assignment entity. The id is assigned by Go when the assignment entity is created.
     */
    readonly Id?: number | null;
    /**
     * The identifier of the employee subledger account, identifying the employee set as the key account manager for this quality assignment. If null, this property inherit from the assignment manager property. Employees can be queried and identified using the Employees endpoint
     */
    readonly KeyAccountManagerSubledgerAccountId?: number | null;
    /**
     * The identifier of the employee subledger account, identifying the employee set as the assignment manager for this quality assignment. Employees can be queried and identified using the Employees endpoint
     */
    ManagerSubledgerAccountId: number;
    /**
     * The identifier of the employee subledger account, identifying the employee set as the assignment payroll manager for this quality assignment. If null, this property inherit from the assignment manager property. Employees can be queried and identified using the Employees endpoint
     */
    readonly PayrollManagerSubledgerAccountId?: number | null;
    /**
     * The id of the project associated with the quality assignment. Projects can be queried and identified using the Project endpoint.
     */
    readonly ProjectId?: number | null;
    /**
     * The date of the last revision of the assignment.
     */
    readonly RevisionDate?: string | null;
    /**
     * The start date of the quality assignment. Date is inclusive.
     */
    readonly StartDate?: string | null;
    Status?: AssignmentAgreementStatus;
};

