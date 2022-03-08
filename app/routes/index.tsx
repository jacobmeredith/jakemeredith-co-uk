import * as React from "react";

import { LoaderFunction, MetaFunction, useLoaderData } from "remix";

import { RecentPosts } from "~/components/Posts/RecentPosts";
import { getLatestPosts } from "~/utils/posts";

export const meta: MetaFunction = () => {
  return { title: "Home | jakemeredith.co.uk" };
};

export const loader: LoaderFunction = async ({ request }) => {
  return {
    recentPosts: getLatestPosts(),
  };
};

export default function Index() {
  const { recentPosts } = useLoaderData();

  return (
    <React.Fragment>
      <header className="container px-8 py-12 mx-auto md:py-24 md:px-0">
        <h2 className="w-full text-2xl leading-relaxed text-gray-100 md:w-1/2 md:text-4xl">
          Hi I'm Jake, and I am a selft taught software engineer from the UK
        </h2>
      </header>
      <RecentPosts title="Recent articles" posts={recentPosts} />
    </React.Fragment>
  );
}
