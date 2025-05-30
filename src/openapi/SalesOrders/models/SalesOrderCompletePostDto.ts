/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderStatus } from './OrderStatus';
import type { SalesOrderLinePostDto } from './SalesOrderLinePostDto';
/**
 * The sales order complete post DTO contains only properties relevant to a sales order (invoice draft) in Go (this includes sales order lines) that can be created via POST-method in API.
 */
export type SalesOrderCompletePostDto = {
    /**
     * The code of the branding theme associated with the sales order.
     * If null in the header, the value may inherit from any project set on the sales order, or from the clients default branding theme.
     * Note that if BrandingThemeId is set as well in the request, BrandingThemeId takes precedence and BrandingThemeCode is ignored.
     */
    BrandingThemeCode?: string | null;
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
     * The customer number for the customer associated with the sales order.
     * Note that if CustomerId is set as well in the request, CustomerId takes precedence and CustomerNo is ignored.
     */
    CustomerNo?: number | null;
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
     * The default set of delivery terms provided in Go are incoterms, but any custom string can be set.
     * If null, the value will be inherited from project, customer or the client delivery term settings.
     * Note that if DeliveryTermId is set as well in the request, DeliveryTermId takes precedence and DeliveryTerm is ignored.
     */
    DeliveryTerm?: string | null;
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
     * Note that if DepartmentId is set as well in the request, DepartmentId takes precedence and DepartmentCode is ignored.
     * DepartmentCode = -1 means no department.
     */
    DepartmentCode?: string | null;
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
     * This is the dimension 1 set in the header of the sales order.
     * The sales order lines might specify other dimension 1 values or no dimension 1.
     * Note that if Dim1Id is set as well in the request, Dim1Id takes precedence and Dim1Code is ignored.
     * Dim1Code = -1 means no dimension 1.
     */
    Dim1Code?: string | null;
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
     * This is the dimension 2 set in the header of the sales order.
     * The sales order lines might specify other dimension 2 values or no dimension 2.
     * Dim2Code = -1 means no dimension 2.
     */
    Dim2Code?: string | null;
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
     * This is the dimension 3 set in the header of the sales order.
     * The sales order lines might specify other dimension 3 values or no dimension 3.
     * Dim3Code = -1 means no dimension 3.
     */
    Dim3Code?: string | null;
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
     * The imported order number.
     * Can only be set on sales orders created using the api or import, and on vouchers posted directly using the api or an import.
     * Can be used to reference the order number in the external system.
     * The imported order number is visible on the sales order in the Go GUI.
     */
    ImportedOrderNo?: number | null;
    /**
     * The code of the location dimension associated with the sales order.
     * This is the location set in the header of the sales order.
     * The sales order lines will inherit this value if no other location (or no location) is specified on the line.
     * Note that if LocationId is set as well in the request, LocationId takes precedence and LocationCode is ignored.
     * LocationCode = -1 means no location.
     */
    LocationCode?: string | null;
    /**
     * The id of the location dimension associated with the sales order.
     * This is the location set in the header of the sales order.
     * The sales order lines will inherit this value if no other location (or no location) is specified on the line.
     * Locations can be queried and identified using the Locations endpoint.
     * LocationId = -1 means no location.
     */
    LocationId?: number | null;
    /**
     * The payment term of the sales order.
     * This is the default number of days after an invoice is sent until it is due.
     * If null, the value will be inherited from project, customer or the client payment term settings.
     * Note that if PaymentTermId is set as well in the request, PaymentTermId takes precedence and PaymentTerm is ignored.
     */
    PaymentTerm?: number | null;
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
     * Note that if ProjectId is set as well in the request, ProjectId takes precedence and ProjectCode is ignored.
     * ProjectCode = -1 means no project.
     */
    ProjectCode?: string | null;
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
     * The sales order lines.
     */
    SalesOrderLines?: Array<SalesOrderLinePostDto> | null;
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
     * Note that if SalesPersonEmployeeId is set as well in the request, SalesPersonEmployeeId takes precedence and SalesPersonEmployeeNumber is ignored.
     */
    SalesPersonEmployeeNumber?: number | null;
};

