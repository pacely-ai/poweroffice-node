/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { ClientBankAccountApproversService } from './services/ClientBankAccountApproversService';
import { ClientBankAccountsService } from './services/ClientBankAccountsService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class ClientBankAccounts {
    public readonly clientBankAccountApprovers: ClientBankAccountApproversService;
    public readonly clientBankAccounts: ClientBankAccountsService;
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
        this.clientBankAccountApprovers = new ClientBankAccountApproversService(this.request);
        this.clientBankAccounts = new ClientBankAccountsService(this.request);
    }
}

