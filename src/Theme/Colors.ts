const colorPalette = {
  shades: {
    0: "#F8F9FA",
    100: "#E9ECEF",
    200: "#DEE2E6",
    300: "#CED4DA",
    400: "#ADB5BD",
    500: "#6C757D",
    600: "#495057",
    700: "#343A40",
    800: "#212529",
    900: "#1D1F20",
  },
  accent: {
    red: "#df6c4f",
    green: "#3c948b",
    blue: "#1a99aa",
    yellow: "#ecd06f",
  },
} as const;

export type ThemeName = "dark";
export interface ThemeContent {
  name: ThemeName;
  colors: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    secondary?: string;
    secondaryDark?: string;
    text: string;
    textLight?: string;
    textDark?: string;
    bg: string;
    bgLight?: string;
    bgDark?: string;
  };
}
const availableThemes: Record<ThemeName, ThemeContent> = {
  dark: {
    name: "dark",
    colors: {
      primary: "#86c232",
      primaryLight: "#B5DE7D",
      primaryDark: "#61892F",
      text: "#fff",
      bg: "#1f1e1d",
      bgLight: "#a5a5a4",
      bgDark: "#000",
    },
  },
};

export { colorPalette, availableThemes };
