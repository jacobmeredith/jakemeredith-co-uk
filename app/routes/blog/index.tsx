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
  let categories = allPosts.reduce((acc, post) => {
    if (!acc.includes(post.category)) {
      acc.push(post.category);
    }
    return acc;
  }, []);

  return {
    categories,
    posts: category
      ? allPosts.filter((post) =>
          categoryArray?.includes(post.category.toLowerCase())
        )
      : allPosts,
  };
};

export default function Blog() {
  const { posts, categories } = useLoaderData();

  const categoriesMap = categories.map((category: string) => (
    <Link key={category} to={`/blog/?c=${category.toLowerCase()}`}>
      {category}
    </Link>
  ));

  const postsMap = posts.map((post: any) => (
    <div key={post.slug}>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </div>
  ));

  return (
    <React.Fragment>
      {categoriesMap}
      {postsMap}
    </React.Fragment>
  );
}
