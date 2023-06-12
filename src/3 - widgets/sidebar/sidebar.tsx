import { FC } from 'react';
import { InformationUnit, InformationUnitEnum } from '@features/information-unit';
import { Avatar, List, Note } from '@shared/ui';

export const Sidebar: FC = () => {
  return (
    <>
      <Avatar />
      <InformationUnit unit={InformationUnitEnum.EDUCATION} sidebar>
        <Note title="BSUIR (2020 – present)" info="Programmer, Business Analyst" />
      </InformationUnit>
      <InformationUnit unit={InformationUnitEnum.DOMAINS} sidebar>
        <List items={['E-Commerce', 'Business Applications', 'Gaming']} />
      </InformationUnit>
      <InformationUnit unit={InformationUnitEnum.LANGUAGES} sidebar>
        <List items={['English (Upper Intermediate)', 'Russian (Native)']} />
      </InformationUnit>
    </>
  );
};
