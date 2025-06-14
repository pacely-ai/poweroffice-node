/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The type of the account<p>Members:</p><ul><li><i>Asset</i> - Represent the different types of economic resources owned or controlled by business, common examples of
 * Asset accounts are cash, cash in bank, building, inventory, prepaid rent, goodwill, accounts receivable.</li><li><i>Liability</i> - Represent the different types of economic obligations by a business, such as accounts payable, bank loan,
 * bonds payable, accrued interest.</li><li><i>Equity</i> - Represent the residual equity of a business (after deducting from Assets all the liabilities) including Retained Earnings and Appropriations.</li><li><i>Income</i> - (Revenue) Represent the company's gross earnings and common examples include Sales, Service revenue and Interest Income.</li><li><i>Expense</i> - Represent the company's expenditures to enable itself to operate. Common examples are electricity and water,
 * rentals, depreciation, doubtful accounts, interest, insurance.</li></ul>
 */
export enum GeneralLedgerAccountType {
    ASSET = 'Asset',
    LIABILITY = 'Liability',
    EQUITY = 'Equity',
    INCOME = 'Income',
    EXPENSE = 'Expense',
}
