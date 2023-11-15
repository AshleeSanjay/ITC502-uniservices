import Link from "next/link";
import React from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Log in", href: "/login" },
];

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => (
  <Link
    href={href}
    className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white transition-all hover:text-red-500 border-b-2 border-transparent hover:border-red-500 hover:scale-110 mr-5"
  >
    {label}
  </Link>
);

export default function NavBar() {
  return (
    <nav className="bg-black text-white border-gray-200 dark:bg-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/">
          <div className="flex items-center">
            <svg className="w-10 h-10 mr-2">
              <image
                xlinkHref="/University.png"
                style={{ width: "50px", height: "50px" }}
              />
            </svg>

            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Kyvingus University
            </span>
          </div>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-black md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black dark:bg-black md:dark:bg-black dark:border-gray-700">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink href={item.href} label={item.label} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
