import * as React from "react";

import { IProject } from "~/utils/projects";
import { Preview } from "../Preview";

interface IRecentProjectsProps {
  title: string;
  projects: IProject[];
}

export const RecentProjects: React.FC<IRecentProjectsProps> = ({
  title,
  projects,
}) => {
  return (
    <section className="container px-8 py-16 mx-auto md:py-24 md:px-0">
      <h2 className="mb-8 text-3xl text-white md:mb-24 md:text-center">
        {title}
      </h2>
      {projects.map((project) => (
        <Preview key={project.slug} {...project} />
      ))}
    </section>
  );
};
