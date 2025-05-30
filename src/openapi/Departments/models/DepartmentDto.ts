/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * DTO for Department read operations.
 */
export type DepartmentDto = {
    /**
     * The code of the department.
     */
    Code?: string | null;
    /**
     * The timestamp the department entity was created.
     */
    readonly CreatedDateTimeOffset?: string;
    /**
     * The created from import journal identifier (guid). If the department was created from an import, this property will contain the Id of the Import that created this entity.
     */
    readonly CreatedFromImportJournalId?: string | null;
    /**
     * The identifier of the department.
     */
    readonly Id?: number;
    /**
     * Value indicating whether this instance is active.
     * Inactive departments disable the usage of that departments in the GUI.
     * Defaults to false.
     */
    IsActive?: boolean | null;
    /**
     * The timestamp of the last change of the department.
     */
    readonly LastChangedDateTimeOffset?: string;
    /**
     * The employee id of the manager of the department.
     */
    readonly ManagerEmployeeId?: number | null;
    /**
     * The employee number of the manager of the department.
     */
    readonly ManagerEmployeeNo?: number | null;
    /**
     * The name of the department
     */
    Name?: string | null;
};

