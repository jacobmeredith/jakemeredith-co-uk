import * as React from "react";

import { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return { title: "Home | jakemeredith.co.uk" };
};

export default function Index() {
  return <React.Fragment></React.Fragment>;
}
