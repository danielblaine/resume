import styled from 'styled-components';

type TextType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const TEXT_SIZES: { [key: TextType]: string } = {
  h1: '36px',
  h2: '24px',
  h3: '20px',
  h4: '16px',
  h5: '14px',
  h6: '12px'
};

interface TextProps {
  type?: TextType;
  bold?: boolean;
}

export const Typography = styled.div<TextProps>`
  font-size: ${({ type }) => TEXT_SIZES[type || 'h4']};
  font-weight: ${({ bold }) => bold && 'bold'};
  color: ${({ type }) => (type === 'h1' || type === 'h2' ? '#373d48' : '#343434')};
  white-space: pre-line;
`;
