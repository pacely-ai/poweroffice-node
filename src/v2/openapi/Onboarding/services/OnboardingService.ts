/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FinalizeOnboardingPostDto } from '../models/FinalizeOnboardingPostDto';
import type { FinalizeOnboardingResponseDto } from '../models/FinalizeOnboardingResponseDto';
import type { InitiateOnboardingPostDto } from '../models/InitiateOnboardingPostDto';
import type { InitiateOnboardingResponseDto } from '../models/InitiateOnboardingResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class OnboardingService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Initiate the first procedural step of onboarding your integration for one or more PowerOffice Go client, using the external onboarding worklfow.
     * Initiate the first step in the process of onboarding the integration on clients. Read our documentation page for detailed workflow descriptions.
     * @returns InitiateOnboardingResponseDto Given when resource returned successfully
     * @throws ApiError
     */
    public postOnboardingInitiate({
        requestBody,
    }: {
        requestBody?: InitiateOnboardingPostDto,
    } = {} as any): CancelablePromise<InitiateOnboardingResponseDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Onboarding/Initiate',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Given when request is badly formatted.`,
                429: `Too Many Requests`,
            },
        });
    }
    /**
     * Finalize the last procedural step of onboarding your integration for one or more PowerOffice Go client, using the external onboarding worklfow.
     * Finalize the last step in the process of onboarding the integration on clients. Read our documentation page for detailed workflow descriptions.
     * @returns FinalizeOnboardingResponseDto OK
     * @throws ApiError
     */
    public postOnboardingFinalize({
        requestBody,
    }: {
        requestBody?: FinalizeOnboardingPostDto,
    } = {} as any): CancelablePromise<FinalizeOnboardingResponseDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Onboarding/Finalize',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                429: `Too Many Requests`,
            },
        });
    }
}
