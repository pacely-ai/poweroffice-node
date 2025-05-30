/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssignmentGeneralDto } from '../models/AssignmentGeneralDto';
import type { AssignmentGeneralPostDto } from '../models/AssignmentGeneralPostDto';
import type { AssignmentLightWeightDto } from '../models/AssignmentLightWeightDto';
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AssignmentsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List the quality assignments from the client, returning lightweight objects. (Auth roles: QualityAssignmentLight,QualityAssignmentLight_Full)
     * Archived assignments are not returned by default.
     * @returns AssignmentLightWeightDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getAssignments({
        status,
        customerSubLedgerAccountIds,
        managerSubLedgerAccountIds,
        resourceParameter,
    }: {
        /**
         * Filter by assignment status (draft, active or archived). Archived assignments are not returned unless the filter with argument "archived" is applied.
         */
        status?: string,
        /**
         * Filter by customer sub ledger account id's. Separate by comma [,] to filter on multiple customer id's.
         */
        customerSubLedgerAccountIds?: string,
        /**
         * Filter by the identifier of the assignment manager. Separate by comma [,] to filter on multiple customer id's.
         */
        managerSubLedgerAccountIds?: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<AssignmentLightWeightDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Assignments',
            query: {
                'status': status,
                'customerSubLedgerAccountIds': customerSubLedgerAccountIds,
                'managerSubLedgerAccountIds': managerSubLedgerAccountIds,
                'resourceParameter': resourceParameter,
            },
            errors: {
                400: `Given when request is badly formatted`,
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
    /**
     * Create a new quality assignment draft with general information (Auth roles: QualityAssignmentGeneral_Full)
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns AssignmentGeneralDto Given when resource was created successfully
     * @throws ApiError
     */
    public postAssignments({
        requestBody,
    }: {
        /**
         * An AssignmentGeneralPostDto
         */
        requestBody?: AssignmentGeneralPostDto,
    } = {} as any): CancelablePromise<any | AssignmentGeneralDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Assignments',
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Given when request is badly formatted`,
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                404: `Given when resource was not found`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
    /**
     * Get the general information from a given quality assignment (Auth roles: QualityAssignmentGeneral,QualityAssignmentGeneral_Full, QualityAssignmentLight,QualityAssignmentLight_Full)
     * @returns AssignmentGeneralDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getAssignmentGeneralTabById({
        id,
    }: {
        /**
         * Identifier of the assignment
         */
        id: number,
    } = {} as any): CancelablePromise<AssignmentGeneralDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Assignments/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                404: `Given when resource was not found`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
    /**
     * Delete a quality assignment draft. (Auth roles: QualityAssignmentGeneral_Full)
     * Active and archived assignments cannot be deleted.
     * @returns any Given when resource was deleted successfully
     * @throws ApiError
     */
    public deleteAssignments({
        id,
    }: {
        /**
         * The assignment identifier
         */
        id: number,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Assignments/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Given when request is badly formatted`,
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                404: `Given when resource was not found`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
    /**
     * Make changes to the general information of an existing quality assignment (Auth roles: QualityAssignmentGeneral_Full)
     * @returns AssignmentGeneralDto Given when resource was updated successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchAssignments({
        id,
        requestBody,
    }: {
        /**
         * Identifier of an existing assignment
         */
        id: number,
        /**
         * JSON Patch structure for updating an Assignment. See AssignmentGeneralPatchDto schema for all available properties.
         * For more information on JSON patch and the various operations allowed, check out: https://datatracker.ietf.org/doc/html/rfc6902
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<AssignmentGeneralDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/Assignments/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Given when request is badly formatted`,
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                404: `Given when resource was not found`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
}
