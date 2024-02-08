"use client";
import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import { logout, updatePassword } from "@/lib/Actions/actions";
import { toast } from "react-toastify";
import { EyeIcon, EyeSlashIcon } from "./icons";

const ChangePasswordForm = ({ edit, email }) => {
  const [isPassVisible1, setIsPassVisible1] = useState(false);
  const [isPassVisible2, setIsPassVisible2] = useState(false);
  const [isPassVisible3, setIsPassVisible3] = useState(false);

  const update = async (formData) => {
    const response = await updatePassword(formData);
    if (response.success) {
      toast.success(response.message);
      setTimeout(async () => {
        await logout();
      }, 3000);
    } else {
      toast.error(response.message);
    }
  };

  return (
    <form action={update} className="p-4 md:p-5">
      <input type="hidden" name="email" value={email} />
      <div className="grid gap-4 mb-4 grid-cols-2">
        <div className="col-span-2">
          <label htmlFor="oldPassword" className="formLabel">
            Old Password
          </label>
          <div className="relative flex items-center">
            <input
              type={isPassVisible1 ? "text" : "password"}
              className="formInput"
              name="oldPassword"
              placeholder="Enter old password"
              required
            />
            <button
              type="button"
              className="absolute right-0 mr-3 "
              onClick={() => setIsPassVisible1(!isPassVisible1)}
            >
              {isPassVisible1 ? (
                <EyeIcon className={"w-5 h-5"} />
              ) : (
                <EyeSlashIcon className={"w-5 h-5"} />
              )}
            </button>
          </div>
        </div>
        <div className="col-span-2">
          <label htmlFor="newPassword" className="formLabel">
            New Password
          </label>
          <div className="relative flex items-center">
            <input
              type={isPassVisible2 ? "text" : "password"}
              className="formInput"
              name="newPassword"
              placeholder="Enter new password"
              required
            />
            <button
              type="button"
              className="absolute right-0 mr-3 "
              onClick={() => setIsPassVisible2(!isPassVisible2)}
            >
              {isPassVisible2 ? (
                <EyeIcon className={"w-5 h-5"} />
              ) : (
                <EyeSlashIcon className={"w-5 h-5"} />
              )}
            </button>
          </div>
        </div>
        <div className="col-span-2">
          <label htmlFor="cnewPassword" className="formLabel">
            Confirm New Password
          </label>
          <div className="relative flex items-center">
            <input
              type={isPassVisible3 ? "text" : "password"}
              className="formInput"
              name="cnewPassword"
              placeholder="Enter new password again"
              required
            />
            <button
              type="button"
              className="absolute right-0 mr-3 "
              onClick={() => setIsPassVisible3(!isPassVisible3)}
            >
              {isPassVisible3 ? (
                <EyeIcon className={"w-5 h-5"} />
              ) : (
                <EyeSlashIcon className={"w-5 h-5"} />
              )}
            </button>
          </div>
        </div>
      </div>
      <SubmitButton edit={edit} title={"Password"} />
    </form>
  );
};

export default ChangePasswordForm;
