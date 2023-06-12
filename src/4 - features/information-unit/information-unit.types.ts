export interface InformationUnitProps {
  unit: InformationUnitEnum;
  sidebar?: boolean;
}

export enum InformationUnitEnum {
  CONTACTS = 'Contacts',
  DOMAINS = 'Domains',
  EDUCATION = 'Education',
  EXPERIENCE = 'Experience',
  LANGUAGES = 'Languages',
  SKILLS = 'Skills',
  SUMMARY = 'Summary'
}
