import { sortByLatest } from ".";

export interface IProject {
  slug: string;
  title: string;
  description: String;
  image: string;
  gallery: string[];
  createdDate: string;
  updatedDate: string;
}

export const allProjects: IProject[] = [];

export const getLatestProjects = (n: number = 3, skip: number = 0) => {
  return allProjects.sort(sortByLatest).slice(skip, n);
};
