/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UnitOfMeasureType } from './UnitOfMeasureType';
import type { VatReturnSpecification } from './VatReturnSpecification';
/**
 * The General Ledger Account Patch DTO contains only properties relevant to a general ledger account in Go that can be altered directly via PATCH-method in API.
 */
export type GeneralLedgerAccountPatchDto = {
    /**
     * The standard code of the currency associated with the account.
     */
    CurrencyCode?: string | null;
    /**
     * The id of the department associated with the account.
     */
    DepartmentId?: number | null;
    /**
     * Value indicating whether this account is active.
     * Accounts that are not active will not be available for users in the journal entry GUI.
     */
    IsActive?: boolean | null;
    /**
     * Value indicating whether department is a required property to set on transactions on this account.
     */
    IsDepartmentRequired?: boolean | null;
    /**
     * Value indicating whether project is a required property to set on transactions on this account.
     */
    IsProjectRequired?: boolean | null;
    /**
     * Value indicating whether the account is locked to a VAT code. If true, only VatCode can be used on transactions on this account.
     */
    IsVatCodeLocked?: boolean | null;
    /**
     * The name of the account.
     */
    Name?: string | null;
    Unit1?: UnitOfMeasureType;
    Unit2?: UnitOfMeasureType;
    /**
     * The id of the VAT Code associated with the account.
     * VatCode or VatCodeId must be supplied when creating a general ledger account.
     */
    VatCodeId?: number | null;
    VatReturnSpecification?: VatReturnSpecification;
};

