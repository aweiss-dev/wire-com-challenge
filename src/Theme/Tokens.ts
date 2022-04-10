const lineHeights = {
  xxxs: "16px",
  xxs: "18px",
  xs: "20px",
  s: "22px",
  m: "25px",
  l: "27px",
  xl: "29px",
  xxl: "37px",
  xxxl: "49px",
  xxxxl: "69px",
  xxxxxl: "101px",
} as const;

// font-sizes
const fontSizes = {
  xxxs: "8px",
  xxs: "10px",
  xs: "12px",
  s: "14px",
  m: "17px",
  l: "20px",
  xl: "24px",
  xxl: "35px",
  xxxl: "42px",
  xxxxl: "64px",
  xxxxxl: "96px",
} as const;

// margin, padding etc
const spacings = {
  xxxs: "2px",
  xxs: "4px",
  xs: "8px",
  s: "12px",
  m: "16px",
  l: "24px",
  xl: "32px",
  xxl: "48px",
  xxxl: "48px",
  xxxxl: "64px",
  xxxxxl: "96px",
} as const;

// border-radius
const borderRadiuses = {
  s: "4px",
  m: "8px",
  l: "16px",
} as const;

// opacity
const opacities = {
  s: 0.25,
  m: 0.5,
  l: 0.75,
} as const;

// breakpoints
const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 1160,
  xl: 1440,
} as const;

const content = {
  maxWidth: "1200px",
} as const;

const fonts = {
  OmegaCentauri: "OmegaCentauri, sans-serif",
  Montserrat: "Montserrat, sans-serif",
  MPlus1P: "'M PLUS 1p', sans-serif",
} as const;

const headerHeightInPixels = 90;
const cssVariables = {
  headerHeight: `${headerHeightInPixels}px`,
  contentHeight: `calc(100vh - ${headerHeightInPixels}px)`,
} as const;

export {
  lineHeights,
  fontSizes,
  opacities,
  breakpoints,
  borderRadiuses,
  spacings,
  content,
  fonts,
  cssVariables,
};
