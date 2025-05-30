# @pacely/poweroffice-node (Unofficial)

A JS client for interacting with the PowerOffice API. Supports versjon 2.0 of the API and is designed to be used in Node.js environments.

> To get an API key, you need to create an application in PowerOffice and obtain the necessary keys (appKey, clientKey, subscriptionKey). You can find more information on how to do this in the [PowerOffice documentation](https://developer.poweroffice.net/gettingstarted/1).

## Features

- Simple and intuitive API for PowerOffice integration
- Supports authentication and common PowerOffice endpoints
- Written in TypeScript

## Installation

```bash
pnpm add @pacely/poweroffice-node
```

## Usage

```typescript
import dotenv from 'dotenv'; // Ensure you have dotenv installed and configured
import PowerOffice from '@pacely/poweroffice-node';

dotenv.config(); // Load environment variables from .env file

const client = new PowerOffice({
    appKey: process.env.POGO_APP_KEY,
    clientKey: process.env.POGO_CLIENT_KEY,
    subscriptionKey: process.env.POGO_SUBSCRIPTION_KEY,
    dev: true // Replace with false for production
});

async function main() {
    await client.authenticate();
    const companies = await client.getCompanies();
    console.log(companies);
}

main();
```

## API

### `new PowerOffice(options)`

- `appKey` (string): Your PowerOffice application key
- `clientKey` (string): Your PowerOffice client key
- `subscriptionKey` (string): Your PowerOffice subscription key
- `dev` (boolean): Set to `true` for development mode, `false` for production

### `authenticate()`

Authenticate with the PowerOffice API.

## Access services

All services are available as methods on the `PowerOffice` instance. You can access each service by their respective names. For example:

```typescript
// Sales Orders 
// https://goapi.poweroffice.net/v2/SalesOrders
const salesOrders = await client.salesOrders();

// Customers
// https://goapi.poweroffice.net/v2/Customers
const customers = await client.customers();

// Etc...
```

Each service has their own methods for interacting with the PowerOffice API. Refer to the source code for detailed method signatures and usage.

```typescript
// Initialize Sales Orders
const salesOrders = await client.salesOrders(); // Replace '12345' with actual sales order ID

// Get a specific sales order
const salesOrder = await salesOrders.salesOrder.getSalesOrderById({
    id: '12345'
});

console.log(salesOrder);
```

Read [PowerOffice API documentation](https://prdm0go0stor0apiv20eurw.z6.web.core.windows.net/?urls.primaryName=Accounting%20Settings) for more details on available endpoints and parameters.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to this project.