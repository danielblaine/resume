import { FC } from 'react';
import { InformationUnit, InformationUnitEnum } from '@features/information-unit';
import { Typography } from '@shared/ui';

export const Summary: FC = () => {
  return (
    <InformationUnit unit={InformationUnitEnum.SUMMARY}>
      <Typography>
        Specialist with more than 2 years of experience as a React Developer. {`\n`}
        Hands-on experience with various industries like Business applications, E-commerce and
        Gaming. {`\n`}
        Skilled in creating scalable web applications. {`\n`}
        Good knowledge of software development methodologies (Scrum, Agile, Kanban). {`\n`}
        Enjoy acquire new skills and gain new knowledge. {`\n`}
        Always open to new interesting projects.
      </Typography>
    </InformationUnit>
  );
};
