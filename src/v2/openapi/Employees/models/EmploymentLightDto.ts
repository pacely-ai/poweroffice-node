/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmploymentFormType } from './EmploymentFormType';
/**
 * The Employment Light DTO contains properties relevant to an employment relationship object in Go.
 * It is a lightweight (slimmed down) version of the Employment DTO, and therefore contains fewer properties.
 */
export type EmploymentLightDto = {
    /**
     * The timestamp when the employment entity was created.
     */
    readonly CreatedDateTimeOffset?: string;
    /**
     * The identifier of the employee the employment belongs to.
     */
    readonly EmployeeId?: number;
    EmploymentForm?: EmploymentFormType;
    /**
     * The end date of the employment.
     */
    readonly EndDate?: string | null;
    /**
     * The identifier of the enterprise for the employment.
     */
    readonly EnterpriseId?: number | null;
    /**
     * The id of the employment (employment relationship).
     */
    readonly Id?: number;
    /**
     * The timestamp when the employment entity was last changed.
     */
    readonly LastChangedDateTimeOffset?: string;
    /**
     * The start date of the employment.
     */
    readonly StartDate?: string;
};

