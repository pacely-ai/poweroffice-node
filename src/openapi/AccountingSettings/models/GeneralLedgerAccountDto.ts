/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgricultureDepartment } from './AgricultureDepartment';
import type { GeneralLedgerAccountType } from './GeneralLedgerAccountType';
import type { UnitOfMeasureType } from './UnitOfMeasureType';
import type { VatReturnSpecification } from './VatReturnSpecification';
/**
 * The General Ledger Account DTO contains all properties relevant to a GeneralLedgerAccount-object in Go
 */
export type GeneralLedgerAccountDto = {
    /**
     * The number of the account.
     */
    readonly AccountNo?: number;
    AgricultureDepartment?: AgricultureDepartment;
    /**
     * The standard code of the currency associated with the account.
     */
    CurrencyCode?: string | null;
    /**
     * The code of the department associated with the account.
     */
    readonly DepartmentCode?: string | null;
    /**
     * The id of the department associated with the account.
     */
    DepartmentId?: number | null;
    GeneralLedgerAccountType?: GeneralLedgerAccountType;
    /**
     * The unique identifier of the account.
     * This identifier is unique and assigned by PowerOffice Go when a new entity is created, and should be provided when an entity should be edited.
     */
    readonly Id?: number;
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
     * The timestamp when the last change in settings for this account occurred.
     */
    readonly LastChangedDateTimeOffset?: string;
    /**
     * The name of the account.
     */
    Name?: string | null;
    Unit1?: UnitOfMeasureType;
    Unit2?: UnitOfMeasureType;
    /**
     * The VAT code associated with the account.
     * Standard codes in Go is based on the SAF-T standard.
     * Codes and any custom codes can be queried and identified using the VatCode service.
     */
    readonly VatCode?: string | null;
    /**
     * The id of the VAT Code associated with the account.
     * VatCode or VatCodeId must be supplied when creating a general ledger account.
     */
    VatCodeId?: number | null;
    VatReturnSpecification?: VatReturnSpecification;
};

