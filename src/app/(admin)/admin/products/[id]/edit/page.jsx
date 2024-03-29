import ProductForm from "@/components/ProductForm";
import {
  getCategories,
  getProductyById,
  getSubCategories,
} from "@/lib/Data/data";
import React from "react";

const EditProduct = async ({ params: { id } }) => {
  const product = await getProductyById(id);
  const { categories } = await getCategories();
  const { subcategories } = await getSubCategories();

  return (
    <div className="p-6 max-w-3xl w-full max-h-full mx-auto">
      <div className="bg-white rounded-lg shadow-xl">
        <div className="items-center justify-between p-4 md:p-5 border-b rounded-t">
          <h3 className="text-lg font-semibold px-5 text-gray-900 ">
            Edit Product
          </h3>
          <ProductForm
            edit={true}
            product={JSON.parse(JSON.stringify(product))}
            categories={JSON.parse(JSON.stringify(categories))}
            subcategories={JSON.parse(
              JSON.stringify(subcategories)
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
