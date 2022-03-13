import * as React from "react";
import { Link } from "remix";

import { IProject } from "~/utils/projects";

export const Preview: React.FC<IProject> = ({
  slug,
  image,
  title,
  description,
  gallery,
}) => {
  return (
    <div className="flex flex-col items-center mx-auto mb-8 md:mb-24 md:w-8/12 md:flex-row last:mb-0">
      <div className="flex flex-col md:w-2/5 ">
        <img
          src={image}
          alt=""
          className="rounded-md shadow-md shadow-gray-900 md:h-72"
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
      <div className="flex flex-col items-start justify-center w-full p-6 mt-4 bg-gray-900 rounded-md shadow-md md:mt-0 md:ml-8 md:w-3/5 shadow-gray-900 md:h-72">
        <h3 className="text-2xl text-white">{title}</h3>
        <p className="mt-6 text-gray-50">{description}</p>
        <Link
          className="inline-flex px-3 py-2 mt-6 text-black bg-white rounded-md"
          to={`/projects/${slug}`}
        >
          View project
        </Link>
      </div>
    </div>
  );
};
