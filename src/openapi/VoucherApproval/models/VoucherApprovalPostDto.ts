/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VoucherApprovalStatus } from './VoucherApprovalStatus';
/**
 * Dto for available information to set when updating the approval state back to the Go client
 */
export type VoucherApprovalPostDto = {
    /**
     * Comment associated with the approval status. We recommend that you provide a comment that reflects
     * the previous events in the external system and/or information that is relevant for the accounting
     * entries. The comment will be visible in the user interface in Go and added as a voucher history entry.
     *
     * The comment text should be human-readable. If necessary, use newline characters (\n) to format the text for better readability.
     */
    Comment: string;
    VoucherApprovalStatus: VoucherApprovalStatus;
};

