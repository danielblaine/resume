import { ReactNode } from 'react';
import {
  DomainsIcon,
  EducationIcon,
  ExperienceIcon,
  LanguagesIcon,
  SkillsIcon,
  SummaryIcon
} from '@shared/icons';
import { InformationUnitEnum } from './information-unit.types';

export const INFORMATION_UNIT_ICONS: { [key in InformationUnitEnum]: ReactNode } = {
  [InformationUnitEnum.DOMAINS]: <DomainsIcon />,
  [InformationUnitEnum.EDUCATION]: <EducationIcon />,
  [InformationUnitEnum.EXPERIENCE]: <ExperienceIcon />,
  [InformationUnitEnum.LANGUAGES]: <LanguagesIcon />,
  [InformationUnitEnum.SKILLS]: <SkillsIcon />,
  [InformationUnitEnum.SUMMARY]: <SummaryIcon />
};
