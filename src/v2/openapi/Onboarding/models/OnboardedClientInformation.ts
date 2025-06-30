/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Contains information about the onboarded client.
 */
export type OnboardedClientInformation = {
    /**
     * The clientkey for the specific client.
     * This key is a secret, and must be stored and handled as such.
     * The clientkey is unique per instance of a client integration - i.e. unique per client.
     * Please refer to our documentation for all the details on the client credentials grant flow.
     */
    readonly ClientKey?: string;
    /**
     * The name of the client that onboarded the integrated application.
     */
    readonly ClientName?: string | null;
    /**
     * The organization number of the client that onboarded the integrated application and the related clientkey.
     */
    readonly ClientOrganizationNumber?: string | null;
};

