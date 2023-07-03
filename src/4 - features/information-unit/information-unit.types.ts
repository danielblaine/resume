export type InformationUnitProps = {
  unit: InformationUnitEnum;
  sidebar?: boolean;
};

export enum InformationUnitEnum {
  DOMAINS = 'Domains',
  EDUCATION = 'Education',
  EXPERIENCE = 'Experience',
  LANGUAGES = 'Languages',
  SKILLS = 'Skills',
  SUMMARY = 'Summary'
}
