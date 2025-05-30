/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * An enum that represents the state of a voucher.<p>Members:</p><ul><li><i>IsDraft</i> - The voucher is in a draft state, and can be edited, deleted or posted.</li><li><i>IsDeleted</i> - The voucher is deleted.</li><li><i>IsPosted</i> - The voucher is posted and cannot be edited or deleted.</li><li><i>IsProcessed</i> - The voucher is in the process of being processed.</li></ul>
 */
export enum VoucherState {
    IS_DRAFT = 'IsDraft',
    IS_DELETED = 'IsDeleted',
    IS_POSTED = 'IsPosted',
    IS_PROCESSED = 'IsProcessed',
}
