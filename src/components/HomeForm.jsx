"use client";
import React, { useState } from "react";
import Image from "next/image";
import { updateHome } from "@/lib/Actions/actions";
import SubmitButton from "./SubmitButton";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const HomeForm = ({ edit, home, id, products }) => {
  const options = products.map((product) => {
    return {
      label: (
        <div className="flex items-center">
          <div className="relative w-12 h-12 bg-contain overflow-hidden rounded-lg">
            <Image src={product.photos[0].url} fill alt={product.name} />
          </div>
          <div className="ml-2">
            <p className="text-sm font-medium text-gray-900 truncate">
              {product.name}
            </p>
            <p className="text-sm text-gray-500 truncate">
              {product.category.name}
            </p>
          </div>
        </div>
      ),
      value: product._id,
    };
  });

  const [file, setFile] = useState(home?.photo?.url || null);
  const [selectedProducts, setSelectedProducts] = useState(
    home?.products
      ? options.filter((option) =>
          home.products.map((product) => product._id).includes(option.value)
        )
      : []
  );
  const [selectedProductsIds, setSelectedProductsIds] = useState(
    home?.products?.map((product) => product._id) || []
  );

  console.log(selectedProductsIds);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
    }
  };

  const handleEdit = async (formData) => {
    const response = await updateHome(id, selectedProductsIds, formData);
    console.log(response);
  };

  const filterOptions = (candidate, inputValue) => {
    if (inputValue) {
      const productName =
        candidate.label.props.children[1].props.children[0].props.children;
      return productName.toLowerCase().includes(inputValue.toLowerCase());
    }
    return true;
  };

  const handleSelect = (selectedOptions) => {
    const selectedIds = selectedOptions.map((option) => option.value);

    setSelectedProducts(selectedOptions);

    setSelectedProductsIds(selectedIds);
  };

  return (
    <form action={handleEdit} className="p-4 md:p-5">
      <div className="grid gap-4 mb-4 grid-cols-2">
        <div className="col-span-2">
          <label htmlFor="title" className="formLabel">
            Overlay Text
          </label>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={home?.overlayText || ""}
            className="formInput"
            placeholder="Text to be shown over image"
            required
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="title" className="formLabel">
            Products
          </label>
          <Select
            name="products"
            onChange={handleSelect}
            defaultValue={selectedProducts}
            options={options}
            isMulti={true}
            components={animatedComponents}
            closeMenuOnSelect={false}
            filterOption={filterOptions}
          />
        </div>
        <div className="col-span-2">
          <div className="flex flex-wrap gap-2 justify-start items-center">
            {file && (
              <Image
                width={"80"}
                height={"80"}
                src={file || URL.createObjectURL(file)}
                alt={file?.name || ""}
                className="h-20 w-20 object-cover mb-2 rounded-md cursor-pointer"
              />
            )}
          </div>
        </div>
        <div className="col-span-2 relative cursor-pointer">
          <label
            htmlFor="photo"
            className="px-4 py-2 bg-gray-200 flex items-center justify-center cursor-pointer active:bg-gray-300"
          >
            Add photo
          </label>
          <input
            type="file"
            name="photo"
            id="photo"
            className="absolute top-0 left-0 opacity-0"
            onChange={handleFileChange}
          />
        </div>
      </div>
      <SubmitButton edit={edit} title={"Home"} />
    </form>
  );
};

export default HomeForm;
