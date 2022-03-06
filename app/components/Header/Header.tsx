import * as React from "react";

import { Link } from "remix";
import { mainPages } from "~/utils/pages";

export const Header = () => {
  return (
    <header className="py-8">
      <div className="container flex mx-auto">
        <Link className="text-2xl text-white" to="/">
          Jake Meredith
        </Link>
        <nav className="flex ml-auto">
          <ul className="flex">
            {mainPages.map((link) => (
              <li key={link.text} className="flex items-center ml-8 text-lg">
                <Link className="text-white" to={link.to}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
