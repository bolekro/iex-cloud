import fetch from 'node-fetch';
import { paramsToQuery } from '../utils';
let configSet = false;
const iexConf = {
    apiToken: process.env.IEX_API_TOKEN || process.env.REACT_APP_IEX_API_TOKEN,
    secretToken: process.env.IEX_API_SECRET_TOKEN || process.env.REACT_APP_IEX_API_SECRET_TOKEN,
    version: process.env.IEX_API_VERSION || process.env.REACT_APP_IEX_API_VERSION || 'v1',
    apiEnv: process.env.IEX_API_ENV || process.env.REACT_APP_IEX_API_ENV || 'cloud'
};
export const Configure = (config) => {
    iexConf.apiToken = config.apiToken || iexConf.apiToken;
    iexConf.secretToken = config.secretToken || iexConf.secretToken;
    iexConf.version = config.version || iexConf.version;
    iexConf.apiEnv = config.apiEnv || iexConf.apiEnv;
    configSet = true;
};
/** TODO: refactor */
export const ApiRequest = async (endpoint, options) => {
    const { useSecret, method, data, params } = {
        data: {},
        method: 'GET',
        useSecret: false,
        ...options,
    };
    const apiToken = iexConf.apiToken;
    if (!configSet) {
        throw new Error('Config not set. Pleasue run Configure(config) first');
    }
    const secretToken = iexConf.secretToken;
    const version = iexConf.version;
    const apiEnv = iexConf.apiEnv;
    const baseUrl = `https://${apiEnv}.iexapis.com/${version}/`;
    const url = `${baseUrl}${endpoint}` +
        (method === 'POST' && useSecret
            ? ''
            : `${endpoint.includes('?') ? '&' : '?'}token=${useSecret ? secretToken : apiToken}`);
    const urlWithParams = params
        ? `${url}${url.includes('?') ? '&' : '?'}${paramsToQuery(params)}`
        : url;
    try {
        // console.log(urlWithParams);
        const response = method === 'GET'
            ? await fetch(urlWithParams)
            : await fetch(urlWithParams, {
                body: useSecret ? { ...data, token: secretToken } : data,
                method,
            });
        const json = await response.json();
        return json;
    }
    catch (error) {
        // console.log(error?.message);
        // console.log(response?.statusText);
        return null;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBpUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL0FwaVJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sWUFBWSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFrQnpDLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQztBQUV0QixNQUFNLE9BQU8sR0FBbUI7SUFDOUIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCO0lBQzFFLFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCO0lBQzNGLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixJQUFJLElBQUk7SUFDckYsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLElBQUksT0FBTztDQUNoRixDQUFBO0FBRUQsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHLENBQUMsTUFBc0IsRUFBRSxFQUFFO0lBQ2xELE9BQU8sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQ3ZELE9BQU8sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDO0lBQ2hFLE9BQU8sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQ3BELE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ2pELFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDbkIsQ0FBQyxDQUFBO0FBRUQscUJBQXFCO0FBQ3JCLE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBRyxLQUFLLEVBQzdCLFFBQWdCLEVBQ2hCLE9BQWdDLEVBQ2xCLEVBQUU7SUFDaEIsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHO1FBQzFDLElBQUksRUFBRSxFQUFFO1FBQ1IsTUFBTSxFQUFFLEtBQUs7UUFDYixTQUFTLEVBQUUsS0FBSztRQUNoQixHQUFHLE9BQU87S0FDWCxDQUFDO0lBRUYsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUVsQyxJQUFJLENBQUMsU0FBUyxFQUFFO1FBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO0tBQ3hFO0lBRUQsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztJQUN4QyxNQUFNLE9BQU8sR0FBSSxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQ2pDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFFOUIsTUFBTSxPQUFPLEdBQUcsV0FBVyxNQUFNLGdCQUFnQixPQUFPLEdBQUcsQ0FBQztJQUM1RCxNQUFNLEdBQUcsR0FDUCxHQUFHLE9BQU8sR0FBRyxRQUFRLEVBQUU7UUFDdkIsQ0FBQyxNQUFNLEtBQUssTUFBTSxJQUFJLFNBQVM7WUFDN0IsQ0FBQyxDQUFDLEVBQUU7WUFDSixDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxTQUFTLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUUxRixNQUFNLGFBQWEsR0FBRyxNQUFNO1FBQzFCLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEUsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUVSLElBQUk7UUFDRiw4QkFBOEI7UUFDOUIsTUFBTSxRQUFRLEdBQ1osTUFBTSxLQUFLLEtBQUs7WUFDZCxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsYUFBYSxDQUFDO1lBQzVCLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxhQUFhLEVBQUU7Z0JBQzNCLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJO2dCQUN4RCxNQUFNO2FBQ1AsQ0FBQyxDQUFDO1FBQ1AsTUFBTSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkMsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsK0JBQStCO1FBQy9CLHFDQUFxQztRQUNyQyxPQUFPLElBQUksQ0FBQztLQUNiO0FBQ0gsQ0FBQyxDQUFDIn0=