/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Accrual } from './Accrual';
import type { UnitOfMeasureType } from './UnitOfMeasureType';
import type { VatReturnSpecification } from './VatReturnSpecification';
import type { VoucherLineType } from './VoucherLineType';
/**
 * The sales order line DTO contains all properties relevant to a sales order line in Go
 */
export type SalesOrderLineDto = {
    Accrual?: Accrual;
    /**
     * The percent of allowance/discount or allowance charge for this sales order line.
     * The value is between -1000 and 100 (reflects as -1000% or 100% in the GUI).
     * Negative percentage means the line is set with allowance charge.
     * Positive percentage means the line is set up with discount/allowance.
     * If null, the allowance may inherit the value set on the Customer entity, if the value is set on the customer.
     */
    Allowance?: number | null;
    /**
     * The code of the department associated with the sales order line.
     * Will inherit department code from sales order head if not specifically set on the line.
     * Department Code = -1 means no department.
     */
    readonly DepartmentCode?: string | null;
    /**
     * The id of the department associated with the sales order line.
     * Will inherit department id from sales order head if not specifically set on the line.
     * Department Id = -1 means no department.
     * Departments can be queried and identified using the Departments endpoint.
     */
    DepartmentId?: number | null;
    /**
     * The description for the sales order line.
     * When product is set on the line, the description will be the name of the product if no other description is specifically set on the line.
     * It is usually recommended to set a specific description in order to control the information on the line.
     */
    Description?: string | null;
    /**
     * The code of the dimension 1 associated with the sales order line.
     * Dimension 1-3 are customizable dimensions that can be defined and queried using the Custom Dimensions endpoint.
     */
    readonly Dim1Code?: string | null;
    /**
     * The id of the dimension 1 associated with the sales order line.
     * Will inherit dimension 1 id from sales order head if not specifically set on the line.
     * Dimension 1-3 are customizable dimensions that can be defined and queried using the Custom Dimensions endpoint.
     * Dim1Id = -1 means no dimension 1.
     */
    Dim1Id?: number | null;
    /**
     * The code of the dimension 2 associated with the sales order line.
     * Dimension 1-3 are customizable dimensions that can be defined and queried using the Custom Dimensions endpoint.
     */
    readonly Dim2Code?: string | null;
    /**
     * The id of the dimension 2 associated with the sales order line.
     * Will inherit dimension 2 id from sales order head if not specifically set on the line.
     * Dimension 1-3 are customizable dimensions that can be defined and queried using the Custom Dimensions endpoint.
     * Dim2Id = -1 means no dimension 2.
     */
    Dim2Id?: number | null;
    /**
     * The code of the dimension 3 associated with the sales order line.
     * Dimension 1-3 are customizable dimensions that can be defined and queried using the Custom Dimensions endpoint.
     */
    readonly Dim3Code?: string | null;
    /**
     * The id of the dimension 3 associated with the sales order line.
     * Will inherit dimension 3 id from sales order head if not specifically set on the line.
     * Dimension 1-3 are customizable dimensions that can be defined and queried using the Custom Dimensions endpoint.
     * Dim3Id = -1 means no dimension 3.
     */
    Dim3Id?: number | null;
    /**
     * The external import reference for the sales order line.
     * This property can be set by integrations posting vouchers in Go or creating sales orders (invoice drafts), in order to reference the external system's invoice line and ensure a duplicate check (only one instance of the reference can exist within each invoice object).
     * Can be used to correlate/duplicate check transaction.
     */
    ExternalImportReference?: string | null;
    /**
     * The identifier of the sales order line.
     * The id is assigned by Go when the line is created.
     * NOTE that when the sales order is successfully converted to invoice and sent, this id will no longer be usable since the replacing invoice object will have new ids.
     */
    readonly Id?: string;
    LineType?: VoucherLineType;
    /**
     * The code of the location dimension associated with the sales order line.
     * Locations can be queried and identified using the Locations endpoint.
     */
    readonly LocationCode?: string | null;
    /**
     * The id of the location dimension associated with the sales order line.
     * Will inherit location id from sales order head if not specifically set on the line.
     * Locations can be queried and identified using the Locations endpoint.
     * LocationId = -1 means no location.
     */
    LocationId?: number | null;
    /**
     * The net amount of the sales order line (vat exclusive).
     * This amount is presented in the currency used on the sales order head (the currency given by the currencyCode).
     * This value will be calculated if product is set (and the product have a sales account set or inherited),
     * and quantity and unit price is set.
     */
    readonly NetAmount?: number;
    /**
     * The code of the product associated with the sales order line.
     * Products can be queried and identified using the Products endpoint.
     */
    readonly ProductCode?: string | null;
    /**
     * The id of the product associated with the sales order line.
     * The product-object in Go contain information of sales account
     * (in effect which sales account number is used when the order is invoiced, and which VAT code option that can be applied).
     * Products can be queried and identified using the Products endpoint.
     */
    ProductId?: number | null;
    /**
     * The cost per unit of the product associated with the sales order line.
     * Will inherit (on creation) the unit cost set on the product object if not specifically set on the line.
     */
    ProductUnitCost?: number | null;
    /**
     * The sales price per unit of the product associated with the sales order line.
     * Will inherit (on creation) the sales price set on the product object if not specifically set on the line.
     */
    ProductUnitPrice?: number | null;
    /**
     * The code of the project associated with the sales order line.
     * Projects can be queried and identified using the Projects endpoint.
     */
    readonly ProjectCode?: string | null;
    /**
     * The id of the project associated with the sales order line.
     * Will inherit project id from sales order head if not specifically set on the line.
     * Projects can be queried and identified using the Projects endpoint.
     * ProjectId = -1 means no project.
     */
    ProjectId?: number | null;
    /**
     * The quantity for the sales order line.
     * Required to set if the line contain a product code.
     * NOTE Setting a negative quantity, will result in the line being interpreted as a creditation of the product quantity.
     * If the sum of the lines for the total sales order is negative, the sales order is considered a credit note draft.
     */
    Quantity?: number | null;
    /**
     * The identifier of the sales order the current line belongs to.
     */
    readonly SalesOrderId?: string | null;
    /**
     * The id of the employee set as the seller reference for the sales order line.
     * Will inherit the seller reference from sales order head if not specifically set on the line.
     * Employees can be queried and identified using the Employees endpoint.
     */
    SellersReferenceEmployeeId?: number | null;
    /**
     * The number of the employee set as the seller reference for the sales order line.
     * Employees can be queried and identified using the Employees endpoint.
     */
    readonly SellersReferenceEmployeeNo?: number | null;
    /**
     * The sort order of the sales order line.
     * Sort order start at 0.
     * The first line as viewed from the GUI, will have sortOrder = 0.
     */
    SortOrder?: number | null;
    /**
     * The total amount of this sales order line (vat inclusive).
     * This amount is presented in the currency used on the sales order head (the currency given by the currencyCode).
     * This value will be calculated if product is set (and the product have a sales account set or inherited),
     * and quantity and unit prices is set.
     */
    readonly TotalAmount?: number;
    UnitOfMeasureCode?: UnitOfMeasureType;
    /**
     * Whether the standard sales account of the product set on the sales order line is used.
     *
     * If false, the optional sales account set on the product is used.
     * Query the product endpoint to retrieve the sales account information on the product.
     *
     * If set to null, the standard sales account will be inherited from the customer account's VAT-free
     * setting. In other words, if the VAT-free setting is enabled, the StandardSalesAccount will be set to
     * false and the optional sales account set on the product is used.
     *
     * The concept of sales accounts is also explained in the common workflow articles.
     */
    UseStandardSalesAccount?: boolean | null;
    /**
     * The VAT amount of the sales order line.
     * This amount is presented in the currency used on the sales order head (the currency given by the currencyCode).
     * This value will be calculated if product is set (and the product have a sales account with vat set or inherited),
     * and quantity and unit price is set.
     */
    readonly VatAmount?: number;
    /**
     * The VAT code used on the sales order line.
     * Present if product is set on the sales order line.
     * The vat code is inherited from the sales account used for the product set on the sales order line (either the standard or optional sales account).
     * Standard codes in Go is based on the SAF-T standard.
     */
    readonly VatCode?: string | null;
    /**
     * The id of the the VAT code used on the sales order line.
     * Vat codes can be queried and identified using the VatCodes endpoint.
     */
    readonly VatId?: number | null;
    /**
     * The VAT rate for the vat code used on the sales order line.
     */
    readonly VatRate?: number | null;
    VatReturnSpecification?: VatReturnSpecification;
};

