import * as React from "react";

import { LoaderFunction, MetaFunction, useLoaderData } from "remix";
import { allPosts, getCategories } from "~/utils/posts";

import { CategoriesList } from "~/components/Posts/CategoriesList";
import { Posts } from "~/components/Posts/Posts";

export const meta: MetaFunction = () => {
  return { title: "Blog | jakemeredith.co.uk" };
};

export const loader: LoaderFunction = async ({ request }) => {
  let url = new URL(request.url);
  let category = url.searchParams.get("c");
  let categoryArray = category?.split(",");
  let categories = getCategories(categoryArray ? categoryArray : []);

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

  return (
    <React.Fragment>
      <div className="container px-8 mx-auto md:px-0">
        <h1 className="mt-8 text-4xl text-gray-200 md:mt-12">Blog</h1>
      </div>
      <CategoriesList categories={categories} />
      <Posts posts={posts} />
    </React.Fragment>
  );
}
