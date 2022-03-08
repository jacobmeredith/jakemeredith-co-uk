import * as post from "../routes/blog/post.mdx";
import * as post2 from "../routes/blog/post2.mdx";
import * as post3 from "../routes/blog/post3.mdx";
import * as post4 from "../routes/blog/post4.mdx";

import { parseISO } from "date-fns";

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

export const postFromModule = (mod: any): IPost => {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes,
  };
};

// Make sure to add each post to this list, need to come up with a better way to do this
export const allPosts: IPost[] = [
  postFromModule(post),
  postFromModule(post2),
  postFromModule(post3),
  postFromModule(post4),
];

export const getLatestPosts = (n: number = 3, skip: number = 0) => {
  return allPosts
    .sort(
      (a, b) =>
        parseISO(b.createdDate).getTime() - parseISO(a.updatedDate).getTime()
    )
    .slice(skip, n);
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
