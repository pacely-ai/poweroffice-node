/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents a Data Transfer Object (DTO) for patching a bank journal entry voucher.
 * Inherits from Web.ExternalApi2.Models.VoucherDrafts.BankJournal.BankJournalLineReadAndWrite.
 */
export type BankJournalEntryVoucherPatchDto = {
    /**
     * The currency code of the voucher header.
     * The line amounts will default be determined in the currency specified in the header.
     * For some voucher types, different currency codes can be set on the line level, thus overriding the currency of the head.
     * Currencies active on the client can be queried using the AccountingSettings service. Currency codes follow the ISO4217 standard.
     */
    CurrencyCode?: string | null;
    /**
     * The department Id of the voucher header.
     * The lines will inherit the department from the voucher head if not specified on the lines.
     * Departments can be queried and identified using the Department service.
     */
    DepartmentId?: number | null;
    /**
     * The description field of the voucher header.
     */
    Description?: string | null;
    /**
     * The id of the dimension 1 associated with the voucher header.
     * The lines will inherit the dim1 from the voucher head if not specified on the lines.
     */
    Dim1Id?: number | null;
    /**
     * The id of the dimension 2 associated with the voucher header.
     * The lines will inherit the dim2 from the voucher head if not specified on the lines.
     */
    Dim2Id?: number | null;
    /**
     * The id of the dimension 3 associated with the voucher header.
     * The lines will inherit the dim3 from the voucher head if not specified on the lines.
     */
    Dim3Id?: number | null;
    /**
     * The id of the location dimension associated with the voucher header.
     * The lines will inherit the location from the voucher head if not specified on the lines.
     */
    LocationId?: number | null;
    /**
     * The id of the project associated with the voucher header.
     * The lines will inherit the project from the voucher head if not specified on the lines.
     */
    ProjectId?: number | null;
    /**
     * The voucher date.
     * This represents the date of the voucher, the document date of an invoice for instance,
     * and may differ from the transaction dates for lines the voucher, depending on the type of voucher.
     */
    VoucherDate?: string | null;
};

