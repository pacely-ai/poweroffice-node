/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The available properties returned after activating a new integration on a client.
 */
export type NewIntegrationDto = {
    /**
     * The unique identifier that the client has in Go.
     */
    readonly ClientId?: string;
    /**
     * The unique api client key for the specific client and integration activated.
     * Must be treated as a secret after activation and retrieval.
     */
    readonly ClientKey?: string;
    /**
     * The name of the client.
     */
    readonly ClientName?: string | null;
    /**
     * The organization number of the client.
     */
    readonly OrganizationNumber?: string | null;
};

