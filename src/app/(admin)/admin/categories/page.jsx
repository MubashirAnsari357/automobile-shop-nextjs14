import PageNavigation from "@/components/PageNavigation";
import ShowPerPage from "@/components/ShowPerPage";
import { DeleteIcon, EditIcon } from "@/components/icons";
import { getCategories } from "@/lib/Data/data";
import Link from "next/link";
import React from "react";
import Search from "@/components/Search";
import DeleteModal from "@/components/DeleteModal";

const Categories = async ({ searchParams }) => {
  const search = searchParams.q ?? "";
  const currentPage = Number(searchParams?.page) || 1;
  const pagesPerView = Number(searchParams?.limit) || 10;
  const { categories, pagination } = await getCategories(
    search,
    pagesPerView,
    currentPage
  );
  return (
    <section className="items-center lg:flex font-poppins">
      <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div className="overflow-x-auto bg-white rounded shadow">
          <div className="">
            <div className="flex items-center justify-between border-b border-gray-300 px-6 py-4 pb-4">
              <h2 className="text-xl font-medium ">Categories</h2>
              <Link href={"/admin/categories/add"} className="primary-btn">
                Add Category
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-between px-4 py-2 border-b">
              <ShowPerPage />
              <Search />
            </div>
            <table className="w-full table-auto">
              <thead className="bg-gray-100 ">
                <tr className="text-xs text-left text-gray-500 border-b border-gray-200 ">
                  <th className="px-6 py-3 font-medium ">Sr. No</th>
                  <th className="px-6 py-3 font-medium ">Category</th>
                  <th className="px-6 py-3 font-medium ">Action</th>
                </tr>
              </thead>
              <tbody>
                {categories?.map((category, index) => {
                  const absoluteIndex =
                    (currentPage - 1) * pagesPerView + index + 1;
                  return (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="px-6 py-3 text-sm font-medium">
                        {absoluteIndex}
                      </td>
                      <td className="px-6 py-3 text-sm font-medium">
                        {category?.name}
                      </td>
                      <td className="items-center px-6 py-6 md:py-10 gap-2 flex-1 flex">
                        <Link
                          href={`/admin/categories/${category?._id}/edit`}
                          className="font-medium"
                        >
                          <EditIcon className="w-4 h-4 text-blue-600 hover:text-blue-500 dark:hover:text-gray-300 dark:text-blue-300 bi bi-pencil-square" />
                        </Link>
                        <DeleteModal
                          id={category?._id}
                          message={
                            "Are you sure you want to delete? This action will permanently delete the selected category, along with all associated subcategories and products. This cannot be undone"
                          }
                          type={"category"}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <PageNavigation
              totalPages={pagination?.totalPages}
              totalEntries={pagination?.total}
              itemsPerPage={pagesPerView}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
