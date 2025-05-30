/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The delivery terms on the client
 */
export type DeliveryTermDto = {
    /**
     * The timestamp of the created date of the delivery term. UTC time.
     */
    readonly CreatedDateTimeOffset?: string;
    /**
     * The identifier of the delivery term. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited or deleted (PATCH or DELETE).
     */
    readonly Id?: number;
    /**
     * A value indicating if this delivery term is the standard delivery term set on the client.
     * Customers and sales orders will default inherit the standard delivery term from the client invoice settings.
     * Defaults to false.
     */
    IsDefault?: boolean | null;
    /**
     * The timestamp of the last changed date of the delivery term. UTC time.
     */
    readonly LastChangedDateTimeOffset?: string;
    /**
     * Gets or sets the name of the delivery term.
     */
    Name?: string | null;
};

