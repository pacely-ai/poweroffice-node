/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { EmployeeHourlyRatesService } from './services/EmployeeHourlyRatesService';
import { EmployeesService } from './services/EmployeesService';
import { EmployeeSettingsService } from './services/EmployeeSettingsService';
import { EmploymentFixedSalariesService } from './services/EmploymentFixedSalariesService';
import { EmploymentFtePercentagesService } from './services/EmploymentFtePercentagesService';
import { EmploymentLayoffsService } from './services/EmploymentLayoffsService';
import { EmploymentLeavesService } from './services/EmploymentLeavesService';
import { EmploymentsService } from './services/EmploymentsService';
import { EmploymentSalariesService } from './services/EmploymentSalariesService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class Employees {
    public readonly employeeHourlyRates: EmployeeHourlyRatesService;
    public readonly employees: EmployeesService;
    public readonly employeeSettings: EmployeeSettingsService;
    public readonly employmentFixedSalaries: EmploymentFixedSalariesService;
    public readonly employmentFtePercentages: EmploymentFtePercentagesService;
    public readonly employmentLayoffs: EmploymentLayoffsService;
    public readonly employmentLeaves: EmploymentLeavesService;
    public readonly employments: EmploymentsService;
    public readonly employmentSalaries: EmploymentSalariesService;
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
        this.employeeHourlyRates = new EmployeeHourlyRatesService(this.request);
        this.employees = new EmployeesService(this.request);
        this.employeeSettings = new EmployeeSettingsService(this.request);
        this.employmentFixedSalaries = new EmploymentFixedSalariesService(this.request);
        this.employmentFtePercentages = new EmploymentFtePercentagesService(this.request);
        this.employmentLayoffs = new EmploymentLayoffsService(this.request);
        this.employmentLeaves = new EmploymentLeavesService(this.request);
        this.employments = new EmploymentsService(this.request);
        this.employmentSalaries = new EmploymentSalariesService(this.request);
    }
}

