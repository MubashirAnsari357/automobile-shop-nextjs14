"use client";
import React, { useState } from "react";
import { AddIcon } from "./icons";
import Image from "next/image";
import { updateAbout } from "@/lib/Actions/actions";

const AboutForm = ({setIsOpen, webData}) => {
  const [file, setFile] = useState(webData.about.photo.url);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async (id, formData) => {
    const res = await updateAbout(id, formData);
    if (res) {
      setIsOpen(false);
    }
  };

  return (
    <form action={handleSubmit.bind(null, webData._id)} className="p-4 md:p-5">
      <div className="grid gap-4 mb-4 grid-cols-2">
        <div className="col-span-2">
          <label htmlFor="name" className="formLabel">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={webData.about.title}
            className="formInput"
            placeholder="About Title"
            required
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="short_description" className="formLabel">
            Short Description
          </label>
          <textarea
            id="short_description"
            name="short_description"
            rows={3}
            className="formInput"
            placeholder="Write short description here"
            defaultValue={webData.about.short_description}
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="full_description" className="formLabel">
            Long Description
          </label>
          <textarea
            id="full_description"
            name="full_description"
            rows={6}
            className="formInput"
            placeholder="Write full description here"
            defaultValue={webData.about.full_description}
          />
        </div>
        <div className="col-span-2">
          <div className="flex flex-wrap gap-2 justify-start items-center">
            {file && (
              <Image
                width={"80"}
                height={"80"}
                src={file}
                alt={file?.name}
                className="h-20 w-20 object-cover mb-2 rounded-md cursor-pointer"
              />
            )}
          </div>
        </div>
        <div className="col-span-2 relative cursor-pointer">
          <label
            htmlFor="photos"
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
      <button type="submit" className="primary-btn w-full">
        <AddIcon className="me-1 -ms-1 w-5 h-5" />
        Update About
      </button>
    </form>
  );
};

export default AboutForm;
