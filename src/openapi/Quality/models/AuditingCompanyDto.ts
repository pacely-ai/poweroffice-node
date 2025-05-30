/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuditorDto } from './AuditorDto';
/**
 * Properties of auditing companies
 */
export type AuditingCompanyDto = {
    /**
     * A list of available auditors, i.e. auditing company contact persons.
     */
    readonly Auditors?: Array<AuditorDto> | null;
    /**
     * The identifier of the auditing company
     */
    readonly Id?: number;
    /**
     * The name of the auditing company
     */
    readonly Name?: string | null;
};

