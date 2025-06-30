/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OutgoingInvoiceVoucherLineDto } from './OutgoingInvoiceVoucherLineDto';
/**
 * properties available when posting an outgoing invoice voucher
 */
export type OutgoingInvoiceVoucherDto = {
    /**
     * The cid number (norwegian: KID), if applicable to the outgoing invoice voucher.
     */
    Cid?: string | null;
    /**
     * The contract number reference of the outgoing invoice, if applicable.
     */
    ContractNo?: string | null;
    /**
     * The timestamp of when the voucher object was created..
     */
    readonly CreatedDateTimeOffset?: string;
    /**
     * The total amount of the outgoing voucher, in the currency specified by the currency code of the voucher.
     */
    CurrencyAmount?: number;
    /**
     * The currency code of the outgoing invoice.
     */
    CurrencyCode?: string | null;
    /**
     * The normalized currency exchange rate.
     */
    CurrencyExchangeRate?: number | null;
    /**
     * The custom matching reference of the customer sub-ledger transaction.
     */
    CustomMatchingReference?: string | null;
    /**
     * The id of the customer sub-ledger account.
     */
    CustomerAccountId?: number | null;
    /**
     * The customer reference (i.e. buyers reference) of the outgoing invoice.
     */
    CustomerReference?: string | null;
    /**
     * The primary delivery address as it was set when the invoice was delivered.
     */
    DeliveryAddress1?: string | null;
    /**
     * The secondary delivery address as it was set when the invoice was delivered.
     */
    DeliveryAddress2?: string | null;
    /**
     * The delivery address city as it was set when the invoice was delivered.
     */
    DeliveryAddressCity?: string | null;
    /**
     * The delivery address country code as it was set when the invoice was delivered.
     */
    DeliveryAddressCountryCode?: string | null;
    /**
     * The delivery address zip code as it was set when the invoice was delivered.
     */
    DeliveryAddressZipCode?: string | null;
    /**
     * The delivery date of the goods/services sold.
     */
    DeliveryDate?: string | null;
    /**
     * The id of the delivery term associated with the outgoing credit note.
     */
    DeliveryTermId?: number | null;
    /**
     * The department Id of the voucher header and the customer sub-ledger transaction. Departments can be queried and identified using the Department service.
     */
    DepartmentId?: number | null;
    /**
     * The description of the customer sub-ledger transaction.
     */
    Description?: string | null;
    /**
     * The id of the dimension 1 associated with the voucher header and the customer sub-ledger transaction.
     */
    Dim1Id?: number | null;
    /**
     * The id of the dimension 2 associated with the voucher header and the customer sub-ledger transaction.
     */
    Dim2Id?: number | null;
    /**
     * The id of the dimension 3 associated with the voucher header and the customer sub-ledger transaction.
     */
    Dim3Id?: number | null;
    /**
     * The due date of the outgoing invoice.
     */
    DueDate?: string | null;
    /**
     * The external import reference associated with the voucher.
     * This property can be set by integrations creating vouchers, in order to reference the external system and ensure
     * a duplicate check (only one instance of the reference can exist on the client). Can be used to correlate/duplicate
     * check transactions. Guid's are recommended, or other unique references. This property is only available using
     * the api (not visible in the user interface)
     */
    ExternalImportReference?: string | null;
    /**
     * A value that uniquely identifies this voucher. The Id is assigned by PowerOffice when the entry is created
     */
    readonly Id?: string;
    /**
     * The imported order number. Can be used to reference the order number in the external system. The imported order
     * number is visible on the invoice reports in the PowerOffice GUI.
     */
    ImportedOrderNo?: number | null;
    /**
     * The external voucher number. Can be used to reference the voucher number in the external system.
     * The external voucher number is visible in PowerOffice in various reports.
     */
    ImportedVoucherNo?: number | null;
    /**
     * The invoice number of the outgoing invoice (invoice to a customer). Required property and must be unique for the client.
     */
    InvoiceNo?: string | null;
    /**
     * Value indicating whether this voucher has been reversed. If an outgoing invoice voucher is reversed, the
     * invoiceNo and externalImportReference properties can be reused on a new voucher
     */
    IsReversed?: boolean | null;
    /**
     * The id of the location dimension associated with the voucher header and the customer sub-ledger transaction.
     */
    LocationId?: number | null;
    /**
     * outgoing invoice voucher lines
     */
    OutgoingInvoiceLines?: Array<OutgoingInvoiceVoucherLineDto> | null;
    /**
     * The id of the project associated with the voucher header and the customer sub-ledger.
     */
    ProjectId?: number | null;
    /**
     * The purchase order reference. The property can be used to reference purchase orders placed by the customer.
     */
    PurchaseOrderReference?: string | null;
    /**
     * The SAF-T source id. This is the ID of the system that generated the voucher. When this voucher is exported to
     * SAF-T, this property is mapped on the transactions SourceID in the SAF-T file. If the creating system is
     * required to export its own SAF-T file, this source id should correspond with the SystemID in the SAF-T file of
     * the external system to ensure an audit trail. Max length is 35 characters.
     */
    SaftSourceId?: string | null;
    /**
     * The (employee) id of the sales person associated with the outgoing credit note.
     */
    SalesPersonEmployeeId?: number | null;
    /**
     * The voucher date. This represents the date of the voucher, the posting date and the document date of the
     * outgoing invoice (invoice date).
     */
    VoucherDate?: string;
    /**
     * The voucher number. This is the voucher number assigned by PowerOffice when the voucher was posted. Voucher
     * numbers are assigned in sequence.
     */
    readonly VoucherNo?: number | null;
};

