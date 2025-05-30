/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * DTO for creating location.
 */
export type LocationPostDto = {
    /**
     * The code of the location.
     */
    Code?: string | null;
    /**
     * A value indicating whether this instance is active. Inactive locations disable the usage of that locations in the GUI. Defaults to false.
     */
    IsActive?: boolean | null;
    /**
     * The name of the location
     */
    Name: string | null;
};

