import { FC } from 'react';
import { Summary } from '@widgets/summary';
import { Sidebar } from '@widgets/sidebar';
import { WorkHistory } from '@widgets/work-history';
import { Skills } from '@widgets/skills';
import { Position } from '@widgets/position';
import { Contacts } from '@widgets/contacts';
import { Education } from '@widgets/education';
import { Languages } from '@widgets/languages';
import { Avatar, Column, Line } from '@shared/ui';
import { useMediaQuery } from '@shared/hooks';
import { MIN_WIDTH_IS } from '@shared/styles';
import * as S from './resume.styles';

export const Resume: FC = () => {
  const md = useMediaQuery(MIN_WIDTH_IS.md);

  return (
    <S.Resume>
      {md && <Sidebar />}
      <Column>
        <Position />
        {!md && <Avatar />}
        <Contacts />
        <Column>
          <Line />
          <Summary />
          {!md && <Education />}
          {!md && <Languages />}
          <Skills />
          <WorkHistory />
        </Column>
      </Column>
    </S.Resume>
  );
};
