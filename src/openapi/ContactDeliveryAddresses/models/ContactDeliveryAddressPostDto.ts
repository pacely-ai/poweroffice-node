/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Properties for creating a contact delivery address.
 */
export type ContactDeliveryAddressPostDto = {
    /**
     * The first (main) address line.
     */
    AddressLine1?: string | null;
    /**
     * The second address line.
     */
    AddressLine2?: string | null;
    /**
     * The city.
     */
    City: string | null;
    /**
     * The ISO 3166-1 alfa-2 country code (two characters).
     * Defaults to "NO" if not set.
     */
    CountryCode?: string | null;
    /**
     * The external code
     * This field is not available in the GUI, but can be used by the integrating party to reference the address in the external system.
     * The field must be unique (for each address).
     */
    ExternalCode?: string | null;
    /**
     * A value indicating whether this delivery address is the primary delivery address for this contact.
     * Sales orders created, will default inherit the primary delivery address of the customer, if not overridden.
     * The first delivery address created for a contact will automatically be set as primary.
     */
    IsPrimary?: boolean | null;
    /**
     * The zip code (postal code).
     */
    ZipCode: string | null;
};

