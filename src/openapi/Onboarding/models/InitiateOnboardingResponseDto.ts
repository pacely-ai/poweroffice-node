/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The initiate onboarding response DTO contains properties necessary for (continuing) the onboarding processes in external system.
 */
export type InitiateOnboardingResponseDto = {
    /**
     * The temporary Url to be used in the process of user authentication and user authorization of onboarding the integrated application.
     */
    readonly TemporaryUrl?: string | null;
    /**
     * The timestamp of when the temporary Url will expire.
     */
    readonly ValidUntilDateTimeOffset?: string;
};

