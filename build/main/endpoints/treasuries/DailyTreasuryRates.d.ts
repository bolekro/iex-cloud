/**
 * [Daily Treasury Rates](https://iexcloud.io/docs/api/#daily-treasury-rates)
 *
 * Provides the daily constant maturity time series rate for 30 year, 20 year,
 * 10 year, 5 year, 2 year, 1 year, 6 month, 3 month, and 1 month treasuries.
 *
 * @param symbol Treasury Symbol.
 */
export declare const dailyTreasuryRates: (symbol: TreasurySymbolType) => Promise<readonly DailyTreasuryRate[]>;
export interface DailyTreasuryRate {
    /** Rate value of the treasury */
    readonly value: number;
    /** Id of the treasury */
    readonly id: string;
    /** Key of the treasury */
    readonly key: string;
    /** Sub key of the treasury */
    readonly subkey: string;
    /** Last updated time of the data point represented as millisecond epoch. */
    readonly updated: number;
}
export declare type TreasurySymbolType = 'DGS30' | 'DGS20' | 'DGS10' | 'DGS5' | 'DGS2' | 'DGS1' | 'DGS6MO' | 'DGS3MO' | 'DGS1MO';
