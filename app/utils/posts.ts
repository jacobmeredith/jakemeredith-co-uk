import * as post from "../routes/blog/post.mdx";

import { getPropertiesFromFile } from "./mdx";
import { sortByLatest } from ".";

export interface IPost {
  slug: string;
  title: string;
  category: string;
  image: string;
  createdDate: string;
  updatedDate: string;
}

export interface ICategory {
  text: string;
  url: string;
  active: boolean;
}

// Make sure to add each post to this list, need to come up with a better way to do this
export const allPosts: IPost[] = [getPropertiesFromFile(post)];

export const getLatestPosts = (n: number = 3, skip: number = 0) => {
  return allPosts.sort(sortByLatest).slice(skip, n);
};

export const getCategories = (categoryArray: string[]): ICategory[] => {
  const categories: ICategory[] = allPosts.reduce(
    (acc: ICategory[], post: IPost) => {
      if (!acc.find((cat) => cat.text === post.category)) {
        acc.push({
          text: post.category,
          url: `/blog?c=${post.category.toLowerCase()}`,
          active: categoryArray.includes(post.category.toLowerCase()),
        });
      }

      return acc;
    },
    [
      {
        text: "All",
        url: "/blog",
        active: categoryArray.length === 0,
      },
    ]
  );

  return categories;
};
