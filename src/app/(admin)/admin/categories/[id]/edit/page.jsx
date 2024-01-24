import CategoryForm from "@/components/CategoryForm";
import { getCategoryById } from "@/lib/Data/data";
import React from "react";

const EditCategory = async ({ params: { id } }) => {
  const category = await getCategoryById(id);
  return (
    <div className="p-6 max-w-3xl w-full max-h-full mx-auto">
      <div className="bg-white rounded-lg shadow-xl">
        <div className="items-center justify-between p-4 md:p-5 border-b rounded-t">
          <h3 className="text-lg font-semibold px-5 text-gray-900 ">
            Edit Category
          </h3>
          <CategoryForm edit={true} category={category} />
        </div>
      </div>
    </div>
  );
};

export default EditCategory;
