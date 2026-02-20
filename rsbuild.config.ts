import { defineConfig } from "@rsbuild/core";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
import { dependencies } from "./package.json";
import path from "path";

export default defineConfig({
  server: {
    port: 3001,
  },
  dev: {
    // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
    assetPrefix: "http://localhost:3001",
  },
  output: {
    assetPrefix: "/About-me/",
  },

  html: {
    template: path.join(__dirname, "public/index.html"),
  },

  source: {
    entry: {
      index: "./src/index.tsx",
    },
  },

  tools: {
    rspack: {
      plugins: [
        new ModuleFederationPlugin({
          name: "aboutMe",
          filename: "remoteEntry.js",
          exposes: {
            "./App": "./src/bootstrap.tsx",
          },
          shared: {
            react: {
              singleton: true,
              eager: true,
              requiredVersion: dependencies["react"],
            },
            "react-dom": {
              singleton: true,
              eager: true,
              requiredVersion: dependencies["react-dom"],
            },
            "react-router-dom": {
              singleton: true,
              eager: true,
              requiredVersion: dependencies["react-router-dom"],
            },
            "react-router": {
              singleton: true,
              eager: true,
              requiredVersion: dependencies["react-router"],
            },
          },
          dts: true,
        }),
      ],
    },
  },
});
