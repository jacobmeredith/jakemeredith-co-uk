import * as React from "react";

import { IPost } from "~/utils/posts";

interface IPostsProps {
  posts: IPost[];
}

export const Posts: React.FC<IPostsProps> = ({ posts }) => {
  const postsMap = posts.map((post: IPost, index: number) => (
    <div key={post.slug} className="flex flex-col">
      <img className="mb-4 rounded-md" src={post.image} alt="article" />
      <h3 className="text-2xl text-gray-200">{post.title}</h3>
    </div>
  ));

  return (
    <section className="container grid grid-cols-2 gap-8 px-8 pb-8 mx-auto md:pb-12 md:grid-cols-4 md:px-0">
      {postsMap}
    </section>
  );
};
