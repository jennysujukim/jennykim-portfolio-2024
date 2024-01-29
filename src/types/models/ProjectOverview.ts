import { DisciplineType } from "../enums/DisciplineType";

export type ProjectOverview = {
  id: string;
  discipline: DisciplineType[];
  type: string;
  title: string;
  keywords: string;
  timeline: string;
  role: string;
  tools: string;
  description: string;
  link: string;
}