import ContactForm from "@/components/ContactForm";
import { getWebData } from "@/lib/Data/data";
import React from "react";

const EditContact = async () => {
  const webData = await getWebData();
  return (
    <div className="p-6 max-w-3xl w-full max-h-full mx-auto">
      <div className="bg-white rounded-lg shadow-xl">
        <div className="items-center justify-between p-4 md:p-5 border-b rounded-t">
          <h3 className="text-lg font-semibold px-5 text-gray-900 ">
            Edit Contact
          </h3>
          <ContactForm edit={true} contact={webData.contact} id={webData._id} />
        </div>
      </div>
    </div>
  );
};

export default EditContact;
