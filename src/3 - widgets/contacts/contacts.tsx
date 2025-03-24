import { FC } from 'react';
import { Note } from '@shared/ui';
import * as S from './contacts.styles';

export const Contacts: FC = () => {
  return (
    <S.ContactGrid>
      <Note title="Address" info="Minsk, Belarus" />
      <Note title="Phone" info="+375 29 173 9141" />
      <Note title="Telegram" info="t.me/vitalyableat" link="https://t.me/vitalyableat" />
      <Note title="GitHub" info="github.com/danielblane" link="https://github.com/danielblane" />
    </S.ContactGrid>
  );
};
