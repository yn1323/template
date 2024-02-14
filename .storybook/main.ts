import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: ["../components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@chakra-ui/storybook-addon",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  features: {
    // TODO: https://github.com/chakra-ui/chakra-ui/issues/8156
    emotionAlias: false,
  },
  refs: {
    "@chakra-ui/react": {
      disable: true,
    },
  },
  webpackFinal: async (config) => {
    if (!config.resolve) {
      return config;
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/": path.resolve(__dirname, "../"),
    };
    return config;
  },
  env: (config) => ({
    ...config,
    EXAMPLE_VAR: "An environment variable configured in Storybook",
  }),
};
export default config;
