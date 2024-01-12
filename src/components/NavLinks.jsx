import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Products",
      path: "/products",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  const pathname = usePathname();
  return (
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
        {links.map((link) => (
            <li key={link.path}>
            <Link
              href={link.path}
              className={`block py-2 px-3  ${pathname===link.path ? 'text-white bg-blue-700'  : 'text-gray-900'} rounded`}
            >
              {link.title}
            </Link>
          </li>
        ))}
      {/* <li>
        <Link
          href={"/"}
          className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href={"/products"}
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
        >
          Products
        </Link>
      </li>
      <li>
        <Link
          href={"/about"}
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href={"/contact"}
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
        >
          Contact
        </Link>
      </li> */}
    </ul>
  );
};

export default NavLinks;
