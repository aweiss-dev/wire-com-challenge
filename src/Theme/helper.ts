import { breakpoints } from "./Tokens";

type Breakpoint = keyof typeof breakpoints;
const up = (breakpoint: Breakpoint) => `
  @media (min-width: ${breakpoints[breakpoint]}px)
`;

interface HexToRgbaStringProps {
  hex: string;
  opacity?: number;
}
const hexToRgba = ({ hex, opacity = 1 }: HexToRgbaStringProps) => {
  const bigint = parseInt(hex.replace("#", ""), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export { up, hexToRgba };
