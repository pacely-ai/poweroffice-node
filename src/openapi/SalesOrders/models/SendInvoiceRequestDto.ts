/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SendInvoiceDeliveryType } from './SendInvoiceDeliveryType';
/**
 * Represents the status of a sales order.
 */
export type SendInvoiceRequestDto = {
    DeliveryType?: SendInvoiceDeliveryType;
    /**
     * The e-mail address used for delivery by e-mail.
     * If not set in the request, the customers default invoice email address will be used.
     * Email address will be used as a fallback delivery method and should be provided when using DeliveryType Auto.
     */
    EmailAddress?: string | null;
    /**
     * The id of the sales order.
     */
    readonly Id?: string;
    /**
     * Override the due date of the invoice.
     * If not set, the due date will be determined by the payment term of the sales order.
     */
    OverrideDueDate?: string | null;
    /**
     * The date the invoice voucher will get. If not provided, the voucher date will be set to the current date.
     * This represents the date of the voucher and the document date of the invoice (ie. the invoice date).
     */
    VoucherDate?: string | null;
};

