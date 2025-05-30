/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Enum defining the status of an order (outgoing invoice draft)<p>Members:</p><ul><li><i>Draft</i> - The order can be edited.</li><li><i>Confirmed</i> - The order is confirmed.
 * Used to confirm and lock the order from edit.
 * Can be unlocked by changing state to draft again.</li></ul>
 */
export enum OrderStatus {
    DRAFT = 'Draft',
    CONFIRMED = 'Confirmed',
}
