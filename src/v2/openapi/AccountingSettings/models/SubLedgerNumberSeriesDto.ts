/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SubLedgerNumberSeriesType } from './SubLedgerNumberSeriesType';
/**
 * The subledger number series DTO contains all properties relevant to subledger number series.
 */
export type SubLedgerNumberSeriesDto = {
    /**
     * The minimum number the subledger accounts in this series can have
     */
    readonly FromInclusive?: number;
    /**
     * The underlying general ledger account ID of the subledger series.
     */
    readonly GeneralLedgerAccountId?: number;
    /**
     * The underlying general ledger account code of this subledger series.
     * Subledger transactions in Go will be posted using the subledger number, but the overall accounting effect will be on this underlying account.
     * More information of accounts can be retrieved using the GeneralLedgerAccount service.
     */
    readonly GeneralLedgerAccountNo?: number;
    /**
     * The unique identifier of the subledger number series.
     */
    readonly Id?: string;
    /**
     * The value indicating whether this number series is used by accounts that contain client trust funds.
     * Client trust accounts are accounts where realtors or lawyers, for instance, handles their clients' money.
     * Can be true if the client have the FinancialSettings.UseTrustAccountManagement set true.
     */
    readonly IsClientTrust?: boolean;
    /**
     * The value indicating whether this instance is the default number series for that subledger numberSeriesType.
     */
    readonly IsDefault?: boolean;
    /**
     * The name of the subledger number series.
     */
    readonly Name?: string | null;
    SubLedgerNumberSeriesType?: SubLedgerNumberSeriesType;
    /**
     * The maximum number the subledger accounts in this series can have.
     */
    readonly ToInclusive?: number;
};

