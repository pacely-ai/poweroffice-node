/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Properties of a contact delivery address.
 */
export type ContactDeliveryAddressDto = {
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
    City?: string | null;
    /**
     * The identifier of the contact (customer, employee or supplier) this delivery address is assigned to.
     * Cannot be set directly, but is set based on the contact argument in the request URL.
     */
    readonly ContactId?: number;
    /**
     * The ISO 3166-1 alfa-2 country code (two characters).
     * Defaults to "NO" if not set.
     */
    CountryCode?: string | null;
    /**
     * The timestamp of when this address was created.
     */
    readonly CreatedDateTimeOffset?: string;
    /**
     * The external code
     * This field is not available in the GUI, but can be used by the integrating party to reference the address in the external system.
     * The field must be unique (for each address).
     */
    ExternalCode?: string | null;
    /**
     * The identifier of the address.
     * This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited (PATCH), deleted (DELETE) or retrieved specifically (GET).
     */
    readonly Id?: number;
    /**
     * A value indicating whether this delivery address is the primary delivery address for this contact.
     * Sales orders created, will default inherit the primary delivery address of the customer, if not overridden.
     * The first delivery address created for a contact will automatically be set as primary.
     */
    readonly IsPrimary?: boolean | null;
    /**
     * The last changed timestamp of this address.
     */
    readonly LastChangedDateTimeOffset?: string;
    /**
     * The zip code (postal code).
     */
    ZipCode?: string | null;
};

