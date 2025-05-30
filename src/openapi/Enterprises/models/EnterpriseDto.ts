/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressDto } from './AddressDto';
import type { EmployerContributionRule } from './EmployerContributionRule';
import type { EmployerContributionZone } from './EmployerContributionZone';
/**
 * Enterprises available on the client.
 */
export type EnterpriseDto = {
    /**
     * Gets the timestamp the enterprise entity was created.
     */
    readonly CreatedDateTimeOffset?: string;
    EmployerContributionRule?: EmployerContributionRule;
    EmployerContributionZone?: EmployerContributionZone;
    /**
     * The enterprise number.
     */
    readonly EnterpriseNo?: string | null;
    /**
     * The identifier of the enterprise.
     */
    readonly Id?: number;
    /**
     * Indicates if this is the default enterprise.
     * New employments will be assigned to the default enterprise if not set when employments are created
     */
    readonly IsDefault?: boolean;
    /**
     * The timestamp the enterprise was last changed.
     */
    readonly LastChangedDateTimeOffset?: string;
    MailAddress?: AddressDto;
    /**
     * The number of the municipality this enterprise belong to.
     */
    readonly Municipality?: string | null;
    /**
     * The name of the enterprise.
     */
    readonly Name?: string | null;
};

