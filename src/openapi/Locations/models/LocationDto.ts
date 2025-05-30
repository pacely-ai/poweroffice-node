/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * DTO for Location.
 */
export type LocationDto = {
    /**
     * The code of the location.
     */
    Code?: string | null;
    /**
     * The timestamp of the created date of the location.
     */
    readonly CreatedDateTimeOffset?: string;
    /**
     * The identifier of the location. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited or deleted (PATCH or DELETE).
     */
    readonly Id?: number;
    /**
     * A value indicating whether this instance is active. Inactive locations disable the usage of that locations in the GUI. Defaults to false.
     */
    IsActive?: boolean | null;
    /**
     * The timestamp of the last change of the location.
     */
    readonly LastChangedDateTimeOffset?: string;
    /**
     * The name of the location
     */
    Name?: string | null;
};

