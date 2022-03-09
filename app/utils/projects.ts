import * as project from "../routes/projects/project.mdx";

import { getPropertiesFromFile } from "./mdx";

export interface IProject {
  slug: string;
  title: string;
  image: string;
  createdDate: string;
  updatedDate: string;
}

export const allProjects: IProject[] = [getPropertiesFromFile(project)];
