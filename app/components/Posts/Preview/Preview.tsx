import * as React from "react";

import { IPost } from "~/utils/posts";
import { Link } from "remix";

export const Preview: React.FC<IPost> = ({ slug, image, title, category }) => {
  return (
    <Link
      to={"/blog/" + slug}
      className="relative flex w-full overflow-hidden bg-white rounded-md shadow-md md:h-96 h-72 shadow-gray-900"
    >
      <img
        className="absolute inset-0 z-0 object-cover w-full h-full"
        src={image}
        alt="random"
      />
      <div className="absolute bottom-0 left-0 z-10 w-full bg-cover h-1/2 bg-gradient-to-t from-black" />
      <div className="z-20 flex flex-col items-start w-full p-4 mt-auto md:items-center md:flex-row">
        <h4 className="text-lg text-white">{title}</h4>
        <p className="px-3 py-2 mt-3 text-white bg-gray-600 rounded-lg md:mt-0 md:ml-auto">
          {category}
        </p>
      </div>
    </Link>
  );
};
