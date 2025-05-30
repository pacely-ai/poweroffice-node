/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * DTO for updating department.
 */
export type DepartmentPatchDto = {
    /**
     * The code of the department.
     */
    Code?: string | null;
    /**
     * Value indicating whether this instance is active.
     * Inactive departments disable the usage of that departments in the GUI.
     * Defaults to false.
     */
    IsActive?: boolean | null;
    /**
     * The employee id of the manager of the department.
     */
    ManagerEmployeeId?: number | null;
    /**
     * The name of the department
     */
    Name?: string | null;
};

