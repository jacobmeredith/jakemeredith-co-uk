import * as project from "../routes/projects/project.mdx";

import { getPropertiesFromFile } from "./mdx";
import { sortByLatests } from ".";

export interface IProject {
  slug: string;
  title: string;
  description: String;
  image: string;
  gallery: string[];
  createdDate: string;
  updatedDate: string;
}

export const allProjects: IProject[] = [getPropertiesFromFile(project)];

export const getLatestProjects = (n: number = 3, skip: number = 0) => {
  return allProjects.sort(sortByLatests).slice(skip, n);
};
