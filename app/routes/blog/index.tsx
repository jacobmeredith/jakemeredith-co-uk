import * as React from "react";

import { Link, LoaderFunction, MetaFunction, json, useLoaderData } from "remix";

import { allPosts } from "~/helpers/posts";

export const meta: MetaFunction = () => {
  return { title: "Blog | jakemeredith.co.uk" };
};

export const loader: LoaderFunction = async () => {
  return json({
    posts: allPosts.reduce((acc: any, post: any) => {
      if (!acc[post.category]) {
        acc[post.category] = [];
      }
      acc[post.category].push(post);

      return acc;
    }, []),
  });
};

export default function Index() {
  const { posts } = useLoaderData();

  return (
    <div>
      {posts.map((category: any) => (
        <Link key={category} to={category.toLowerCase()}>
          {category}
        </Link>
      ))}
    </div>
  );
}
