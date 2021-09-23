/**
 * [End of Day Options](https://iexcloud.io/docs/api/#end-of-day-options)
 * This call returns an array of OptionResponse for the given symbol.
 */
export declare const endOfDayOptions: (optionsParams: OptionsParams) => Promise<readonly OptionResponse[]>;
export interface OptionsParams {
    readonly symbol: String;
    readonly expiration?: String;
    readonly optionSide?: OptionSide;
}
export interface OptionResponse {
    readonly symbol?: String;
    readonly id?: String;
    readonly expirationDate: String;
    readonly contractSize?: Number;
    readonly strikePrice?: Number;
    readonly closingPrice?: Number;
    readonly side?: OptionSide;
    readonly type?: String;
    readonly volume?: Number;
    readonly openInterest?: Number;
    readonly bid?: Number;
    readonly ask?: Number;
    readonly lastUpdated?: String;
    readonly isAdjusted?: Boolean;
}
export declare enum OptionSide {
    call = "call",
    put = "put"
}
