/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents a page of a voucher.
 */
export type VoucherPage = {
    /**
     * The creation date and time of the voucher page.
     */
    readonly CreatedDateTimeOffset?: string;
    /**
     * The identifier of the voucher page.
     */
    readonly Id?: number;
    /**
     * The identifier of the voucher draft the page belongs to.
     */
    readonly VoucherId?: string | null;
};

