/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgricultureDepartment } from './AgricultureDepartment';
import type { VatAlternativeGrouping } from './VatAlternativeGrouping';
import type { VatPeriodType } from './VatPeriodType';
import type { VatReturnType } from './VatReturnType';
/**
 * The Vat Settings DTO contains all properties relevant to VAT settings in
 */
export type VatSettingsDto = {
    AlternativeVatPeriod?: VatPeriodType;
    /**
     * The year the client wants to start reporting additional vat returns. Relevant only if ReportAlternativeVatReturn is true.
     */
    readonly AlternativeVatReturnFromYear?: number | null;
    AlternativeVatReturnType?: VatReturnType;
    /**
     * Information on whether this this client is registered for Value Added Tax (VAT, norwegian: mva-registrert). If false, vat is not applied to outgoing invoices.
     */
    readonly IsVatRegistered?: boolean | null;
    /**
     * Information on whether this client report additional vat return for some departments.
     */
    readonly ReportAlternativeVatReturn?: boolean | null;
    /**
     * Information on whether this client report vat returns manually. True if the client are obliged to submit more than one type of vat return, are jointly registered or shall deliver vat return for vat compensation or reverse tax liability.
     */
    readonly ReportVatReturnManually?: boolean | null;
    RoundingAccountAgricultureDepartment?: AgricultureDepartment;
    /**
     * The identifier of the rounding account number.
     */
    readonly RoundingAccountId?: number | null;
    /**
     * The account used if rounding need to be posted when the principal vat report is sent.
     * When sending vat reports, the system vat accounts are emptied, but the account balances might have decimal precision and the vat reports do not.
     * If so, the rounding difference is posted to the rounding account.
     */
    readonly RoundingAccountNo?: number | null;
    /**
     * Information on whether this client are entitled to and uses vat compensation. If true, vat codes with first letter notation K can be used when relevant for the client.
     */
    readonly UseVatCompensation?: boolean | null;
    VatAlternativeGrouping?: VatAlternativeGrouping;
    /**
     * The vat number of the client. The vat number will equal the organization number for norwegian clients, but will relevant in vat terms only if the property isVatRegistered is true.
     */
    readonly VatNumber?: string | null;
    VatPeriod?: VatPeriodType;
    VatReturnType?: VatReturnType;
};

