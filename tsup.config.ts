// tsup.config.ts

import { defineConfig } from "tsup";

export default defineConfig({
    // The file we created above that will be the entrypoint to the library.
    entry: ["src/index.ts"],
    // Enable TypeScript type definitions to be generated in the output.
    // This provides type-definitions to consumers.
    dts: true,
    //shims: true,
    // Clean the `dist` directory before building.
    // This is useful to ensure the output is only the latest.
    clean: true,
    minify: true,
    // Sourcemaps for easier debugging.
    sourcemap: true,
    outDir: "dist",
    format: ["cjs", "esm"],
});