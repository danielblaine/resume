import { FC } from 'react';
import { InformationUnit, InformationUnitEnum } from '@features/information-unit';
import { Typography } from '@shared/ui';

export const Summary: FC = () => {
  return (
    <InformationUnit unit={InformationUnitEnum.SUMMARY}>
      <Typography>
        I am an experienced React Frontend Developer with over than 2 years of experience in coding.
        {`\n`}
        I’ve been working in various industries like Business applications and E-commerce. {`\n`}
        Good knowledge of software development methodologies (Scrum, Agile, Kanban). {`\n`}
        Enjoy acquire new skills and gain new knowledge. Always open to new interesting projects.
      </Typography>
    </InformationUnit>
  );
};
