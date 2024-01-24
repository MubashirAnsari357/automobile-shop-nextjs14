import PageNavigation from "@/components/PageNavigation";
import ShowPerPage from "@/components/ShowPerPage";
import { DeleteIcon, EditIcon } from "@/components/icons";
import { getCategories, getProducts, getSubCategories } from "@/lib/Data/data";
import { formatDateToIndian } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Search from "@/components/Search";
import CategoryDropdown from "@/components/CategoryDropdown";

const Products = async ({ searchParams }) => {
  const search = searchParams.q ?? "";
  const currentPage = Number(searchParams?.page) || 1;
  const pagesPerView = Number(searchParams?.limit) || 10;
  const productsData = await getProducts(search, pagesPerView, currentPage);

  return (
    <section className="items-center lg:flex font-poppins">
      <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div className="overflow-x-auto bg-white rounded shadow">
          <div className="">
            <div className="flex items-center justify-between border-b border-gray-300 px-6 py-4 pb-4">
              <h2 className="text-xl font-medium ">Products</h2>
              <Link href={"/admin/products/add"} className="primary-btn">
                Add Product
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-between px-4 py-2 border-b">
              <ShowPerPage />
              <div className="flex items-center justify-center gap-3">
                {/* <CategoryDropdown
                  categories={JSON.parse(
                    JSON.stringify(categoriesData.categories)
                  )}
                  subcategories={JSON.parse(
                    JSON.stringify(subcategoriesData.subcategories)
                  )}
                /> */}
                <Search />
              </div>
            </div>
            <table className="w-full table-auto">
              <thead className="bg-gray-100 ">
                <tr className="text-xs text-left text-gray-500 border-b border-gray-200 ">
                  <th className="px-6 py-3 font-medium ">Sr. No</th>
                  <th className="px-6 py-3 font-medium ">Name</th>
                  <th className="px-6 py-3 font-medium ">Image</th>
                  <th className="px-6 py-3 font-medium ">Category</th>
                  <th className="px-6 py-3 font-medium ">Sub Category</th>
                  <th className="px-6 py-3 font-medium ">Manufacture Date</th>
                  <th className="px-6 py-3 font-medium ">Action</th>
                </tr>
              </thead>
              <tbody>
                {productsData?.products?.map((product, index) => {
                  const absoluteIndex =
                    (currentPage - 1) * pagesPerView + index + 1;
                  return (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="px-6 py-3 text-sm font-medium">
                        {absoluteIndex}
                      </td>
                      <td className="px-6 py-3 text-sm font-medium">
                        {product.name}
                      </td>
                      <td className="px-6 py-3 text-sm font-medium">
                        {" "}
                        <Image
                          height={"100"}
                          width={"100"}
                          src={product.photos[0]?.url}
                          alt={product.name}
                          className="md:w-16 md:h-16 h-10 w-10 object-cover rounded-lg"
                        />
                      </td>
                      <td className="px-6 py-3 text-sm font-medium">
                        {product.category?.name}
                      </td>
                      <td className="px-6 py-3 text-sm font-medium">
                        {product.subcategory?.name}
                      </td>
                      <td className="px-6 py-3 text-sm font-medium">
                        {formatDateToIndian(product.manufactureDate)}
                      </td>
                      <td className="items-center px-6 py-6 md:py-10 gap-2 flex-1 flex">
                        <Link href={`/admin/products/${product._id}/edit`} className="font-medium">
                          <EditIcon className="w-4 h-4 text-blue-600 hover:text-blue-500 dark:hover:text-gray-300 dark:text-blue-300 bi bi-pencil-square" />
                        </Link>
                        <Link href="#" className="font-medium">
                          <DeleteIcon className="w-4 h-4 text-red-600 hover:text-red-500 dark:hover:text-red-300 dark:text-red-400 bi bi-trash-fill" />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <PageNavigation totalPages={productsData.pagination.totalPages} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
