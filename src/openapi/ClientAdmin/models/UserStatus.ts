/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Enum defining the status of an user.<p>Members:</p><ul><li><i>Active</i> - The user have access to the client.</li><li><i>Inactive</i> - the user exist on the client but do not have access as the user have been deactivated.</li><li><i>InvitePending</i> - Invite pending, the user have been invited to the client but is not yet active.
 * This state can only be set by the system as a result of an invitation.</li></ul>
 */
export enum UserStatus {
    ACTIVE = 'Active',
    INACTIVE = 'Inactive',
    INVITE_PENDING = 'InvitePending',
}
