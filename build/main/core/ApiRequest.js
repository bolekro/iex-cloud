"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRequest = exports.configure = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const utils_1 = require("../utils");
let configSet = false;
const iexConf = {
    apiToken: process.env.IEX_API_TOKEN || process.env.REACT_APP_IEX_API_TOKEN,
    secretToken: process.env.IEX_API_SECRET_TOKEN || process.env.REACT_APP_IEX_API_SECRET_TOKEN,
    version: process.env.IEX_API_VERSION || process.env.REACT_APP_IEX_API_VERSION || 'v1',
    apiEnv: process.env.IEX_API_ENV || process.env.REACT_APP_IEX_API_ENV || 'cloud'
};
exports.configure = (config) => {
    iexConf.apiToken = config.apiToken || iexConf.apiToken;
    iexConf.secretToken = config.secretToken || iexConf.secretToken;
    iexConf.version = config.version || iexConf.version;
    iexConf.apiEnv = config.apiEnv || iexConf.apiEnv;
    configSet = true;
};
/** TODO: refactor */
exports.ApiRequest = async (endpoint, options) => {
    const { useSecret, method, data, params } = Object.assign({ data: {}, method: 'GET', useSecret: false }, options);
    const apiToken = iexConf.apiToken;
    if (!configSet) {
        throw new Error('Config not set. Pleasue run configure(config) first');
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
        ? `${url}${url.includes('?') ? '&' : '?'}${utils_1.paramsToQuery(params)}`
        : url;
    try {
        // console.log(urlWithParams);
        const response = method === 'GET'
            ? await node_fetch_1.default(urlWithParams)
            : await node_fetch_1.default(urlWithParams, {
                body: useSecret ? Object.assign(Object.assign({}, data), { token: secretToken }) : data,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBpUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL0FwaVJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNERBQStCO0FBQy9CLG9DQUF5QztBQWtCekMsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDO0FBRXRCLE1BQU0sT0FBTyxHQUFtQjtJQUM5QixRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUI7SUFDMUUsV0FBVyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEI7SUFDM0YsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLElBQUksSUFBSTtJQUNyRixNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsSUFBSSxPQUFPO0NBQ2hGLENBQUE7QUFFWSxRQUFBLFNBQVMsR0FBRyxDQUFDLE1BQXNCLEVBQUUsRUFBRTtJQUNsRCxPQUFPLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUN2RCxPQUFPLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQztJQUNoRSxPQUFPLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUNwRCxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUNqRCxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ25CLENBQUMsQ0FBQTtBQUVELHFCQUFxQjtBQUNSLFFBQUEsVUFBVSxHQUFHLEtBQUssRUFDN0IsUUFBZ0IsRUFDaEIsT0FBZ0MsRUFDbEIsRUFBRTtJQUNoQixNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLG1CQUN2QyxJQUFJLEVBQUUsRUFBRSxFQUNSLE1BQU0sRUFBRSxLQUFLLEVBQ2IsU0FBUyxFQUFFLEtBQUssSUFDYixPQUFPLENBQ1gsQ0FBQztJQUVGLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFFbEMsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQztLQUN4RTtJQUVELE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFDeEMsTUFBTSxPQUFPLEdBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUNqQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBRTlCLE1BQU0sT0FBTyxHQUFHLFdBQVcsTUFBTSxnQkFBZ0IsT0FBTyxHQUFHLENBQUM7SUFDNUQsTUFBTSxHQUFHLEdBQ1AsR0FBRyxPQUFPLEdBQUcsUUFBUSxFQUFFO1FBQ3ZCLENBQUMsTUFBTSxLQUFLLE1BQU0sSUFBSSxTQUFTO1lBQzdCLENBQUMsQ0FBQyxFQUFFO1lBQ0osQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsU0FBUyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFFMUYsTUFBTSxhQUFhLEdBQUcsTUFBTTtRQUMxQixDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcscUJBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsRSxDQUFDLENBQUMsR0FBRyxDQUFDO0lBRVIsSUFBSTtRQUNGLDhCQUE4QjtRQUM5QixNQUFNLFFBQVEsR0FDWixNQUFNLEtBQUssS0FBSztZQUNkLENBQUMsQ0FBQyxNQUFNLG9CQUFLLENBQUMsYUFBYSxDQUFDO1lBQzVCLENBQUMsQ0FBQyxNQUFNLG9CQUFLLENBQUMsYUFBYSxFQUFFO2dCQUMzQixJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUMsaUNBQU0sSUFBSSxLQUFFLEtBQUssRUFBRSxXQUFXLElBQUcsQ0FBQyxDQUFDLElBQUk7Z0JBQ3hELE1BQU07YUFDUCxDQUFDLENBQUM7UUFDUCxNQUFNLElBQUksR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQyxPQUFPLElBQUksQ0FBQztLQUNiO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCwrQkFBK0I7UUFDL0IscUNBQXFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDO0tBQ2I7QUFDSCxDQUFDLENBQUMifQ==