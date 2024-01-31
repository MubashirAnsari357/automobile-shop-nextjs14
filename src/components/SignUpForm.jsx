"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "./icons";
import { addUser } from "@/lib/Actions/actions";
import { useFormStatus } from "react-dom";

const SignUpForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [file, setFile] = useState(null);
  const { pending } = useFormStatus();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
    }
  };

  const handlePasswordVisibility = (e) => {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  };
  return (
    <form action={addUser} className="mt-6">
      <div className="mt-5">
        <label htmlFor="name" className="block text-gray-700">
          Name:
        </label>
        <input
          type="text"
          className="w-full px-4 py-3 mt-2 bg-white rounded-lg"
          name="name"
          placeholder="Enter your name"
        />
      </div>
      <div className="mt-5">
        <label htmlFor="" className="block text-gray-700">
          Email:
        </label>
        <input
          type="email"
          className="w-full px-4 py-3 mt-2 bg-white rounded-lg"
          name="email"
          placeholder="Enter your email"
        />
      </div>
      <div className="mt-5">
        <div>
          <label htmlFor="password" className="text-gray-700">
            Password:
          </label>
          <div className="relative flex items-center mt-2">
            <input
              type={`${passwordVisible ? "text" : "password"}`}
              className="w-full px-4 py-3 bg-white rounded-lg"
              name="password"
              placeholder="Enter password"
              minLength={8}
              maxLength={16}
            />
            <button
              className="absolute right-0 mr-3 "
              onClick={handlePasswordVisibility}
            >
              {passwordVisible ? (
                <EyeIcon className={"w-5 h-5"} />
              ) : (
                <EyeSlashIcon className={"w-5 h-5"} />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="mt-5">
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
      <div className="relative cursor-pointer">
        <label
          htmlFor="photo"
          className="px-4 py-2 bg-gray-200 flex items-center justify-center cursor-pointer active:bg-gray-300"
        >
          Add Profile Photo
        </label>
        <input
          type="file"
          name="photo"
          id="photo"
          className="absolute top-0 left-0 opacity-0"
          onChange={handleFileChange}
        />
      </div>
      <button
        disabled={pending}
        className={`primary-btn w-full mt-5 ${pending && "bg-blue-900"}`}
        type="submit"
      >
        {pending ? "Signing up..." : "Signup"}
      </button>
      <p className="mt-6 text-gray-700">
        {" "}
        Already have an account?
        <Link
          href="#"
          className="font-semibold text-blue-500 hover:text-blue-700"
        >
          {" "}
          Login
        </Link>
      </p>
    </form>
  );
};

export default SignUpForm;
