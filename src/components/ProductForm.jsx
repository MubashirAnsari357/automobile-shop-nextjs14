"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { addProduct, updateProduct } from "@/lib/Actions/actions";
import { formatDateToISO } from "@/lib/utils";
import SubmitButton from "./SubmitButton";

const ProductForm = ({ edit, product, categories, subcategories }) => {
  const [files, setFiles] = useState(product?.photos || []);

  const [selectedCategory, setSelectedCategory] = useState(product?.category?._id || "");
  const [subCategories, setSubCategories] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(product?.subcategory?._id || "");

  useEffect(() => {
    setSubCategories(
      subcategories.filter(
        (subcategory) => subcategory.category._id === selectedCategory
      )
    );
  }, [subcategories, selectedCategory]);


  const handleSelect = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleEdit = updateProduct.bind(null, product?._id);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
  };

  // const removeFile = (index) => {
  //   const updatedFiles = [...files];
  //   updatedFiles.splice(index, 1);
  //   setFiles(updatedFiles);
  // };
  return (
    <form action={edit ? handleEdit : addProduct} className="p-4 md:p-5">
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
            required
            defaultValue={product?.name || ""}
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="category" className="formLabel">
            Category
          </label>
          <select
            id="category"
            className="formInput"
            name="category"
            onChange={handleSelect}
            defaultValue={product?.category?._id || ""}
            required
          >
            {categories.map((category, index) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="subcategory" className="formLabel">
            Model
          </label>
          <select
            id="subcategory"
            className="formInput"
            name="subcategory"
            disabled={!selectedCategory}
            value={selectedSubCategory || ""}
            onChange={(e) => setSelectedSubCategory(e.target.value)}
            required
          >
            {subCategories?.map((subcategory, index) => (
            <option key={subcategory?._id} value={subcategory?._id}>
              {subcategory?.name}
            </option>
          ))}
          </select>
        </div>
        <div className="col-span-2">
          <label htmlFor="name" className="formLabel">
            Manufacture Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="formInput"
            placeholder="Select Manufacture Date"
            required
            defaultValue={product?.manufactureDate ? formatDateToISO(product?.manufactureDate) : ""}
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="description" className="formLabel">
            Product Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            className="formInput"
            placeholder="Write product description here"
            required
            defaultValue={product?.description || ""}
          />
        </div>
        <div className="col-span-2">
          <div className="flex flex-wrap gap-2 justify-start items-center">
            {files.map((file, index) => (
              <div key={index} className="relative w-20 h-20 rounded-md">
                <Image
                  width={"80"}
                  height={"80"}
                  src={file?.url || URL.createObjectURL(file)}
                  alt={file.name || ""}
                  className="h-20 w-20 object-cover mb-2 rounded-md cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-2 relative cursor-pointer">
          <label
            htmlFor="photos"
            className="px-4 py-2 bg-gray-200 flex items-center justify-center cursor-pointer active:bg-gray-300"
          >
            Add photos
          </label>
          <input
            type="file"
            name="photos"
            id="photos"
            multiple
            onChange={handleFileChange}
            className="absolute top-0 left-0 opacity-0"
          />
        </div>
        {/* <div className="col-span-2">
          
        </div> */}
      </div>
      <SubmitButton edit={edit} title={'Product'} />
    </form>
  );
};

export default ProductForm;
