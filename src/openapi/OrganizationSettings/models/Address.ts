/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Address representing a physical location.
 */
export type Address = {
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
     * The zip code (postal code).
     */
    ZipCode?: string | null;
};

