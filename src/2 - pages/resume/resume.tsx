import { FC } from 'react';
import { Header } from '@widgets/header';
import { Summary } from '@widgets/summary';
import { Sidebar } from '@widgets/sidebar';
import { WorkHistory } from '@widgets/work-history';
import { Skills } from '@widgets/skills';
import { Column, Line } from '@shared/ui';
import * as S from './resume.styles';

export const Resume: FC = () => {
  return (
    <S.Resume>
      <Column>
        <Sidebar />
      </Column>
      <Column>
        <Header />
        <Column>
          <Line />
          <Summary />
          <Skills />
          <WorkHistory />
        </Column>
      </Column>
    </S.Resume>
  );
};
