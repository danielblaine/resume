import { FC } from 'react';
import { Typography } from '@shared/ui';
import * as S from './position.styles';

export const Position: FC = () => {
  return (
    <S.Position>
      <Typography variant="h1" $bold>
        Vitaly Olhov
      </Typography>
      <Typography variant="h3" $bold>
        React / Next Developer
      </Typography>
    </S.Position>
  );
};
