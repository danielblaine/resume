import { FC, PropsWithChildren } from 'react';
import { Column, Typography } from '@shared/ui';
import * as S from './information-unit.styles';
import { INFORMATION_UNIT_ICONS } from './information-unit.constants';
import { InformationUnitProps } from './information-unit.types';

export const InformationUnit: FC<PropsWithChildren<InformationUnitProps>> = ({
  unit,
  sidebar,
  children
}) => {
  return (
    <S.InformationUnit $sidebar={!!sidebar}>
      <S.InformationUnitHeader>
        <S.IconWrap>{INFORMATION_UNIT_ICONS[unit]}</S.IconWrap>
        <Typography variant="h2" $bold>
          {unit}
        </Typography>
      </S.InformationUnitHeader>
      <Column>{children}</Column>
    </S.InformationUnit>
  );
};
