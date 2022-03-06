import * as React from "react";

import { IPost, takeLatestPosts } from "~/utils/posts";
import { Link, LoaderFunction, MetaFunction, useLoaderData } from "remix";

export const meta: MetaFunction = () => {
  return { title: "Home | jakemeredith.co.uk" };
};

export const loader: LoaderFunction = async ({ request }) => {
  return {
    recentPosts: takeLatestPosts(),
  };
};

export default function Index() {
  const { recentPosts } = useLoaderData();

  return (
    <React.Fragment>
      <header className="container py-24 mx-auto">
        <h2 className="w-1/2 text-4xl leading-relaxed text-gray-100">
          Hello, I'm a software engineer from the UK and I focus on frontend
          technology.
        </h2>
      </header>
      <section className="container py-12 mx-auto">
        <h3 className="w-1/2 text-2xl leading-relaxed text-gray-200">
          Recent articles
        </h3>
        <ul className="flex flex-wrap mt-6">
          {recentPosts.map((post: IPost) => (
            <li className="w-1/3 first:pr-6 last:pl-6" key={post.slug}>
              <Link
                to={"/blog/" + post.slug}
                className="relative flex w-full overflow-hidden bg-white rounded-md h-96"
              >
                <img
                  className="absolute inset-0 z-0 object-cover w-full h-full"
                  src="https://picsum.photos/500"
                  alt="random"
                />
                <div className="absolute bottom-0 left-0 z-10 w-full bg-cover h-1/2 bg-gradient-to-t from-black" />
                <div className="z-20 flex items-center w-full p-4 mt-auto">
                  <h4 className="text-lg text-white">{post.title}</h4>
                  <p className="px-3 py-2 ml-auto text-white bg-gray-600 rounded-lg">
                    {post.category}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </React.Fragment>
  );
}
