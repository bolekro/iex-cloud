import { ApiRequest } from '../../core';
/**
 * [End of Day Options](https://iexcloud.io/docs/api/#end-of-day-options)
 * This call returns an array of OptionResponse for the given symbol.
 */
export const endOfDayOptions = (optionsParams) => {
    const { expiration, optionSide, symbol } = optionsParams;
    if (expiration) {
        return ApiRequest(`stock/${symbol}/options/${expiration}/${optionSide}`);
    }
    return ApiRequest(`stock/${symbol}/options`);
};
export var OptionSide;
(function (OptionSide) {
    OptionSide["call"] = "call";
    OptionSide["put"] = "put";
})(OptionSide || (OptionSide = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5kT2ZEYXlPcHRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VuZHBvaW50cy9vcHRpb25zL0VuZE9mRGF5T3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXhDOzs7R0FHRztBQUNILE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRyxDQUM3QixhQUE0QixFQUNRLEVBQUU7SUFDdEMsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsYUFBYSxDQUFDO0lBRXpELElBQUksVUFBVSxFQUFFO1FBQ2QsT0FBTyxVQUFVLENBQUMsU0FBUyxNQUFNLFlBQVksVUFBVSxJQUFJLFVBQVUsRUFBRSxDQUFDLENBQUM7S0FDMUU7SUFFRCxPQUFPLFVBQVUsQ0FBQyxTQUFTLE1BQU0sVUFBVSxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUFDO0FBeUJGLE1BQU0sQ0FBTixJQUFZLFVBR1g7QUFIRCxXQUFZLFVBQVU7SUFDcEIsMkJBQWEsQ0FBQTtJQUNiLHlCQUFXLENBQUE7QUFDYixDQUFDLEVBSFcsVUFBVSxLQUFWLFVBQVUsUUFHckIifQ==