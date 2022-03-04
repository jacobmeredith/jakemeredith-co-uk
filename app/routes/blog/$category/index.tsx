import { Link, LoaderFunction, MetaFunction, json, useLoaderData } from "remix";

import { allPosts } from "~/helpers/posts";

export const meta: MetaFunction = ({ params }) => {
  return { title: `${params.category} | jakemeredith.co.uk` };
};

export const loader: LoaderFunction = async ({ params }) => {
  const filteredPosts = allPosts.filter(
    (post) => post.category.toLowerCase() === params.category?.toLowerCase()
  );
  return json({
    posts: filteredPosts,
  });
};

export default function Index() {
  const { posts } = useLoaderData();

  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.slug}>
          <Link to={post.slug}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
