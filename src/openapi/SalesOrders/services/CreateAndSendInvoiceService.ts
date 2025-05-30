/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InvoiceSentStateDto } from '../models/InvoiceSentStateDto';
import type { SendInvoiceRequestDto } from '../models/SendInvoiceRequestDto';
import type { SendInvoiceRequestPostDto } from '../models/SendInvoiceRequestPostDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CreateAndSendInvoiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a send request for a sales order. (Auth roles: SalesOrders_Full)
     * Transforms the sales order to an invoice or credit note and delivers it to the customer.
     * If the request is successful, a 202Accepted response code will be returned,
     * and the header Location will contain a URL to the status endpoint with the sales order id.
     * The integration must have the invoice sending privilege.
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @returns SendInvoiceRequestDto Given when sales order is queued for delivery.
     * @throws ApiError
     */
    public postSalesOrdersCreateAndSendInvoice({
        id,
        requestBody,
    }: {
        id: string,
        requestBody?: SendInvoiceRequestPostDto,
    } = {} as any): CancelablePromise<any | SendInvoiceRequestDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/SalesOrders/{id}/createAndSendInvoice',
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
    /**
     * Get the sent state of a sales order. (Auth roles: SalesOrders_Full)
     * Can be polled to confirm that the sales order was successfully transformed to an invoice or credit note and delivered.
     * If delivery failed, LastErrorMessage will have a value.
     * Note: Imported vouchers and invoices may not have a sent date.
     * @returns InvoiceSentStateDto Given when resource returned successfully
     * @returns any When request is not processed correctly a ProblemDetail object is returned
     * @throws ApiError
     */
    public getSentState({
        id,
    }: {
        id?: string,
    } = {} as any): CancelablePromise<Array<InvoiceSentStateDto> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/SalesOrders/sentState',
            query: {
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
