/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * DTO for creating a CustomDimension.
 */
export type CustomDimensionPostDto = {
    /**
     * The code of the custom dimension. The code must be unique for each ordinal (within dim1, dim2 and dim3 respectively).
     * Go will assign a code automatically, if not provided.
     */
    Code?: string | null;
    /**
     * The external import reference. This field is not available in the GUI, but can be used by the integrating party to reference the external system.
     * The field must be unique within each set of custom dimension (unique for dim1, dim2 or dim3).
     * Any integration with access can set the field (and change it).
     */
    ExternalImportReference?: string | null;
    /**
     * A value indicating whether this instance is active. Inactive custom dimensions disable the usage of that custom dimension in the GUI.
     */
    IsActive?: boolean | null;
    /**
     * The name of the custom dimension
     */
    Name: string | null;
    /**
     * The custom dimension ordinal, providing information on which of the available custom dimension sets this custom dimension belong to (1=Dim1, 2=Dim3, 3=Dim3).
     */
    Ordinal: number;
};

