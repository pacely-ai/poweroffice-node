import fs from "fs";
import path from 'path';
import { generate } from '@athlera/openapi-typescript-codegen';
import dotenv from 'dotenv';
import { replaceRegionBlock } from '../replace-block.mjs'

dotenv.config();

(async () => {
    await generate({
        httpClient: 'fetch',
        clientName: `PoGoV1`,
        input: `https://blue-mud-080cd9503.6.azurestaticapps.net/openapi/swagger.json`,
        output: `./src/v1/openapi`,
        //exportSchemas: true,
    });
})();

function lcFirst(string) {
    if (typeof string !== 'string') {
        return ''
    }

    if (string.length === 0) {
        return string
    }

    return string[0].toLowerCase() + string.slice(1)
}