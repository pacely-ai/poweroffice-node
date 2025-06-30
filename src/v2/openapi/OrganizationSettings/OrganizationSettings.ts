/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { ClientContactsService } from './services/ClientContactsService';
import { OrganizationSettingsService } from './services/OrganizationSettingsService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class OrganizationSettings {
    public readonly clientContacts: ClientContactsService;
    public readonly organizationSettings: OrganizationSettingsService;
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
        this.clientContacts = new ClientContactsService(this.request);
        this.organizationSettings = new OrganizationSettingsService(this.request);
    }
}

