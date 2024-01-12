import React from "react";
import { AddIcon, CloseIcon } from "./icons";
import ProductForm from "./ProductForm";

const Modal = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div
        id="crud-modal"
        tabIndex={-1}
        aria-hidden="true"
        className={`${
          !isOpen && "hidden"
        } overflow-y-auto overflow-x-hidden flex md:ml-16 fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative p-4 w-full max-w-lg max-h-full">
          <div className="relative bg-white rounded-lg shadow-xl">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
              <h3 className="text-lg font-semibold text-gray-900 ">
                Create New Product
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                data-modal-toggle="crud-modal"
                onClick={()=>setIsOpen(!isOpen)}
              >
                <CloseIcon className="w-3 h-3" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <ProductForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
