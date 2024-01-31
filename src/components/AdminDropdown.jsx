import { AdminDropdownLinks } from "@/constants/Links";
import Link from "next/link";
import React from "react";

const AdminDropdown = ({ isUserDropdownOpen }) => {
  return (
    <div
      className={`z-50 absolute right-5 top-8 ${
        isUserDropdownOpen ? "block" : "hidden"
      } my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow`}
      id="dropdown-user"
    >
      <div className="px-4 py-3" role="none">
        <p className="text-sm text-gray-900" role="none">
          Admin
        </p>
        <p className="text-sm font-medium text-gray-900 truncate" role="none">
          testing@test.com
        </p>
      </div>
      <ul className="py-1" role="none">
        {AdminDropdownLinks.map((link) => (
          <li key={link.title}>
            <Link
              href={link.path}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              {link.title}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminDropdown;
