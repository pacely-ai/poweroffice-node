/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The contact address patch DTO contains all properties relevant to altering an address object in Go.
 * Address representing a physical location.
 * Includes external code for reference in external systems.
 */
export type ContactAddressPatchDto = {
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
     * The zip code (postal code).
     */
    ZipCode?: string | null;
};

