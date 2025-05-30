import { createDefaultPreset } from "ts-jest";

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
export default {
    testEnvironment: "node",
    // collectCoverage: true,
    // coverageDirectory: "coverage",
    // coverageProvider: "v8",
    transform: {
        ...tsJestTransformCfg,
    },
};