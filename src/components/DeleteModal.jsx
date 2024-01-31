"use client";
import React, { useState } from "react";
import { CloseIcon, DeleteIcon, WarningIcon } from "./icons";
import {
  deleteCategory,
  deleteProduct,
  deleteSubCategory,
} from "@/lib/Actions/actions";
import { toast } from "react-toastify";
import { useFormStatus } from "react-dom";

const DeleteModal = ({ id, message, type }) => {
  const { pending } = useFormStatus();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleDelete = async (id, formData) => {
    let response;
    if (type === "category") {
      response = await deleteCategory(id, formData);
    } else if (type === "subcategory") {
      response = await deleteSubCategory(id, formData);
    } else if (type === "product") {
      response = await deleteProduct(id, formData);
    }
    if (response) {
      toast.success("Deleted Successfully!");
      setIsModalVisible(false);
    } else {
      toast.error("Something went wrong!");
      setIsModalVisible(false);
    }
  };
  return (
    <>
      <button
        onClick={() => setIsModalVisible(!isModalVisible)}
        className="font-medium"
        type="button"
      >
        <DeleteIcon className="w-4 h-4 text-red-600 hover:text-red-500 bi bi-trash-fill" />
      </button>
      <div
        id="popup-modal"
        tabIndex={-1}
        className={`${
          !isModalVisible ? "hidden" : "flex"
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative p-6 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow-lg">
            <button
              type="button"
              onClick={() => setIsModalVisible(!isModalVisible)}
              className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              data-modal-hide="popup-modal"
            >
              <CloseIcon className={"w-3 h-3"} />
              <span className="sr-only">Close modal</span>
            </button>

            <div className="p-4 md:p-5 text-center">
              <WarningIcon className={"mx-auto mb-4 text-red-600 w-12 h-12 "} />
              <h3 className="mb-5 text-lg font-normal text-gray-500 ">
                {message}
              </h3>
              <form
                action={handleDelete.bind(null, id)}
                className="inline-flex items-center"
              >
                <input type="hidden" name="id" id="id" value={id} />
                <button
                  disabled={pending}
                  type="submit"
                  className={`text-white bg-red-600 hover:bg-red-800 font-medium rounded-lg text-sm  px-5 py-2.5 text-center me-2 ${
                    pending && "opacity-40 cursor-not-allowed"
                  }`}
                >
                  {pending ? "Deleting..." : "Yes, Delete"}
                </button>
              </form>
              <button
                type="button"
                onClick={() => setIsModalVisible(!isModalVisible)}
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
