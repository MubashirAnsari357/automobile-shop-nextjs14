import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen animate-pulse">
      <section>
        <div className="relative overflow-hidden h-[500px] w-screen">
          <div className="relative flex h-96 overflow-hidden rounded-t-lg">
            <div className="peer absolute top-0 right-0 h-full w-full object-cover hover:origin-center hover:scale-125 transition duration-500 bg-gray-200"></div>
          </div>
        </div>
      </section>
      <div className="p-4 flex flex-wrap">
        {Array.from({ length: 4 }, (_, index) => (
          <div
            key={index}
            className="mb-10 mt-4 mx-auto flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
          >
            <div className="relative flex h-60 overflow-hidden rounded-t-lg">
              <div className="peer absolute top-0 right-0 h-full w-full object-cover hover:origin-center hover:scale-125 transition duration-500 bg-gray-200"></div>
            </div>
            <div className="mt-4 px-5 pb-5">
              <div className="h-5 bg-gray-200 rounded w-full"></div>
              <div className="truncate bg-gray-200 rounded w-full h-5 mt-2"></div>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
              <div className="flex items-center justify-center rounded-md px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 h-10 bg-gray-200"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
