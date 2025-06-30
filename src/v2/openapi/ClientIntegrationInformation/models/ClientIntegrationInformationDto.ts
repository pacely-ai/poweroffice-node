/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Detailed information about the current client integration.
 */
export type ClientIntegrationInformationDto = {
    /**
     * All active Go-subscriptions for the client.
     * Available subscriptions:
     * - Accounting (Regnskap og faktura)
     * - TimeTracking (Timeregistrering)
     * - Payroll (Lønn)
     * - TravelExpense (Reiseregning)
     * - AccountingMicro (Regnskap Mikro)
     * - Quality
     * - HolidayAndLeave (Ferie og fravær)
     * - CustomerCheck (kundesjekk.no)
     */
    readonly ActiveClientSubscriptions?: Array<string> | null;
    /**
     * Id of the client.
     */
    readonly ClientId?: string | null;
    /**
     * Name of the client.
     */
    readonly ClientName?: string | null;
    /**
     * All invalid privileges for the integration based on the active Go-subscriptions for the client.
     */
    readonly InvalidPrivileges?: Array<string> | null;
    /**
     * All valid privileges for the integration based on the active Go-subscriptions for the client.
     */
    readonly ValidPrivileges?: Array<string> | null;
};

