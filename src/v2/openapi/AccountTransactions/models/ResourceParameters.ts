/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Structure containing various resource-filter options
 */
export type ResourceParameters = {
    /**
     * Define desired fields that should be returned in Json (All fields by default).
     */
    Fields?: string | null;
    /**
     * The maximum amount of objects that can be return in a Page (20 000 by default).
     */
    readonly MaxPageSize?: number;
    /**
     * Define fields to order by, and if it should order asc (default) or desc.
     */
    OrderBy?: string | null;
    /**
     * The desired page to return.
     */
    PageNumber?: number;
    /**
     * The amount of objects to return in a Page (5000 by default). Not allowed to be larger than MaxPageSize.
     */
    PageSize?: number;
    /**
     * If set to true, all relevant filter-values will be validated against the database. NOTE: This will make the api-call much slower, but only for the initial request, as the validation-results are cached. Useful for debugging/support purposes.
     */
    UseDatabaseValidation?: boolean;
};

