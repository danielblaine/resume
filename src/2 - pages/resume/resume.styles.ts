import styled from 'styled-components';
import { Column } from '@shared/ui';

export const Resume = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: auto;
  display: flex;
  padding: 30px 0;
  gap: 20px;

  ${Column}:first-child {
    min-width: 260px;
    max-width: 260px;
    position: sticky;
    top: 30px;
    align-self: flex-start;
  }
`;
