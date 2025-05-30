/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressPatchDto } from './AddressPatchDto';
/**
 * Properties for updating a contact person.
 */
export type ContactPersonPatchDto = {
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
     * A value indicating whether this instance is active. Inactive contact persons disable the usage of that in the GUI.
     */
    IsActive?: boolean | null;
    /**
     * A bool indicating whether this contact person is the default contact person.
     */
    IsDefault?: boolean | null;
    /**
     * The last name of the contact person.
     */
    LastName?: string | null;
    MailAddress?: AddressPatchDto;
    /**
     * The phone number of the contact person.
     */
    PhoneNumber?: string | null;
    /**
     * The title of the contact person. This might for instance be the job title of the person.
     */
    Title?: string | null;
};

