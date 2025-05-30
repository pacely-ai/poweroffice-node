/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InvoiceDeliveryType } from './InvoiceDeliveryType';
/**
 * Represents the sent status of a sales order.
 */
export type InvoiceSentStateDto = {
    /**
     * The actual due date of the invoice or credit note.
     */
    readonly DueDate?: string | null;
    /**
     * The identifier of a sales order, outgoing invoice or outgoing credit note.
     */
    readonly Id?: string;
    InvoiceDeliveryType?: InvoiceDeliveryType;
    /**
     * The invoice number in number format. Available only for sent and posted invoices.
     */
    readonly InvoiceNo?: number | null;
    /**
     * A flag indicating whether the send request was successfully queued.
     * Will be true while the invoice is in transit.
     * After the invoice is delivered to the customer, IsInvoiceBeingProcessed will be set to false.
     */
    readonly IsInvoiceBeingProcessed?: boolean | null;
    /**
     * If invoice delivery fails this property will contain the last error message.
     */
    readonly LastErrorMessage?: string | null;
    /**
     * The date this sales order was invoiced using Go. Will only be set if the order was successfully invoiced.
     * For integrations using the createAndSendInvoice request, this property having a value will confirm the delivery.
     * To retrieve any further invoice information, the OutgoingInvoices reporting endpoint should be used.
     */
    readonly SentDateTimeOffset?: string | null;
};

