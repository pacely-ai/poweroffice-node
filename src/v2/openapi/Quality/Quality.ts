/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { AssignmentsService } from './services/AssignmentsService';
import { AuditingCompanyService } from './services/AuditingCompanyService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class Quality {
    public readonly assignments: AssignmentsService;
    public readonly auditingCompany: AuditingCompanyService;
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
        this.assignments = new AssignmentsService(this.request);
        this.auditingCompany = new AuditingCompanyService(this.request);
    }
}

