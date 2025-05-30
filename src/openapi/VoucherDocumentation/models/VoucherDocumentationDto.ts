/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VoucherType } from './VoucherType';
/**
 * A lightweight object of available voucher documentation.
 */
export type VoucherDocumentationDto = {
    /**
     * Indicates whether there is an EHF (Electronic Trade Format) attached to the voucher.
     */
    readonly HasEhf?: boolean;
    /**
     * Indicates whether there are images attached to the voucher.
     */
    readonly HasImages?: boolean;
    /**
     * Indicates whether there is an PDF (Portable Document Format) attached to the voucher.
     */
    readonly HasPdf?: boolean;
    /**
     * Indicates whether there is sales order attachments on the voucher.
     * Note that this is only relevant for OutgoingInvoice and OutgoingCreditNote.
     * Use attachments-endpoint under SalesOrders to get the attachments.
     */
    readonly HasSalesOrderAttachments?: boolean;
    /**
     * Indicates whether the voucher has been created by an integration via API.
     * We only allow adding documentation to imported vouchers.
     */
    IsImported?: boolean;
    /**
     * The identifier of the voucher the documentation belongs to.
     */
    readonly VoucherId?: string;
    /**
     * The voucher number.
     */
    readonly VoucherNo?: number | null;
    VoucherType?: VoucherType;
};

