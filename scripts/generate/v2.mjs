import fs from "fs";
import path from 'path';
import { generate } from '@athlera/openapi-typescript-codegen';
import dotenv from 'dotenv';
import { replaceRegionBlock } from '../replace-block.mjs'

dotenv.config();

(async () => {
    const endpoints = [
        { url: `/accountingsettings.json`, name: 'AccountingSettings' },
        { url: `/accounttransactions.json`, name: 'AccountTransactions' },
        { url: `/clientadmin.json`, name: 'ClientAdmin' },
        { url: `/clientbankaccounts.json`, name: 'ClientBankAccounts' },
        { url: `/clientIntegrationInformation.json`, name: 'ClientIntegrationInformation' },
        { url: `/contactbankaccounts.json`, name: 'ContactBankAccounts' },
        { url: `/contactdeliveryaddresses.json`, name: 'ContactDeliveryAddresses' },
        { url: `/contactgroups.json`, name: 'ContactGroups' },
        { url: `/contactpersons.json`, name: 'ContactPersons' },
        { url: `/customdimensions.json`, name: 'CustomDimensions' },
        { url: `/customerledger.json`, name: 'CustomerLedger' },
        { url: `/customers.json`, name: 'Customers' },
        { url: `/departments.json`, name: 'Departments' },
        { url: `/employees.json`, name: 'Employees' },
        { url: `/enterprises.json`, name: 'Enterprises' },
        { url: `/incomingInvoices.json`, name: 'IncomingInvoices' },
        { url: `/journalentryvouchers.json`, name: 'JournalEntryVouchers' },
        { url: `/locations.json`, name: 'Locations' },
        { url: `/onboarding.json`, name: 'Onboarding' },
        { url: `/organizationsettings.json`, name: 'OrganizationSettings' },
        { url: `/outgoingInvoices.json`, name: 'OutgoingInvoices' },
        { url: `/payroll.json`, name: 'Payroll' },
        { url: `/products.json`, name: 'Products' },
        { url: `/projects.json`, name: 'Projects' },
        { url: `/quality.json`, name: 'Quality' },
        { url: `/salarylines.json`, name: 'SalaryLines' },
        { url: `/salesOrders.json`, name: 'SalesOrders' },
        { url: `/salessettings.json`, name: 'SalesSettings' },
        { url: `/supplierledger.json`, name: 'SupplierLedger' },
        { url: `/suppliers.json`, name: 'Suppliers' },
        { url: `/trialbalance.json`, name: 'TrialBalance' },
        { url: `/voucherapproval.json`, name: 'VoucherApproval' },
        { url: `/voucherdocumentation.json`, name: 'VoucherDocumentation' },
        { url: `/voucherposting.json`, name: 'VoucherPosting' },
    ]

    // Generate the OpenAPI client
    console.log('Generating OpenAPI client...');
    const servicesTypeCode = [];
    const servicesInitCode = [];
    const indexImportCode = [];
    for (const endpoint of endpoints) {
        await generate({
            httpClient: 'fetch',
            clientName: `${endpoint.name}`,
            input: `${process.env.POGO_SWAGGER_SPEC}${endpoint.url}`,
            output: `./src/v2/openapi/${endpoint.name}`,
            useOptions: true,
            //exportSchemas: true,
        });
        console.log(`Imported ${process.env.POGO_SWAGGER_SPEC}${endpoint.url}`);

        // Import the generated client in the index file
        indexImportCode.push(`export * as ${endpoint.name} from './${endpoint.name}';`);

        // Add the service type to the servicesTypeCode array
        servicesTypeCode.push(`public readonly ${lcFirst(endpoint.name)}: (config?: PartialRequestConfig) => Service.${endpoint.name}.${endpoint.name};`);

        // Add the service initialization code to the servicesInitCode array
        servicesInitCode.push(`this.${lcFirst(endpoint.name)} = (serviceConfig?: PartialRequestConfig) => new Service.${endpoint.name}.${endpoint.name}(this.getConfig(serviceConfig));`);
    }

    /**
     * Generate the Authentication client
     * This is a special case because the authentication endpoint is not part of the OpenAPI specification.
     */
    console.log('Generating authentication client...');
    await generate({
        //httpClient: 'fetch',
        clientName: 'PowerOffice',
        input: path.join(import.meta.url, '../../auth-endpoint.json'),
        output: './src/v2/openapi/Authentication',
        useOptions: true,
        //exportSchemas: true,
    });
    console.log('Authentication client generated successfully!');

    // Add the export to the index file for the Authentication client
    indexImportCode.push(`export * as Authentication from './Authentication';`);


    // Write the index file for the OpenAPI clients
    console.log('Creating ./src/v2/openapi/index.ts file...');
    const filePath = `./src/v2/openapi/index.ts`;
    fs.writeFileSync(filePath, indexImportCode.join('\n'), 'utf8');
    console.log('Index file written successfully!');

    // Edit the Service class
    const indexFilePath = `./src/v2/index.ts`;
    console.log(`Editing ${indexFilePath}...`);

    await replaceRegionBlock(indexFilePath, 'TYPES', servicesTypeCode);
    await replaceRegionBlock(indexFilePath, 'INIT', servicesInitCode);

    // Replace the services type block

    /*await generate({
        httpClient: 'fetch',
        clientName: 'PowerOffice',
        input: `https://developer.poweroffice.net/developer/users/chris-prek-no/apis/apiv2_demo?export=true&api-version=2022-04-01-preview`,
        output: './src/openapi-client',
        useOptions: true,
        //exportSchemas: true,
    });*/
})();

function lcFirst(string) {
    if (typeof string !== 'string') {
        return ''
    }

    if (string.length === 0) {
        return string
    }

    return string[0].toLowerCase() + string.slice(1)
}