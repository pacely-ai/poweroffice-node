/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specifies how a (payment) reminder (norwegian: purring) should be delivered to a customer.<p>Members:</p><ul><li><i>PdfByEmail</i> - The reminder (PDF) will be delivered by email.
 * Can only be used if the customer have an e-mail address registered (either eMailAddress or paymentReminderEmailAddress).</li><li><i>Print</i> - The reminder (PDF) will be printed and delivered physically.
 * "Sending" the reminder in Go will generate a PDF for download and print.</li></ul>
 */
export enum ReminderDeliveryType {
    PDF_BY_EMAIL = 'PdfByEmail',
    PRINT = 'Print',
}
