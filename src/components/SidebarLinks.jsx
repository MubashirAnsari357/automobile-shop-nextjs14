import { usePathname } from "next/navigation";
import React from "react";
import {
  AboutIcon,
  CategoryIcon,
  ContactIcon,
  DashboardIcon,
  InboxIcon,
  ProductIcon,
  SignOutIcon,
} from "./icons";
import Link from "next/link";

const SidebarLinks = () => {
  const links = [
    {
      title: "Dashboard",
      path: "/admin/dashboard",
      icon: <DashboardIcon />,
    },
    {
      title: "Categories",
      path: "/admin/categories",
      icon: <CategoryIcon />,
    },
    {
      title: "SubCategories",
      path: "/admin/subcategories",
      icon: <CategoryIcon />,
    },
    {
      title: "Products",
      path: "/admin/products",
      icon: <ProductIcon />,
    },
    {
      title: "About",
      path: "/admin/about",
      icon: <AboutIcon />,
    },
    {
      title: "Contact",
      path: "/admin/contact",
      icon: <ContactIcon />,
    },
  ];

  const pathname = usePathname();
  return (
    <ul className="space-y-2 font-medium">
      {links.map((link) => (
        <li key={link.path}>
          <Link
            href={link.path}
            className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group ${
              pathname === link.path && "bg-gray-100 text-black font-semibold"
            }`}
          >
            {React.cloneElement(link.icon, {
              className: `flex-shrink-0 w-5 h-5 ${
                pathname === link.path
                  ? "text-gray-900"
                  : "text-gray-500 transition duration-75 group-hover:text-gray-900"
              }`,
            })}
            <span className="ms-3">{link.title}</span>
          </Link>
        </li>
      ))}
      <li>
        <Link
          href="#"
          className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
        >
          <SignOutIcon className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 hover:font-semibold" />
          <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
        </Link>
      </li>
      {/* Inbox */}
      {/* <li>
        <a
          href="#"
          className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
        >
          <InboxIcon className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
          <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
          <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
            3
          </span>
        </a>
      </li> */}
    </ul>
  );
};

export default SidebarLinks;
