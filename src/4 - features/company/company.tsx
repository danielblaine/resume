import { FC } from 'react';
import { List, Circle, Typography } from '@shared/ui';
import * as S from './company.styles';
import { ICompany } from './company.types';

export const Company: FC<ICompany> = ({ position, name, period, responsibilities }) => {
  return (
    <S.Company>
      <Circle />
      <Typography type="h3" bold>
        {position}
      </Typography>
      <Typography type="h4">
        {name} ({period})
      </Typography>
      <List items={responsibilities} />
    </S.Company>
  );
};
