/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { PaymentTermDto } from '../models/PaymentTermDto';
import type { PaymentTermPostDto } from '../models/PaymentTermPostDto';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PaymentTermsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the specific payment term by id. (Auth roles: CommonServices,CommonServices_Full)
     * @returns PaymentTermDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getPaymentTermById({
        id,
    }: {
        /**
         * The id of the payment term.
         */
        id: number,
    } = {} as any): CancelablePromise<PaymentTermDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/PaymentTerms/{id}',
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
    /**
     * Make changes to a payment term in the client sales settings. (Auth roles: CommonServices_Full)
     * Change existing payment term with a given id.
     * @returns PaymentTermDto OK
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchPaymentTerms({
        id,
        requestBody,
    }: {
        /**
         * The id of the payment term.
         */
        id: number,
        /**
         * JSON Patch structure for updating a Payment Term. See PaymentTermPatchDto schema for all available properties.
         * For more information on JSON patch and the various operations allowed, check out: https://datatracker.ietf.org/doc/html/rfc6902
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<PaymentTermDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/PaymentTerms/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                404: `Not Found`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
    /**
     * Delete a payment term from the client sales settings. (Auth roles: CommonServices_Full)
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public deletePaymentTerms({
        id,
    }: {
        /**
         * The ID of the payment term.
         */
        id: number,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/PaymentTerms/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                404: `Given when the resource was not found`,
                409: `Given when resource is in use and cannot be deleted`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
    /**
     * List the payment terms from the client sales settings. (Auth roles: CommonServices,CommonServices_Full)
     * List the payment terms set on the client.
     * Go provides a default set of payment terms on new clients, but any custom payment term can be created and used on customers and sales orders created in Go.
     * @returns PaymentTermDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getPaymentTerms({
        resourceParameter,
    }: {
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<PaymentTermDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/PaymentTerms',
            query: {
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
     * Create a new payment term in the client sales settings. (Auth roles: CommonServices_Full)
     * Go provides a default set of payment terms on new clients, but any custom payment term can be created and used on customers and sales orders created in Go.
     * IsActive defaults to true, if not provided.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns PaymentTermDto Given when resource was created successfully
     * @throws ApiError
     */
    public postPaymentTerms({
        requestBody,
    }: {
        /**
         * A PaymentTermPostDto.
         */
        requestBody?: PaymentTermPostDto,
    } = {} as any): CancelablePromise<any | PaymentTermDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/PaymentTerms',
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Given when request was badly formatted`,
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                404: `Given when resource was not found`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
}
