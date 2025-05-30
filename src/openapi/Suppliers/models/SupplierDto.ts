/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactAddressDto } from './ContactAddressDto';
/**
 * The supplier DTO contains all properties relevant to a supplier-object in Go
 */
export type SupplierDto = {
    /**
     * The timestamp the contact entity was created.
     * This might differ from the supplier created timestamp, if the contact was first created as a customer/employee.
     */
    readonly ContactCreatedDateTimeOffset?: string;
    /**
     * The contact group ids the current contact is part of, or sets contact group id you want to add this contact to.
     */
    ContactGroupIds?: Array<number> | null;
    /**
     * The created from import journal identifier (guid).
     * If the supplier was created from an import, this property will contain the Id of the Import that created this entity.
     */
    readonly CreatedFromImportJournalId?: string | null;
    /**
     * The standard currency code for the supplier.
     * Currencies active on the client can be queried using the AccountingSettings service.
     * Currency codes follow the ISO4217 standard.
     * Defaults to *NOK*.
     */
    CurrencyCode?: string | null;
    /**
     * The date of birth of the supplier.
     * Relevant only if the supplier is a person (when isPerson is true).
     */
    DateOfBirth?: string | null;
    /**
     * The (general) e-mail address registered for the supplier.
     * This field is validated for typos in POST/PATCH calls.
     */
    EmailAddress?: string | null;
    /**
     * The external import reference.
     * This field is not available in the GUI, but can be used by the integrating party to reference the external system.
     * The field must be unique within each class of Contacts (unique for customers, suppliers or employees).
     * Max length 50 characters.
     */
    ExternalImportReference?: string | null;
    /**
     * The external number.
     * This field can be used to reference the supplier number in the external system, if the supplier numbers are not kept in 1:1 sync between Go and the external system.
     * The field is available in the GUI with the name "External Code".
     * The field must be unique within each class of Contacts (unique for customers, suppliers or employees).
     * Note that in file imports to Go (including file imports using the ImportFile endpoint), this number has precedence over the supplier number.
     * I.e. when importing incoming invoices using a file, with the supplier number 20000 set in the file, the import will choose the supplier with ExternalNumber 20000 over the supplier with Number 20000. This is the case for file imports only.
     */
    ExternalNumber?: number | null;
    /**
     * The first name of the supplier.
     * Relevant and required if the supplier is a person (i.e. isPerson is true)
     */
    FirstName?: string | null;
    /**
     * The identifier of the contact.
     * This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited (PATCH), deleted (DELETE) or retrieved specifically (GET).
     * The supplier object is a contact entity, meaning the id might be shared with a customer and/or an employee if the contact is registered as both a supplier and customer/employee in Go.
     */
    readonly Id?: number;
    /**
     * A value indicating whether this supplier instance is active.
     * This property reflects if a contact entity that was both a customer and a supplier, is currently active as a supplier.
     * Can be false in situations where the customer is still active so that the contact entity cannot be archived, but the supplier is deactivated by a user in the GUI.
     */
    readonly IsActive?: boolean | null;
    /**
     * A value indicating whether this contact entity is/should be archived (set inactive)
     * Cannot be set if the contact have ledger balances (as either a customer or as a supplier).
     */
    IsArchived?: boolean | null;
    /**
     * A value indicating whether this supplier is a person.
     * The setting apply to the contact entity, and is used to differentiate persons from companies.
     * If set true, the firstName and lastName should be set.
     * The default setting is false if not provided.
     */
    IsPerson?: boolean | null;
    /**
     * The timestamp of the last change of the supplier.
     * Note that this property do not reflect changes in sub-entities (address, contact person etc) related to the contact.
     */
    readonly LastChangedDateTimeOffset?: string;
    /**
     * The last name of the supplier.
     * Relevant and required if the supplier is a person (i.e. isPerson is true)
     */
    LastName?: string | null;
    /**
     * The legal name of the supplier.
     * The legal name is the official registered name of the company, as opposed to the name which might be a marketing name.
     * Relevant only if the supplier is a company (i.e. isPerson is false)
     */
    LegalName?: string | null;
    MailAddress?: ContactAddressDto;
    /**
     * The name of the supplier.
     * Relevant and required if the supplier is a company (i.e. isPerson is false)
     */
    Name?: string | null;
    /**
     * The supplier number.
     * The number will also represent the supplier ledger account, used for supplier ledger transactions.
     * When creating new suppliers and setting the number (as opposed to letting Go assign the next available number if left blank), the number must be within range of the supplier ledger numberseries that exist on the client in Go.
     */
    Number?: number | null;
    /**
     * The organization number of the supplier.
     * Relevant for suppliers that are companies (i.e. isPerson is false).
     */
    OrganizationNumber?: string | null;
    /**
     * A flag indicating whether invoices or credit notes from this supplier should be paid using remittance.
     * Default true, and if true a remittance draft will be created when voucher are posted in the journal entry.
     */
    Payout?: boolean | null;
    /**
     * The phone number of the supplier.
     */
    PhoneNumber?: string | null;
    /**
     * The identifier of subledger account associated with the supplier.
     */
    readonly SubledgerAccountId?: number;
    /**
     * The timestamp the contact first became a supplier.
     * For contacts being only suppliers, this property will be equal to the contactCreatedDateTimeOffset property.
     */
    readonly SupplierCreatedDateTimeOffset?: string;
    /**
     * The url to the suppliers website.
     */
    WebsiteUrl?: string | null;
};

