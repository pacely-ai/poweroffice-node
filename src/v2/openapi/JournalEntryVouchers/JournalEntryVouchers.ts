/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { BankJournalsService } from './services/BankJournalsService';
import { JournalEntryVouchersService } from './services/JournalEntryVouchersService';
import { ManualJournalsService } from './services/ManualJournalsService';
import { SupplierCreditNotesService } from './services/SupplierCreditNotesService';
import { SupplierInvoicesService } from './services/SupplierInvoicesService';
import { VoucherPagesService } from './services/VoucherPagesService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class JournalEntryVouchers {
    public readonly bankJournals: BankJournalsService;
    public readonly journalEntryVouchers: JournalEntryVouchersService;
    public readonly manualJournals: ManualJournalsService;
    public readonly supplierCreditNotes: SupplierCreditNotesService;
    public readonly supplierInvoices: SupplierInvoicesService;
    public readonly voucherPages: VoucherPagesService;
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
        this.bankJournals = new BankJournalsService(this.request);
        this.journalEntryVouchers = new JournalEntryVouchersService(this.request);
        this.manualJournals = new ManualJournalsService(this.request);
        this.supplierCreditNotes = new SupplierCreditNotesService(this.request);
        this.supplierInvoices = new SupplierInvoicesService(this.request);
        this.voucherPages = new VoucherPagesService(this.request);
    }
}

