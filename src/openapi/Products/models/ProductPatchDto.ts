/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductType } from './ProductType';
import type { UnitOfMeasureType } from './UnitOfMeasureType';
/**
 * The product patch DTO contains only properties relevant to a product-object in Go that can be altered directly via PATCH-method in API.
 */
export type ProductPatchDto = {
    /**
     * The code of the product.
     */
    Code?: string | null;
    /**
     * The description of the product.
     */
    Description?: string | null;
    /**
     * The GTIN (Global trade item number) of the product.
     */
    Gtin?: string | null;
    /**
     * Value indicating whether the product is archived (set inactive).
     * Default is false.
     * Archived products will be unavailable for usage in the GUI.
     */
    IsArchived?: boolean | null;
    /**
     * Value indicating whether the product stock on hand can be registered.
     * If false, the stock on hand cannot be set and the stock fields will not be visible in the GUI.
     */
    IsStockItem?: boolean | null;
    /**
     * The name of the product.
     */
    Name?: string | null;
    /**
     * The id of the optional sales account of the product.
     * The optional sales account is the account the sale will be posted to, if the product is included on a sales order line that is invoiced, and that sales order line is set to trigger the use of the optional sales account.
     * If null, the product will inherit the optional sales account from the product group or the general sales settings on the client (in that order).
     * The concept of sales accounts is also explained in the common workflow articles.
     */
    OptionalSalesAccountId?: number | null;
    /**
     * The id of the product group this product belong to.
     * If not provided, the product will be placed in the default product group.
     */
    ProductGroupId?: number | null;
    ProductType?: ProductType;
    /**
     * The id of the standard sales account of the product.
     * The standard sales account is the default account the sale will be posted to if the product is included on a sales order line that is invoiced.
     * If null, the product will inherit the standard sales account from the product group or the general sales settings on the client (in that order).
     * The concept of sales accounts is also explained in the common workflow articles.
     */
    StandardSalesAccountId?: number | null;
    /**
     * The number of products in stock.
     * Might differ from the available stock if confirmed sales orders exists, thus reserving a portion of the stock.
     */
    StockOnHand?: number | null;
    /**
     * The cost per unit of the product.
     * If null, the product will inherit the unit cost from the product group.
     */
    UnitCost?: number | null;
    UnitOfMeasureCode?: UnitOfMeasureType;
    /**
     * The sales price per unit of the product.
     * If null, the product will inherit the unit price from the product group.
     */
    UnitPrice?: number | null;
};

