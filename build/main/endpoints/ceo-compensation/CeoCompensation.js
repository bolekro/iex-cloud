"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ceoCompensation = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * [CEO Compensation](https://iexcloud.io/docs/api/#ceo-compensation)
 *
 * Provides CEO compensation for a company by symbol
 *
 * @remark Only available to paid plans.
 *
 * @param symbol Symbol name.
 */
exports.ceoCompensation = (symbol) => {
    return ApiRequest_1.ApiRequest(`stock/${symbol}/ceo-compensation`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2VvQ29tcGVuc2F0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VuZHBvaW50cy9jZW8tY29tcGVuc2F0aW9uL0Nlb0NvbXBlbnNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBbUQ7QUFFbkQ7Ozs7Ozs7O0dBUUc7QUFDVSxRQUFBLGVBQWUsR0FBRyxDQUFDLE1BQWMsRUFBNEIsRUFBRTtJQUMxRSxPQUFPLHVCQUFVLENBQUMsU0FBUyxNQUFNLG1CQUFtQixDQUFDLENBQUM7QUFDeEQsQ0FBQyxDQUFDIn0=