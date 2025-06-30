import dotenv from 'dotenv';
import PowerOffice from "../dist/index";

dotenv.config();

const client = new PowerOffice({
    appKey: process.env.POGO_APP_KEY!,
    clientKey: process.env.POGO_CLIENT_KEY!,
    subscriptionKey: process.env.POGO_SUBSCRIPTION_KEY!,
    dev: true
});

(async () => {
    try {
        await client.authenticate();
        console.log('Authenticated successfully.');

        // const salesOrders = client.salesOrders();

        // salesOrders.salesOrders.getSalesOrderById({
        //     id: '12345', // Replace with a valid sales order ID
        //     showInherited: true
        // }).then(order => {
        //     console.log('Sales Order:', order);
        // }).catch(error => {
        //     console.error('Error fetching sales order:', error);
        // });

        const accountSettings = client.accountingSettings();

        const currencies = await accountSettings.currencies.getCurrencies();
        console.log('Currencies:', currencies.length);
    } catch (error) {
        console.error('Authentication failed:', error);
    }


})();