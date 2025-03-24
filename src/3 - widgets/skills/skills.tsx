import { FC } from 'react';
import { InformationUnit, InformationUnitEnum } from '@features/information-unit';
import { Note } from '@shared/ui';
import * as S from './skills.styles';

export const Skills: FC = () => {
  return (
    <InformationUnit unit={InformationUnitEnum.SKILLS}>
      <S.SkillsGrid>
        <Note title="Programming Languages" info="TypeScript, JavaScript" />
        <Note
          title="State Management"
          info="Redux (Toolkit, Thunk), MobX, Zustand, React (TanStack) Query"
        />
        <Note title="Styling" info="Tailwind, NextUI, Sass, Styled-Components, MUI" />
        <Note title="Form Management" info="React Hook Form, Formik" />
        <Note title="Module Bundlers" info="Webpack, Vite" />
        <Note title="Testing" info="Jest, React Testing Library, Cypress" />
      </S.SkillsGrid>
    </InformationUnit>
  );
};
