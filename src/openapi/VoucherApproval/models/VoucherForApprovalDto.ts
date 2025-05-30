/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApprovalVoucherType } from './ApprovalVoucherType';
/**
 * Dto for available information when listing vouchers ready for handling by integration.
 */
export type VoucherForApprovalDto = {
    ApprovalVoucherType?: ApprovalVoucherType;
    /**
     * The timestamp of when the voucher was made available to the integrating party.
     */
    readonly AvailableFromDateTimeOffset?: string;
    /**
     * A value that uniquely identifies this voucher.
     * The Id is assigned by Go when the entry is created, and will persist when/if the voucher is posted.
     */
    readonly Id?: string;
    /**
     * A value indicating whether the voucher was received to Go by EHF. If true, the voucher have an xml file associated with it.
     */
    OriginatedFromEhf?: boolean;
};

