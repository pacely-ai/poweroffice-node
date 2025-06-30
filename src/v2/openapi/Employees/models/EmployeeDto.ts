/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactAddressDto } from './ContactAddressDto';
import type { Gender } from './Gender';
import type { InternationalIdType } from './InternationalIdType';
/**
 * The Employee DTO contains properties relevant to an employee object in Go
 */
export type EmployeeDto = {
    /**
     * The timestamp the contact entity was created.
     * This might differ from the employee created timestamp, if the contact was first created as a customer/supplier.
     */
    readonly ContactCreatedDateTimeOffset?: string;
    /**
     * The contact group ids the current contact is part of, or sets contact group id you want to add this contact to.
     */
    ContactGroupIds?: Array<number> | null;
    /**
     * The created from import journal identifier (guid).
     * If the employee was created from an import, this property will contain the Id of the Import that created this entity.
     */
    readonly CreatedFromImportJournalId?: string | null;
    /**
     * The date of birth of the employee.
     */
    DateOfBirth?: string | null;
    /**
     * The code of the department this employee is associated with.
     * Use the Departments endpoint to retrieve and/or create departments.
     */
    readonly DepartmentCode?: string | null;
    /**
     * The id of the department this employee is associated with.
     * Use the Departments endpoint to retrieve and/or create departments.
     */
    DepartmentId?: number | null;
    /**
     * The (general) e-mail address registered for the employee.
     */
    EmailAddress?: string | null;
    /**
     * The timestamp the contact first became an employee.
     * For contacts being only employees, this property will be equal to the contactCreatedDateTimeOffset property.
     */
    readonly EmployeeCreatedDateTimeOffset?: string;
    /**
     * The end date of the employment of this employee.
     * Note that this field has no relation to the employment entity that is reported (a-melding).
     */
    EndDate?: string | null;
    /**
     * The identifier of the bank account used for expense payments to the employee (norwegian: "utlegg")
     */
    readonly ExpenseBankAccountId?: number | null;
    /**
     * The external import reference of the employee.
     * This field is not available in the GUI, but can be used by the integrating party to reference the external system.
     * The field must be unique within each class of Contacts (unique for customers, suppliers or employees).
     * Max length 50 characters.
     */
    ExternalImportReference?: string | null;
    /**
     * The external number of the employee.
     * This field can be used to reference the employee number in the external system, if the employee numbers are not kept in 1:1 sync between Go and the external system.
     * The field is available in the GUI with the name "External Code".
     * The field must be unique within each class of Contacts (unique for customers, suppliers or employees).
     * Note that in file imports to Go (including file imports using the ImportFile endpoint), this number has precedence over the employee number. I.e. when importing vouchers with employee sub-ledger entries using a file, with the employee number 1 set in the file, the import will choose the employee with ExternalNumber 1 over the employee with Number 1. This is the case for file imports only.
     */
    ExternalNumber?: number | null;
    /**
     * The first name of the employee.
     * Required when creating new employees (POST operations).
     */
    FirstName?: string | null;
    Gender?: Gender;
    /**
     * The date the employee was hired.
     */
    HiredDate?: string | null;
    /**
     * The identifier of the contact.
     * This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited (PATCH), deleted (DELETE) or retrieved specifically (GET).
     * The employee object is a contact entity, meaning the id might be shared with a customer and/or a supplier if the contact is registered as both an employee and customer/supplier in Go.
     */
    readonly Id?: number;
    /**
     * The ISO 3166-1 alfa-2 country code (Two characters).
     * Relevant (and required) only if InternationalIdReportToAltinn is set to true.
     */
    InternationalIdCountryCode?: string | null;
    /**
     * The international Id number. For privacy reasons queries returns 'hidden' if this field has a value and null if it's empty.
     * Access to retrieving the value must be granted by the api team by a special privilege (which also grant access to SSN and gender).
     * Relevant (and required) only if InternationalIdReportToAltinn is set to true.
     */
    InternationalIdNumber?: string | null;
    /**
     * Value indicating whether International ID should be reported to Altinn (Related to tax card and payroll reporting).
     */
    InternationalIdReportToAltinn?: boolean | null;
    InternationalIdType?: InternationalIdType;
    /**
     * Value indicating whether this contact entity is/should be archived (set inactive).
     * Cannot be set if the contact have ledger balances (as either an employee, a customer or as a supplier).
     */
    IsArchived?: boolean | null;
    /**
     * The job title of the employee.
     */
    JobTitle?: string | null;
    /**
     * The timestamp of the last change of the employee.
     * Note that this property do not reflect changes in sub-entities (address, employment relationship settings etc.) related to the contact.
     */
    readonly LastChangedDateTimeOffset?: string;
    /**
     * The last name of the employee.
     * Required when creating new employees (POST operations).
     */
    LastName?: string | null;
    /**
     * The code of the location this employee is associated with.
     * Use the Locations endpoint to retrieve and/or create locations.
     */
    readonly LocationCode?: string | null;
    /**
     * The id of the location this employee is associated with.
     * Use the Locations endpoint to retrieve and/or create locations.
     */
    LocationId?: number | null;
    MailAddress?: ContactAddressDto;
    /**
     * The employee id of the manager of the employee.
     */
    ManagerEmployeeId?: number | null;
    /**
     * The employee number of the manager of the employee.
     */
    readonly ManagerEmployeeNo?: number | null;
    /**
     * The (Norwegian) national identity number (also called Social Security Number) or D-number.
     * For privacy reasons queries returns 'hidden' if this field has a value and null if empty.
     * Access to retrieving the value must be granted by the api team by a special privilege (which also grant access to InternationalId and gender).
     * Note that the number is validated for the correct syntax when set.
     */
    NationalIdNumber?: string | null;
    /**
     * The number of the employee.
     * The number will also represent the employee ledger account, used for employee ledger transactions.
     * When creating new employees and setting the number (as opposed to letting Go assign the next available number if left blank), the number must be within range of the employee legder numberseries that exist on the client in Go.
     */
    Number?: number | null;
    /**
     * The phone number of the employee.
     */
    PhoneNumber?: string | null;
    /**
     * The identifier of the bank account used for salary payments
     */
    readonly SalaryBankAccountId?: number | null;
    /**
     * The start date of the employment of this employee.
     * Note that this field has no relation to the employment entity that is reported (a-melding).
     */
    StartDate?: string | null;
    /**
     * The identifier of the subledger account associated with the employee.
     */
    readonly SubledgerAccountId?: number;
    /**
     * The identifier of the bank account used for travel expense payments to the employee (norwegian: "reiseregninger")
     */
    readonly TravelExpenseBankAccountId?: number | null;
};

