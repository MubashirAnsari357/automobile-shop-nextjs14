"use client";
import React, { useState } from "react";
import Modal from "./Modal";

const ModalWrapper = ({ btnTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={()=>setIsOpen(!isOpen)} className="primary-btn">
        Add {btnTitle}
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default ModalWrapper;
