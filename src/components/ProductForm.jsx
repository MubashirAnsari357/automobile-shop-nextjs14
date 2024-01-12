import React from "react";
import { AddIcon } from "./icons";

const ProductForm = () => {
  return (
    <form className="p-4 md:p-5">
      <div className="grid gap-4 mb-4 grid-cols-2">
        <div className="col-span-2">
          <label htmlFor="name" className="formLabel">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="formInput"
            placeholder="Type product name"
            required=""
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="category" className="formLabel">
            Category
          </label>
          <select id="category" className="formInput" defaultValue="">
            <option>Select Category</option>
            <option value="TV">TV/Monitors</option>
            <option value="PC">PC</option>
            <option value="GA">Gaming/Console</option>
            <option value="PH">Phones</option>
          </select>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="subcategory" className="formLabel">
            SubCategory
          </label>
          <select id="category" className="formInput" defaultValue="">
            <option>Select Category</option>
            <option value="TV">TV/Monitors</option>
            <option value="PC">PC</option>
            <option value="GA">Gaming/Console</option>
            <option value="PH">Phones</option>
          </select>
        </div>

        <div className="col-span-2">
          <label htmlFor="description" className="formLabel">
            Product Description
          </label>
          <textarea
            id="description"
            rows={4}
            className="formInput"
            placeholder="Write product description here"
            defaultValue={""}
          />
        </div>
      </div>
      <button type="submit" className="primary-btn w-full">
        <AddIcon className="me-1 -ms-1 w-5 h-5" />
        Add new product
      </button>
    </form>
  );
};

export default ProductForm;
