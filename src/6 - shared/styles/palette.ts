interface Color {
  main: string;
  light: string;
  dark: string;
}

interface Palette {
  primary: string;
  grey: Color;
}

export const PALETTE: Palette = {
  primary: '#373d48',
  grey: {
    light: '#e6e6e6',
    main: '#d7d7d7',
    dark: '#343434'
  }
};
