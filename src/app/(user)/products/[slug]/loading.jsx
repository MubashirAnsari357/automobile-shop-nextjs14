import React from "react";

const Loading = () => {
  return (
    <div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 animate-pulse">
      <div class="lg:col-start-1 lg:row-span-2 lg:mt-0 lg:self-center">
        <div class="aspect-square rounded-lg">
          <div class="h-full rounded-lg bg-gray-200"></div>
        </div>
      </div>
      <div class="lg:max-w-lg lg:self-end mt-4">
        <div class="lg:ml-8 md:ml-6 lg:mt-0 mt-6">
          <div class="border-b border-gray-200 pb-6">
            <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
            <div class="h-6 bg-gray-200 rounded w-full"></div>
          </div>
          <div class="py-4 border-b border-gray-200 flex items-center justify-between">
            <div class="h-4 bg-gray-200 rounded w-1/3"></div>
            <div class="h-4 bg-gray-200 rounded w-1/3"></div>
          </div>
          <div class="py-4 border-b border-gray-200 flex items-center justify-between">
            <div class="h-4 bg-gray-200 rounded w-1/3"></div>
            <div class="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
          <div class="h-10 bg-gray-200 rounded w-full my-10"></div>
          <div>
            <div class="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div class="h-4 bg-gray-200 rounded w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
