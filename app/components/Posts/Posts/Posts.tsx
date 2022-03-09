import * as React from "react";

import { IPost } from "~/utils/posts";
import { Preview } from "../Preview";

interface IPostsProps {
  posts: IPost[];
}

export const Posts: React.FC<IPostsProps> = ({ posts }) => {
  const postsMap = posts.map((post: IPost, index: number) => (
    <div key={post.slug}>
      <Preview {...post} />
    </div>
  ));

  return (
    <section className="container grid grid-cols-1 gap-8 px-8 pb-8 mx-auto md:pb-12 md:grid-cols-4 md:px-0">
      {postsMap}
    </section>
  );
};
