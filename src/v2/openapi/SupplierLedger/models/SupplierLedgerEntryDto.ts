/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VoucherType } from './VoucherType';
/**
 * Represents a supplier ledger entry.
 */
export type SupplierLedgerEntryDto = {
    /**
     * The posted amount of the entry. Amount is always presented in the client currency.
     * Always present on transactions.
     */
    readonly Amount?: number;
    /**
     * The balance of the entry (remaining amount to be paid), in the client currency on the date (openItems) / toDate (statement).
     * If balance is less than amount, the entry will have a match with at least one other entry with the opposite amount, and those entries will share the same matchId.
     */
    readonly Balance?: number;
    /**
     * The cid number (norwegian: KID), if present.
     * Entries with the opposite amounts and the same cid will be matched on the sub-ledger account, if the client use cid and the items are not already matched out.
     */
    readonly Cid?: string | null;
    /**
     * The created timestamp.
     * This is the timestamp the transaction was created, and may differ from the timestamp of accounting effect for the transaction (ie the property PostingDate).
     * Always present on transactions.
     */
    readonly CreatedDateTimeOffset?: string;
    /**
     * The created from import journal identifier, if present.
     * Provided if this account transaction has been created in Go by an import.
     */
    readonly CreatedFromImportJournalId?: string | null;
    /**
     * The currency amount. Differs from Amount if the transaction was posted with a currency other than the client currency.
     */
    readonly CurrencyAmount?: number;
    /**
     * The currency code. Currencies active on the client can be queried using the AccountingSettings service. Currency codes follow the ISO4217 standard.
     */
    readonly CurrencyCode?: string | null;
    /**
     * The custom matching reference set on the transaction. This property will only have value on entries created through the API or Import with CustomMatchingReference specified.
     * This property is used for matching purposes, where entries posted with a CustomMatchingReference will be matched immediately with existing entries in the sub-ledger that have the same CustomMatchingReference and opposite amount (unless existing entries are already matched out).
     */
    readonly CustomMatchingReference?: string | null;
    /**
     * The department code. Available if the transaction was posted with department.
     * Departments can be queried and identified using the Department service.
     */
    readonly DepartmentCode?: string | null;
    /**
     * The department id. Available if the transaction was posted with department.
     * Departments can be queried and identified using the Department service.
     */
    readonly DepartmentId?: number | null;
    /**
     * The code of the dimension 1 associated with the entry.
     * Dimension 1-3 are customizable dimensions that can be defined and queried using the CustomDimension- and CustomDimensionValue-services.
     */
    readonly Dim1Code?: string | null;
    /**
     * The id of the dimension 1 associated with the account transaction.
     */
    readonly Dim1Id?: number | null;
    /**
     * The code of the dimension 2 associated with the account transaction.
     * Dimension 1-3 are customizable dimensions that can be defined and queried using the CustomDimension- and CustomDimensionValue-services.
     */
    readonly Dim2Code?: string | null;
    /**
     * The id of the dimension 2 associated with the account transaction.
     */
    readonly Dim2Id?: number | null;
    /**
     * The code of the dimension 3 associated with the account transaction.
     * Dimension 1-3 are customizable dimensions that can be defined and queried using the CustomDimension- and CustomDimensionValue-services.
     */
    readonly Dim3Code?: string | null;
    /**
     * The id of the dimension 3 associated with the account transaction.
     */
    readonly Dim3Id?: number | null;
    /**
     * The due date of the entry. Relevant only for voucher types IncomingInvoice and IncomingCreditNote. The date represent when the amount is due to be paid to the supplier.
     */
    DueDate?: string | null;
    /**
     * The ExternalImportReference, if set.
     * This property can be set by integrations posting vouchers in Go, in order to reference the external system and ensure a duplicate check when posting the voucher to Go (only one instance of the reference can exist).
     * Can be used to correlate/duplicate check transaction.
     */
    readonly ExternalImportReference?: string | null;
    /**
     * A value that uniquely identifies this (ledger) entry. The Id is assigned by Go when the transactions is posted in Go.
     * Always present on transactions.
     */
    readonly Id?: number;
    /**
     * The invoice number, if the entry is an entry with the voucher type IncomingInvoice or IncomingCreditNote.
     * Be aware that the invoiceNo is a string, so it's not necessarily a number.
     */
    readonly InvoiceNo?: string | null;
    /**
     * A value indicating whether this ledger entry is created by the integration currently communicating with the API.
     * Will be true for all entries that are created by the same integration user (same Application Key) as the integration currently authorized.
     * Can be used in filtering if only the current integration's entries are relevant to report (in simplified queries of payment status of invoices, for instance).
     */
    readonly IsCreatedByCurrentIntegration?: boolean | null;
    /**
     * A value indicating whether this entry was created by the write off functionality in Go.
     * Such entries are not payments, but an accounting routine writing off an open item.
     */
    readonly IsWriteOff?: boolean | null;
    /**
     * The timestamp of the last change of this entry.
     * The accounting entry in itself cannot change, but the match state of the sub-ledger entry might change.
     * Using last changed filtering is one way of retrieving new matched items and as such the payment status of invoices.
     */
    readonly LastChangedDateTimeOffset?: string;
    /**
     * The code of the location dimension associated with the entry, if set.
     */
    readonly LocationCode?: string | null;
    /**
     * The id of the location dimension associated with the entry, if location code is set.
     */
    readonly LocationId?: number | null;
    /**
     * The match identifier on the entry, if it is matched with one or more other entries. All sub-ledger entries that are matched together share the same matchId.
     */
    readonly MatchId?: number | null;
    /**
     * The posting date.
     * This is the date of effect in the accounting system for the Amount and CurrencyAmount (also the currency conversion date used by Go if the currency rate was not set explicit when posted).
     * Always present on transactions.
     */
    readonly PostingDate?: string;
    /**
     * The project code. Available if the transaction was posted with project.
     * Projects can be queried and identified using the Project service.
     */
    readonly ProjectCode?: string | null;
    /**
     * The project id. Available if the transaction was posted with project.
     * Projects can be queried and identified using the Project service.
     */
    readonly ProjectId?: number | null;
    /**
     * The supplier account number this sub-ledger entry is posted on.
     * SupplierAccountNo will also represent the Supplier number.
     * Suppliers can be queried and identified using the Supplier service.
     */
    readonly SupplierAccountNo?: number | null;
    /**
     * The external number of the supplier of this sub-ledger entry.
     * An external number set on the supplier is often used to reference the supplier number in the external system, if the supplier numbers are not kept in 1:1 sync between Go and the external system.
     * The field is available in the GUI with the name External Code.
     * Suppliers can be queried and identified using the Supplier service.
     */
    readonly SupplierExternalNo?: number | null;
    /**
     * The id of the supplier of this sub-ledger entry.
     * Suppliers can be queried and identified using the Supplier service.
     */
    readonly SupplierId?: number | null;
    /**
     * The name of the supplier of this sub-ledger entry.
     * Suppliers can be queried and identified using the Supplier service.
     */
    readonly SupplierName?: string | null;
    /**
     * The date of the voucher.
     * This represents the date of the voucher, the document date of an invoice for instance,
     * and may differ from the transaction dates for the voucher.
     * Always present on transactions.
     */
    readonly VoucherDate?: string;
    /**
     * The voucher identifier.
     * The Id is assigned by Go when the voucher is created, and is shared by all transactions within the same voucher.
     * Always present on transactions.
     */
    readonly VoucherId?: string;
    /**
     * The voucher number.
     * This is the voucher number assigned by Go when the voucher was posted.
     * Voucher numbers are assigned by Go in sequence.
     * Always present on transactions.
     */
    readonly VoucherNo?: number;
    VoucherType?: VoucherType;
};

