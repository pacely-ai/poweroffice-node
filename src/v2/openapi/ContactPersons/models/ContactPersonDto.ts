/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressDto } from './AddressDto';
/**
 * Contact person data transfer object.
 */
export type ContactPersonDto = {
    /**
     * The identifier of the contact (customer or supplier) this contact person is assigned to.
     */
    readonly ContactId?: number;
    /**
     * The timestamp of the created date of the contact person.UTC time.
     */
    readonly CreatedDateTimeOffset?: string;
    /**
     * The e-mail address registered for the contact person.
     * This field is validated for typos in POST/PATCH calls.
     */
    EmailAddress?: string | null;
    /**
     * The external code. This field is not available in the GUI,
     * but can be used by the integrating party to reference the contact
     * person in the external system. The field must be unique (for each contact person).
     */
    ExternalCode?: string | null;
    /**
     * The first name of the contact person.
     */
    FirstName?: string | null;
    /**
     * The identifier of the contact person. This identifier
     * is unique and assigned by PowerOffice Go when a new entity is saved,
     * and should be provided when an entity should be edited or deleted (PATCH or DELETE).
     */
    readonly Id?: number;
    /**
     * A value indicating whether this instance is active. Inactive contact persons disable the usage of that in the GUI.
     */
    IsActive?: boolean | null;
    /**
     * A bool indicating whether this contact person is the default contact person.
     */
    IsDefault?: boolean | null;
    /**
     * The timestamp of the last change of the contact person. UTC time.
     */
    readonly LastChangedDateTimeOffset?: string;
    /**
     * The last name of the contact person.
     */
    LastName?: string | null;
    MailAddress?: AddressDto;
    /**
     * The phone number of the contact person.
     */
    PhoneNumber?: string | null;
    /**
     * The title of the contact person. This might for instance be the job title of the person.
     */
    Title?: string | null;
};

