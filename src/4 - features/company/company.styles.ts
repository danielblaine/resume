import styled from 'styled-components';
import { Column } from '@shared/ui';

export const Company = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 20px;

  ${Column} {
    padding-left: 0;
  }
`;

export const Period = styled.div`
  width: fit-content;
  max-width: 80px;
  margin-top: 4px;
`;
