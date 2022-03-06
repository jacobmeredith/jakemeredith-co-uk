import * as React from "react";

import { LoaderFunction, MetaFunction, useLoaderData } from "remix";

import { RecentPosts } from "~/components/RecentPosts";
import { takeLatestPosts } from "~/utils/posts";

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
          Hi I'm Jake, I'm a software engineer from the UK that works with
          javascript/typescript.
        </h2>
      </header>
      <RecentPosts title="Recent articles" posts={recentPosts} />
    </React.Fragment>
  );
}
