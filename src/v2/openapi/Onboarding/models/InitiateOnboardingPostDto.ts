/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The initiate onboarding post DTO contains properties necessary for initiating the onboarding processes in GO.
 */
export type InitiateOnboardingPostDto = {
    /**
     * The applicationkey, representing the integrated application that is to be onboarded on client(s).
     * Must be set in the POST call initiating the onboarding.
     */
    ApplicationKey?: string;
    /**
     * The organization number of the PowerOffice Go client that are to onboard the integrated application.
     * If set, only this client will be presented to the user that must authorize the integration.
     * If not set, the user will be presented a list of all clients the user have acccess to onboard, enabling onboarding of multiple clients in one process.
     */
    ClientOrganizationNo?: string | null;
    /**
     * The redirect uri we will route to if the user successfully authorize onboarding on client(s).
     * The uri need to be whitelisted by the api team before use, and this must be done separately for the demo and production environments.
     * The system validate the domain, sub-domain and path used, but any parameters beyond that are ignored (and as such, any "?to=" variants can be used as the integrating party see fit).
     * The uri can be set to localhost in test phases.
     */
    RedirectUri?: string | null;
};

