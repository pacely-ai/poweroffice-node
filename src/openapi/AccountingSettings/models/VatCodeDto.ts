/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VatBasisRatios } from './VatBasisRatios';
/**
 * The VAT code DTO contains all properties relevant to VAT codes.
 */
export type VatCodeDto = {
    /**
     * The standard vat id the custom vat code is based upon. Relevant only for custom vat codes.
     */
    BaseVatCodeId?: number | null;
    /**
     * The vat code. Go use standard SAF-T codes by default. Any custom codes, will have a notation with the letter C first.
     * Codes used specifically for vat compensation, are marked with the letter K first (relevant only if the client uses vat compensation, ie the VatSetting 'useVatCompensation' set true).
     */
    readonly Code?: string | null;
    /**
     * The description of the vat code.
     */
    readonly Description?: string | null;
    /**
     * The unique identifier of the vat code
     */
    readonly Id?: number;
    /**
     * The value indicating whether this vat code is active
     */
    readonly IsActive?: boolean | null;
    /**
     * The value indicating whether this vat code is custom created. The code will have the letter C in the notation if true.
     */
    readonly IsCustom?: boolean | null;
    /**
     * the name of the vat code.
     */
    readonly Name?: string | null;
    /**
     * The rate of the vat code. This is a value between 0 and 1. 0 representing 0 % vat and 1 representing 100 % vat.
     */
    readonly Rate?: number;
    /**
     * The date this vat code is active from, inclusive.
     */
    readonly ValidFrom?: string;
    /**
     * The date this vat code expires. Inclusive.
     */
    readonly ValidTo?: string | null;
    /**
     * The vat basis ratio. Relevant for custom codes in mixed vat conditions (Norwegian: Forholdsmessig fradrag MVA). This is a value between 0 and 1, with 0 representing 0% vat basis ratio and 1 representing 100% vat basis ratio.
     * Example: A net amount of 1000 NOK with 50% vat basis ratio and 25% vat rate, will have the vat amount calculated as: 1000 x 0.5 x 0.25 = 125 NOK
     */
    readonly VatBasisRatio?: number | null;
    /**
     * The date this vat basis ratio is active from.
     * If no vat basis ratio is set, this date will default to the vat code valid from date.
     */
    readonly VatBasisRatioValidFrom?: string | null;
    /**
     * A collection of VatBasisRatios for a custom vat code.
     */
    readonly VatBasisRatios?: Array<VatBasisRatios> | null;
};

