/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeliveryTermDto } from '../models/DeliveryTermDto';
import type { DeliveryTermPostDto } from '../models/DeliveryTermPostDto';
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { ResourceParameters } from '../models/ResourceParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DeliveryTermsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the specific delivery term by id. (Auth roles: CommonServices,CommonServices_Full)
     * @returns DeliveryTermDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getDeliveryTermById({
        id,
    }: {
        /**
         * The id of the delivery term.
         */
        id: number,
    } = {} as any): CancelablePromise<DeliveryTermDto | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/DeliveryTerms/{id}',
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
     * Make changes to a delivery term in the client sales settings. (Auth roles: CommonServices_Full)
     * @returns DeliveryTermDto Given when resource was successfully updated
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public patchDeliveryTerms({
        id,
        requestBody,
    }: {
        /**
         * The id of the delivery term.
         */
        id: number,
        /**
         * JSON Patch structure for updating a Delivery Term.
         * See DeliveryTermPatchDto schema for all available properties. For more information on JSON patch and the various operations allowed, check out: https://datatracker.ietf.org/doc/html/rfc6902
         */
        requestBody?: JsonPatchDocument,
    } = {} as any): CancelablePromise<DeliveryTermDto | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/DeliveryTerms/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Given when request was badly formatted`,
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                404: `Given when the resource was not found`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
    /**
     * Delete a delivery term from the client sales settings. (Auth roles: CommonServices_Full)
     * @returns any Given when resource was successfully deleted
     * @throws ApiError
     */
    public deleteDeliveryTerms({
        id,
    }: {
        /**
         * The id of the delivery term.
         */
        id: number,
    } = {} as any): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/DeliveryTerms/{id}',
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
     * List the delivery terms from the client sales settings. (Auth roles: CommonServices,CommonServices_Full)
     * The default set of delivery terms provided in Go are incoterms, but any custom string can be created and used on sales orders created in Go.
     * @returns DeliveryTermDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getDeliveryTerms({
        resourceParameter,
    }: {
        resourceParameter?: ResourceParameters,
    } = {} as any): CancelablePromise<Array<DeliveryTermDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/DeliveryTerms',
            query: {
                'resourceParameter': resourceParameter,
            },
            errors: {
                400: `Given when request was badly formatted`,
                401: `Given when request is unauthorized (Access Token is missing or invalid)`,
                403: `Given when request is forbidden (Integration does not have required permission to use endpoint)`,
                429: `Given when request is throttled (too many requests)`,
            },
        });
    }
    /**
     * Create a new delivery term in the client sales settings. (Auth roles: CommonServices_Full)
     * The default set of delivery terms provided in Go are incoterms, but any custom string can be created and used on sales orders created in Go.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns DeliveryTermDto Given when resource was successfully created
     * @throws ApiError
     */
    public postDeliveryTerms({
        requestBody,
    }: {
        /**
         * Properties to create. Name Required.
         */
        requestBody?: DeliveryTermPostDto,
    } = {} as any): CancelablePromise<any | DeliveryTermDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/DeliveryTerms',
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
