import * as Service from "./openapi";

export interface PlatformConfig {
    appKey: string;
    clientKey: string;
    subscriptionKey: string;
    accessToken?: string;
    headers?: Record<string, any>;
    dev?: boolean; // Optional, defaults to false
}

type PartialRequestConfig = Partial<Service.AccountingSettings.OpenAPIConfig>

export class PowerOffice {
    private prodBase = 'https://goapi.poweroffice.net/v2';
    private devBase = 'https://goapi.poweroffice.net/demo/v2';
    private prodAuthUrl = 'https://goapi.poweroffice.net/oauth';
    private devAuthUrl = 'https://goapi.poweroffice.net/demo/oauth';
    
    // Configuration for the PowerOffice API
    private config: PlatformConfig = {
        appKey: '',
        clientKey: '',
        subscriptionKey: '',
        accessToken: undefined,
        headers: {},
        dev: false, // Default to false
    };

    //#region TYPES
    public readonly accountingSettings: (config?: PartialRequestConfig) => Service.AccountingSettings.AccountingSettings;
    public readonly accountTransactions: (config?: PartialRequestConfig) => Service.AccountTransactions.AccountTransactions;
    public readonly clientAdmin: (config?: PartialRequestConfig) => Service.ClientAdmin.ClientAdmin;
    public readonly clientBankAccounts: (config?: PartialRequestConfig) => Service.ClientBankAccounts.ClientBankAccounts;
    public readonly clientIntegrationInformation: (config?: PartialRequestConfig) => Service.ClientIntegrationInformation.ClientIntegrationInformation;
    public readonly contactBankAccounts: (config?: PartialRequestConfig) => Service.ContactBankAccounts.ContactBankAccounts;
    public readonly contactDeliveryAddresses: (config?: PartialRequestConfig) => Service.ContactDeliveryAddresses.ContactDeliveryAddresses;
    public readonly contactGroups: (config?: PartialRequestConfig) => Service.ContactGroups.ContactGroups;
    public readonly contactPersons: (config?: PartialRequestConfig) => Service.ContactPersons.ContactPersons;
    public readonly customDimensions: (config?: PartialRequestConfig) => Service.CustomDimensions.CustomDimensions;
    public readonly customerLedger: (config?: PartialRequestConfig) => Service.CustomerLedger.CustomerLedger;
    public readonly customers: (config?: PartialRequestConfig) => Service.Customers.Customers;
    public readonly departments: (config?: PartialRequestConfig) => Service.Departments.Departments;
    public readonly employees: (config?: PartialRequestConfig) => Service.Employees.Employees;
    public readonly enterprises: (config?: PartialRequestConfig) => Service.Enterprises.Enterprises;
    public readonly incomingInvoices: (config?: PartialRequestConfig) => Service.IncomingInvoices.IncomingInvoices;
    public readonly journalEntryVouchers: (config?: PartialRequestConfig) => Service.JournalEntryVouchers.JournalEntryVouchers;
    public readonly locations: (config?: PartialRequestConfig) => Service.Locations.Locations;
    public readonly onboarding: (config?: PartialRequestConfig) => Service.Onboarding.Onboarding;
    public readonly organizationSettings: (config?: PartialRequestConfig) => Service.OrganizationSettings.OrganizationSettings;
    public readonly outgoingInvoices: (config?: PartialRequestConfig) => Service.OutgoingInvoices.OutgoingInvoices;
    public readonly payroll: (config?: PartialRequestConfig) => Service.Payroll.Payroll;
    public readonly products: (config?: PartialRequestConfig) => Service.Products.Products;
    public readonly projects: (config?: PartialRequestConfig) => Service.Projects.Projects;
    public readonly quality: (config?: PartialRequestConfig) => Service.Quality.Quality;
    public readonly salaryLines: (config?: PartialRequestConfig) => Service.SalaryLines.SalaryLines;
    public readonly salesOrders: (config?: PartialRequestConfig) => Service.SalesOrders.SalesOrders;
    public readonly salesSettings: (config?: PartialRequestConfig) => Service.SalesSettings.SalesSettings;
    public readonly supplierLedger: (config?: PartialRequestConfig) => Service.SupplierLedger.SupplierLedger;
    public readonly suppliers: (config?: PartialRequestConfig) => Service.Suppliers.Suppliers;
    public readonly trialBalance: (config?: PartialRequestConfig) => Service.TrialBalance.TrialBalance;
    public readonly voucherApproval: (config?: PartialRequestConfig) => Service.VoucherApproval.VoucherApproval;
    public readonly voucherDocumentation: (config?: PartialRequestConfig) => Service.VoucherDocumentation.VoucherDocumentation;
    public readonly voucherPosting: (config?: PartialRequestConfig) => Service.VoucherPosting.VoucherPosting;
    //#endregion

    /**
     * Initialize the PacelyAPI with the given configuration
     * 
     * @param config PlatformConfig
     */
    constructor(config: PlatformConfig) {
        //#region INIT
        this.accountingSettings = (serviceConfig?: PartialRequestConfig) => new Service.AccountingSettings.AccountingSettings(this.getConfig(serviceConfig));
        this.accountTransactions = (serviceConfig?: PartialRequestConfig) => new Service.AccountTransactions.AccountTransactions(this.getConfig(serviceConfig));
        this.clientAdmin = (serviceConfig?: PartialRequestConfig) => new Service.ClientAdmin.ClientAdmin(this.getConfig(serviceConfig));
        this.clientBankAccounts = (serviceConfig?: PartialRequestConfig) => new Service.ClientBankAccounts.ClientBankAccounts(this.getConfig(serviceConfig));
        this.clientIntegrationInformation = (serviceConfig?: PartialRequestConfig) => new Service.ClientIntegrationInformation.ClientIntegrationInformation(this.getConfig(serviceConfig));
        this.contactBankAccounts = (serviceConfig?: PartialRequestConfig) => new Service.ContactBankAccounts.ContactBankAccounts(this.getConfig(serviceConfig));
        this.contactDeliveryAddresses = (serviceConfig?: PartialRequestConfig) => new Service.ContactDeliveryAddresses.ContactDeliveryAddresses(this.getConfig(serviceConfig));
        this.contactGroups = (serviceConfig?: PartialRequestConfig) => new Service.ContactGroups.ContactGroups(this.getConfig(serviceConfig));
        this.contactPersons = (serviceConfig?: PartialRequestConfig) => new Service.ContactPersons.ContactPersons(this.getConfig(serviceConfig));
        this.customDimensions = (serviceConfig?: PartialRequestConfig) => new Service.CustomDimensions.CustomDimensions(this.getConfig(serviceConfig));
        this.customerLedger = (serviceConfig?: PartialRequestConfig) => new Service.CustomerLedger.CustomerLedger(this.getConfig(serviceConfig));
        this.customers = (serviceConfig?: PartialRequestConfig) => new Service.Customers.Customers(this.getConfig(serviceConfig));
        this.departments = (serviceConfig?: PartialRequestConfig) => new Service.Departments.Departments(this.getConfig(serviceConfig));
        this.employees = (serviceConfig?: PartialRequestConfig) => new Service.Employees.Employees(this.getConfig(serviceConfig));
        this.enterprises = (serviceConfig?: PartialRequestConfig) => new Service.Enterprises.Enterprises(this.getConfig(serviceConfig));
        this.incomingInvoices = (serviceConfig?: PartialRequestConfig) => new Service.IncomingInvoices.IncomingInvoices(this.getConfig(serviceConfig));
        this.journalEntryVouchers = (serviceConfig?: PartialRequestConfig) => new Service.JournalEntryVouchers.JournalEntryVouchers(this.getConfig(serviceConfig));
        this.locations = (serviceConfig?: PartialRequestConfig) => new Service.Locations.Locations(this.getConfig(serviceConfig));
        this.onboarding = (serviceConfig?: PartialRequestConfig) => new Service.Onboarding.Onboarding(this.getConfig(serviceConfig));
        this.organizationSettings = (serviceConfig?: PartialRequestConfig) => new Service.OrganizationSettings.OrganizationSettings(this.getConfig(serviceConfig));
        this.outgoingInvoices = (serviceConfig?: PartialRequestConfig) => new Service.OutgoingInvoices.OutgoingInvoices(this.getConfig(serviceConfig));
        this.payroll = (serviceConfig?: PartialRequestConfig) => new Service.Payroll.Payroll(this.getConfig(serviceConfig));
        this.products = (serviceConfig?: PartialRequestConfig) => new Service.Products.Products(this.getConfig(serviceConfig));
        this.projects = (serviceConfig?: PartialRequestConfig) => new Service.Projects.Projects(this.getConfig(serviceConfig));
        this.quality = (serviceConfig?: PartialRequestConfig) => new Service.Quality.Quality(this.getConfig(serviceConfig));
        this.salaryLines = (serviceConfig?: PartialRequestConfig) => new Service.SalaryLines.SalaryLines(this.getConfig(serviceConfig));
        this.salesOrders = (serviceConfig?: PartialRequestConfig) => new Service.SalesOrders.SalesOrders(this.getConfig(serviceConfig));
        this.salesSettings = (serviceConfig?: PartialRequestConfig) => new Service.SalesSettings.SalesSettings(this.getConfig(serviceConfig));
        this.supplierLedger = (serviceConfig?: PartialRequestConfig) => new Service.SupplierLedger.SupplierLedger(this.getConfig(serviceConfig));
        this.suppliers = (serviceConfig?: PartialRequestConfig) => new Service.Suppliers.Suppliers(this.getConfig(serviceConfig));
        this.trialBalance = (serviceConfig?: PartialRequestConfig) => new Service.TrialBalance.TrialBalance(this.getConfig(serviceConfig));
        this.voucherApproval = (serviceConfig?: PartialRequestConfig) => new Service.VoucherApproval.VoucherApproval(this.getConfig(serviceConfig));
        this.voucherDocumentation = (serviceConfig?: PartialRequestConfig) => new Service.VoucherDocumentation.VoucherDocumentation(this.getConfig(serviceConfig));
        this.voucherPosting = (serviceConfig?: PartialRequestConfig) => new Service.VoucherPosting.VoucherPosting(this.getConfig(serviceConfig));
        //#endregion

        this.config = config;
    }

    /**
     * Authenticate with PowerOffice API and retrieve an access token
     * 
     * @returns Promise<any>
     */
    async authenticate() {
        const headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        headers.append("Accept", "application/json");
        headers.append("Ocp-Apim-Subscription-Key", this.config.subscriptionKey);
        headers.append("Authorization", `Basic ${btoa(`${this.config.appKey}:${this.config.clientKey}`)}`);

        const urlencoded = new URLSearchParams();
        urlencoded.append("grant_type", "client_credentials");

        const requestOptions = {
            method: "POST",
            headers: headers,
            body: urlencoded,
            redirect: "follow"
        };

        const url = this.config.dev ? this.devAuthUrl : this.prodAuthUrl;
        const auth = await fetch(`${url}/token`, requestOptions as any)
            .then((response) => response.json())
            .then((result) => {
                if (!result.access_token) {
                    throw new Error('Authentication failed: No access token received');
                }
                return result;
            })
            .catch((error) => {
                throw new Error(`Authentication failed: ${error.message}`);
            });

        this.config.accessToken = auth.access_token;

        return auth.access_token;
    }

    /**
     * Get the configuration for the API request
     * 
     * @param config Partial<Service.AccountTransactions.OpenAPIConfig>
     * @returns Partial<Service.AccountTransactions.OpenAPIConfig>
     */
    private getConfig(config?: PartialRequestConfig): PartialRequestConfig {
        return {
            BASE: this.config.dev ? this.devBase : this.prodBase,
            TOKEN: this.config.accessToken || this.authenticate,
            HEADERS: {
                'User-Agent': 'poweroffice-node',
                'Ocp-Apim-Subscription-Key': this.config.subscriptionKey,
                ...this.config.headers,
            },
            ...config
        }
    }

    /**
     * Set API key
     * 
     * @param accessToken string
     */
    setAccessKey(accessToken: string) {
        this.config.accessToken = accessToken;
    }

    /**
     * Set headers
     * 
     * @param headers Record<string, any>
     */
    setHeaders(headers: Record<string, any>) {
        this.config.headers = headers;
    }

    /**
     * Add header
     * 
     * @param key string
     * @param value any
     */
    addHeader(key: string, value: any) {
        this.config.headers = {
            ...this.config.headers,
            [key]: value,
        };
    }

    /**
     * Set token resolver
     * 
     * @param tokenResolver Resolver<string>
     */
    // setTokenResolver(tokenResolver: Resolver<string>) {
    //     this.request.config.TOKEN = tokenResolver;
    // }
}

export * from "./openapi";

export default PowerOffice;