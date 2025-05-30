/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * DTO for creating delivery terms.
 */
export type DeliveryTermPostDto = {
    /**
     * A value indicating if this delivery term is the standard delivery term set on the client.
     * Customers and sales orders will default inherit the standard delivery term from the client invoice settings.
     * Defaults to false.
     */
    IsDefault?: boolean | null;
    /**
     * Gets or sets the name of the delivery term.
     */
    Name: string | null;
};

