import { ApiRequest } from '../../core/ApiRequest';
/**
 * [CEO Compensation](https://iexcloud.io/docs/api/#ceo-compensation)
 *
 * Provides CEO compensation for a company by symbol
 *
 * @remark Only available to paid plans.
 *
 * @param symbol Symbol name.
 */
export const ceoCompensation = (symbol) => {
    return ApiRequest(`stock/${symbol}/ceo-compensation`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2VvQ29tcGVuc2F0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VuZHBvaW50cy9jZW8tY29tcGVuc2F0aW9uL0Nlb0NvbXBlbnNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFbkQ7Ozs7Ozs7O0dBUUc7QUFDSCxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsQ0FBQyxNQUFjLEVBQTRCLEVBQUU7SUFDMUUsT0FBTyxVQUFVLENBQUMsU0FBUyxNQUFNLG1CQUFtQixDQUFDLENBQUM7QUFDeEQsQ0FBQyxDQUFDIn0=