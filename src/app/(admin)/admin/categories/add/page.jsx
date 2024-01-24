import CategoryForm from "@/components/CategoryForm";
import React from "react";

const AddCategory = async () => {
  return (
    <div className="p-6 max-w-3xl w-full max-h-full mx-auto">
      <div className="bg-white rounded-lg shadow-xl">
        <div className="items-center justify-between p-4 md:p-5 border-b rounded-t">
          <h3 className="text-lg font-semibold px-5 text-gray-900 ">Add Category</h3>
          <CategoryForm />
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
