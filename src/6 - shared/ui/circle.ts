import styled from 'styled-components';
import { PALETTE } from '@shared/styles';

export const Circle = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: ${PALETTE.primary};
  position: absolute;
  left: -35px;
  top: 9px;
`;
