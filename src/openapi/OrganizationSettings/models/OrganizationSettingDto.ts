/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Address } from './Address';
import type { AgricultureDepartment } from './AgricultureDepartment';
/**
 * Properties related to Organization Settings in PowerOffice Go.
 */
export type OrganizationSettingDto = {
    DefaultAgricultureDepartment?: AgricultureDepartment;
    DeliveryAddress?: Address;
    /**
     * The e-mail address registered for the client.
     */
    readonly EmailAddress?: string | null;
    /**
     * The unique id the client have in PowerOffice Go.
     */
    readonly Id?: string;
    /**
     * Indicates whether the client is registered in ELMA and can receive incoming invoices by EHF.
     */
    readonly InvoiceInboxEhf?: boolean;
    /**
     * Indicates whether the client have an e-mail set for receiving invoices by e-mail directly to the client.
     */
    readonly InvoiceInboxEmail?: boolean;
    /**
     * The voucher e-mail of the client, if set.
     * Used only if invoiceInboxEmail is true.
     * This e-mail can be used to send vouchers (supplier invoices etc) to the client.
     * Often used by suppliers, if they are unable to send EHF invoices to this client.
     * For a client in production the address will always be in the form @faktura.poweroffice.net.
     */
    readonly InvoiceInboxEmailAddress?: string | null;
    /**
     * Indicates whether this client is an agriculture client and therefore uses NIBIO's agricultural chart of accounts requiring agricultural department on it's accounts.
     */
    readonly IsAgricultureClient?: boolean | null;
    /**
     * The timestamp of the last change. Last changed will update when the settings are created, or whenever the settings are changed.
     */
    readonly LastChangedDateTimeOffset?: string;
    /**
     * The legal name of the client. The legal name is the formal name, and might differ from the marketing name.
     */
    readonly LegalName?: string | null;
    MailAddress?: Address;
    /**
     * A property indicating whether the client have set the delivery address equal to the mail address. If so, the content of the property deliveryAddress can be ignored.
     */
    readonly MailAddressIsDeliveryAddress?: boolean;
    /**
     * The name of the client.
     */
    readonly Name?: string | null;
    /**
     * The organization number of the client.
     */
    readonly OrganizationNumber?: string | null;
    /**
     * The phone number registered on the client.
     */
    readonly PhoneNumber?: string | null;
    /**
     * The website url registered on the client.
     */
    readonly WebsiteUrl?: string | null;
};

