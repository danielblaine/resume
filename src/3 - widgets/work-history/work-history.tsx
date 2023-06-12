import { FC } from 'react';
import { InformationUnit, InformationUnitEnum } from '@features/information-unit';
import { Company } from '@features/company';
import { WORK_HISTORY } from './work-history.constants';

export const WorkHistory: FC = () => {
  return (
    <InformationUnit unit={InformationUnitEnum.EXPERIENCE}>
      {WORK_HISTORY.map((company) => (
        <Company key={company.id} {...company} />
      ))}
    </InformationUnit>
  );
};
