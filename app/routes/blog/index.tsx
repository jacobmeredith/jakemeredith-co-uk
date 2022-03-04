import * as React from "react";

import { Link, LoaderFunction, MetaFunction, useLoaderData } from "remix";

import { allPosts } from "~/utils/posts";

export const meta: MetaFunction = () => {
  return { title: "Blog | jakemeredith.co.uk" };
};

export const loader: LoaderFunction = async ({ request }) => {
  let url = new URL(request.url);
  let category = url.searchParams.get("c");
  let categoryArray = category?.split(",");

  return {
    posts: category
      ? allPosts.filter((post) =>
          categoryArray?.includes(post.category.toLowerCase())
        )
      : allPosts,
  };
};

export default function Blog() {
  const { posts } = useLoaderData();

  const postsMap = posts.map((post: any) => (
    <div key={post.slug}>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </div>
  ));

  return <div>{postsMap}</div>;
}
