"use client";
import React, { useState } from "react";
import Image from "next/image";
import { updateUser } from "@/lib/Actions/actions";
import SubmitButton from "./SubmitButton";

const ProfileForm = ({edit, user, id}) => {
  const [file, setFile] = useState(user?.photo?.url || null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
    }
  };

  const handleEdit = updateUser.bind(null, id);

  return (
    <form action={handleEdit} className="p-4 md:p-5">
      <div className="grid gap-4 mb-4 grid-cols-2">
        <div className="col-span-2">
          <label htmlFor="name" className="formLabel">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={user?.name || ''}
            className="formInput"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="email" className="formLabel">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue={user?.email || ''}
            className="formInput"
            placeholder="Your Email"
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
            Edit Profile photo
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
      <SubmitButton edit={edit} title={'Profile'} />
    </form>
  );
};

export default ProfileForm;
