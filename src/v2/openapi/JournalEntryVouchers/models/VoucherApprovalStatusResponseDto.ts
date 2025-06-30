/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Dto for available information returned after successfully posting a status update.
 */
export type VoucherApprovalStatusResponseDto = {
    /**
     * Property indicating whether the journal entry voucher is sent to approval and is in the approval workflow. If true, the voucher cannot be deleted
     */
    InApprovalWorkflow?: boolean;
    /**
     * Property indicating whether the journal entry voucher is posted. If true, the voucher is posted an cannot be deleted via api or edited by a user in the GUI. If false, the voucher is unposted
     */
    IsPosted?: boolean;
    /**
     * A value that uniquely identifies the voucher. The Id is assigned by Go when the entry is created, and will persist when/if the voucher is posted.
     */
    VoucherId?: string;
};

