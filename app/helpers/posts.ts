export const postFromModule = (mod: any) => {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes,
  };
};

// Make sure to add each post to this list
export const allPosts = [
  postFromModule(require("../routes/blog/$category/post.mdx")),
];
