export interface SkillGroup {
  [key: string]: SkillGroupItem[];
}

export interface SkillGroupItem {
  skill: number;
  name: string;
  periods: string;
  tec: string;
}
