/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserStatus } from './UserStatus';
/**
 * The available properties for users in Go.
 */
export type UserDto = {
    /**
     * The access role id the user have on the client.
     * Note: Administrator Role always has id: aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa
     */
    readonly AccessRoleId?: string | null;
    /**
     * The e-mail address of the user.
     */
    readonly EmailAddress?: string | null;
    /**
     * The first name of the user.
     */
    readonly FirstName?: string | null;
    /**
     * From date, inclusive.
     * The user will have access to the client from this date.
     * If null, the from date is undefined.
     */
    readonly FromDate?: string | null;
    /**
     * The identifier of the user.
     * This identifier is unique and assigned by PowerOffice Go when a new user is created.
     * Will be empty (null) if the user is invited and has not yet accepted. (Status = InvitePending)
     */
    readonly Id?: string | null;
    /**
     * The last name of the user.
     */
    readonly LastName?: string | null;
    Status?: UserStatus;
    /**
     * To date, inclusive.
     * The user will have access to the client until and including this date.
     * Afterwards, the user is deactivated on the client.
     * If null, the to date is undefined and unrestricted.
     */
    readonly ToDate?: string | null;
};

