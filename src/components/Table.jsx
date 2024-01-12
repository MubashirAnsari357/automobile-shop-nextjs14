import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DeleteIcon, EditIcon } from "./icons";
import Modal from "./Modal";
import ModalWrapper from "./ModalWrapper";

const Table = ({ title, data }) => {
  const columns = data.length > 0 ? Object.keys(data[0]) : [];
  return (
    <>
      <section className="items-center lg:flex font-poppins">
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="overflow-x-auto bg-white rounded shadow">
            <div className="">
              <div className="flex items-center justify-between border-b border-gray-300 px-6 py-4 pb-4">
                <h2 className="text-xl font-medium ">{title}</h2>
                <ModalWrapper btnTitle={title}/>
              </div>
              <div className="flex flex-wrap items-center justify-between px-4 py-2 border-b">
                <div className="flex items-center pl-3">
                  <p className="text-xs text-gray-400">Show</p>
                  <div className="px-2 py-2 text-xs text-gray-500 ">
                    <select
                      name=""
                      id=""
                      className="block text-base bg-gray-100 cursor-pointer w-11"
                    >
                      <option value="">15</option>
                      <option value="">17</option>
                      <option value="">19</option>
                    </select>
                  </div>
                  <p className="text-xs text-gray-400">entries</p>
                </div>
                <div className="flex px-4 py-2 mb-4 border border-gray-300 rounded-md md:mb-0">
                  <input
                    type="search"
                    className="w-full pr-4 text-sm text-gray-700 bg-white placeholder-text-100 outline-none"
                    placeholder="Search..."
                  />
                  <button className="flex items-center text-gray-700 hover:text-blue-600">
                    <span className="mr-2 text-xs ">Go</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <table className="w-full table-auto">
                <thead className="bg-gray-100 ">
                  <tr className="text-xs text-left text-gray-500 border-b border-gray-200 ">
                    {columns.map((column) => (
                      <th key={column} className="px-6 py-3 font-medium">
                        {column.charAt(0).toUpperCase() + column.slice(1)}
                      </th>
                    ))}
                    <th className="px-6 py-3 font-medium ">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      {columns.map((column) => (
                        <td
                          key={column}
                          className="px-6 py-3 text-sm font-medium"
                        >
                          {column == "imgs" || column == "photos" ? (
                            <Image
                              height={"100"}
                              width={"100"}
                              src={item[column][0] || item[column]}
                              alt={`img`}
                              className="md:w-16 md:h-16 h-10 w-10 object-cover rounded-lg"
                            />
                          ) : (
                            item[column]
                          )}
                        </td>
                      ))}
                      <td className="items-center px-6 py-6 md:py-10 gap-2 flex-1 flex">
                        <Link href="#" className="font-medium">
                          <EditIcon className="w-4 h-4 text-blue-600 hover:text-blue-500 dark:hover:text-gray-300 dark:text-blue-300 bi bi-pencil-square" />
                        </Link>
                        <Link href="#" className="font-medium">
                          <DeleteIcon className="w-4 h-4 text-red-600 hover:text-red-500 dark:hover:text-red-300 dark:text-red-400 bi bi-trash-fill" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex flex-wrap items-center justify-between px-6 py-3">
                <p className="mb-4 text-xs lg:mb-0 ">
                  Showing 1 to 10 of 13 entries
                </p>
                <nav aria-label="page-navigation ">
                  <ul className="flex mb-4 list-style-none lg:mb-0">
                    <li className="page-item disabled ">
                      <a
                        href="#"
                        className="relative block px-3 py-1 mr-1 text-xs text-gray-700 transition-all duration-300 rounded-md pointer-events-none hover:text-gray-100 hover:bg-blue-600"
                      >
                        Previous
                      </a>
                    </li>
                    <li className="page-item ">
                      <a
                        href="#"
                        className="relative block px-3 py-1 mr-1 text-xs text-gray-100 transition-all duration-300 bg-blue-600 rounded-md hover:text-blue-700 hover:bg-blue-200 "
                      >
                        1
                      </a>
                    </li>
                    <li className="page-item ">
                      <a
                        href="#"
                        className="relative block px-3 py-1 mr-1 text-xs text-gray-700 transition-all duration-300 rounded-md hover:bg-blue-100 "
                      >
                        2
                      </a>
                    </li>
                    <li className="page-item ">
                      <a
                        href="#"
                        className="relative block px-3 py-1 mr-1 text-xs text-gray-700 transition-all duration-300 rounded-md hover:bg-blue-100 "
                      >
                        3
                      </a>
                    </li>
                    <li className="page-item ">
                      <a
                        href="#"
                        className="relative block px-3 py-1 text-xs text-gray-700 transition-all duration-300 rounded-m hover:bg-blue-100 "
                      >
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Table;
