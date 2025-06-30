/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The available properties for adding a partner user to a client.
 */
export type AddPartnerUserPostDto = {
    /**
     * The access role id the user should have on the client.
     */
    AccessRoleId: string;
    /**
     * From date, inclusive.
     * The user will have access to the client from this date.
     */
    FromDate?: string | null;
    /**
     * The existing partner user that should be added to the client.
     */
    PartnerUserId: string;
    /**
     * To date, inclusive.
     * The user will have access to the client until and including this date.
     * Afterwards, the user is deactivated on the client.
     */
    ToDate?: string | null;
};

