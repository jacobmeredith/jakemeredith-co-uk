import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "remix";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { mainPages } from "~/utils/pages";

export const Header = () => {
  const [open, setIsOpen] = React.useState<boolean>(false);

  return (
    <header className="py-8 md:px-0">
      <div className="container flex flex-wrap items-center mx-auto">
        <Link className="pl-8 text-2xl text-white md:pl-0" to="/">
          Jake Meredith.
        </Link>
        <button
          className="block ml-auto mr-8 text-2xl text-white md:hidden"
          type="button"
          onClick={() => setIsOpen(!open)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <nav
          className={`flex rounded-md md:block w-screen md:w-auto mt-8 mx-8 md:mt-0 md:mr-0 md:ml-auto md:rounded-none w-full bg-gray-700 md:bg-transparent ${
            open ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col w-full md:flex-row">
            {mainPages.map((link) => (
              <li key={link.text} className="flex items-center ml-8 text-lg">
                <Link
                  className="py-3 text-white md:py-0"
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                >
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
