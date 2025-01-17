/**
 * [Symbols](https://iexcloud.io/docs/api/#symbols)
 * This call returns an array of symbols that IEX Cloud supports for API calls.
 */
export declare const symbols: () => Promise<readonly TradeSymbol[]>;
export interface TradeSymbol {
    /** refers to the symbol represented in Nasdaq Integrated symbology (INET). */
    readonly symbol: string;
    /** refers to Exchange using IEX Supported Exchanges list */
    readonly exchange: string;
    /** refers to the name of the company or security. */
    readonly name: string;
    /** refers to the date the symbol reference data was generated. */
    readonly date: string;
    /** will be true if the symbol is enabled for trading on IEX. */
    readonly isEnabled: boolean;
    /** refers to the common issue type */
    readonly type: SymbolCommonIssueType;
    /** refers to the country code for the symbol using ISO 3166-1 alpha-2 */
    readonly region: string;
    /** refers to the currency the symbol is traded in using ISO 4217 */
    readonly currency: string;
    /** unique ID applied by IEX to track securities through symbol changes. */
    readonly iexId: string;
}
export declare type SymbolCommonIssueType = 'ad' | 're' | 'ce' | 'si' | 'lp' | 'cs' | 'et' | 'wt' | 'oef' | 'cef' | 'ps' | 'ut' | 'struct';
