/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BillableRateSpecification } from './BillableRateSpecification';
import type { ProjectBillingMethod } from './ProjectBillingMethod';
import type { ProjectStatusType } from './ProjectStatusType';
/**
 * The project post DTO contains only properties relevant to a project-object in Go that can be altered directly via POST-method in API.
 */
export type ProjectPostDto = {
    /**
     * Value indicating whether it's allowed to use all the available Activity when adding TimeTrackingEntry on the project.
     * Default is true.
     * If this is set to false, the activities allowed on the project should be specified through the ProjectActivities method.
     * If the project is a sub-project (parentProjectCode has a value), allow all activities means that this sub-project is allowed to use all the activities specified on the parent project.
     */
    AllowAllActivities?: boolean | null;
    /**
     * Value indicating whether all employees can add time-tracking entries with this project.
     * Default is true.
     * If this is set to false, the team members working on the project should be specified through the ProjectTeamMembers method.
     * If the project is a sub-project (parentProjectCode has a value), allow all employees means that this sub-project is allowed to use all the team members specified on the parent project.
     */
    AllowAllEmployees?: boolean | null;
    /**
     * Value indicating whether the original documents for expense vouchers should bet added as attachments when billing this project.
     * Default is false.
     */
    AttachExpenseVouchersWhenBilling?: boolean | null;
    /**
     * The billable hourly rate for time-transactions registered with billable activities for this project.
     * Must be a positive number, and this rate can only be set and used if the projects billing method is Time or TimeAndExpense, and the billableRateSpecification is set to Project.
     * Also note that a hierarchy exist in Go for time-tracking price settings of billable rates.
     */
    BillableRate?: number | null;
    BillableRateSpecification?: BillableRateSpecification;
    /**
     * The code of the branding theme default used when billing this project.
     * If null, the standard branding theme (on the client) is applied.
     * Note that if BrandingThemeId is set as well in the request, BrandingThemeId takes precedence and BrandingThemeCode is ignored.
     */
    BrandingThemeCode?: string | null;
    /**
     * The id of the branding theme default used when billing this project.
     * If null, the standard branding theme (on the client) is applied.
     */
    BrandingThemeId?: number | null;
    /**
     * The budgeted average billable rate of time-tracking entries for the project, for the standard simplified project budget.
     */
    BudgetedBillableRate?: number | null;
    /**
     * The budgeted cost of goods on this project, for the standard simplified project budget.
     */
    BudgetedCostOfGoods?: number | null;
    /**
     * The budgeted amount of work hours for the project, for the standard simplified project budget.
     */
    BudgetedHours?: number | null;
    /**
     * The budgeted other operating expenses for this project, for the standard simplified project budget.
     */
    BudgetedOtherOperatingExpenses?: number | null;
    /**
     * The budgeted cost of payroll expenses for this project, for the standard simplified project budget.
     */
    BudgetedPayrollExpenses?: number | null;
    /**
     * The budgeted revenue form billable hour, for the standard simplified project budget and the time-tracking section of this.
     * This field is default calculated in the GUI as budgetedHours x budgetedBillableRate, and returned as null if not set directly or overridden.
     */
    BudgetedRevenueHours?: number | null;
    /**
     * The budgeted total revenue for the project, for the standard simplified project budget.
     * If not set directly, this field will inherit the value/calculated value of budgetedRevenueHours, and if so return null.
     */
    BudgetedTotalRevenue?: number | null;
    /**
     * The code of the project.
     * When creating a sub-project in POST operations, the parentProjectCode property must be set as well and equal to the main project code that the sub-project will be a part of.
     * The response from the POST will return the notation code of main project.code of sub-project as the code of the created sub-project.
     */
    Code?: string | null;
    /**
     * The id of the customer contact person for this project.
     * Can only be set if customerNo is set, and the contact person entity must exist and be related to the customer set on the project.
     */
    ContactPersonId?: number | null;
    /**
     * The contract number for this project.
     */
    ContractNo?: string | null;
    /**
     * The id of the customer this project is related to.
     */
    CustomerId?: number | null;
    /**
     * The number of the customer this project is related to.
     * Note that if CustomerId is set as well in the request, CustomerId takes precedence and CustomerNo is ignored.
     */
    CustomerNo?: number | null;
    /**
     * The delivery term of the project.
     * The delivery term set will be the default value when an invoice draft is created in Go with this project (and the projects customer).
     * The default set of delivery terms provided in Go are incoterms, but any custom string can be set.
     * If null, the default delivery term set on the client is used.
     * Note that if DeliveryTermId is set as well in the request, DeliveryTermId takes precedence and DeliveryTerm is ignored.
     */
    DeliveryTerm?: string | null;
    /**
     * The id of the delivery term of the project.
     * The delivery term set will be the default value when an invoice draft is created in Go with this project (and the projects customer).
     * If null, the default delivery term set on the client is used.
     */
    DeliveryTermId?: number | null;
    /**
     * Value indicating if registration of new time tracking entries should be denied for the project.
     * Default is false.
     */
    DenyTimeTracking?: boolean | null;
    /**
     * The code of the department this project is associated with.
     * Note that if DepartmentId is set as well in the request, DepartmentId takes precedence and DepartmentCode is ignored.
     */
    DepartmentCode?: string | null;
    /**
     * The id of the department this project is associated with.
     */
    DepartmentId?: number | null;
    /**
     * The end date of the project.
     * Only date is used, time is ignored.
     */
    EndDate?: string | null;
    /**
     * The description added to the invoice line when markup of expenses is added.
     * Relevant only if expenseMarkupEnabled is true.
     */
    ExpenseMarkupDescription?: string | null;
    /**
     * Value indicating whether markup of expenses is used when billing the project.
     * The default value will depend on the time-tracking settings on the client, as the value will inherit from the general time-tracking settings if not overridden.
     */
    ExpenseMarkupEnabled?: boolean | null;
    /**
     * The overridden markup factor used when billing expenses for this project. This value is usually set between 0 and 100.
     * If using a 50% markup of expenses, this value should be 50. Can only be set if expenseMarkupEnabled is set true.
     * If not set (null) and expenseMarkupEnabled is true, the default markup value in the time-tracking settings in Go will be used.
     * Cannot be set negative.
     */
    ExpenseMarkupFactor?: number | null;
    /**
     * The external number of the project.
     * This field can be used to reference the project number in the external system, if the project codes are not kept in 1:1 sync between Go and the external system.
     * Note that this field is not available in the GUI.
     */
    ExternalNumber?: number | null;
    /**
     * The fixed price set on the project.
     * Relevant only if the billingMethod is fixed price.
     */
    FixedPrice?: number | null;
    /**
     * The description added to the invoice when markup of hourly rate is added.
     * Relevant only if useHourlyMarkup is true.
     */
    HourlyRateMarkupDescription?: string | null;
    /**
     * Value indicating whether hourly rate markup is used on the project.
     * The default value will depend on the time-tracking settings on the client, as the value will inherit from the general time-tracking settings if not overridden.
     */
    HourlyRateMarkupEnabled?: boolean | null;
    /**
     * The overridden markup factor used when billing hours on this project.
     * This value is usually set between 0 and 1.
     * If using a 50% increase to hourly rate by markup this value should be 0.5.
     * Can only be set if useHourlyMarkup is set true.
     * If not set (null) and useHourlyMarkup is true, the default markup value in Go will be used.
     */
    HourlyRateMarkupFactor?: number | null;
    /**
     * Value indicating whether this instance is active.
     * Inactive projects disable the usage of that projects in the GUI.
     */
    IsActive?: boolean | null;
    /**
     * Value indicating whether the project is billable.
     */
    IsBillable?: boolean | null;
    /**
     * Value indicating whether the project is internal.
     * Internal projects are usually not associated with a paying customer, and only internal time-tracking activities can be used
     */
    IsInternal?: boolean | null;
    /**
     * The code of the location dimension this project is associated with.
     * Note that if LocationId is set as well in the request, LocationId takes precedence and LocationCode is ignored.
     */
    LocationCode?: string | null;
    /**
     * The id of the location dimension this project is associated with.
     */
    LocationId?: number | null;
    /**
     * The name of the project.
     */
    Name: string | null;
    /**
     * The code of the parent project.
     * Mandatory for sub projects.
     * If the new project is a sub project, the ParentProjectCode must be set to the Code of the parent project, otherwise it will be treated as a new main project.
     * Note that if ParentProjectId is set as well in the request, ParentProjectId takes precedence and ParentProjectCode is ignored.
     */
    ParentProjectCode?: string | null;
    /**
     * The id of the parent project.
     * Mandatory for sub projects.
     */
    ParentProjectId?: number | null;
    /**
     * The id of the payment term of the project.
     * This is the default number of days after an invoice is sent until it is due.
     * The payment term set will be the default value when an invoice draft is created in Go with this project (if customer is set an the project is billable).
     * If null, the default payment term set on the customer or on the client will be used.
     */
    PaymentTermId?: number | null;
    /**
     * The payment term of the project.
     * This is the default number of days after an invoice is sent until it is due.
     * The payment term set will be the default value when an invoice draft is created in Go with this project (if customer is set an the project is billable).
     * This property will take precedence over any term set on the customer entity.
     * If null, the default payment term set on the customer or on the client will be used.
     * Note that if PaymentTermId is set as well in the request, PaymentTermId takes precedence and PaymentTerms is ignored.
     */
    PaymentTerms?: number | null;
    /**
     * Progress in percentage. If set, value must be between 0 and 100.
     */
    Progress?: number | null;
    ProjectBillingMethod?: ProjectBillingMethod;
    /**
     * The employee id of the manager of the project.
     */
    ProjectManagerEmployeeId?: number | null;
    /**
     * The employee code of the manager of the project.
     * Note that if ProjectManagerEmployeeId is set as well in the request, ProjectManagerEmployeeId takes precedence and ProjectManagerEmployeeNo is ignored.
     */
    ProjectManagerEmployeeNo?: number | null;
    ProjectStatus?: ProjectStatusType;
    /**
     * The purchase order number for this project.
     * If set, this purchase order number will also default appear on invoices when billing this project.
     */
    PurchaseOrderNo?: string | null;
    /**
     * The start date of the project.
     */
    StartDate?: string | null;
};

