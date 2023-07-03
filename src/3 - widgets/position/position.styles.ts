import styled from 'styled-components';
import { MIN_WIDTH_IS } from '@shared/styles';

export const Position = styled.div`
  text-align: center;
  margin-bottom: 30px;

  @media ${MIN_WIDTH_IS.md} {
    text-align: left;
  }
`;
