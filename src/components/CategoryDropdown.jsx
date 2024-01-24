"use client";
import React from "react";

const CategoryDropdown = ({categories, subcategories}) => {
  return (
    <div className="flex items-center justify-between gap-2">
      <select
        className="h-10 min-w-20 max-w-md bg-gray-50 border border-gray-300 rounded-lg px-2"
        name="category"
        id="category"
      >
        {categories.map((category, index) => (
            <option key={index} value={category._id}>
              {category.name}
            </option>
        ))}
      </select>
      <select
        className="h-10 min-w-20 max-w-md bg-gray-50 border border-gray-300 rounded-lg px-2"
        name="category"
        id="category"
      >
        {subcategories.map((subcategory, index) => (
            <option key={index} value={subcategory._id}>
              {subcategory.name}
            </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryDropdown;
