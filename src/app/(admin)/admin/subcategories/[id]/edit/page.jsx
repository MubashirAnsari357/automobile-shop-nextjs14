import SubCategoryForm from "@/components/SubCategoryForm";
import { getCategories, getSubcategoryById } from "@/lib/Data/data";
import React from "react";

const EditSubcategory = async ({ params: { id } }) => {
  const categoriesData = await getCategories();
  const subcategory = await getSubcategoryById(id);
  return (
    <div className="p-6 max-w-3xl w-full max-h-full mx-auto">
      <div className="bg-white rounded-lg shadow-xl">
        <div className="items-center justify-between p-4 md:p-5 border-b rounded-t">
          <h3 className="text-lg font-semibold px-5 text-gray-900 ">
            Edit Subcategory
          </h3>
          <SubCategoryForm
            edit={true}
            categories={JSON.parse(JSON.stringify(categoriesData.categories))}
            subcategory={subcategory}
          />
        </div>
      </div>
    </div>
  );
};

export default EditSubcategory;
