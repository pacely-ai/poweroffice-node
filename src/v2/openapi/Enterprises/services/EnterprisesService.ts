/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnterpriseDto } from '../models/EnterpriseDto';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EnterprisesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get the enterprises registered for the client. Enterprises are primarily used for payroll reporting in Go.
     * A company may have more than one enterprise if the company have operations in different industries. (Auth roles: Enterprises,Enterprises_Full)
     * @returns EnterpriseDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getEnterprises({
        enterpriseNos,
        createdDateTimeOffsetGreaterThan,
        lastChangedDateTimeOffsetGreaterThan,
        resourceParameter,
    }: {
        /**
         * Filter by enterprise number. Search string should be separated by comma. If filter string is null or whitespace, query is returned as is.
         */
        enterpriseNos?: string,
        /**
         * Filter by the enterprise created timestamp property. This filtering will return all enterprises with a created timestamp greater than the timestamp provided. Can be used when polling for new entries from Go. Timestamp not inclusive.
         */
        createdDateTimeOffsetGreaterThan?: string,
        /**
         * Filter by the enterprise last changed timestamp property. This filtering will return all enterprises with a last changed timestamp greater than the timestamp provided. Timestamp not inclusive.
         */
        lastChangedDateTimeOffsetGreaterThan?: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<EnterpriseDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Enterprises',
            query: {
                'enterpriseNos': enterpriseNos,
                'createdDateTimeOffsetGreaterThan': createdDateTimeOffsetGreaterThan,
                'lastChangedDateTimeOffsetGreaterThan': lastChangedDateTimeOffsetGreaterThan,
                'resourceParameter': resourceParameter,
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
}
