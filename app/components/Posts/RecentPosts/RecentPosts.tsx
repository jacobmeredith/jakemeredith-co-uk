import * as React from "react";

import { IPost } from "~/utils/posts";
import { Preview } from "../Preview";

interface IRecentPostsProps {
  posts: IPost[];
  title?: string;
}

export const RecentPosts: React.FC<IRecentPostsProps> = ({ posts, title }) => {
  return (
    <section className="container px-8 py-16 mx-auto md:py-24 md:px-0">
      {title && (
        <h3 className="text-3xl leading-relaxed text-gray-200">{title}</h3>
      )}
      <ul className="grid grid-cols-1 gap-8 mt-6 md:grid-cols-4">
        {posts.map((post: IPost) => (
          <li key={post.slug}>
            <Preview {...post} />
          </li>
        ))}
      </ul>
    </section>
  );
};
