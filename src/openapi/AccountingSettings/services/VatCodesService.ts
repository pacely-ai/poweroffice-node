/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResourceParameters } from '../models/ResourceParameters';
import type { VatCodeDto } from '../models/VatCodeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class VatCodesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the vat codes on the client. (Auth roles: CommonServices,CommonServices_Full)
     * Gets the SAF-T vat codes and any custom codes set on the client.
     * Custom codes will have a prefix with the letter 'C', and will be based on the SAF-T codes, but used if the client have mixed vat conditions, for instance.
     * Compensation codes has a prefix with the letter 'K'.
     * @returns VatCodeDto Given when resource returned successfully.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getVatCodes({
        includeExpired,
        isActive,
        resourceParameter,
    }: {
        /**
         * Include expired VAT codes. Expired codes has a ValidTo date and can still be used for accounting events in the validFrom - validTo timeframe as long as it is active.
         */
        includeExpired?: boolean,
        /**
         * Returns both active and inactive codes as default. True returns active codes, False returns only inactive codes.
         */
        isActive?: boolean,
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<VatCodeDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/VatCodes',
            query: {
                'includeExpired': includeExpired,
                'isActive': isActive,
                'resourceParameter': resourceParameter,
            },
            errors: {
                400: `Given when request is badly formatted.`,
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
}
