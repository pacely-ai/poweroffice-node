/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PayslipDeliveryType } from './PayslipDeliveryType';
import type { PayslipLanguageType } from './PayslipLanguageType';
import type { RemunerationPeriodType } from './RemunerationPeriodType';
/**
 * The Employee payroll settings DTO contains properties relevant for payroll settings on an employee in Go.
 */
export type EmployeePayrollSettingsDto = {
    /**
     * The holiday pay percentage above 60 years for this employee.
     * If null, the general payroll settings will be used.
     * Note that only 1 decimal is allowed, if more than 1 decimal is provided, the value will be rounded to nearest 1 decimal.
     */
    HolidayPayAbove60Percentage?: number | null;
    /**
     * The holiday pay percentage for the employee.
     * If null, the general payroll settings will be used.
     * Note that only 1 decimal is allowed, if more than 1 decimal is provided, the value will be rounded to nearest 1 decimal.
     */
    HolidayPayPercentage?: number | null;
    /**
     * Property indicating whether holiday pay above 60 years is limited to 6G for the employee.
     * If null, the general payroll settings will be used.
     */
    LimitHolidayPayAbove60To6G?: boolean | null;
    /**
     * The number of holidays for the employee.
     * If null, the general payroll settings will be used.
     */
    NumberOfHolidays?: number | null;
    /**
     * The number of holidays above 60 years for the employee.
     * If null, the general payroll settings will be used.
     */
    NumberOfHolidaysAbove60?: number | null;
    /**
     * Property indicating whether employer contribution should be used or not for holiday pay provisions for this employee.
     * The typical case to set true, is for foreign employees subject of a foreign social security legislation.
     */
    OmitECOnHolidayPayProvision?: boolean | null;
    PayslipDeliveryType?: PayslipDeliveryType;
    /**
     * The e-mail address of the employee that the payslip will be sent to.
     * Relevant only if the payslip type is set to e-mail and app.
     * If this property is null, the general e-mail address of the employee will be used if payslips are delivered by e-mail.
     */
    PayslipEmailAddress?: string | null;
    PayslipLanguageType?: PayslipLanguageType;
    RemunerationPeriodType?: RemunerationPeriodType;
};

