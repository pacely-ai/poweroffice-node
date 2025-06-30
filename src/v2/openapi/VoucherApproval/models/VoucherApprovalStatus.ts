/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Enum defining what kind of status to post back to Go for the voucher workflow<p>Members:</p><ul><li><i>Approve</i> - The voucher is approved by the integration</li><li><i>Reject</i> - Reject the voucher. This will return the voucher to the initial journal entry workflow in draft state</li></ul>
 */
export enum VoucherApprovalStatus {
    APPROVE = 'Approve',
    REJECT = 'Reject',
}
