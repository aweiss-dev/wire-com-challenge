import { setGlobalConfig } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import "cross-fetch/polyfill";
import "jest-location-mock";
import "regenerator-runtime/runtime.js";

import { parameters } from "./.storybook/preview";
setGlobalConfig({ parameters });
