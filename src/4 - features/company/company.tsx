import { FC } from 'react';
import { List, Circle, Typography, Column } from '@shared/ui';
import * as S from './company.styles';
import { ICompany } from './company.types';

export const Company: FC<ICompany> = ({ position, name, period, responsibilities }) => {
  return (
    <S.Company>
      <Circle />
      <S.Period>
        <Typography variant="h5" $bold>
          {period}
        </Typography>
      </S.Period>
      <Column>
        <Typography variant="h3" $bold>
          {position}
        </Typography>
        <Typography variant="h4">{name}</Typography>
        <List items={responsibilities} />
      </Column>
    </S.Company>
  );
};
