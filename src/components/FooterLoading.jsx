import React from "react";

const FooterLoading = () => {
  return (
    <footer class="bg-white border animate-pulse">
      <div class="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
        <div class="flex justify-center h-4 bg-gray-200 rounded"></div>

        <p class="mx-auto mt-4 max-w-md text-center leading-relaxed bg-gray-200 rounded h-4"></p>

        <ul class="mt-8 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <div class="h-4 w-12 bg-gray-200 rounded"></div>
          </li>
          <li>
            <div class="h-4 w-12 bg-gray-200 rounded"></div>
          </li>
          <li>
            <div class="h-4 w-12 bg-gray-200 rounded"></div>
          </li>
        </ul>

        <ul class="mt-8 flex justify-center gap-6 md:gap-8">
          <li>
            <div class="h-4 w-4 bg-gray-200 rounded"></div>
          </li>
          <li>
            <div class="h-4 w-4 bg-gray-200 rounded"></div>
          </li>
          <li>
            <div class="h-4 w-4 bg-gray-200 rounded"></div>
          </li>
        </ul>
        <div class="mt-8 border-t border-gray-100 pt-8">
          <div class="text-center text-xs/relaxed bg-gray-200 h-4"></div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLoading;
