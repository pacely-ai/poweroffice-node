/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Enum defining what kind of voucher the voucher is<p>Members:</p><ul><li><i>SupplierInvoice</i> - Incoming invoice sent from a supplier to the client. Correspond with the voucher type IncomingInvoice.</li><li><i>SupplierCreditNote</i> - Incoming credit note sent from a supplier to the client. Correspond with the voucher type IncomingCreditNote.</li><li><i>ManualJournal</i> - Manual Journal. Correspond with the voucher type ManualJournal</li><li><i>BankJournal</i> - Bank journal. Correspond with the voucher type BankJournal</li></ul>
 */
export enum ApprovalVoucherType {
    SUPPLIER_INVOICE = 'SupplierInvoice',
    SUPPLIER_CREDIT_NOTE = 'SupplierCreditNote',
    MANUAL_JOURNAL = 'ManualJournal',
    BANK_JOURNAL = 'BankJournal',
}
