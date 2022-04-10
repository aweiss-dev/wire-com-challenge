import { DefaultTheme } from "styled-components";

import { availableThemes, colorPalette, ThemeContent } from "./Colors";
import {
  borderRadiuses,
  breakpoints,
  content,
  fonts,
  fontSizes,
  lineHeights,
  opacities,
  spacings,
  cssVariables,
} from "./Tokens";

declare module "styled-components" {
  export interface DefaultTheme {
    space: typeof spacings;
    fontSize: typeof fontSizes;
    lineHeight: typeof lineHeights;
    breakpoint: typeof breakpoints;
    colorPalette: typeof colorPalette;
    colorTheme: ThemeContent;
    borderRadius: typeof borderRadiuses;
    opacity: typeof opacities;
    content: typeof content;
    font: typeof fonts;
    cssVariables: typeof cssVariables;
  }
}

const defaultTheme: DefaultTheme = {
  space: spacings,
  fontSize: fontSizes,
  lineHeight: lineHeights,
  breakpoint: breakpoints,
  colorPalette: colorPalette,
  colorTheme: availableThemes.dark,
  borderRadius: borderRadiuses,
  opacity: opacities,
  content: content,
  font: fonts,
  cssVariables,
};

export { defaultTheme };
