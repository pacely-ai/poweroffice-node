/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The contact address DTO contains all properties relevant to an address object in Go.
 * Address representing a physical location.
 */
export type ContactAddressDto = {
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
     * The identifier of the address.
     * This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited (PATCH), deleted (DELETE) or retrieved specifically (GET).
     */
    readonly Id?: number;
    /**
     * The last changed timestamp of this address.
     */
    readonly LastChangedDateTimeOffset?: string;
    /**
     * The zip code (postal code).
     */
    ZipCode?: string | null;
};

