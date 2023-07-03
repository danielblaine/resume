import { FC } from 'react';
import { EducationProps } from './education.types';
import { InformationUnit, InformationUnitEnum } from '@features/information-unit';
import { Note } from '@shared/ui';

export const Education: FC<EducationProps> = ({ sidebar }) => {
  return (
    <InformationUnit unit={InformationUnitEnum.EDUCATION} sidebar={sidebar}>
      <Note title="BSUIR (2020 – present)" info="Programmer, Business Analyst" />
    </InformationUnit>
  );
};
