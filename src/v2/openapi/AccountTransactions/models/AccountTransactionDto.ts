/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgricultureDepartment } from './AgricultureDepartment';
import type { VatReturnSpecification } from './VatReturnSpecification';
import type { VoucherType } from './VoucherType';
/**
 * AccountTransaction representing an accounting entry. This is a single posted amount on a general ledger account.
 */
export type AccountTransactionDto = {
    /**
     * The Id of the general ledger account account.
     */
    readonly AccountId?: number;
    /**
     * The general ledger account code. Information of accounts can be retrieved using the GeneralLedgerAccount service.
     * Always present on transactions.
     */
    readonly AccountNo?: number;
    AgricultureDepartment?: AgricultureDepartment;
    /**
     * The posted amount on the account. Amount is always presented in the client currency.
     * Always present on transactions.
     */
    readonly Amount?: number;
    /**
     * The identifier of a bank transfer.
     * If provided on an accounting entry, this accounting entry is created from a remittance of a bank transfer with a given id.
     */
    readonly BankTransferId?: string | null;
    /**
     * The id of the contact entity if the transaction is related to an employeAccountNo, customerAccountNo or supplierAccountNo.
     * Employees, Customers and Suppliers are all contact entities in Go, meaning that they might share the id if the contact is registered as both an employee/customer or customer/supplier in Go.
     */
    readonly ContactId?: number | null;
    /**
     * The id of the original voucher that has been corrected by this voucher (where this transactions are part of the correction voucher).
     * Only present on transactions that are part of correction vouchers
     */
    readonly CorrectionOfVoucherId?: string | null;
    /**
     * The voucher number of the original voucher that has been corrected by this voucher (where this transactions are part of the correction voucher).
     * Only present on transactions that are part of correction vouchers.
     */
    readonly CorrectionOfVoucherNo?: number | null;
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
     * The customer account number this account transaction is posted on, that is provided if the account is a customer subledger account.
     * If present, CustomerAccountNo will also represent the Customer number. Customers can be queried and identified using the Customer service.
     */
    readonly CustomerAccountNo?: number | null;
    /**
     * The department code. Available if the transaction was posted with department.
     * Departments can be queried and identified using the Department service.
     */
    readonly DepartmentCode?: string | null;
    /**
     * The department Id. Available if the transaction was posted with department.
     * Departments can be queried and identified using the Department service.
     */
    readonly DepartmentId?: number | null;
    /**
     * The description of the transaction.
     */
    readonly Description?: string | null;
    /**
     * The code of the dimension 1 associated with the account transaction.
     */
    readonly Dim1Code?: string | null;
    /**
     * The id of the dimension 1 associated with the account transaction.
     */
    readonly Dim1Id?: number | null;
    /**
     * The code of the dimension 2 associated with the account transaction.
     */
    readonly Dim2Code?: string | null;
    /**
     * The id of the dimension 2 associated with the account transaction.
     */
    readonly Dim2Id?: number | null;
    /**
     * The code of the dimension 3 associated with the account transaction.
     */
    readonly Dim3Code?: string | null;
    /**
     * The id of the dimension 3 associated with the account transaction.
     */
    readonly Dim3Id?: number | null;
    /**
     * The employee account number this account transaction is posted on that is provided if the account is a employee subledger account.
     * If present, EmployeeAccountNo will also represent the Employee number. Employees can be queried and identified using the Employee service.
     */
    readonly EmployeeAccountNo?: number | null;
    /**
     * The ExternalImportReference, if available.
     * This property can be set by integrations posting vouchers in Go, in order to reference the external system and ensure a duplicate check when posting the voucher to Go (only one instance of the reference can exist).
     * Can be used to correlate/duplicate check transaction.
     */
    readonly ExternalImportReference?: string | null;
    /**
     * The value that uniquely identifies this accounting entry. The Id is assigned by Go when the transactions is posted in Go.
     * Always present on transactions.
     */
    readonly Id?: number;
    /**
     * The imported voucher number, if available.
     * This property can be set by integrations posting vouchers in Go, in order to reference the external system.
     */
    readonly ImportedVoucherNo?: number | null;
    /**
     * A value indicating whether this instance is the main subledger entry for a note (invoice/expense).
     */
    readonly IsNoteMainEntry?: boolean | null;
    /**
     * A value indicating whether the voucher this transaction belong to have been reversed by an reversal voucher.
     */
    readonly IsReversed?: boolean | null;
    /**
     * The timestamp of the last change of the account transaction.
     * No changes with accounting effect can be made on a posted voucher in Go, making this timestamp equal the created timestamp in most cases.
     * However, simple changes like the description can be made on a posted voucher, which will effect the last changed timestamp.
     * This property can be used when polling for new entries and where changes in description are needed from Go - but voucherNo and createdDateTimeOffset are better suited to query new entries if not.
     * If this property is used, changed transactions should replace what was previously stored in the external system.
     * Note again that no changes can be made that affects the accounting as such.
     * Always present on transactions.
     */
    readonly LastChangedDateTimeOffset?: string;
    /**
     * The code of the location dimension associated with the account transaction, if set.
     */
    readonly LocationCode?: string | null;
    /**
     * The id of the location dimension associated with the account transaction, if location code is set.
     */
    readonly LocationId?: number | null;
    /**
     * The posting date.
     * This is the date of effect in the accounting system for the Amount and CurrencyAmount (also the currency conversion date used by Go if the currency rate was not set explicit when posted).
     * Always present on transactions.
     */
    readonly PostingDate?: string;
    /**
     * The product code. Available if the transaction was posted with product.
     * Products can be queried and identified using the Product service.
     */
    readonly ProductCode?: string | null;
    /**
     * The product id. Available if the transaction was posted with product.
     * Products can be queried and identified using the Product service.
     */
    readonly ProductId?: number | null;
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
     * The quantity that was set on the voucher line generating this account transaction.
     */
    readonly Quantity?: number | null;
    /**
     * The quantity2 that was set on the voucher line generating this account transaction.
     */
    readonly Quantity2?: number | null;
    /**
     * The id of the of the original voucher that has been reversed.
     * This property is only available for reversal vouchers (type 99), and link the reversal voucher to the original voucher that has been reversed in Go.
     */
    readonly ReversedVoucherId?: string | null;
    /**
     * The voucher number of the original voucher that has been reversed.
     * This property is only available for reversal vouchers (type 99), and link the reversal voucher to the original voucher that has been reversed in Go.
     */
    readonly ReversedVoucherNo?: number | null;
    /**
     * The subledger entry id.
     * If this AccountTransaction is on a subledger account this property will represent the Id of the subledger entry related to this transaction.
     * This will match the Id in the CustomerLedger or SupplierLedger if querying these services for transactions.
     */
    readonly SubLedgerEntryId?: number | null;
    /**
     * The supplier account number this account transaction is posted on that is provided if the account is a supplier subledger account.
     * If present, SupplierAccountNo will also represent the Supplier number. Suppliers can be queried and identified using the Supplier service.
     */
    readonly SupplierAccountNo?: number | null;
    /**
     * The vat amount on this transaction.
     */
    readonly VatAmount?: number;
    /**
     * The vat code.
     * Standard codes in Go is based on the SAF-T standard. Codes and any custom codes can be queried and identified using the VatCode service.
     */
    readonly VatCode?: string | null;
    /**
     * The vat id for the vat code used on the transaction.
     * Codes and any custom codes can be queried and identified using the VatCode service.
     */
    readonly VatId?: number;
    /**
     * The vat rate for the vat code used on the transaction.
     */
    readonly VatRate?: number;
    VatReturnSpecification?: VatReturnSpecification;
    /**
     * The date of the voucher. This represents the date of the voucher, the document date of an invoice for instance,
     * and may differ from the transaction dates for the voucher.
     * Always present on transactions.
     */
    readonly VoucherDate?: string;
    /**
     * The description of the voucher if set.
     */
    readonly VoucherDescription?: string | null;
    /**
     * The voucher identifier.
     * The Id is assigned by Go when the voucher is created, and is shared by all transactions within the same voucher.
     * Always present on transactions.
     */
    readonly VoucherId?: string;
    /**
     * The voucher number. This is the voucher number assigned by Go when the voucher was posted.
     * Voucher numbers are assigned by Go in sequence.
     * Always present on transactions.
     */
    readonly VoucherNo?: number;
    VoucherType?: VoucherType;
};

