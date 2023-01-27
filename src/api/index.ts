import {ASSET_URL} from "./config";

export * from './config';
export * from './auth';

export function getAsset(hash: string) {
    return `${ASSET_URL}/${hash}`;
}
