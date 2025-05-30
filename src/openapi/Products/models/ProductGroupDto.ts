/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgricultureDepartment } from './AgricultureDepartment';
import type { ProductType } from './ProductType';
import type { UnitOfMeasureType } from './UnitOfMeasureType';
/**
 * DTO for ProductGroup read operations.
 */
export type ProductGroupDto = {
    /**
     * The code of the product group.
     */
    Code?: string | null;
    /**
     * The timestamp the product group entity was created.
     */
    readonly CreatedDateTimeOffset?: string;
    /**
     * The created from import journal identifier (guid).
     * If the product group was created from an import, this property will contain the Id of the Import that created this entity.
     */
    readonly CreatedFromImportJournalId?: string | null;
    /**
     * The description of the product group.
     */
    Description?: string | null;
    /**
     * The ID of the product group.
     */
    readonly Id?: number;
    /**
     * Value indicating whether the product group is archived (set inactive).
     * Default is false.
     * Archived product groups will be unavailable for usage in the GUI.
     */
    IsArchived?: boolean | null;
    /**
     * The timestamp of the last change of the product group.
     */
    readonly LastChangedDateTimeOffset?: string;
    /**
     * The name of the product group.
     */
    Name?: string | null;
    /**
     * The code of the optional sales account of the product group.
     * The optional sales account is the account the sale will be posted to, if the product is included on a sales order line that is invoiced, and that sales order line is set to trigger the use of the optional sales account.
     * If null, the product group will inherit the optional sales account from the the general sales settings on the client.
     */
    readonly OptionalSalesAccount?: number | null;
    OptionalSalesAccountAgricultureDepartment?: AgricultureDepartment;
    /**
     * The id of the optional sales account of the product group.
     * Products assigned to this product group will inherit the optional sales account from the group, if not set/overridden on the product object.
     * The optional sales account is the account the sale will be posted to, if the product is included on a sales order line that is invoiced, and that sales order line is set to trigger the use of the optional sales account.
     * If null, the product group will inherit the optional sales account from the the general sales settings on the client.
     */
    OptionalSalesAccountId?: number | null;
    ProductType?: ProductType;
    /**
     * The code of the standard sales account of the product group.
     * The standard sales account is the default account the sale will be posted to if the product is included on a sales order line that is invoiced.
     * If null, the product group will inherit the standard sales account from the general sales settings on the client.
     */
    readonly StandardSalesAccount?: number | null;
    StandardSalesAccountAgricultureDepartment?: AgricultureDepartment;
    /**
     * The id of the standard sales account of the product group.
     * Products assigned to this product group will inherit the standard sales account from the group, if not set/overridden on the product object.
     * The standard sales account is the default account the sale will be posted to if the product is included on a sales order line that is invoiced.
     * If null, the product group will inherit the standard sales account from the general sales settings on the client.
     */
    StandardSalesAccountId?: number | null;
    /**
     * The cost per unit of the product group.
     * Products assigned to this group will inherit the unitCost from the group, if not set/overridden on the product object.
     */
    UnitCost?: number | null;
    UnitOfMeasureCode?: UnitOfMeasureType;
    /**
     * The sales price per unit of the product group.
     * Products assigned to this group will inherit the unitPrice from the group, if not set/overridden on the product object.
     */
    UnitPrice?: number | null;
};

