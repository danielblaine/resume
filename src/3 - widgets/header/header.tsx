import { FC } from 'react';
import { Note, Typography } from '@shared/ui';
import * as S from './header.styles';

export const Header: FC = () => {
  return (
    <S.Header>
      <Typography type="h1" bold>
        Vitaly Olhov
      </Typography>
      <Typography type="h3" bold>
        React Developer
      </Typography>
      <S.ContactGrid>
        <Note title="Address" info="Minsk, Belarus" />
        <Note title="Phone" info="+375 29 173 9141" />
        <Note title="Telegram" info="https://t.me/vitalyableat" link="https://t.me/vitalyableat" />
        <Note
          title="GitHub"
          info="https://github.com/vitalyableat"
          link="https://github.com/vitalyableat"
        />
      </S.ContactGrid>
    </S.Header>
  );
};
