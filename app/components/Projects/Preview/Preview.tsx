import * as React from "react";

import { IProject } from "~/utils/projects";

export const Preview: React.FC<IProject> = ({
  slug,
  image,
  title,
  description,
  gallery,
}) => {
  return (
    <div className="flex flex-col items-center py-12 mx-auto md:w-8/12 md:flex-row">
      <div className="flex flex-col md:w-2/5 ">
        <img
          src={image}
          alt=""
          className="rounded-md shadow-md shadow-gray-900 h-72"
        />
        <div className="hidden grid-cols-4 gap-4 mt-4 md:grid">
          {gallery.map((image, index) => (
            <img
              key={`${title}_${index}`}
              src={image}
              alt=""
              className="rounded-md shadow-md shadow-gray-900"
            />
          ))}
        </div>
      </div>
      <div className="p-6 bg-gray-900 rounded-md shadow-md md:ml-8 md:w-3/5 shadow-gray-900 h-72">
        <h3 className="text-2xl text-white">{title}</h3>
        <p className="mt-6 text-gray-50">{description}</p>
      </div>
    </div>
  );
};
