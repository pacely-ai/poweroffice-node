/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The available properties returned after creating a new client.
 */
export type ClientDto = {
    /**
     * The name of the client.
     */
    readonly ClientName?: string | null;
    /**
     * The unique identifier that the new client has in Go.
     */
    readonly Id?: string;
    /**
     * Value indicating whether the client is active or not in Go.
     */
    readonly IsActive?: boolean;
    /**
     * The organization number of the client.
     */
    readonly OrganizationNumber?: string | null;
};

