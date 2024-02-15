"use client";
import React from "react";
import { addSubCategory, updateSubcategory } from "@/lib/Actions/actions";
import SubmitButton from "./SubmitButton";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const SubCategoryForm = ({ categories, subcategory, edit }) => {
  const handleEdit = updateSubcategory.bind(null, subcategory?._id);
  const categoryOptions = categories?.map((category, index) => {
    return {
      label: category.name,
      value: category._id,
    };
  });

  const selectedCategory =
    {
      label: subcategory?.category?.name,
      value: subcategory?.category?._id,
    };

  return (
    <form action={edit ? handleEdit : addSubCategory} className="p-4 md:p-5">
      <div className="grid gap-4 mb-4 grid-cols-2">
        <div className="col-span-2">
          <label htmlFor="category" className="formLabel">
            Category
          </label>
          <Select
            name="category"
            defaultValue={edit && selectedCategory}
            options={categoryOptions}
            components={animatedComponents}
            required
          />
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
            placeholder="Type subcategory name"
            defaultValue={subcategory?.name || ""}
            required
          />
        </div>
      </div>
      <SubmitButton edit={edit} title={"Subcategory"} />
    </form>
  );
};

export default SubCategoryForm;
