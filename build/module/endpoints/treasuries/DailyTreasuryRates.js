import { ApiRequest } from '../../core/ApiRequest';
/**
 * [Daily Treasury Rates](https://iexcloud.io/docs/api/#daily-treasury-rates)
 *
 * Provides the daily constant maturity time series rate for 30 year, 20 year,
 * 10 year, 5 year, 2 year, 1 year, 6 month, 3 month, and 1 month treasuries.
 *
 * @param symbol Treasury Symbol.
 */
export const dailyTreasuryRates = (symbol) => {
    return ApiRequest(`time-series/treasury/${symbol}`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGFpbHlUcmVhc3VyeVJhdGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VuZHBvaW50cy90cmVhc3VyaWVzL0RhaWx5VHJlYXN1cnlSYXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFbkQ7Ozs7Ozs7R0FPRztBQUNILE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLENBQUMsTUFBMEIsRUFBeUMsRUFBRTtJQUN0RyxPQUFPLFVBQVUsQ0FBQyx3QkFBd0IsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUN0RCxDQUFDLENBQUMifQ==