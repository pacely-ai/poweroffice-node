/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SalesOrderAccrualPostDto } from './SalesOrderAccrualPostDto';
import type { UnitOfMeasureType } from './UnitOfMeasureType';
import type { VatReturnSpecification } from './VatReturnSpecification';
import type { VoucherLineType } from './VoucherLineType';
/**
 * The sales order line post DTO contains only properties relevant to a sales order line in Go that can be created via POST-method in API.
 */
export type SalesOrderLinePostDto = {
    Accrual?: SalesOrderAccrualPostDto;
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
     * Note that if DepartmentId is set as well in the request, DepartmentId takes precedence and DepartmentCode is ignored.
     * DepartmentCode = -1 means no department.
     */
    DepartmentCode?: string | null;
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
     * Will inherit dimension 1 code from sales order head if not specifically set on the line.
     * Note that if Dim1Id is set as well in the request, Dim1Id takes precedence and Dim1Code is ignored.
     * Dim1Code = -1 means no dimension 1.
     */
    Dim1Code?: string | null;
    /**
     * The id of the dimension 1 associated with the sales order line.
     * Will inherit dimension 1 id from sales order head if not specifically set on the line.
     * Dimension 1-3 are customizable dimensions that can be defined and queried using the Custom Dimensions endpoint.
     * Dim1Id = -1 means no dimension 1.
     */
    Dim1Id?: number | null;
    /**
     * The code of the dimension 2 associated with the sales order line.
     * Will inherit dimension 2 code from sales order head if not specifically set on the line.
     * Note that if Dim2Id is set as well in the request, Dim2Id takes precedence and Dim2Code is ignored.
     * Dim2Code = -1 means no dimension 2.
     */
    Dim2Code?: string | null;
    /**
     * The id of the dimension 2 associated with the sales order line.
     * Will inherit dimension 2 id from sales order head if not specifically set on the line.
     * Dimension 1-3 are customizable dimensions that can be defined and queried using the Custom Dimensions endpoint.
     * Dim2Id = -1 means no dimension 2.
     */
    Dim2Id?: number | null;
    /**
     * The code of the dimension 3 associated with the sales order line.
     * Will inherit dimension 3 code from sales order head if not specifically set on the line.
     * Note that if Dim3Id is set as well in the request, Dim3Id takes precedence and Dim3Code is ignored.
     * Dim3Code = -1 means no dimension 3.
     */
    Dim3Code?: string | null;
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
    LineType?: VoucherLineType;
    /**
     * The code of the location dimension associated with the sales order line.
     * Will inherit location code from sales order head if not specifically set on the line.
     * Note that if LocationId is set as well in the request, LocationId takes precedence and LocationCode is ignored.
     * LocationCode = -1 means no location.
     */
    LocationCode?: string | null;
    /**
     * The id of the location dimension associated with the sales order line.
     * Will inherit location id from sales order head if not specifically set on the line.
     * Locations can be queried and identified using the Locations endpoint.
     * LocationId = -1 means no location.
     */
    LocationId?: number | null;
    /**
     * The code of the product associated with the sales order line.
     * The product object in Go contain information of sales account
     * (in effect which sales account number is used when the order is invoiced, and which vat code option that can be applied).
     * Please refer to our workflow description for more details.
     * Note that if ProductId is set as well in the request, ProductId takes precedence and ProductCode is ignored.
     */
    ProductCode?: string | null;
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
     * Will inherit project code from sales order head if not specifically set on the line.
     * Note that if ProjectId is set as well in the request, ProjectId takes precedence and ProjectCode is ignored.
     * ProjectCode = -1 means no project.
     */
    ProjectCode?: string | null;
    /**
     * The id of the project associated with the sales order line.
     * Will inherit project id from sales order head if not specifically set on the line.
     * Note that if ProjectCode is set as well in the request, ProjectId takes precedence and ProjectCode is ignored.
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
     * The id of the employee set as the seller reference for the sales order line.
     * Will inherit the seller reference from sales order head if not specifically set on the line.
     * Note that if SellersReferenceEmployeeNo is set as well in the request, SellersReferenceEmployeeId takes precedence and SellersReferenceEmployeeNo is ignored.
     */
    SellersReferenceEmployeeId?: number | null;
    /**
     * The number of the employee set as the seller reference for the sales order line.
     * Will inherit the seller reference from sales order head if not specifically set on the line.
     * Note that if SellersReferenceEmployeeId is set as well in the request, SellersReferenceEmployeeId takes precedence and SellersReferenceEmployeeNo is ignored.
     */
    SellersReferenceEmployeeNo?: number | null;
    /**
     * The sort order of the sales order line.
     * Sort order start at 0.
     * The first line as viewed from the GUI, will have sortOrder = 0.
     */
    SortOrder?: number | null;
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
    VatReturnSpecification?: VatReturnSpecification;
};

