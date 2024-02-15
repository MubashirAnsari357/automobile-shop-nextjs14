"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { addProduct, updateProduct } from "@/lib/Actions/actions";
import { formatDateToISO } from "@/lib/utils";
import SubmitButton from "./SubmitButton";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const ProductForm = ({ edit, product, categories, subcategories }) => {
  const [files, setFiles] = useState(product?.photos || []);

  const [selectedCategory, setSelectedCategory] = useState({
    label: product?.category?.name,
    value: product?.category?._id,
  });
  const [subCategories, setSubCategories] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState({
    label: product?.subcategory?.name,
    value: product?.subcategory?._id,
  });

  useEffect(() => {
    setSubCategories(
      subcategories.filter(
        (subcategory) => subcategory.category._id === selectedCategory?.value
      )
    );
  }, [subcategories, selectedCategory]);

  const categoryOptions = categories?.map((category, index) => {
    return {
      label: category?.name,
      value: category?._id,
    };
  });

  const subcategoryOptions = subCategories?.map((subcategory, index) => {
    return {
      label: subcategory?.name,
      value: subcategory?._id,
    };
  });

  const handleSelect = (selectedOption) => {
    setSelectedCategory(selectedOption);
    setSelectedSubCategory("");
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
          <Select
            name="category"
            defaultValue={edit && selectedCategory}
            options={categoryOptions}
            components={animatedComponents}
            onChange={handleSelect}
            required
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="subcategory" className="formLabel">
            Model
          </label>
          <Select
            name="subcategory"
            value={edit && selectedSubCategory}
            onChange={(selectedOption) => setSelectedSubCategory(selectedOption)}
            options={subcategoryOptions}
            components={animatedComponents}
            required
          />
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
            defaultValue={
              product?.manufactureDate
                ? formatDateToISO(product?.manufactureDate)
                : ""
            }
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
      <SubmitButton edit={edit} title={"Product"} />
    </form>
  );
};

export default ProductForm;
