import HomeForm from "@/components/HomeForm";
import { getProducts, getWebData } from "@/lib/Data/data";
import React from "react";

const EditHome = async () => {
  const webData = await getWebData();
  const { products } = await getProducts();
  return (
    <div className="p-6 max-w-3xl w-full max-h-full mx-auto">
      <div className="bg-white rounded-lg shadow-xl">
        <div className="items-center justify-between p-4 md:p-5 border-b rounded-t">
          <h3 className="text-lg font-semibold px-5 text-gray-900 ">
            Edit Home
          </h3>
          <HomeForm
            edit={true}
            home={JSON.parse(JSON.stringify(webData?.homepage))}
            id={webData?._id}
            products={JSON.parse(JSON.stringify(products))}
          />
        </div>
      </div>
    </div>
  );
};

export default EditHome;
