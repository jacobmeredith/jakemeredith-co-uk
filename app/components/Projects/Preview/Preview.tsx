import * as React from "react";

import { IProject } from "~/utils/projects";
import { Link } from "remix";

export const Preview: React.FC<IProject> = ({ slug, image, title }) => {
  return (
    <div className="flex w-8/12 py-12 mx-auto overflow-hidden rounded-md odd:flex-row-reverse">
      <div className="w-3/5 p-6 bg-gray-900">
        <h3 className="text-xl text-white">{title}</h3>
      </div>
      <img src={image} alt="" className="w-2/5 h-72" />
    </div>
  );
};
