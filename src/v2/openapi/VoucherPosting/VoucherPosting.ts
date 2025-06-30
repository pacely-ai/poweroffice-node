/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { BankVoucherPostingService } from './services/BankVoucherPostingService';
import { CashVoucherPostingService } from './services/CashVoucherPostingService';
import { ManualVoucherPostingService } from './services/ManualVoucherPostingService';
import { OutgoingInvoicePostingService } from './services/OutgoingInvoicePostingService';
import { ReverseVoucherPostingService } from './services/ReverseVoucherPostingService';
import { YearEndVoucherPostingService } from './services/YearEndVoucherPostingService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class VoucherPosting {
    public readonly bankVoucherPosting: BankVoucherPostingService;
    public readonly cashVoucherPosting: CashVoucherPostingService;
    public readonly manualVoucherPosting: ManualVoucherPostingService;
    public readonly outgoingInvoicePosting: OutgoingInvoicePostingService;
    public readonly reverseVoucherPosting: ReverseVoucherPostingService;
    public readonly yearEndVoucherPosting: YearEndVoucherPostingService;
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
        this.bankVoucherPosting = new BankVoucherPostingService(this.request);
        this.cashVoucherPosting = new CashVoucherPostingService(this.request);
        this.manualVoucherPosting = new ManualVoucherPostingService(this.request);
        this.outgoingInvoicePosting = new OutgoingInvoicePostingService(this.request);
        this.reverseVoucherPosting = new ReverseVoucherPostingService(this.request);
        this.yearEndVoucherPosting = new YearEndVoucherPostingService(this.request);
    }
}

