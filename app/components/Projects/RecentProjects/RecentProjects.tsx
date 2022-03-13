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
    <section className="container py-16 mx-auto md:py-24">
      <h2 className="mb-6 mb-12 text-3xl text-center text-white">{title}</h2>
      {projects.map((project) => (
        <Preview key={project.slug} {...project} />
      ))}
    </section>
  );
};
