import { DisciplineType } from "../enums/DisciplineType";

export type ProjectOverview = {
  id: string;
  discipline: DisciplineType;
  title: string;
  keywords: string;
  timeline: string;
  role: string;
  tech: string;
  description: string;
  link: string;
}