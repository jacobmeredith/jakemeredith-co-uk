import * as React from "react";

import { IPost, takeLatestPosts } from "~/utils/posts";
import { LoaderFunction, MetaFunction, useLoaderData } from "remix";

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
      <header className="container py-12 mx-auto">
        <h2 className="w-1/2 text-4xl leading-relaxed text-gray-100">
          Hello, I'm a software engineer from the UK and I focus on frontend
          technology.
        </h2>
      </header>
      <section className="container py-6 mx-auto">
        <h3 className="w-1/2 text-2xl leading-relaxed text-gray-200">
          Recent articles
        </h3>
        <ul className="flex flex-wrap mt-6">
          {recentPosts.map((post: IPost) => (
            <li className="w-1/3 first:pr-4 last:pl-4" key={post.slug}>
              <div className="w-full p-4 bg-white rounded-md h-96">
                {post.title}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </React.Fragment>
  );
}
