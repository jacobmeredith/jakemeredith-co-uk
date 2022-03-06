import * as React from "react";

export const Layout: React.FC = ({ children }) => {
  return <main className="container py-12 mx-auto post">{children}</main>;
};
