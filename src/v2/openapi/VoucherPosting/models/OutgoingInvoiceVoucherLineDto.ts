/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccrualBase } from './AccrualBase';
import type { UnitOfMeasureType } from './UnitOfMeasureType';
import type { VatReturnSpecification } from './VatReturnSpecification';
/**
 * properties available in an outgoing invoice voucher line
 */
export type OutgoingInvoiceVoucherLineDto = {
    /**
     * The id of the general ledger account for the line.
     */
    AccountId?: number | null;
    Accrual?: AccrualBase;
    /**
     * The amount on the line, in the currency specified by the currency code of the voucher.
     */
    CurrencyAmount?: number;
    /**
     * The department id of the line.
     */
    DepartmentId?: number | null;
    /**
     * The description of the line.
     */
    Description?: string | null;
    /**
     * The id of the dimension 1 associated with the line.
     */
    Dim1Id?: number | null;
    /**
     * The id of the dimension 2 associated with the line.
     */
    Dim2Id?: number | null;
    /**
     * The id of the dimension 3 associated with the line.
     */
    Dim3Id?: number | null;
    /**
     * The id of the location dimension associated with the line.
     */
    LocationId?: number | null;
    /**
     * The product id associated with the line.
     */
    ProductId?: number | null;
    /**
     * The id of the project associated with the line.
     */
    ProjectId?: number | null;
    /**
     * The quantity dimension set on the line.
     */
    Quantity?: number | null;
    /**
     * The quantity ordered by the customer.
     */
    QuantityOrdered?: number | null;
    UnitOfMeasureType?: UnitOfMeasureType;
    /**
     * The id of the vat code used on the line.
     */
    VatId?: number | null;
    VatReturnSpecification?: VatReturnSpecification;
};

