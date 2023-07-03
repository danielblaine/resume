import styled from 'styled-components';
import { MIN_WIDTH_IS } from '@shared/styles';

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media ${MIN_WIDTH_IS.sm} {
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
  }
`;
