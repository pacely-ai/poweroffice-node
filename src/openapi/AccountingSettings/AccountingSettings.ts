/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { CurrenciesService } from './services/CurrenciesService';
import { CurrencyRatesService } from './services/CurrencyRatesService';
import { FinancialSettingsService } from './services/FinancialSettingsService';
import { GeneralLedgerAccountsService } from './services/GeneralLedgerAccountsService';
import { LockDateSettingsService } from './services/LockDateSettingsService';
import { SubLedgerNumberSeriesService } from './services/SubLedgerNumberSeriesService';
import { VatCodesService } from './services/VatCodesService';
import { VatSettingsService } from './services/VatSettingsService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class AccountingSettings {
    public readonly currencies: CurrenciesService;
    public readonly currencyRates: CurrencyRatesService;
    public readonly financialSettings: FinancialSettingsService;
    public readonly generalLedgerAccounts: GeneralLedgerAccountsService;
    public readonly lockDateSettings: LockDateSettingsService;
    public readonly subLedgerNumberSeries: SubLedgerNumberSeriesService;
    public readonly vatCodes: VatCodesService;
    public readonly vatSettings: VatSettingsService;
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
        this.currencies = new CurrenciesService(this.request);
        this.currencyRates = new CurrencyRatesService(this.request);
        this.financialSettings = new FinancialSettingsService(this.request);
        this.generalLedgerAccounts = new GeneralLedgerAccountsService(this.request);
        this.lockDateSettings = new LockDateSettingsService(this.request);
        this.subLedgerNumberSeries = new SubLedgerNumberSeriesService(this.request);
        this.vatCodes = new VatCodesService(this.request);
        this.vatSettings = new VatSettingsService(this.request);
    }
}

