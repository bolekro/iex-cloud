export declare type Version = 'beta' | 'v1' | 'stable' | 'latest' | string;
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
export declare const Configure: (config: IexUsageConfig) => void;
/** TODO: refactor */
export declare const ApiRequest: (endpoint: string, options?: Partial<RequestConfig>) => Promise<any>;
