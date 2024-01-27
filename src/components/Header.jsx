"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HamburgerIcon, SearchIcon } from "./icons";
import NavLinks from "./NavLinks";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
      <header className="bg-white border-gray-200 sticky">
        <nav className="flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href={'/'}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 w-8"
              width={8}
              height={8}
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Automobile
            </span>
          </Link>
            <button
              data-collapse-toggle="navbar-search"
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-search"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <HamburgerIcon className={'w-5 h-5'} />
            </button>
          <div
            className={`items-center justify-between ${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}
            id="navbar-search"
          >
            <NavLinks />
          </div>
        </nav>
      </header>
  );
}
