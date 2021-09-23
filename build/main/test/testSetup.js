"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable
const path_1 = __importDefault(require("path"));
require("jasmine");
// import 'jest';
const core_1 = require("@pollyjs/core");
const setup_polly_jest_1 = require("setup-polly-jest");
const adapter_node_http_1 = __importDefault(require("@pollyjs/adapter-node-http"));
const persister_fs_1 = __importDefault(require("@pollyjs/persister-fs"));
core_1.Polly.register(adapter_node_http_1.default);
core_1.Polly.register(persister_fs_1.default);
const config = {
    adapters: ['node-http'],
    persister: 'fs',
    persisterOptions: {
        fs: {
            recordingsDir: path_1.default.resolve(__dirname, '../../__recordings__'),
        },
    },
    recordFailedRequests: true,
    matchRequestsBy: {
        body(body) {
            return body ? stripSecrets(body) : body;
        },
        url: {
            query(params) {
                Object.entries(params).forEach(([key, value]) => {
                    params[key] = stripSecrets(value);
                });
                return params;
            },
        },
    },
};
const context = setup_polly_jest_1.setupPolly(config);
// Polly doesn't save the "matchRequestsBy" logic, so manually re-apply it. See https://github.com/Netflix/pollyjs/issues/251#issuecomment-531578600
beforeEach(() => {
    const polly = context.polly;
    polly.server.any().on('beforePersist', (_req, entry) => {
        if (entry.request.postData) {
            entry.request.postData.text = stripSecrets(entry.request.postData.text);
        }
        entry.request.url = stripSecrets(entry.request.url);
        entry.request.queryString.forEach((qs) => {
            if (typeof qs.value === 'string') {
                qs.value = stripSecrets(qs.value);
            }
        });
    });
});
// jest.setTimeout(10000)
function stripSecrets(str) {
    return str
        .replace(process.env.IEX_API_TOKEN, '...')
        .replace(process.env.IEX_API_SECRET_TOKEN, '...');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdFNldHVwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Rlc3QvdGVzdFNldHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsaUJBQWlCO0FBQ2pCLGdEQUF3QjtBQUN4QixtQkFBaUI7QUFDakIsaUJBQWlCO0FBRWpCLHdDQUE0RDtBQUM1RCx1REFBOEM7QUFDOUMsbUZBQXlEO0FBQ3pELHlFQUFnRDtBQUVoRCxZQUFLLENBQUMsUUFBUSxDQUFDLDJCQUFlLENBQUMsQ0FBQztBQUNoQyxZQUFLLENBQUMsUUFBUSxDQUFDLHNCQUFXLENBQUMsQ0FBQztBQUU1QixNQUFNLE1BQU0sR0FBZ0I7SUFDMUIsUUFBUSxFQUFFLENBQUMsV0FBVyxDQUFDO0lBQ3ZCLFNBQVMsRUFBRSxJQUFJO0lBQ2YsZ0JBQWdCLEVBQUU7UUFDaEIsRUFBRSxFQUFFO1lBQ0YsYUFBYSxFQUFFLGNBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLHNCQUFzQixDQUFDO1NBQy9EO0tBQ0Y7SUFDRCxvQkFBb0IsRUFBRSxJQUFJO0lBQzFCLGVBQWUsRUFBRTtRQUNmLElBQUksQ0FBQyxJQUFZO1lBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzFDLENBQUM7UUFDRCxHQUFHLEVBQUU7WUFDSCxLQUFLLENBQUMsTUFBK0I7Z0JBQ25DLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRTtvQkFDOUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDcEMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsT0FBTyxNQUFNLENBQUM7WUFDaEIsQ0FBQztTQUNGO0tBQ0Y7Q0FFRixDQUFDO0FBRUYsTUFBTSxPQUFPLEdBQUcsNkJBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUVuQyxvSkFBb0o7QUFDcEosVUFBVSxDQUFDLEdBQUcsRUFBRTtJQUNkLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFjLENBQUM7SUFDckMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQ3JELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDMUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6RTtRQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BELEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQU8sRUFBRSxFQUFFO1lBQzVDLElBQUksT0FBTyxFQUFFLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRTtnQkFDaEMsRUFBRSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ25DO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgseUJBQXlCO0FBRXpCLFNBQVMsWUFBWSxDQUFDLEdBQVc7SUFDL0IsT0FBTyxHQUFHO1NBQ1AsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQztTQUN6QyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN0RCxDQUFDIn0=