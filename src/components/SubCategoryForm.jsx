import React from "react";
import { AddIcon } from "./icons";
import { addSubCategory, updateSubcategory } from "@/lib/Actions/actions";

const SubCategoryForm = ({ categories, subcategory, edit }) => {
  const handleEdit = updateSubcategory.bind(null, subcategory?._id)
  return (
    <form action={edit ? handleEdit : addSubCategory} className="p-4 md:p-5">
      <div className="grid gap-4 mb-4 grid-cols-2">
        <div className="col-span-2">
          <label htmlFor="category" className="formLabel">
            Category
          </label>
          <select
            id="category"
            className="formInput"
            name="category"
            defaultValue={subcategory?.category?._id || ""}
          >
            {categories.map((category, index) => (
              <option className="" key={index} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-2">
          <label htmlFor="name" className="formLabel">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="formInput"
            placeholder="Type Category name"
            defaultValue={subcategory?.name || ""}
            required
          />
        </div>
      </div>
      <button type="submit" className="primary-btn w-full">
        <AddIcon className="me-1 -ms-1 w-5 h-5" />
        {edit ? 'Update' : 'Add New'} Subcategory
      </button>
    </form>
  );
};

export default SubCategoryForm;
