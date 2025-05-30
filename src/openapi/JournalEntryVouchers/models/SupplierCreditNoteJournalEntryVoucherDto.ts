/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApprovalState } from './ApprovalState';
import type { CurrencyRegistryCode } from './CurrencyRegistryCode';
import type { SupplierVoucherLineDto } from './SupplierVoucherLineDto';
import type { VoucherPage } from './VoucherPage';
import type { VoucherState } from './VoucherState';
/**
 * Supplier credit note DTO
 */
export type SupplierCreditNoteJournalEntryVoucherDto = {
    /**
     * Identifier of the supplier invoice being credited by the credit note.
     * The supplierAccountId must be the same as the supplierAccountId of the invoice that is being credited.
     */
    AppliesInvoiceId?: string | null;
    /**
     * Reference to the invoice being credited by the credit note.
     * The supplierAccountId must be the same as the supplierAccountId of the invoice that is being credited.
     */
    AppliesInvoiceNo?: string | null;
    ApprovalState?: ApprovalState;
    /**
     * The cid number (norwegian: KID), if applicable to the voucher.
     */
    Cid?: string | null;
    /**
     * The identifier of the client bank account used for payment/remittance.
     * Relevant if payout is true. If not set, the default client bank account will be used for any remittance.
     */
    ClientBankAccountId?: number | null;
    /**
     * The timestamp of when the voucher object was created.
     */
    readonly CreatedDateTimeOffset?: string;
    /**
     * The credit note number of the supplier credit note.
     */
    CreditNoteNo?: string | null;
    /**
     * The total amount of the supplier voucher, in the currency specified by the currency code of the voucher.
     */
    CurrencyAmount?: number;
    /**
     * The currency code of the voucher header.
     * The line amounts will default be determined in the currency specified in the header.
     * For some voucher types, different currency codes can be set on the line level, thus overriding the currency of the head.
     * Currencies active on the client can be queried using the AccountingSettings service. Currency codes follow the ISO4217 standard.
     */
    CurrencyCode?: string | null;
    /**
     * The normalized currency exchange rate.
     * Always base 1.
     * Relevant to set if the voucher have a foreign currency with a specific currency exchange rate.
     * If not set, the field will inherit the rate in Go for the voucher date set.
     * The rates in Go are retrieved from ECB via API.
     */
    CurrencyExchangeRate?: number | null;
    CurrencyRegistryCode?: CurrencyRegistryCode;
    /**
     * The currency registry text of the supplier invoice.
     */
    CurrencyRegistryText?: string | null;
    /**
     * The department Id of the voucher header.
     * The lines will inherit the department from the voucher head if not specified on the lines.
     * Departments can be queried and identified using the Department service.
     */
    DepartmentId?: number | null;
    /**
     * The description field of the voucher header.
     */
    Description?: string | null;
    /**
     * The id of the dimension 1 associated with the voucher header.
     * The lines will inherit the dim1 from the voucher head if not specified on the lines.
     */
    Dim1Id?: number | null;
    /**
     * The id of the dimension 2 associated with the voucher header.
     * The lines will inherit the dim2 from the voucher head if not specified on the lines.
     */
    Dim2Id?: number | null;
    /**
     * The id of the dimension 3 associated with the voucher header.
     * The lines will inherit the dim3 from the voucher head if not specified on the lines.
     */
    Dim3Id?: number | null;
    /**
     * A value that uniquely identifies this voucher.
     * The Id is assigned by Go when the entry is created, and will persist when/if the voucher is posted.
     */
    readonly Id?: string;
    /**
     * The timestamp of when the voucher object was last changed.
     */
    readonly LastChangedDateTimeOffset?: string;
    /**
     * The id of the location dimension associated with the voucher header.
     * The lines will inherit the location from the voucher head if not specified on the lines.
     */
    LocationId?: number | null;
    /**
     * Property indicating whether the journal entry voucher was received by EHF. If true, the journal entry voucher have an EHF XML file.
     */
    readonly OriginatedFromEhf?: boolean | null;
    /**
     * A collection of voucher pages associated with this voucher.
     */
    readonly Pages?: Array<VoucherPage> | null;
    /**
     * The suggested payment date if this voucher is to be subject of remittance.
     * Relevant if payout is set true.
     * If not set in POST or PATCH operations, the field will default to the due date of supplier invoices and the voucher date of supplier credit notes.
     * To remove any value from PaymentDate in PATCH, both PaymentDate and DueDate must be removed.
     */
    PaymentDate?: string | null;
    /**
     * Property indicating whether the voucher remittance should be on hold.
     * Default false, and if true a remittance draft will be created when the voucher is posted, but with no payment date suggested - rather the state 'on hold'.
     */
    PaymentOnHold?: boolean | null;
    /**
     * Property indicating whether the voucher should be paid using remittance.
     * Default true, and if true a remittance draft will be created when the voucher is posted.
     */
    Payout?: boolean | null;
    /**
     * The id of the project associated with the voucher header.
     * The lines will inherit the project from the voucher head if not specified on the lines.
     */
    ProjectId?: number | null;
    /**
     * The id of the supplier subledger account.
     */
    SupplierAccountId?: number | null;
    /**
     * The identifier of the supplier bank account associated with the voucher.
     */
    SupplierBankAccountId?: number | null;
    /**
     * The contact ID of the supplier.
     */
    readonly SupplierContactId?: number | null;
    /**
     * The lines of the supplier credit note.
     */
    SupplierVoucherLines?: Array<SupplierVoucherLineDto> | null;
    /**
     * The voucher date.
     * This represents the date of the voucher, the document date of an invoice for instance,
     * and may differ from the transaction dates for lines the voucher, depending on the type of voucher.
     */
    VoucherDate?: string | null;
    VoucherState?: VoucherState;
};

