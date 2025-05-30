/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientContactPersonRole } from './ClientContactPersonRole';
/**
 * Client contact is representing a contact of the client.
 * Usually this is the board of directors and the general manager.
 */
export type ClientContactDto = {
    /**
     * The E-mail address registered for the contact.
     */
    readonly Email?: string | null;
    /**
     * The first name of the contact.
     */
    readonly FirstName?: string | null;
    /**
     * The Id of the contact.
     */
    readonly Id?: number;
    /**
     * The last name of the contact.
     */
    readonly LastName?: string | null;
    /**
     * The phone number registered for the contact.
     */
    readonly Phone?: string | null;
    Role?: ClientContactPersonRole;
    /**
     * The year of birth for the contact.
     */
    readonly YearOfBirth?: string | null;
};

