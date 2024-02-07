"use client";
import React, { useState } from "react";
import AdminDropdown from "./AdminDropdown";
import SidebarLinks from "./SidebarLinks";
import { HamburgerIcon } from "./icons";
import Link from "next/link";
import Image from "next/image";

const AdminHeader = ({user}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                onClick={handleSidebarToggle}
              >
                <span className="sr-only">Open sidebar</span>
                <HamburgerIcon className="h-6 w-6" />
              </button>
              <Link href="/admin/dashboard" className="flex ms-2 md:me-24">
                <Image
                  width={8}
                  height={8}
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 w-8 me-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">
                  Automobile
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <AdminDropdown user={user}/>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }  bg-white border-r border-gray-200 md:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
          <SidebarLinks />
        </div>
      </aside>
    </>
  );
};

export default AdminHeader;
