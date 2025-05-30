/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgricultureDepartment } from './AgricultureDepartment';
import type { UnitOfMeasureType } from './UnitOfMeasureType';
import type { VatReturnSpecification } from './VatReturnSpecification';
import type { VoucherLineType } from './VoucherLineType';
/**
 * Outgoing-invoice / Credit-note Line
 */
export type OutgoingInvoiceLineDto = {
    /**
     * The general ledger account id this invoice line was posted to.
     */
    readonly AccountId?: number | null;
    /**
     * The general ledger account code this invoice line was posted to.
     */
    readonly AccountNo?: number | null;
    AgricultureDepartment?: AgricultureDepartment;
    /**
     * The percent of allowance/discount or allowance charge for this invoice line.
     * The value is between -1000 and 100 (reflects as -1000% or 100% in the GUI).
     * Negative percentage means the line is set with allowance charge.
     * Positive percentage means the line is set up with discount/allowance.
     */
    readonly Allowance?: number | null;
    /**
     * The code of the department this invoice line is associated with.
     */
    readonly DepartmentCode?: string | null;
    /**
     * The id of the department this invoice line is associated with.
     */
    readonly DepartmentId?: number | null;
    /**
     * The description set on this invoice line.
     */
    readonly Description?: string | null;
    /**
     * The code of the dimension 1 associated with this invoice line.
     */
    readonly Dim1Code?: string | null;
    /**
     * The id of the dimension 1 associated with this invoice line.
     */
    readonly Dim1Id?: number | null;
    /**
     * The code of the dimension 2 associated with this invoice line.
     */
    readonly Dim2Code?: string | null;
    /**
     * The id of the dimension 2 associated with this invoice line.
     */
    readonly Dim2Id?: number | null;
    /**
     * The code of the dimension 3 associated with this invoice line.
     */
    readonly Dim3Code?: string | null;
    /**
     * The id of the dimension 3 associated with this invoice line.
     */
    readonly Dim3Id?: number | null;
    /**
     * The external import reference for this invoice line.
     * This property can be set by integrations posting vouchers in Go or creating sales orders (invoice drafts), in order to reference the external system's invoice line and ensure a duplicate check (only one instance of the reference can exist within each invoice object).
     * Can be used to correlate/duplicate check transaction.
     */
    readonly ExternalImportReference?: string | null;
    /**
     * The identifier of this invoice line.
     * The id is assigned by Go when the invoice is created.
     * Note that on the line level, the invoice lines do not correspond with the sales order lines, if the invoice was an sales order created in Go.
     * This is because the lines are recreated in the process of sending and posting the information when an order is transformed to an invoice.
     */
    readonly Id?: number;
    /**
     * Value indicating whether the net posted amount was accrued over time when the invoice voucher was posted in Go. If true, the accrual transactions is best retrieved by getting the accounttransactions of invoice voucher.
     */
    readonly IsAccrued?: boolean | null;
    LineType?: VoucherLineType;
    /**
     * The code of the location dimension associated with this invoice line.
     */
    readonly LocationCode?: string | null;
    /**
     * The id of the location dimension associated with this invoice line.
     */
    readonly LocationId?: number | null;
    /**
     * The net amount of this invoice line (vat exclusive).
     * This amount is presented in the currency used on the invoice (the currency given by the currencyCode).
     */
    readonly NetAmount?: number;
    /**
     * The net posted amount of this invoice line (vat exclusive).
     * This amount is always presented in the client currency (NOK).
     * Will correspond with the netAmount and the normalized currencyExchangeRate of the invoice.
     */
    readonly NetPostedAmount?: number;
    /**
     * The code of the product associated with this invoice line.
     */
    readonly ProductCode?: string | null;
    /**
     * The id of the product associated with this invoice line.
     */
    readonly ProductId?: number | null;
    /**
     * The cost per unit of the product associated with this invoice line.
     */
    readonly ProductUnitCost?: number | null;
    /**
     * The sales price per unit of the product associated with this invoice line.
     */
    readonly ProductUnitPrice?: number;
    /**
     * The project code associated with this invoice line.
     */
    readonly ProjectCode?: string | null;
    /**
     * The project id associated with is invoice line.
     */
    readonly ProjectId?: number | null;
    /**
     * The quantity of this invoice line.
     */
    readonly Quantity?: number | null;
    /**
     * The id of the employee set as the seller reference.
     */
    readonly SellersReferenceEmployeeId?: number | null;
    /**
     * The number of the employee set as the seller reference.
     */
    readonly SellersReferenceEmployeeNo?: number | null;
    /**
     * The sort order of the line.
     * Sort order start at 0.
     * The first line as viewed from the GUI, will have sortOrder = 0.
     */
    readonly SortOrder?: number;
    /**
     * The total amount of this invoice line (VAT inclusive).
     * This amount is presented in the currency used on the invoice (the currency given by the currencyCode).
     */
    readonly TotalAmount?: number;
    /**
     * The total posted amount of this invoice line (VAT inclusive).
     * This amount is always presented in the client currency (NOK).
     * Will correspond with the totalAmount and the normalized currencyExchangeRate.
     */
    readonly TotalPostedAmount?: number;
    UnitOfMeasureCode?: UnitOfMeasureType;
    /**
     * The VAT amount of this invoice line.
     */
    readonly VatAmount?: number;
    /**
     * The VAT code used on this invoice line.
     * Standard codes in Go is based on the SAF-T standard.
     */
    readonly VatCode?: string | null;
    /**
     * The VAT id for the VAT code used on this invoice line.
     */
    readonly VatId?: number | null;
    /**
     * The VAT rate for the VAT code used on this invoice line.
     */
    readonly VatRate?: number;
    VatReturnSpecification?: VatReturnSpecification;
};

