import * as post from "../routes/blog/post.mdx";

export const postFromModule = (mod: any) => {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes,
  };
};

// Make sure to add each post to this list, need to come up with a better way to do this
export const allPosts = [postFromModule(post)];
