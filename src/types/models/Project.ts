import { ProjectOverview } from "./ProjectOverview";

export type Project = {
  overview: ProjectOverview;
  livesite?: string;
  link?: string;
  sections: {
    id: string;
    title: string;
    content: string[];
    image: string;
  }[]
}