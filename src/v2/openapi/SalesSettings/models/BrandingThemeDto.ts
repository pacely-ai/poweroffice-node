/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The branding themes on the client. Branding themes hold a set of templates for various documents, such as invoices, reminders, quotes etc.
 */
export type BrandingThemeDto = {
    /**
     * The code of the branding theme.
     */
    readonly Code?: string | null;
    /**
     * The timestamp of the created date of the branding theme. UTC time.
     */
    readonly CreatedDateTimeOffset?: string;
    /**
     * The identifier of the branding theme. This identifier is unique and assigned by PowerOffice Go when a new entity is saved.
     */
    readonly Id?: number;
    /**
     * A value indicating if this branding theme is the standard branding theme set on the client.
     * Customers, projects and sales orders will default inherit the standard branding theme if not overridden.
     */
    readonly IsDefault?: boolean | null;
    /**
     * The language code of the branding theme.
     */
    readonly LanguageCode?: string | null;
    /**
     * The timestamp of the last changed date of the branding theme. UTC time.
     */
    readonly LastChangedDateTimeOffset?: string;
    /**
     * The name of the branding theme.
     */
    readonly Name?: string | null;
};

