// tslint:disable
import path from 'path';
import 'jasmine';
// import 'jest';
import { Polly } from '@pollyjs/core';
import { setupPolly } from 'setup-polly-jest';
import NodeHttpAdapter from '@pollyjs/adapter-node-http';
import FSPersister from '@pollyjs/persister-fs';
Polly.register(NodeHttpAdapter);
Polly.register(FSPersister);
const config = {
    adapters: ['node-http'],
    persister: 'fs',
    persisterOptions: {
        fs: {
            recordingsDir: path.resolve(__dirname, '../../__recordings__'),
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
const context = setupPolly(config);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdFNldHVwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Rlc3QvdGVzdFNldHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQjtBQUNqQixPQUFPLElBQUksTUFBTSxNQUFNLENBQUM7QUFDeEIsT0FBTyxTQUFTLENBQUM7QUFDakIsaUJBQWlCO0FBRWpCLE9BQU8sRUFBRSxLQUFLLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM5QyxPQUFPLGVBQWUsTUFBTSw0QkFBNEIsQ0FBQztBQUN6RCxPQUFPLFdBQVcsTUFBTSx1QkFBdUIsQ0FBQztBQUVoRCxLQUFLLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ2hDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFNUIsTUFBTSxNQUFNLEdBQWdCO0lBQzFCLFFBQVEsRUFBRSxDQUFDLFdBQVcsQ0FBQztJQUN2QixTQUFTLEVBQUUsSUFBSTtJQUNmLGdCQUFnQixFQUFFO1FBQ2hCLEVBQUUsRUFBRTtZQUNGLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxzQkFBc0IsQ0FBQztTQUMvRDtLQUNGO0lBQ0Qsb0JBQW9CLEVBQUUsSUFBSTtJQUMxQixlQUFlLEVBQUU7UUFDZixJQUFJLENBQUMsSUFBWTtZQUNmLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMxQyxDQUFDO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsS0FBSyxDQUFDLE1BQStCO2dCQUNuQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUU7b0JBQzlDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3BDLENBQUMsQ0FBQyxDQUFDO2dCQUNILE9BQU8sTUFBTSxDQUFDO1lBQ2hCLENBQUM7U0FDRjtLQUNGO0NBRUYsQ0FBQztBQUVGLE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUVuQyxvSkFBb0o7QUFDcEosVUFBVSxDQUFDLEdBQUcsRUFBRTtJQUNkLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFjLENBQUM7SUFDckMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQ3JELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDMUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6RTtRQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BELEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQU8sRUFBRSxFQUFFO1lBQzVDLElBQUksT0FBTyxFQUFFLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRTtnQkFDaEMsRUFBRSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ25DO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgseUJBQXlCO0FBRXpCLFNBQVMsWUFBWSxDQUFDLEdBQVc7SUFDL0IsT0FBTyxHQUFHO1NBQ1AsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQztTQUN6QyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN0RCxDQUFDIn0=