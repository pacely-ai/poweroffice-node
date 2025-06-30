/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { CreateAndSendInvoiceService } from './services/CreateAndSendInvoiceService';
import { SalesOrderAttachmentsService } from './services/SalesOrderAttachmentsService';
import { SalesOrderCompleteService } from './services/SalesOrderCompleteService';
import { SalesOrderLinesService } from './services/SalesOrderLinesService';
import { SalesOrdersService } from './services/SalesOrdersService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class SalesOrders {
    public readonly createAndSendInvoice: CreateAndSendInvoiceService;
    public readonly salesOrderAttachments: SalesOrderAttachmentsService;
    public readonly salesOrderComplete: SalesOrderCompleteService;
    public readonly salesOrderLines: SalesOrderLinesService;
    public readonly salesOrders: SalesOrdersService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://goapi.poweroffice.net/v2',
            VERSION: config?.VERSION ?? '2',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.createAndSendInvoice = new CreateAndSendInvoiceService(this.request);
        this.salesOrderAttachments = new SalesOrderAttachmentsService(this.request);
        this.salesOrderComplete = new SalesOrderCompleteService(this.request);
        this.salesOrderLines = new SalesOrderLinesService(this.request);
        this.salesOrders = new SalesOrdersService(this.request);
    }
}

