import { ICompany } from '@features/company';

export const WORK_HISTORY: ICompany[] = [
  {
    id: 1,
    position: 'React Developer',
    name: 'STARTUP',
    period: '01.2022 – 07.2022',
    responsibilities: [
      'Creating user interfaces for Web-Games',
      'Creating layouts from Figma',
      'Assistance in database planning',
      'Interaction with the server API',
      'Application testing',
      'Communication with Backend Developer and Designer',
      'Task estimation',
      'Technical support'
    ]
  },
  {
    id: 2,
    position: 'React / Next Developer',
    name: 'INNOWISE GROUP',
    period: '07.2022 – present',
    responsibilities: [
      'Participating in project planning and estimation activities',
      'Creation and control of project architecture',
      'Assistance in database planning',
      'Creating custom UI Kit',
      'Performance optimization',
      'Code review',
      'Designing responsive and adaptive layout',
      'Code refactoring',
      'Implementing dynamic React components',
      'Interaction with the server API',
      'Webpack setup',
      'Unit & integration testing'
    ]
  }
].reverse();
