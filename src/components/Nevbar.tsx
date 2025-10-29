import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Nevbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Menus", "Reservation"];

  return (
    <header className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 h-20">
          {/* left: logo */}
          <img src="/Logo.svg" alt="logo" className="h-12" />

          {/* center: nav links */}
          <nav className="flex-1">
            <ul className="hidden lg:flex items-center justify-center gap-10">
              {links.map((l) => {
                const path =
                  l.toLowerCase() === "home" ? "/" : `/${l.toLowerCase()}`;
                return (
                  <li key={l}>
                    <Link
                      to={path}
                      className="text-gray-700 dark:text-gray-100 hover:text-primary transition-colors font-karla"
                    >
                      {l}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* mobile: small nav (hidden on lg) */}
            <div className="lg:hidden flex items-center justify-center">
              <button
                onClick={() => setOpen((s) => !s)}
                aria-label="Toggle menu"
                className="p-2 rounded-md text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </nav>

          {/* right: auth + CTA */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="hidden md:inline text-gray-700 dark:text-gray-100"
            >
              Login
            </a>
            <Button
              className="rounded-full px-5 py-2"
              variant="default"
              size="default"
            >
              Order Online
            </Button>
          </div>
        </div>

        {/* mobile dropdown */}
        {open && (
          <div className="lg:hidden mt-2 pb-4">
            <ul className="flex flex-col gap-3 text-center">
              {links.map((l) => {
                const path =
                  l.toLowerCase() === "home" ? "/" : `/${l.toLowerCase()}`;
                return (
                  <li key={l}>
                    <Link
                      to={path}
                      className="block text-gray-700 dark:text-gray-100 py-2"
                    >
                      {l}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  to="/login"
                  className="block text-gray-700 dark:text-gray-100 py-2"
                >
                  Login
                </Link>
              </li>
              <li className="px-6">
                <Link
                  to="/order"
                  className="block text-gray-700 dark:text-gray-100 py-2"
                >
                  <Button className="w-full rounded-full" variant="default">
                    Order Online
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Nevbar;
