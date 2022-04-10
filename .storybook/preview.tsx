import { Story, StoryContext } from "@storybook/react";
import { ThemeProvider } from "../src/components/ThemeProvider";
import { initialize, mswDecorator } from "msw-storybook-addon";
import { MockedProvider } from "@apollo/client/testing";
// Initialize MSW
initialize({});

const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ["Intro", "Pages", "Components", "*", "localDevelopment"],
    },
  },
  layout: "fullscreen",
};

const withThemeProvider = (Story: Story, context: StoryContext) => (
  <ThemeProvider>
    <Story {...context} />
  </ThemeProvider>
);
const decorators = [mswDecorator, withThemeProvider];

export { parameters, decorators };
