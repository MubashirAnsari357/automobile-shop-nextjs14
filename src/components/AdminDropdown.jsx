"use client";
import { AdminDropdownLinks } from "@/constants/Links";
import { logout } from "@/lib/Actions/actions";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useFormStatus } from "react-dom";

const AdminDropdown = ({ user }) => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const { pending } = useFormStatus();
  return (
    <>
      <div>
        <button
          type="button"
          className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
          aria-expanded="false"
          data-dropdown-toggle="dropdown-user"
          onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
        >
          <span className="sr-only">Open user menu</span>
          <div className="relative rounded-full overflow-hidden w-9 h-9">
            <Image
              className="rounded-full object-cover object-center"
              fill
              quality={80}
              src={user?.photo?.url}
              alt="user photo"
            />
          </div>
        </button>
      </div>
      <div
        className={`z-50 absolute right-5 top-8 ${
          isUserDropdownOpen ? "block" : "hidden"
        } my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow`}
        id="dropdown-user"
      >
        <div className="px-4 py-3" role="none">
          <p className="text-sm text-gray-900" role="none">
            {user?.name}
          </p>
          <p className="text-sm font-medium text-gray-900 truncate" role="none">
            {user?.email}
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
        </ul>
        <form action={logout}>
          <button
            disabled={pending}
            type="submit"
            className="w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            {pending ? "Signing out..." : "Sign out"}
          </button>
        </form>
      </div>
    </>
  );
};

export default AdminDropdown;
