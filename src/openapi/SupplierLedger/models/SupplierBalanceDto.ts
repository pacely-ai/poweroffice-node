/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents a supplier balance.
 */
export type SupplierBalanceDto = {
    /**
     * The current total balance of the supplier, as of the date (inclusive) provided in the query.
     */
    readonly Balance?: number;
    /**
     * The supplier account number for the related balance.
     * SupplierAccountNo will also represent the Supplier number.
     * Suppliers can be queried and identified using the Supplier service.
     */
    readonly SupplierAccountNo?: number | null;
    /**
     * The external number of the supplier for the related balance, if set on the Supplier entity.
     * An external number set on the supplier is often used to reference the supplier number in the external system, if the supplier numbers are not kept in 1:1 sync between Go and the external system.
     * The field is available in the GUI with the name External Code.
     */
    readonly SupplierExternalNo?: number | null;
    /**
     * The identifier of the supplier this balance is related to.
     * Suppliers can be queried and identified using the Supplier service.
     */
    readonly SupplierId?: number | null;
    /**
     * The name of the supplier for the related balance.
     * Suppliers can be queried and identified using the Supplier service.
     */
    readonly SupplierName?: string | null;
};

