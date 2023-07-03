import { FC } from 'react';
import { InformationUnit, InformationUnitEnum } from '@features/information-unit';
import { List } from '@shared/ui';
import { LanguagesProps } from './languages.types';

export const Languages: FC<LanguagesProps> = ({ sidebar }) => {
  return (
    <InformationUnit unit={InformationUnitEnum.LANGUAGES} sidebar={sidebar}>
      <List items={['English (Upper Intermediate)', 'Russian (Native)']} />
    </InformationUnit>
  );
};
