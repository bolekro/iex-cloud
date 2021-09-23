"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionSide = exports.endOfDayOptions = void 0;
const core_1 = require("../../core");
/**
 * [End of Day Options](https://iexcloud.io/docs/api/#end-of-day-options)
 * This call returns an array of OptionResponse for the given symbol.
 */
exports.endOfDayOptions = (optionsParams) => {
    const { expiration, optionSide, symbol } = optionsParams;
    if (expiration) {
        return core_1.ApiRequest(`stock/${symbol}/options/${expiration}/${optionSide}`);
    }
    return core_1.ApiRequest(`stock/${symbol}/options`);
};
var OptionSide;
(function (OptionSide) {
    OptionSide["call"] = "call";
    OptionSide["put"] = "put";
})(OptionSide = exports.OptionSide || (exports.OptionSide = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5kT2ZEYXlPcHRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VuZHBvaW50cy9vcHRpb25zL0VuZE9mRGF5T3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBd0M7QUFFeEM7OztHQUdHO0FBQ1UsUUFBQSxlQUFlLEdBQUcsQ0FDN0IsYUFBNEIsRUFDUSxFQUFFO0lBQ3RDLE1BQU0sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLGFBQWEsQ0FBQztJQUV6RCxJQUFJLFVBQVUsRUFBRTtRQUNkLE9BQU8saUJBQVUsQ0FBQyxTQUFTLE1BQU0sWUFBWSxVQUFVLElBQUksVUFBVSxFQUFFLENBQUMsQ0FBQztLQUMxRTtJQUVELE9BQU8saUJBQVUsQ0FBQyxTQUFTLE1BQU0sVUFBVSxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUFDO0FBeUJGLElBQVksVUFHWDtBQUhELFdBQVksVUFBVTtJQUNwQiwyQkFBYSxDQUFBO0lBQ2IseUJBQVcsQ0FBQTtBQUNiLENBQUMsRUFIVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUdyQiJ9