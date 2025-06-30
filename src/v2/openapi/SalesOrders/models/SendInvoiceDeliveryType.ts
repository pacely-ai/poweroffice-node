/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The available delivery types for the send request.
 * Auto is set by default, if a delivery type is not provided in the request.<p>Members:</p><ul><li><i>PdfByEmail</i> - Invoice will be delivered to the e-mail address supplied in the send request.</li><li><i>PdfPrintForDownload</i> - The invoice will be posted and a pdf generated, but take note that no actual delivery takes place to the end customer.
 * The integrating party need to retrieve the pdf using the Blob endpoint, and ensure delivery of the invoice document to the end customer.</li><li><i>Auto</i> - The system will automatically identify whether the end customer can receive invoices by EHF, eFaktura, AvtaleGiro (or in special cases Factoring or External delivery), and send electronically if possible.
 * If not, the invoice will be delivered as pdf by e-mail, to the supplied e-mail address in the send request.</li></ul>
 */
export enum SendInvoiceDeliveryType {
    PDF_BY_EMAIL = 'PdfByEmail',
    PDF_PRINT_FOR_DOWNLOAD = 'PdfPrintForDownload',
    AUTO = 'Auto',
}
