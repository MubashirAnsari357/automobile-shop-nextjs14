import { UserLinks } from "@/constants/Links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
      {UserLinks.map((link) => (
        <li key={link.path}>
          <Link
            href={link.path}
            className={`block py-2 px-3  ${
              pathname === link.path
                ? "text-white bg-blue-700"
                : "text-gray-900"
            } rounded`}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
