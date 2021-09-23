import fetch from 'node-fetch';
import { paramsToQuery } from '../utils';

export type Version = 'beta' | 'v1' | 'stable' | 'latest' | string;

export interface RequestConfig {
  readonly useSecret: boolean;
  readonly method: string;
  readonly data: any;
  readonly params: any;
}

export interface IexUsageConfig {
  apiToken?: string;
  secretToken?: string;
  version?: string;
  apiEnv?: string;
}

let configSet = false;

const iexConf: IexUsageConfig = {
  apiToken: process.env.IEX_API_TOKEN || process.env.REACT_APP_IEX_API_TOKEN,
  secretToken: process.env.IEX_API_SECRET_TOKEN || process.env.REACT_APP_IEX_API_SECRET_TOKEN,
  version: process.env.IEX_API_VERSION || process.env.REACT_APP_IEX_API_VERSION || 'v1',
  apiEnv: process.env.IEX_API_ENV || process.env.REACT_APP_IEX_API_ENV || 'cloud'
}

export const Configure = (config: IexUsageConfig) => {
  iexConf.apiToken = config.apiToken || iexConf.apiToken;
  iexConf.secretToken = config.secretToken || iexConf.secretToken;
  iexConf.version = config.version || iexConf.version;
  iexConf.apiEnv = config.apiEnv || iexConf.apiEnv;
  configSet = true;
}

/** TODO: refactor */
export const ApiRequest = async (
  endpoint: string,
  options?: Partial<RequestConfig>,
): Promise<any> => {
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
  const version =  iexConf.version;
  const apiEnv = iexConf.apiEnv;

  const baseUrl = `https://${apiEnv}.iexapis.com/${version}/`;
  const url =
    `${baseUrl}${endpoint}` +
    (method === 'POST' && useSecret
      ? ''
      : `${endpoint.includes('?') ? '&' : '?'}token=${useSecret ? secretToken : apiToken}`);

  const urlWithParams = params
    ? `${url}${url.includes('?') ? '&' : '?'}${paramsToQuery(params)}`
    : url;

  try {
    // console.log(urlWithParams);
    const response =
      method === 'GET'
        ? await fetch(urlWithParams)
        : await fetch(urlWithParams, {
          body: useSecret ? { ...data, token: secretToken } : data,
          method,
        });
    const json = await response.json();
    return json;
  } catch (error) {
    // console.log(error?.message);
    // console.log(response?.statusText);
    return null;
  }
};
