import * as React from "react";

export const Layout: React.FC = ({ children }) => {
  return (
    <main className="container px-8 py-12 mx-auto md:px-0 post">
      {children}
    </main>
  );
};

export function getPropertiesFromFile<ReturnType>(mod: any): ReturnType {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes,
  };
}
