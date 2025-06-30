/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResourceParameters } from '../models/ResourceParameters';
import type { SubLedgerNumberSeriesDto } from '../models/SubLedgerNumberSeriesDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SubLedgerNumberSeriesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the sub-ledger number series set on the client (Auth roles: CommonServices,CommonServices_Full)
     * Gets the sub-ledger number series set on the client. Sub-ledgers are sub-accounts of a general ledger account, used
     * for entries related to either customers, suppliers or employees.
     * @returns SubLedgerNumberSeriesDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getSubLedgerNumberSeries({
        generalLedgerAccountNos,
        isDefault,
        subLedgerNumberSeriesType,
        resourceParameter,
    }: {
        /**
         * Gets the underlying general ledger account code of this subledger series. Subledger transactions in Go will be posted using the subledger number, but the overall accounting effect will be on this underlying account. More information of accounts can be retrieved using the GeneralLedgerAccount service.
         */
        generalLedgerAccountNos?: string,
        /**
         * Filter series based on the isDefault property. Blank means no filter.
         */
        isDefault?: boolean,
        /**
         * Filter by SubledgerNumberSeriesType
         *
         * Note: The SubLedgerNumberSeriesType filter is case sensitive.
         */
        subLedgerNumberSeriesType?: string,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<SubLedgerNumberSeriesDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/SubLedgerNumberSeries',
            query: {
                'generalLedgerAccountNos': generalLedgerAccountNos,
                'isDefault': isDefault,
                'subLedgerNumberSeriesType': subLedgerNumberSeriesType,
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
     * Get a SubLedgerNumberSeries by ID. (Auth roles: CommonServices,CommonServices_Full)
     * @returns any Given when resource returned successfully
     * @throws ApiError
     */
    public getSubLedgerNumberSeries1({
        id,
    }: {
        id: string,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/SubLedgerNumberSeries/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                404: `Given when resource was not found`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
}
