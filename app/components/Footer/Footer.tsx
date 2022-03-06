import * as React from "react";

import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "remix";
import { mainPages } from "~/utils/pages";

export const Footer = () => {
  return (
    <div className="container flex py-12 mx-auto">
      <div className="flex flex-col w-1/2">
        <Link className="mb-6 text-xl text-gray-50" to="/">
          Jake Meredith
        </Link>
        <p className="mb-6 text-sm text-gray-100">
          Hi, I'm Jake. I'm a software engineer based in the UK and I build
          applications using javascript/typescript.
        </p>
        <ul className="flex">
          <li>
            <a
              className="text-3xl text-white"
              href="https://github.com/jacobmeredith"
              rel="noopener"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className="ml-4">
            <a
              className="mt-4 text-3xl text-white"
              href="https://twitter.com/jakemeredithh"
              rel="noopener"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
        </ul>
      </div>
      <div className="w-1/4">
        <h4 className="mb-6 text-lg text-gray-50">Sitemap</h4>
        <ul>
          {mainPages.map((link) => (
            <li className="mb-3" key={link.text}>
              <Link className="text-white" to={link.to}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/4"></div>
    </div>
  );
};
