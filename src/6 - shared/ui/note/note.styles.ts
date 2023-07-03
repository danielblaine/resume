import styled from 'styled-components';
import { MIN_WIDTH_IS, MOBILE_TEXT_SIZES, PALETTE, TEXT_SIZES } from '@shared/styles';

export const Note = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Link = styled.a`
  font-size: ${MOBILE_TEXT_SIZES.h4};
  color: ${PALETTE.grey.dark};
  text-decoration: none;
  width: min-content;

  &:hover {
    text-decoration: underline;
  }

  @media ${MIN_WIDTH_IS.md} {
    font-size: ${TEXT_SIZES.h4};
  }
`;
