/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccrualBase } from './AccrualBase';
import type { AgricultureDetails } from './AgricultureDetails';
import type { VatReturnSpecification } from './VatReturnSpecification';
/**
 * Properties that can be updated.
 */
export type SupplierVoucherLinePatchDto = {
    Accrual?: AccrualBase;
    AgricultureDetails?: AgricultureDetails;
    /**
     * The id of the general ledger account or the subledger account to post the credit amount.
     */
    CreditAccountId?: number | null;
    /**
     * The id of the vat code used for the credit entry.
     */
    CreditVatId?: number | null;
    CreditVatReturnSpecification?: VatReturnSpecification;
    /**
     * The amount on the line, in the currency specified by the currency code of the voucher or the currency of the voucher line if available.
     * Gross amounts should be provided, along with the relevant vat code.
     */
    CurrencyAmount?: number;
    /**
     * The id of the general ledger account or the subledger account to post the debit amount.
     */
    DebitAccountId?: number | null;
    /**
     * The id of the vat code used for the debit entry.
     */
    DebitVatId?: number | null;
    DebitVatReturnSpecification?: VatReturnSpecification;
    /**
     * The department Id. Will inherit department id from the voucher head if not specifically set on the line.
     * Department Id = -1 means no department.
     * Departments can be queried and identified using the Department service.
     */
    DepartmentId?: number | null;
    /**
     * The description of the voucher line.
     */
    Description?: string | null;
    /**
     * The id of the dimension 1 associated with the line.
     * Will inherit dim1Id from the voucher head if not specifically set on the line.
     * Dim1Id = -1 means no dimension 1.
     */
    Dim1Id?: number | null;
    /**
     * The id of the dimension 2 associated with the line.
     * Will inherit dim2Id from the voucher head if not specifically set on the line.
     * Dim2Id = -1 means no dimension 2.
     */
    Dim2Id?: number | null;
    /**
     * The id of the dimension 3 associated with the line.
     * Will inherit dim1Id from the voucher head if not specifically set on the line.
     * Dim3Id = -1 means no dimension 3.
     */
    Dim3Id?: number | null;
    /**
     * The id of the location dimension associated with the line.
     * Will inherit locationId from the voucher head if not specifically set on the line.
     * LocationId = -1 means no location.
     */
    LocationId?: number | null;
    /**
     * The product id associated with the line.
     */
    ProductId?: number | null;
    /**
     * The id of the project associated with the line.
     * Will inherit projectId from the voucher head if not specifically set on the line.
     * ProjectId = -1 means no project.
     */
    ProjectId?: number | null;
    /**
     * The quantity dimension set on the line.
     * Usually associated with the product set on the line.
     * If the client is an agriculture client, the quantity is associated with the unit1 of the general ledger account.
     */
    Quantity?: number | null;
    /**
     * The quantity2 dimension set on the line.
     * Relevant only for agriculture clients, where the quantity2 is associated with the unit2 of the general ledger account.
     */
    Quantity2?: number | null;
};

