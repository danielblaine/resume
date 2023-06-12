import styled from 'styled-components';
import { Column, Typography } from '@shared/ui';

export const InformationUnit = styled.div<{ sidebar: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  ${Column} {
    padding-left: ${({ sidebar }) => !sidebar && '50px'};
  }
`;

export const InformationUnitHeader = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;

export const IconWrap = styled.div`
  background-color: #373d48;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 28px;
    height: 28px;
  }

  ~ ${Typography} {
    line-height: 45px;
  }
`;
