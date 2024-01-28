"use client";
import React, { useState } from "react";
import Image from "next/image";
import { updateHome } from "@/lib/Actions/actions";
import SubmitButton from "./SubmitButton";

const HomeForm = ({edit, home, id}) => {
  const [file, setFile] = useState(home?.photo?.url || null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
    }
  };

  const handleEdit = updateHome.bind(null, id);

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
            defaultValue={home?.overlayText || ''}
            className="formInput"
            placeholder="Text to be shown over image"
            required
          />
        </div>
        <div className="col-span-2">
          <div className="flex flex-wrap gap-2 justify-start items-center">
            {file && (
              <Image
                width={"80"}
                height={"80"}
                src={file || URL.createObjectURL(file)}
                alt={file?.name || ''}
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
      <SubmitButton edit={edit} title={'Home'} />
    </form>
  );
};

export default HomeForm;
