/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactAddressPostDto } from './ContactAddressPostDto';
import type { InvoiceDeliveryType } from './InvoiceDeliveryType';
import type { NoticeOfDebtCollectionDeliveryType } from './NoticeOfDebtCollectionDeliveryType';
import type { ReminderDeliveryType } from './ReminderDeliveryType';
/**
 * The customer post DTO contains only properties relevant to a customer-object in Go that can be altered directly via POST-method in API.
 */
export type CustomerPostDto = {
    /**
     * The fixed percent for allowance/discount or allowance charge for this customer.
     * The value, if set, should be between -1000 and 100 (reflects as -1000% or 100% in the GUI).
     * Negative percentage means the customer is set with allowance charge.
     * Positive percentage means the customer is set up with discount/allowance.
     * The percentage set will be used as default on any invoices created in Go for that customer.
     */
    Allowance?: number | null;
    /**
     * The billable hourly rate for timetransactions registered with billable activities with this customer.
     * Must be positive number.
     * Note that a hierarchy exist in Go for timetracking price settings of billable rates.
     */
    BillableRate?: number | null;
    /**
     * The contact group ids the current contact is part of, or sets contact group id you want to add this contact to.
     */
    ContactGroupIds?: Array<number> | null;
    /**
     * The standard currency code for the customer.
     * Currencies active on the client can be queried using the AccountingSettings service.
     * Currency codes follow the ISO4217 standard.
     * Defaults to *NOK*.
     */
    CurrencyCode?: string | null;
    /**
     * The date the customer first became a customer.
     * This field is available in the GUI, and is editable at any time. Is thus not the same as customerCreatedDateTimeOffset.
     */
    CustomerSince?: string | null;
    /**
     * The date of birth of the customer.
     * Relevant only if the customer is a person (when isPerson is true).
     */
    DateOfBirth?: string | null;
    /**
     * The delivery term of the customer.
     * The delivery term set will be the default value when an invoice draft is created in Go with this customer.
     * The default set of delivery terms provided in Go are incoterms, but any custom string can be set.
     * If null, the default delivery term set on the client is used.
     * Note that if DeliveryTermId is set as well in the request, DeliveryTermId takes precedence and DeliveryTerm is ignored.
     */
    DeliveryTerm?: string | null;
    /**
     * The id of delivery term of the customer.
     * The delivery term set will be the default value when an invoice draft is created in Go with this customer.
     * If null, the default delivery term set on the client is used.
     * The delivery terms can be created and retrieved using the delivery terms endpoint.
     */
    DeliveryTermId?: number | null;
    /**
     * The code of the department this customer is associated with.
     * The department will be the default value when an invoice draft is created in Go with this customer.
     * The department entity must exist in Go in order to set the code.
     * Note that if DepartmentId is set as well in the request, DepartmentId takes precedence and DepartmentCode is ignored.
     */
    DepartmentCode?: string | null;
    /**
     * The id of the department this customer is associated with.
     * The department will be the default value when an invoice draft is created in Go with this customer.
     * Use the Departments endpoint to retrieve and/or create departments.
     */
    DepartmentId?: number | null;
    /**
     * Value indicating whether or not to add late payment fees when sending reminders to this customer.
     * Defaults to false.
     * Relevant if the client uses reminders with interest rate, and that information is available in the SalesSettings endpoint.
     */
    DoNotAddLatePaymentFees?: boolean | null;
    /**
     * Value indicating whether or not to add late payment interest when sending reminders to this customer.
     * Defaults to false.
     * Relevant if the client uses reminders with fees, and that information is available in the SalesSettings endpoint.
     */
    DoNotAddLatePaymentInterest?: boolean | null;
    /**
     * Value indicating whether or not this payment notifications should be sent automatically to this customer.
     * Payment notifications is considered a friendly reminder (with no fee) that is sent before any reminders with fee.
     * Defaults to false.
     * Relevant only if the client uses payment notification, and that information is available in the SalesSettings endpoint.
     */
    DoNotAutomatePaymentNotifications?: boolean | null;
    /**
     * The (general) e-mail address registered for the customer.
     */
    EmailAddress?: string | null;
    /**
     * The external import reference of the customer.
     * This field is not available in the GUI, but can be used by the integrating party to reference the external system.
     * The field must be unique within each class of Contacts (unique for customers, suppliers or employees).
     * Max length 50 characters.
     */
    ExternalImportReference?: string | null;
    /**
     * The external number of the customer.
     * This field can be used to reference the customer number in the external system, if the customer numbers are not kept in 1:1 sync between Go and the external system.
     * The field is available in the GUI with the name "External Code".
     * The field must be unique within each class of Contacts (unique for customers, suppliers or employees).
     * Note that in file imports to Go (including file imports using the ImportFile endpoint), this number has precedence over the customer number. I.e. when importing outgoing invoices using a file, with the customer number 10000 set in the file, the import will choose the customer with ExternalNumber 10000 over the customer with Number 10000. This is the case for file imports only.
     */
    ExternalNumber?: number | null;
    /**
     * The first name of the customer.
     * Relevant and required if the customer is a person (i.e. isPerson is true)
     */
    FirstName?: string | null;
    /**
     * The code of the branding theme used when sending invoices to this customer.
     * If null, the clients default branding theme will be used.
     * Note that if InvoiceBrandingThemeId is set as well in the request, InvoiceBrandingThemeId takes precedence and InvoiceBrandingThemeCode is ignored.
     */
    InvoiceBrandingThemeCode?: string | null;
    /**
     * The id of the branding theme used when sending invoices to this customer.
     * If null, the clients default branding theme will be used.
     * Branding themes can be retrieved using the SalesSettings endpoint.
     */
    InvoiceBrandingThemeId?: number | null;
    InvoiceDeliveryType?: InvoiceDeliveryType;
    /**
     * The default e-mail address used when sending invoice with delivery method PdfByEmail.
     */
    InvoiceEmailAddress?: string | null;
    /**
     * The default e-mail address used as CC when sending invoice with delivery method PdfByEmail.
     * Up to 10 e-mail addresses can be set, semicolon separated. Max length of the string is 2000.
     */
    InvoiceEmailAddressCC?: string | null;
    /**
     * Value indicating whether this contact entity is/should be archived (set inactive)
     * Cannot be set if the contact have ledger balances (as either a customer or as a supplier).
     */
    IsArchived?: boolean | null;
    /**
     * Value indicating whether this customer is a person.
     * The setting apply to the contact entity, and is used to differentiate persons from companies.
     * If set true, the firstName and lastName should be set.
     * The default setting is false if not provided.
     */
    IsPerson?: boolean | null;
    /**
     * Value indicating whether this customer is VAT free.
     * If set true, the alternative sales accounts is used when creating invoices for this customer.
     * The default setting is false, if not provided.
     */
    IsVatFree?: boolean | null;
    /**
     * The last name of the customer.
     * Relevant and required if the customer is a person (i.e. isPerson is true)
     */
    LastName?: string | null;
    /**
     * The legal name of the customer.
     * The legal name is the official registered name of the company, as opposed to the name which might be a marketing name.
     * Relevant only if the customer is a company (i.e. isPerson is false)
     */
    LegalName?: string | null;
    MailAddress?: ContactAddressPostDto;
    /**
     * The name of the customer.
     * Relevant and required if the customer is a company (i.e. isPerson is false)
     */
    Name?: string | null;
    /**
     * The (Norwegian) national identity number (also called Social Security Number) or D-number.
     * For privacy reasons queries returns 'hidden' if this field has a value and null if empty.
     * Access to retrieving the value must be granted by the api team by a special privilege (which also grant access to InternationalId and gender).
     * Note that the number is validated for the correct syntax when set.
     */
    NationalIdNumber?: string | null;
    NoticeOfDebtCollectionDeliveryType?: NoticeOfDebtCollectionDeliveryType;
    /**
     * The number of the customer.
     * The number will also represent the customer ledger account, used for customer ledger transactions.
     * When creating new customer and setting the number (as opposed to letting Go assign the next available number if left blank), the number must be within range of the customer legder numberseries that exist on the client in Go.
     */
    Number?: number | null;
    /**
     * The organization number of the customer.
     * Relevant for customers that are companies (i.e. isPerson is false).
     */
    OrganizationNumber?: string | null;
    /**
     * The default e-mail address used when sending (payment) reminder or notice of debt collection with delivery method PdfByEmail.
     */
    PaymentReminderEmailAddress?: string | null;
    /**
     * The payment term of the customer.
     * This is the default number of days after an invoice is sent until it is due.
     * The payment term set will be the default value when an invoice draft is created in Go with this customer.
     * If null, the default payment term set on the client will be used.
     * Note that if PaymentTermId is set as well in the request, PaymentTermId takes precedence and PaymentTerm is ignored.
     */
    PaymentTerm?: number | null;
    /**
     * The ID of the payment term of the customer.
     * Payment terms define the number of days from an invoice is sent until it is due paid.
     * The payment term set will be the default value used when an invoice draft is created in Go with this customer.
     * If null, the default payment term set on the client will be used on invoice draft.
     * The payment terms can be created and retrieved using the payment terms endpoint.
     */
    PaymentTermId?: number | null;
    /**
     * The phone number of the customer.
     */
    PhoneNumber?: string | null;
    ReminderDeliveryType?: ReminderDeliveryType;
    /**
     * The employee id of the sales person assigned this customer.
     * If null, the default sales person is used if set in the SalesSettings.
     * Employees can be retrieved from the Employees endpoint.
     */
    SalesPersonEmployeeId?: number | null;
    /**
     * The employee number of the sales person assigned this customer.
     * If null, the default sales person is used if set in the SalesSettings.
     */
    SalesPersonEmployeeNumber?: number | null;
    /**
     * Value indicating whether to send (payment) reminders to this customer.
     * Default is true, relevant only if the client uses reminders, and that information is available in the SalesSettings endpoint.
     */
    SendPaymentReminders?: boolean | null;
    /**
     * The Id of the sub-ledger series this customer belong in.
     * Relevant if the client have multiple customer sub-ledger series, and if so highly relevant in POST calls if the integrating party does not set Number but lets Go assign the next available Number.
     * In such cases, Go will create the customer in the default sub-ledger series, unless this property is set.
     */
    SubLedgerNumberSeriesId?: string | null;
    /**
     * Value indicating whether invoices for this customer can be transferred to a debt collection agency after they are due.
     * Default is true, relevant only if the client have a third party debt collection integration active.
     */
    TransferToDebtCollectionAgency?: boolean | null;
    /**
     * Value indicating whether invoice fee will be used when sending invoices to this customer.
     * Default is true, relevant only if the client uses invoice fee, and that information is available in the SalesSettings endpoint.
     */
    UseInvoiceFee?: boolean | null;
    /**
     * The url to the customers website.
     */
    WebsiteUrl?: string | null;
};

