import Link from "next/link";
import React from "react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
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

export default function Footer() {
  return (
    <footer className="p-4 bg-black md:p-8 lg:p-10 text-white">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          className="flex justify-center items-center text-2xl font-semibold"
        >
          <svg className="w-10 h-10 mr-2">
            <image
              href="/University.png"
              style={{ width: "50px", height: "50px" }}
            />
          </svg>
          Kyvingus University
        </a>
        <p className="my-6">
          "Empowering Minds, Shaping Futures: Your Path to Success at Kyvingus
          University"
        </p>
        <div className="flex justify-center mb-6">
          <ul className="font-medium flex flex-wrap items-center p-4 md:p-0 border border-gray-100 rounded-lg bg-black md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black dark:bg-black md:dark:bg-black dark:border-gray-700">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink href={item.href} label={item.label} />
              </li>
            ))}
          </ul>
        </div>
        <span className="text-sm">
          © 2023-2024{" "}
          <a href="#" className="hover:underline">
            Kyvingus University™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
