/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The type of VAT returns the client should deliver for it's principal activity.<p>Members:</p><ul><li><i>GeneralIndustry</i> - General Industry (Norwegian: Alminnelig næring)</li><li><i>PrimaryIndustry</i> - Primary Industry (Norwegian: Primærnmæring)</li><li><i>VatCompensation</i> - Vat Compensation (Norwegian: Merverdiavgiftskompensasjon)ø</li><li><i>ReverseVatLiability</i> - Reverse VAT Liability (Norwegian: Omvendt avgiftsplikt)</li><li><i>NoReporting</i> - No reporting (Norwegian: Ingen rapportering)</li></ul>
 */
export enum VatReturnType {
    GENERAL_INDUSTRY = 'GeneralIndustry',
    PRIMARY_INDUSTRY = 'PrimaryIndustry',
    VAT_COMPENSATION = 'VatCompensation',
    REVERSE_VAT_LIABILITY = 'ReverseVatLiability',
    NO_REPORTING = 'NoReporting',
}
