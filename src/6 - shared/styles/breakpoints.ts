interface Breakpoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export const BREAKPOINTS: Breakpoints = {
  xs: '0px',
  sm: '360px',
  md: '720px',
  lg: '1080px',
  xl: '1440px'
};

export const MIN_WIDTH_IS: Breakpoints = {
  xs: `(min-width: ${BREAKPOINTS.xs})`,
  sm: `(min-width: ${BREAKPOINTS.sm})`,
  md: `(min-width: ${BREAKPOINTS.md})`,
  lg: `(min-width: ${BREAKPOINTS.lg})`,
  xl: `(min-width: ${BREAKPOINTS.xl})`
};
