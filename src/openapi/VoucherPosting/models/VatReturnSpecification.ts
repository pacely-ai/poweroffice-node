/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Vat return specification used for giving extra vat information about the transaction. Will be reported from 2022 in the norwegian vat return.<p>Members:</p><ul><li><i>None</i> - None</li><li><i>Adjustment</i> - Adjustments (Norwegian: Justering)</li><li><i>LossesOnClaims</i> - Losses on claims (Norwegian: Tap på krav)</li><li><i>ReversalOfInputValueAddedTax</i> - Reversal of input value added tax (Norwegian: Tilbakeføring av inngående merverdiavgift)</li><li><i>Withdrawals</i> - Withdrawals (Norwegian: Uttak)</li><li><i>AdjustmentVatCompensationRealProperty</i> - Adjustment of value added tax (VAT) compensation for real estate (Norwegian: Justering av merverdiavgiftskompensasjon for fast eiendom)</li><li><i>PurchasesEligibleForCompensation</i> - Purchases eligible for compensation (Norwegian: Kjøp med kompensasjonsrett). This specification can not be used by the API directly when creating vouchers/account transactions, but will appear on account transactions on outgoing vat on purchases on client's eligible for compensation.</li></ul>
 */
export enum VatReturnSpecification {
    NONE = 'None',
    ADJUSTMENT = 'Adjustment',
    LOSSES_ON_CLAIMS = 'LossesOnClaims',
    REVERSAL_OF_INPUT_VALUE_ADDED_TAX = 'ReversalOfInputValueAddedTax',
    WITHDRAWALS = 'Withdrawals',
    ADJUSTMENT_VAT_COMPENSATION_REAL_PROPERTY = 'AdjustmentVatCompensationRealProperty',
    PURCHASES_ELIGIBLE_FOR_COMPENSATION = 'PurchasesEligibleForCompensation',
}
