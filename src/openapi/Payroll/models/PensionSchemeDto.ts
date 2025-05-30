/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The pension scheme DTO contains all properties relevant to the pension schemes in payroll settings in Go.
 */
export type PensionSchemeDto = {
    /**
     * Value indicating whether this pension scheme entity is active.
     */
    readonly IsActive?: boolean;
    /**
     * The name of the pension provider.
     */
    readonly PensionProviderName?: string | null;
    /**
     * The organization number of the pension provider.
     */
    readonly PensionProviderOrganizationNo?: string | null;
};

