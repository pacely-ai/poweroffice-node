/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A SalesOrderAttachment DTO.
 */
export type SalesOrderAttachmentDto = {
    /**
     * Created date time offset. Date in UTC time.
     */
    readonly CreatedDateTimeOffset?: string;
    /**
     * Name of the file, including file extension. File name and extension is extracted from the uploaded file.
     */
    FileName?: string | null;
    /**
     * File size in bytes.
     */
    readonly FileSize?: number | null;
    /**
     * The identifier of the sales order attachment.
     */
    readonly Id?: number;
    /**
     * Last changed date time offset. Date in UTC time.
     */
    readonly LastChangedDateTimeOffset?: string;
    /**
     * Id of the sales order the attachment belongs to.
     */
    SalesOrderId?: string | null;
};

