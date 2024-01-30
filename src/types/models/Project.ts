import { ProjectOverview } from "./ProjectOverview";

export type Project = {
  overview: ProjectOverview;
  livesite?: string;
  repoLink?: string;
  prototypeLink?: string;
  content: {
    firstSections: {
      id: string;
      title: string;
      image: string;
      paragraphs: {
        subtitle?: string;
        text: string[];
      }[];
    }[],
    secondSections?: {
      id: string;
      title: string;
      image: string;
      paragraphs: {
        subtitle?: string;
        text: string[];
      }[];
    }[]
  };
};