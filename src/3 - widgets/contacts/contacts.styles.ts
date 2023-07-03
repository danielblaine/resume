import styled from 'styled-components';
import { MIN_WIDTH_IS } from '@shared/styles';

export const ContactGrid = styled.div`
  display: flex;
  flex-direction: column;
  grid-template-columns: auto;
  margin: 30px 0;
  align-items: center;
  text-align: center;

  @media ${MIN_WIDTH_IS.sm} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: left;
  }
`;
