/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The available properties when inviting users to Go.
 */
export type InviteUserPostDto = {
    /**
     * The access role id the user have on the client.
     */
    AccessRoleId: string;
    /**
     * The e-mail address of the user.
     */
    EmailAddress: string | null;
    /**
     * The first name of the user.
     */
    FirstName: string | null;
    /**
     * From date, inclusive.
     * The user will have access to the client from this date.
     * If not set, the user will have access from the day the user accept the invitation.
     */
    FromDate?: string | null;
    /**
     * Indicates whether the user should be added as an employee on the client.
     * If true, an employee object will be created and linked to the user after the invitation is accepted.
     */
    InviteAsEmployee?: boolean | null;
    /**
     * The last name of the user.
     */
    LastName: string | null;
    /**
     * To date, inclusive.
     * The user will have access to the client until and including this date.
     * Afterwards, the user is deactivated on the client.
     * If not set, the user will have no time restricted access.
     */
    ToDate?: string | null;
};

