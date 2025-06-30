/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LivestockGender } from './LivestockGender';
/**
 * Additional agriculture product related information that needs to be stored to be able to report on it
 */
export type AgricultureDetails = {
    /**
     * Gets or sets the agricultural industry code (driftsgrein)
     */
    AgriculturalIndustryCode?: number | null;
    /**
     * Whether the posting info comes from a line that is a main product line (not only additions related to a product)
     */
    IsMainProductLine?: boolean;
    /**
     * Product addition or subtraction (Produkt tillegg trekk)
     */
    ProductAdditionSubtractionCode?: number | null;
    /**
     * The ID of the animal (Dyre-id)
     */
    ProductAnimalId?: string | null;
    /**
     * VIN / Chassis number 17-digits according to iso
     */
    ProductChassisId?: string | null;
    /**
     * Product code according to Landbrukets dataflyt, can differ from product code voucher line
     */
    ProductCode?: number | null;
    /**
     * Date of birth of the animal, required when information is related to live cattle
     */
    ProductDateOfBirth?: string | null;
    /**
     * Product detail code
     */
    ProductDetailCode?: number | null;
    /**
     * Whether a product is ecological or not
     */
    ProductEcological?: boolean | null;
    ProductGender?: LivestockGender;
    /**
     * Global unit trade number
     */
    ProductGtinNumber?: string | null;
    /**
     * Flag whether the forestry product is environmentally certified (Miljøsertifisert)
     */
    ProductHasForestCertificationCode?: boolean | null;
    /**
     * Type of machinery
     */
    ProductMachineType?: string | null;
    /**
     * The product quality code (Produktkvalitet)
     */
    ProductQualityCode?: number | null;
    /**
     * The race of the animal, required on sale of live animals
     */
    ProductRacialCode?: string | null;
    /**
     * Registration number
     */
    ProductRegistrationId?: string | null;
};

