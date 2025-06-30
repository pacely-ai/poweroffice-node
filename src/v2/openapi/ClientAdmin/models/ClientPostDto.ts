/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressPostDto } from './AddressPostDto';
import type { Months } from './Months';
/**
 * The available properties for the client organization settings, when creating new clients
 */
export type ClientPostDto = {
    /**
     * The identifier of the user that will be the client subscription administrator.
     * This user will automatically be added to the client as an administrator.
     */
    AdminUserId: string;
    /**
     * The name of the client.
     */
    ClientName: string | null;
    /**
     * The start date of processing in Go.
     * The start day will always be set as the first day of the month provided, in the year provided.
     * The conversion date is the date the client started using Go.
     * Transactions can only be posted on or after this date.
     * The date can also be used to identify the date of the start-balance in Go, which will be this date -1 day.
     * If not set, the conversion date will default to January of the current year.
     */
    ConversionDate?: string | null;
    FinancialYearEndMonth?: Months;
    /**
     * Information on whether this this client is registered for Value Added Tax (VAT, norwegian: mva-registrert).
     * If false, vat is not applied to outgoing invoices.
     */
    IsVatRegistered?: boolean | null;
    /**
     * The legal name of the client.
     * The legal name is the formal name, and might differ from the marketing name.
     */
    LegalName: string | null;
    MailAddress: AddressPostDto;
    /**
     * The organization number of the client.
     */
    OrganizationNumber: string | null;
    /**
     * The unique identifier of the template client to be used, if applicable.
     * If set, the new client will inherit the setup of general ledger accounts, activities, roles and Altinn settings.
     * If not provided, a standard Go template is used for the new client.
     */
    TemplateClientId?: string | null;
    /**
     * Information on whether this client are entitled to and uses vat compensation.
     * If true, vat codes with first letter notation K can be used when relevant for the client.
     */
    UseVatCompensation?: boolean | null;
};

