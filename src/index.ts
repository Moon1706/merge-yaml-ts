import { readFileSync } from 'fs';
import { load } from 'js-yaml';
import { merge } from 'lodash';

export function mergeFiles(filesArray: Array<string>) {
    let mergedConfig: any;
    filesArray.forEach(function (file) {
        const parsedConfig = load(readFileSync(file, 'utf8'));
        if (!mergedConfig) {
            mergedConfig = parsedConfig;
        } else {
            merge(mergedConfig, parsedConfig);
        }
    });
    return mergedConfig;
}
