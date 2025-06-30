/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * DTO for CustomDimensionSettings, used for getting the client settings of the custom dimensions.
 */
export type CustomDimensionSettingsDto = {
    /**
     * A value indicating whether this dimension ordinal is active and in use. Inactive sets disable the usage of that custom dimension set in the GUI.
     */
    readonly IsActive?: boolean | null;
    /**
     * The the name of the custom dimension set of the given ordinal.
     * Provide information that indicate what the dimension set is used for. An example could be a client that has defined Dim1 to be "Machines", where custom dimension values of Dim1 are the machine registration codes.
     */
    readonly Name?: string | null;
    /**
     * The custom dimension set ordinal (1=Dim1, 2=Dim3, 3=Dim3).
     */
    readonly Ordinal?: number;
};

