import * as post from "../routes/blog/post.mdx";
import * as post2 from "../routes/blog/post2.mdx";
import * as post3 from "../routes/blog/post3.mdx";

import { parseISO } from "date-fns";

export interface IPost {
  slug: string;
  title: string;
  category: string;
  createdDate: string;
  updatedDate: string;
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
];

export const takeLatestPosts = (n: number = 3, skip: number = 0) => {
  return allPosts
    .sort(
      (a, b) =>
        parseISO(b.createdDate).getTime() - parseISO(a.updatedDate).getTime()
    )
    .slice(skip, n);
};
