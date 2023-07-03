export type TextType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export const MOBILE_TEXT_SIZES: { [key in TextType]: string } = {
  h1: '24px',
  h2: '20px',
  h3: '16px',
  h4: '14px',
  h5: '12px',
  h6: '10px'
};

export const TEXT_SIZES: { [key in TextType]: string } = {
  h1: '36px',
  h2: '24px',
  h3: '20px',
  h4: '16px',
  h5: '14px',
  h6: '12px'
};
