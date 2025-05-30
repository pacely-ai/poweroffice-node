/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuditingCompanyDto } from '../models/AuditingCompanyDto';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AuditingCompanyService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a list of available auditing companies (Auth roles: QualityAssignmentGeneral,QualityAssignmentGeneral_Full)
     * @returns AuditingCompanyDto OK
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getAuditingCompany({
        resourceParameter,
    }: {
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<AuditingCompanyDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/AuditingCompany',
            query: {
                'resourceParameter': resourceParameter,
            },
            errors: {
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
}
