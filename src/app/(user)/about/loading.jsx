import React from 'react'

const Loading = () => {
  return (
    <section className="flex items-center font-poppins">
      <div className="justify-center flex-1 mx-auto p-6 lg:p-20">
        <div className="px-4 mb-10 md:text-center md:mb-20">
          <p className="mb-2 text-lg font-semibold text-blue-500">About Us</p>
          <h2 className="pb-2 text-2xl font-bold text-gray-800 md:text-4xl">
            What we do
          </h2>
          <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
            <div className="flex-1 h-2 bg-blue-200"></div>
            <div className="flex-1 h-2 bg-blue-400"></div>
            <div className="flex-1 h-2 bg-blue-300"></div>
          </div>
        </div>
        <div className="flex flex-wrap items-center animate-pulse">
          <div className="w-full px-4 mb-10 md:w-1/2 lg:mb-0 ">
            <div className="mb-4 text-2xl font-bold text-gray-700 w-3/4 h-8 bg-gray-200 rounded"></div>
            <div className="mb-4 text-base leading-7 text-gray-500 w-full h-12 bg-gray-200 rounded"></div>
            <div className="px-4 py-2 text-gray-100 bg-blue-500 rounded-md hover:bg-blue-600 w-32 h-10"></div>
          </div>
          <div className="relative w-full px-4 mb-10 md:w-1/2 lg:mb-0">
            <div className="relative md:h-96 h-44 w-full rounded-lg bg-gray-200"></div>
          </div>
          <div className="my-4 text-base leading-7 text-gray-500 w-full h-40 bg-gray-200 rounded">
            <div className="-mx-6 lg:-mx-20 flex-1 lg:-mb-20">
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Loading