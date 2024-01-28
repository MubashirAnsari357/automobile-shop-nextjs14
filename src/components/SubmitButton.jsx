"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { AddIcon } from "./icons";

const SubmitButton = ({ edit, title }) => {
  const { pending } = useFormStatus();
  const isAdding = !edit && pending;
  const buttonText = isAdding ? "Adding" : (edit ? (pending ? "Updating" : "Update") : "Add");

  return (
    <button type="submit" disabled={pending} className={`primary-btn w-full ${pending && 'bg-blue-900'}`}>
      {!edit && <AddIcon className="me-1 -ms-1 w-5 h-5" />}
      {buttonText} {title}
    </button>
  );
};

export default SubmitButton;
