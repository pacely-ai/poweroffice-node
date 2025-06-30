/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InvoiceDeliveryType } from './InvoiceDeliveryType';
import type { OutgoingInvoiceVoucherType } from './OutgoingInvoiceVoucherType';
/**
 * Lightweight version of an (outgoing) invoice
 */
export type OutgoingInvoiceDto = {
    /**
     * The balance of the customer ledger entry this invoice is related to (remaining amount to be paid), in the client currency.
     * If balance is less than totalPostedAmount,
     * the entry will have a match in the customer ledger with at least one other entry with the opposite amount,
     * and those entries will share the same matchId.
     * If the balance is zero, the invoice will have the status paid in the GUI.
     */
    readonly Balance?: number | null;
    /**
     * The timestamp of the last change of the balance property.
     * This reflect the last changed timestamp of the customer ledger entry this invoice relate to, and the match state of the sub-ledger entry.
     * Using this property as filtering is one way of retrieving the payment status of invoices.
     */
    readonly BalanceLastChangedDateTimeOffset?: string | null;
    /**
     * The code of the branding theme used on the invoice.
     * Available if the invoice was created and sent from Go.
     * Branding themes can be retrieved using the SalesSettings endpoint.
     */
    readonly BrandingThemeCode?: string | null;
    /**
     * The id of the branding theme, if brandingThemeCode is set on the invoice.
     * Branding themes can be retrieved using the SalesSettings endpoint.
     */
    readonly BrandingThemeId?: number | null;
    /**
     * The cid number (norwegian: KID), if present.
     */
    readonly Cid?: string | null;
    /**
     * The contract number, if set on the invoice.
     */
    readonly ContractNo?: string | null;
    /**
     * The created timestamp of the invoice object.
     * If the invoice was created and sent from Go, the created timestamp is the timestamp the order (invoice draft) was first created.
     * If imported, the created timestamp will represent the timestamp of the import.
     */
    readonly CreatedDateTimeOffset?: string;
    /**
     * The standard currency code for the invoice.
     * Currencies active on the client can be queried using the AccountingSettings service.
     * Currency codes follow the ISO4217 standard.
     * Defaults to NOK.
     */
    readonly CurrencyCode?: string | null;
    /**
     * The normalized currency exchange rate.
     * Always base 1.
     */
    readonly CurrencyExchangeRate?: number | null;
    /**
     * The custom matching reference, if set.
     * This property will only have value on entries created through the API or Import with CustomMatchingReference specified.
     * This property is used for matching purposes in the customer sub-ledger account, where entries posted with a CustomMatchingReference will be matched immediately with existing entries in the sub-ledger that have the same CustomMatchingReference and opposite amount (unless existing entries are already matched out).
     */
    readonly CustomMatchingReference?: string | null;
    /**
     * The identifier of the customer this invoice is related to.
     * Customers can be queried and identified using the Customer service.
     */
    readonly CustomerId?: number | null;
    /**
     * The customer number for the customer this invoice relates to.
     * Customers can be queried and identified using the Customer service.
     */
    readonly CustomerNo?: number | null;
    /**
     * The customer reference (ie buyers reference), if set.
     * This property is often used to give the receiver of the invoice a reference they are familiar with.
     * If CustomerReferenceContactPersonId has value, the name of the customers contact person is returned,
     * otherwise the "Your Reference" text used on the invoice will be returned.
     */
    readonly CustomerReference?: string | null;
    /**
     * The customer reference contact person id (ie buyers reference).
     * The default use of customer reference when invoicing from Go, is to reference a customer contact person.
     * If this property is set, the string property customerReference will have no value.
     * Contact persons can be retrieved using the ContactPerson endpoint.
     */
    readonly CustomerReferenceContactPersonId?: number | null;
    /**
     * The delivery address primary line as it was set when the invoice was delivered, if set and delivered from Go.
     */
    readonly DeliveryAddress1?: string | null;
    /**
     * The delivery address secondary line as it was set when the invoice was delivered, if set and delivered from Go.
     */
    readonly DeliveryAddress2?: string | null;
    /**
     * The delivery address city as it was set when the invoice was delivered, if set and delivered from Go.
     */
    readonly DeliveryAddressCity?: string | null;
    /**
     * The delivery address country code as it was set when the invoice was delivered, if set and delivered from Go.
     * The code is ISO 3166-1 alfa-2 country code (Two characters)
     */
    readonly DeliveryAddressCountryCode?: string | null;
    /**
     * The delivery address zip code as it was set when the invoice was delivered, if set and delivered from Go.
     */
    readonly DeliveryAddressZipCode?: string | null;
    /**
     * The delivery date set on the invoice.
     */
    readonly DeliveryDate?: string | null;
    /**
     * The delivery term of the invoice.
     * The default set of delivery terms provided in Go are incoterms, but any custom string can be set.
     */
    readonly DeliveryTerm?: string | null;
    /**
     * The id of the delivery term of the invoice.
     */
    readonly DeliveryTermId?: number | null;
    /**
     * The code of the department for the invoice, if set.
     * Note that this is the department set in the header of the invoice.
     * The invoice lines might specify other departments or no department.
     * Departments can be queried and identified using the Department service.
     */
    readonly DepartmentCode?: string | null;
    /**
     * The id of the department, if departmentCode is set on the invoice.
     * Departments can be queried and identified using the Department service.
     */
    readonly DepartmentId?: number | null;
    /**
     * The code of the dimension 1 associated with the invoice, if set.
     * Note that this is the dimension 1 set in the header of the invoice.
     * The invoice lines might specify other dimension 1 values or no dimension 1.
     * Dimension 1-3 are customizable dimensions that can be defined and queried using the CustomDimension and CustomDimensionValue services.
     */
    readonly Dim1Code?: string | null;
    /**
     * The id of the dimension 1 associated with the invoice, if dim1Code is set.
     */
    readonly Dim1Id?: number | null;
    /**
     * The code of the dimension 2 associated with the invoice.
     * Note that this is the dimension 2 set in the header of the invoice.
     * The invoice lines might specify other dimension 2 values or no dimension 2.
     * Dimension 1-3 are customizable dimensions that can be defined and queried using the CustomDimension and CustomDimensionValue services.
     */
    readonly Dim2Code?: string | null;
    /**
     * The id of the dimension 2 associated with the invoice, if dim2Code is set.
     */
    readonly Dim2Id?: number | null;
    /**
     * The code of the dimension 3 associated with the invoice.
     * Note that this is the dimension 3 set in the header of the invoice.
     * The invoice lines might specify other dimension 3 values or no dimension 3.
     * Dimension 1-3 are customizable dimensions that can be defined and queried using the CustomDimension and CustomDimensionValue services.
     */
    readonly Dim3Code?: string | null;
    /**
     * The id of the dimension 3 associated with the invoice, if dim3Code is set.
     */
    readonly Dim3Id?: number | null;
    /**
     * The due date of the invoice.
     */
    readonly DueDate?: string | null;
    /**
     * The ExternalImportReference, if set.
     * This property can be set by integrations posting vouchers to Go or creating invoice drafts, in order to reference the external system and ensure a duplicate check (only one instance of the reference can exist for the object type).
     * Can be used to correlate/duplicate check transactions.
     */
    readonly ExternalImportReference?: string | null;
    /**
     * The identifier of the invoice and the posted voucher.
     * The id is assigned by Go when the voucher is created, and is shared by all transactions within the same voucher.
     * If the invoice was first created in Go as a draft, the id is consistent from the outgoinginvoice draft, the sent invoice and the posted invoice voucher.
     */
    readonly Id?: string;
    /**
     * The imported order number.
     * Can only be set on invoice drafts created using the api or import, and on vouchers posted directly using the api or an import.
     * Can be used to reference the order number in the external system.
     */
    readonly ImportedOrderNo?: number | null;
    InvoiceDeliveryType?: InvoiceDeliveryType;
    /**
     * The invoice number of the invoice.
     */
    readonly InvoiceNo?: number | null;
    /**
     * A value indicating whether the invoice is created by the integration currently communicating with the API.
     * Will be true for all entries that are created by the same integration user (same Application Key) as the integration currently authenticated.
     * Can be used in filtering if only the current integration's entries are relevant to report.
     * Note that invoices are considered created by an integration only if they are posted with the OutgoingInvoiceVoucher endpoint, or if the invoice was sent using the SalesOrders endpoint. If a sales order draft was posted/sent by a user in the GUI, it will be the user that posted/sent it that created the outgoing invoice.
     */
    readonly IsCreatedByCurrentIntegration?: boolean | null;
    /**
     * A value indicating whether this invoice voucher have been reversed.
     * If true, the invoice voucher have been reversed with a reversal voucher (nullifying the invoice voucher), and the invoice number can be reused.
     * Only possible to reverse an invoice voucher using the OutgoingInvoiceVoucher api, and only by the integration that created the invoice voucher originally using this api.
     */
    readonly IsReversed?: boolean;
    /**
     * The timestamp of the last change of the invoice.
     * On sent invoices, no direct invoice information or related account transactions can change, but last changed will trigger when the invoice is due, and when (if applicable) the next reminder stages for the invoice is triggered in the system.
     */
    readonly LastChangedDateTimeOffset?: string;
    /**
     * The code of the location dimension associated with the invoice.
     * Note that this is the location set in the header of the invoice. The invoice lines might specify other location values or no location.
     */
    readonly LocationCode?: string | null;
    /**
     * The id of the location dimension associated with the invoice.
     */
    readonly LocationId?: number | null;
    /**
     * The match id of the customer ledger entry this invoice relate to, if present.
     * Available if the invoice have a match with other customer ledger entries - typically payment transactions.
     * Can be used with the CustomerLedger endpoint to retrieve the matched transactions.
     */
    readonly MatchId?: number | null;
    /**
     * The net amount of the invoice (vat exclusive).
     * This amount is presented in the currency used on the invoice (the currency given by the currencyCode).
     */
    readonly NetAmount?: number;
    /**
     * The net posted amount of the invoice (vat exclusive).
     * This amount is always presented in the client currency (NOK).
     * Will correspond with the netAmount and the normalized currencyExchangeRate.
     */
    readonly NetPostedAmount?: number;
    /**
     * The order date of the invoice.
     * OrderDate will default to the createdDate, but can be controlled and set in imports creating invoice drafts.
     */
    readonly OrderDate?: string | null;
    /**
     * The order number of the invoice.
     * Only present if the invoice originated from an invoice draft created in Go.
     * For invoice drafts created in Go, this value is autogenerated.
     */
    readonly OrderNo?: number | null;
    /**
     * The payment term of the invoice.
     * This is the number of days after an invoice is sent until it is due (days between the voucher date and the due date).
     */
    readonly PaymentTerm?: number | null;
    /**
     * The id of the payment term of the invoice.
     */
    readonly PaymentTermId?: number | null;
    /**
     * The project code, if set on the invoice.
     * Note that this is the project set in the header of the invoice.
     * The invoice lines might specify other projects or no project.
     * Projects can be queried and identified using the Project service.
     */
    readonly ProjectCode?: string | null;
    /**
     * The project id, if projectCode is set.
     * Projects can be queried and identified using the Project service.
     */
    readonly ProjectId?: number | null;
    /**
     * The purchase order reference, if set.
     * The property can be used to reference purchase order places by the customer.
     */
    readonly PurchaseOrderReference?: string | null;
    /**
     * The related invoice number.
     * Can be available on credit notes, if the credit note is created and sent from Go.
     * If available, this property will reference the original invoice being credited.
     */
    readonly RelatedInvoiceNo?: number | null;
    /**
     * The id of the employee set as the seller reference, if SellerReferenceEmployeeNo is set on the invoice.
     */
    readonly SellersReferenceEmployeeId?: number | null;
    /**
     * The employee number of the reference to the seller, if set.
     * When a user view the invoice information in GUI, this property is referred to as our reference.
     */
    readonly SellersReferenceEmployeeNo?: number | null;
    /**
     * The timestamp of when the invoice was sent from Go.
     * Available only for invoice created and sent from Go.
     * Blank if the invoice was posted to Go using an import.
     */
    readonly SentDateTimeOffset?: string | null;
    /**
     * The total amount of the invoice (vat inclusive).
     * This amount is presented in the currency used on the invoice (the currency given by the currencyCode).
     */
    readonly TotalAmount?: number;
    /**
     * The total posted amount of the invoice (vat inclusive).
     * This amount is always presented in the client currency (NOK).
     * Will correspond with the totalAmount and the normalized currencyExchangeRate.
     */
    readonly TotalPostedAmount?: number;
    /**
     * The date of the invoice voucher.
     * This represents the date of the voucher and the document date of the invoice.
     */
    readonly VoucherDate?: string;
    /**
     * The voucher number of the invoice voucher.
     * This is the voucher number assigned by Go when the voucher was posted.
     * Voucher numbers are assigned by Go in sequence.
     * Always present on invoices.
     */
    readonly VoucherNo?: number;
    VoucherType?: OutgoingInvoiceVoucherType;
};

