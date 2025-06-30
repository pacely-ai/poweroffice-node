/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderStatus } from './OrderStatus';
/**
 * The sales order DTO contains all properties relevant to a sales order (invoice draft) in Go without sales order lines.
 */
export type SalesOrderDto = {
    /**
     * The code of the branding theme associated with the sales order.
     * Branding themes can be queried and identified using the Sales Settings endpoint.
     */
    readonly BrandingThemeCode?: string | null;
    /**
     * The id of the branding theme associated with the sales order.
     * If null in the header, the value may inherit from any project set on the sales order, or from the clients default branding theme.
     * Branding themes can be queried and identified using the Sales Settings endpoint.
     */
    BrandingThemeId?: number | null;
    /**
     * The id of the contact delivery address associated with the sales order.
     * Contact delivery addresses can be queries and identified using the Contact Delivery Addresses endpoint.
     */
    ContactDeliveryAddressId?: number | null;
    /**
     * The contract number.
     */
    ContractNo?: string | null;
    /**
     * The timestamp when the sales order was created.
     */
    readonly CreatedDateTimeOffset?: string;
    /**
     * The standard currency code for the sales order.
     * Currencies active on the client can be queried using the AccountingSettings service.
     * Currency codes follow the ISO4217 standard.
     * Defaults to NOK, but may inherit the value set on the Customer entity if null.
     */
    CurrencyCode?: string | null;
    /**
     * The normalized currency exchange rate.
     * Always base 1.
     */
    CurrencyExchangeRate?: number | null;
    /**
     * The custom matching reference of the sales order.
     * This property will only have value on entries created through the API or Import with CustomMatchingReference specified.
     * This property is used for matching purposes in the customer sub-ledger account, where entries posted with a CustomMatchingReference will be matched immediately with existing entries in the sub-ledger that have the same CustomMatchingReference and opposite amount (unless existing entries are already matched out).
     */
    CustomMatchingReference?: string | null;
    /**
     * The id of the customer associated with the sales order.
     * Customers can be queried and identified using the Customers endpoint.
     */
    CustomerId?: number | null;
    /**
     * The number of the customer associated with the sales order.
     * Customers can be queried and identified using the Customers endpoint.
     */
    readonly CustomerNo?: number | null;
    /**
     * The customer reference (ie buyers reference) of the sales order.
     * This property is often used to give the receiver of the (eventual) invoice a reference they are familiar with.
     * If CustomerReferenceContactPersonId has value, the name of the customers contact person is returned on get,
     * otherwise the "Your Reference" text used on the (eventual) invoice will be returned.
     */
    CustomerReference?: string | null;
    /**
     * The id of the customer reference contact person (ie buyers reference) of the sales order.
     * If null, the value will be inherited from the project or the customer associated with the sales order.
     * If set, the contact persons name will be set as the CustomerReference on the sales order.
     * Contact persons can be queried and identified using the Contact person endpoint.
     */
    CustomerReferenceContactPersonId?: number | null;
    /**
     * The delivery date of the sales order.
     * Will default to the date when the sales order is sent (converted to invoice) if not set via import or api.
     */
    DeliveryDate?: string | null;
    /**
     * The delivery term of the sales order.
     * If null, the value will be inherited from project, customer or the client delivery term settings.
     * Delivery terms can be queried and identified using the Delivery terms endpoint.
     */
    readonly DeliveryTerm?: string | null;
    /**
     * The id of the delivery term of the sales order.
     * If null, the value will be inherited from project, customer or the client delivery term settings.
     * Delivery terms can be queried and identified using the Delivery terms endpoint.
     */
    DeliveryTermId?: number | null;
    /**
     * The code of the department associated with the sales order.
     * This is the department set in the header of the sales order.
     * If null in the header, the value may inherit from the project, customer or the employee creating the sales order (if created using the GUI) - in that order.
     * The sales order lines will inherit this value if no other department (or no department) is specified on the line.
     * DepartmentCode = -1 means no department.
     * Departments can be queried and identified using the Departments endpoint.
     */
    readonly DepartmentCode?: string | null;
    /**
     * The id of the department associated with the sales order.
     * This is the department set in the header of the sales order.
     * If null in the header, the value may inherit from the project, customer or the employee creating the sales order (if created using the GUI) - in that order.
     * The sales order lines will inherit this value if no other department (or no department) is specified on the line.
     * DepartmentId = -1 means no department.
     * Departments can be queried and identified using the Departments endpoint.
     */
    DepartmentId?: number | null;
    /**
     * The code of the dimension 1 associated with the sales order.
     * Dim1Code = -1 means no dimension 1.
     * Dimension 1-3 are customizable dimensions that can be defined and queried using the Custom Dimensions endpoint.
     */
    readonly Dim1Code?: string | null;
    /**
     * The id of the dimension 1 associated with the sales order.
     * This is the dimension 1 set in the header of the sales order.
     * The sales order lines might specify other dimension 1 values or no dimension 1.
     * Dimension 1-3 are customizable dimensions that can be defined and queried using the Custom Dimensions endpoint.
     * Dim1Id = -1 means no dimension 1.
     */
    Dim1Id?: number | null;
    /**
     * The code of the dimension 2 associated with the sales order.
     * Dim2Code = -1 means no dimension 2.
     * Dimension 1-3 are customizable dimensions that can be defined and queried using the Custom Dimensions endpoint.
     */
    readonly Dim2Code?: string | null;
    /**
     * The id of the dimension 2 associated with the sales order.
     * This is the dimension 2 set in the header of the sales order.
     * The sales order lines might specify other dimension 2 values or no dimension 2.
     * Dimension 1-3 are customizable dimensions that can be defined and queried using the Custom Dimensions endpoint.
     * Dim2Id = -1 means no dimension 2.
     */
    Dim2Id?: number | null;
    /**
     * The code of the dimension 3 associated with the sales order.
     * Dim3Code = -1 means no dimension 3.
     * Dimension 1-3 are customizable dimensions that can be defined and queried using the Custom Dimensions endpoint.
     */
    readonly Dim3Code?: string | null;
    /**
     * The id of the dimension 3 associated with the sales order.
     * This is the dimension 3 set in the header of the sales order.
     * The sales order lines might specify other dimension 3 values or no dimension 3.
     * Dimension 1-3 are customizable dimensions that can be defined and queried using the Custom Dimensions endpoint.
     * Dim3Id = -1 means no dimension 3.
     */
    Dim3Id?: number | null;
    /**
     * The ExternalImportReference associated with the sales order.
     * This property can be set by integrations creating sales orders, in order to reference the external system and ensure a duplicate check (only one instance of the reference can exist for the object type).
     * Can be used to correlate/duplicate check transactions.
     */
    ExternalImportReference?: string | null;
    /**
     * The identifier of the sales order.
     * The id is assigned by Go when the sales order is created.
     * This id will persist on sent invoices and the voucher of sent invoices, if the sales order (invoice draft) is sent.
     */
    readonly Id?: string;
    /**
     * The imported order number.
     * Can only be set on sales orders created using the api or import, and on vouchers posted directly using the api or an import.
     * Can be used to reference the order number in the external system.
     * The imported order number is visible on the sales order in the Go GUI.
     */
    ImportedOrderNo?: number | null;
    /**
     * Value indicating whether the sales order is created by the integration currently communicating with the API.
     * Will be true for all entries that are created by the same integration user (same Application Key) as the integration currently authorized.
     * Can be used in filtering if only the current integration's entries are relevant to report.
     */
    readonly IsCreatedByCurrentIntegration?: boolean | null;
    /**
     * The timestamp of the last change of the sales order.
     */
    readonly LastChangedDateTimeOffset?: string;
    /**
     * The number of lines on this sales order.
     */
    readonly LineCount?: number;
    /**
     * The code of the location dimension associated with the sales order.
     * Locations can be queried and identified using the Locations endpoint.
     */
    readonly LocationCode?: string | null;
    /**
     * The id of the location dimension associated with the sales order.
     * This is the location set in the header of the sales order.
     * The sales order lines will inherit this value if no other location (or no location) is specified on the line.
     * Locations can be queried and identified using the Locations endpoint.
     * LocationId = -1 means no location.
     */
    LocationId?: number | null;
    /**
     * The net amount of the order (vat exclusive).
     * This amount is presented in the currency used on the order (the currency given by the currencyCode).
     */
    readonly NetAmount?: number;
    /**
     * The payment term of the sales order.
     * This is the default number of days after an invoice is sent until it is due.
     * If null, the value will be inherited from project, customer or the client payment term settings.
     * Payment terms can be queried and identified using the Payment terms endpoint.
     */
    readonly PaymentTerm?: number | null;
    /**
     * The id of the payment term of the sales order.
     * This is the default number of days after an invoice is sent until it is due.
     * If null, the value will be inherited from project, customer or the client payment term settings.
     * Payment terms can be queried and identified using the Payment terms endpoint.
     */
    PaymentTermId?: number | null;
    /**
     * The code of the project associated with the sales order.
     * This is the project set in the header of the order.
     * The sales order lines will inherit this value if no other project (or no project) is specified on the line.
     * ProjectCode = -1 means no project.
     * Projects can be queried and identified using the Projects endpoint.
     */
    readonly ProjectCode?: string | null;
    /**
     * The id of the project associated with the sales order.
     * This is the project set in the header of the order.
     * The sales order lines will inherit this value if no other project (or no project) is specified on the line.
     * Projects can be queried and identified using the Projects endpoint.
     * ProjectId = -1 means no project.
     */
    ProjectId?: number | null;
    /**
     * The purchase order reference on the sales order.
     * The property can be used to reference purchase order places by the customer.
     */
    PurchaseOrderReference?: string | null;
    /**
     * The related invoice number.
     * Can only be set for sales orders that are credit note drafts.
     * If set, this property will reference the original invoice being credited.
     */
    RelatedInvoiceNo?: number | null;
    /**
     * The sales order date.
     * Will default to the date when the sales order is sent (converted to invoice) if not set via import or api.
     */
    SalesOrderDate?: string | null;
    /**
     * The sales order number.
     * This value is autogenerated by Go.
     */
    readonly SalesOrderNo?: number | null;
    SalesOrderStatus?: OrderStatus;
    /**
     * The (employee) id of the sales person associated with the sales order.
     * If null, the sales person on the customer this sales order relates to is used or the default sales person from the SalesSettings.
     * Employees can be queried and identified using the Employees endpoint.
     */
    SalesPersonEmployeeId?: number | null;
    /**
     * The employee number of the sales person associated with the sales order.
     * If null, the sales person on the customer this sales order relates to is used or the default sales person from the SalesSettings.
     * Employees can be queried and identified using the Employees endpoint.
     */
    readonly SalesPersonEmployeeNumber?: number | null;
    /**
     * The total amount of the sales order (VAT inclusive).
     * This amount is presented in the currency used on the sales order (the currency given by the currencyCode).
     */
    readonly TotalAmount?: number;
};

