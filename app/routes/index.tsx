import * as React from "react";

import { LoaderFunction, MetaFunction, useLoaderData } from "remix";

import { Preview } from "~/components/Projects/Preview";
import { RecentPosts } from "~/components/Posts/RecentPosts";
import { allProjects } from "~/utils/projects";
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
      <header className="container px-8 py-16 mx-auto md:py-24 md:px-0">
        <h2 className="flex flex-col items-start w-full leading-relaxed text-gray-100 md:w-1/2">
          <span className="text-2xl md:text-4xl">Hi, my name is</span>
          <span className="p-2 mt-6 text-4xl bg-gray-700 rounded-md md:mt-8 md:text-6xl">
            Jake Meredith.
          </span>
          <span className="mt-6 text-2xl md:mt-8 md:text-4xl">
            I build and break things on the web.
          </span>
        </h2>
      </header>
      <RecentPosts title="Recent articles" posts={recentPosts} />
      <section className="container py-16 mx-auto md:py-24">
        <h2 className="mb-12 text-3xl text-center text-white">Projects</h2>
        <Preview {...allProjects[0]} />
        <Preview {...allProjects[0]} />
      </section>
    </React.Fragment>
  );
}
