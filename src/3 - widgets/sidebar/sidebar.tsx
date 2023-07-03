import { FC } from 'react';
import { Languages } from '@widgets/languages';
import { Education } from '@widgets/education';
import { InformationUnit, InformationUnitEnum } from '@features/information-unit';
import { Avatar, List } from '@shared/ui';
import * as S from './sidebar.styles';

export const Sidebar: FC = () => {
  return (
    <S.Sidebar>
      <Avatar />
      <Education sidebar />
      <Languages sidebar />
      <InformationUnit unit={InformationUnitEnum.DOMAINS} sidebar>
        <List items={['E-Commerce', 'Business Applications', 'Gaming']} />
      </InformationUnit>
    </S.Sidebar>
  );
};
