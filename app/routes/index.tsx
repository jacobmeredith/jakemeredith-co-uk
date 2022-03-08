import * as React from "react";

import { LoaderFunction, MetaFunction, useLoaderData } from "remix";

import { RecentPosts } from "~/components/Posts/RecentPosts";
import { getLatestPosts } from "~/utils/posts";

export const meta: MetaFunction = () => {
  return { title: "Home | jakemeredith.co.uk" };
};

export const loader: LoaderFunction = async ({ request }) => {
  return {
    recentPosts: getLatestPosts(4),
  };
};

export default function Index() {
  const { recentPosts } = useLoaderData();

  return (
    <React.Fragment>
      <header className="container px-8 py-12 mx-auto md:py-24 md:px-0">
        <h2 className="flex flex-col items-start w-full leading-relaxed text-gray-100 md:w-1/2">
          <span className="text-4xl">Hi, my name is</span>
          <span className="p-2 mt-8 text-6xl bg-gray-700 rounded-md">
            Jake Meredith.
          </span>
          <span className="mt-8 text-4xl">
            I build and write about software engineering
          </span>
        </h2>
      </header>
      <RecentPosts title="Recent articles" posts={recentPosts} />
    </React.Fragment>
  );
}
