import * as React from "react";

import { IPost } from "~/utils/posts";
import { Link } from "remix";

interface IRecentPostsProps {
  posts: IPost[];
  title?: string;
}

export const RecentPosts: React.FC<IRecentPostsProps> = ({ posts, title }) => {
  return (
    <section className="container p-8 mx-auto md:py-12 md:px-0">
      {title && (
        <h3 className="text-2xl leading-relaxed text-gray-200">{title}</h3>
      )}
      <ul className="grid grid-cols-2 gap-8 mt-6 md:grid-cols-4">
        {posts.map((post: IPost) => (
          <li key={post.slug}>
            <Link
              to={"/blog/" + post.slug}
              className="relative flex w-full overflow-hidden bg-white rounded-md md:h-96 h-72"
            >
              <img
                className="absolute inset-0 z-0 object-cover w-full h-full"
                src={post.image}
                alt="random"
              />
              <div className="absolute bottom-0 left-0 z-10 w-full bg-cover h-1/2 bg-gradient-to-t from-black" />
              <div className="z-20 flex flex-col items-start w-full p-4 mt-auto md:items-center md:flex-row">
                <h4 className="text-lg text-white">{post.title}</h4>
                <p className="px-3 py-2 mt-3 text-white bg-gray-600 rounded-lg md:mt-0 md:ml-auto">
                  {post.category}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
