import * as React from "react";

import { ICategory } from "~/utils/posts";
import { Link } from "remix";

interface ICategoriesListProps {
  categories: ICategory[];
}

export const CategoriesList: React.FC<ICategoriesListProps> = ({
  categories,
}) => {
  const categoriesMap = categories.map((category: ICategory) => (
    <Link
      key={category.text}
      className={`px-4 py-2 mr-3 rounded-full mb-3 ${
        category.active ? "bg-black text-white" : "bg-gray-200"
      }`}
      to={category.url}
    >
      {category.text}
    </Link>
  ));

  return (
    <div className="container flex flex-wrap px-8 py-12 mx-auto md:px-0">
      {categoriesMap}
    </div>
  );
};
