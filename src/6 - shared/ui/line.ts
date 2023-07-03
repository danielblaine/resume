import styled from 'styled-components';
import { PALETTE } from '@shared/styles';

export const Line = styled.div`
  height: 100%;
  width: 1px;
  border-radius: 50%;
  background-color: ${PALETTE.grey.main};
  position: absolute;
  left: 20px;
  z-index: -1;
`;
