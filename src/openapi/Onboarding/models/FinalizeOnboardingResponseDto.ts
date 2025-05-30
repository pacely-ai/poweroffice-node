/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OnboardedClientInformation } from './OnboardedClientInformation';
/**
 * The finalize onboarding response DTO contains properties necessary for finalizing the onboarding processes in external system.
 */
export type FinalizeOnboardingResponseDto = {
    /**
     * A collection of the onboarded clients information.
     */
    readonly OnboardedClientsInformation?: Array<OnboardedClientInformation> | null;
    /**
     * The email of the user that authenticated and onboarded the integrated application.
     */
    readonly UserEmail?: string | null;
};

