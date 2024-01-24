import SubCategoryForm from "@/components/SubCategoryForm";
import { getCategories } from "@/lib/Data/data";
import React from "react";

const AddSubcategory = async () => {
  const categoriesData = await getCategories();
  return (
    <div className="p-6 max-w-3xl w-full max-h-full mx-auto">
      <div className="bg-white rounded-lg shadow-xl">
        <div className="items-center justify-between p-4 md:p-5 border-b rounded-t">
          <h3 className="text-lg font-semibold px-5 text-gray-900 ">Add Subcategory</h3>
          <SubCategoryForm
            categories={JSON.parse(JSON.stringify(categoriesData.categories))}
          />
        </div>
      </div>
    </div>
  );
};

export default AddSubcategory;
