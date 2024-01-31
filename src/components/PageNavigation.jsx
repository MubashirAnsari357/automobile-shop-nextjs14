"use client";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

const PageNavigation = ({ totalPages, totalEntries, itemsPerPage }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const generatePageLinks = () => {
    const pageLinks = [];
    const maxPagesToShow = 3;

    const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      const isCurrentPage = i === currentPage;

      pageLinks.push(
        <li key={i} className={`page-item ${isCurrentPage ? "disabled" : ""}`}>
          <Link
            href={createPageURL(i)}
            className={`relative block px-3 py-1 mr-1 text-xs ${
              isCurrentPage ? "bg-blue-100 text-blue-700" : "text-gray-900"
            } transition-all duration-300 rounded-md ${
              isCurrentPage
                ? "pointer-events-none"
                : "hover:bg-blue-100 hover:text-blue-700"
            }`}
          >
            {i}
          </Link>
        </li>
      );
    }

    return pageLinks;
  };

  return (
    <div className="flex flex-wrap items-center justify-between px-6 py-3">
      <p className="mb-4 text-xs lg:mb-0">{`Showing ${
        (currentPage - 1) * itemsPerPage + 1
      } to ${Math.min(
        currentPage * itemsPerPage,
        totalEntries
      )} of ${totalEntries} entries`}
      </p>
      <nav aria-label="page-navigation">
        <ul className="flex mb-4 list-style-none lg:mb-0">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <Link
              href={createPageURL(Math.max(1, currentPage - 1))}
              className={`relative block px-3 py-1 mr-1 text-xs ${
                currentPage === 1 ? "text-gray-400" : "text-gray-700"
              } transition-all duration-300 rounded-md ${
                currentPage === 1
                  ? "pointer-events-none"
                  : "hover:bg-blue-100 hover:text-blue-700"
              }`}
            >
              Previous
            </Link>
          </li>
          {generatePageLinks()}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <Link
              href={createPageURL(Math.min(totalPages, currentPage + 1))}
              className={`relative block px-3 py-1 text-xs ${
                currentPage === totalPages ? "text-gray-400" : "text-gray-700"
              } transition-all duration-300 rounded-m ${
                currentPage === totalPages
                  ? "pointer-events-none"
                  : "hover:bg-blue-100 hover:text-blue-700"
              }`}
            >
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PageNavigation;
