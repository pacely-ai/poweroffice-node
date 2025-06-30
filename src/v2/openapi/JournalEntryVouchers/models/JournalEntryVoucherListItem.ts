/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VoucherType } from './VoucherType';
/**
 * Properties of journal entry vouchers list item.
 */
export type JournalEntryVoucherListItem = {
    /**
     * The timestamp of when the voucher object was created.
     */
    readonly CreatedDateTimeOffset?: string;
    /**
     * A value that uniquely identifies this voucher.
     * The Id is assigned by Go when the entry is created, and will persist when/if the voucher is posted.
     */
    readonly Id?: string;
    /**
     * Indicates whether the journal entry voucher is sent to approval and is in the approval workflow.
     * If true, the voucher cannot be deleted.
     */
    readonly InApprovalWorkflow?: boolean;
    /**
     * Indicates whether the querying integration created the journal entry voucher, in which case the value is true.
     */
    readonly IsCreatedByCurrentIntegration?: boolean | null;
    /**
     * Indicates whether the journal entry voucher is posted. If true, the voucher is posted an cannot be deleted via api or edited by a user in the GUI.
     * If false, the voucher is unposted.
     * If true, the voucher cannot be deleted.
     */
    readonly IsPosted?: boolean | null;
    /**
     * The timestamp of the last change of voucher.
     */
    readonly LastChangedDateTimeOffset?: string;
    /**
     * Indicates whether the journal entry voucher was received by EHF. If true, the journal entry voucher have an EHF XML file.
     */
    readonly OriginatedFromEhf?: boolean | null;
    VoucherType?: VoucherType;
};

