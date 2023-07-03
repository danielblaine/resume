import styled from 'styled-components';
import { MIN_WIDTH_IS, MOBILE_TEXT_SIZES, PALETTE, TEXT_SIZES, TextType } from '@shared/styles';

interface TextProps {
  variant?: TextType;
  $bold?: boolean;
}

export const Typography = styled.div<TextProps>`
  font-size: ${({ variant }) => MOBILE_TEXT_SIZES[variant || 'h4']};
  font-weight: ${({ $bold }) => $bold && 'bold'};
  color: ${({ variant }) =>
    variant === 'h1' || variant === 'h2' ? PALETTE.primary : PALETTE.grey.dark};
  white-space: pre-line;

  @media ${MIN_WIDTH_IS.md} {
    font-size: ${({ variant }) => TEXT_SIZES[variant || 'h4']};
  }
`;
