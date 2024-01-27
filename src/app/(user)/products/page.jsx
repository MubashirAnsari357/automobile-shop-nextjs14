import PageNavigation from "@/components/PageNavigation";
import ProductCard from "@/components/ProductCard";
import Search from "@/components/Search";
import ShowPerPage from "@/components/ShowPerPage";
import { getProducts } from "@/lib/Data/data";

const Products = async ({ searchParams }) => {
  const search = searchParams.q ?? "";
  const currentPage = Number(searchParams?.page) || 1;
  const pagesPerView = Number(searchParams?.limit) || 10;
  const productsData = await getProducts(search, pagesPerView, currentPage);
  return (
    <section className="">
      <div className="justify-center flex-1 mx-auto p-6">
        <div className="px-4 mb-10 md:text-center">
          <p className="mb-2 text-lg font-semibold text-blue-500">
            All Square Parts
          </p>
          <h2 className="pb-2 text-2xl font-bold text-gray-800 md:text-4xl">
            Our range
          </h2>
          <div className="flex w-32 mt-1 overflow-hidden rounded md:mx-auto">
            <div className="flex-1 h-2 bg-blue-200"></div>
            <div className="flex-1 h-2 bg-blue-400"></div>
            <div className="flex-1 h-2 bg-blue-300"></div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between mx-4 py-2 border-b">
          <ShowPerPage />
          <div className="flex items-center justify-center gap-3">
            <Search />
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-8 flex-wrap">
          {productsData.products.map((product) => (
            <ProductCard
              key={product._id}
              photo={product.photos[0].url}
              name={product.name}
              description={product.description}
              subcategory={product.subcategory.name}
              manufactureDate={product.manufactureDate}
              category={product.category.name}
            />
          ))}
        </div>
        <PageNavigation totalPages={productsData.pagination.totalPages} />
      </div>
    </section>
  );
};

export default Products;
