import React from 'react'

const Loading = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-white animate-pulse">
      <div className="-mx-4 flex flex-wrap lg:justify-between p-6 lg:p-20">
        <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
          <div className="mb-12 max-w-[570px] lg:mb-0">
            <div className="mb-4 block h-4 bg-gray-200 rounded w-24"></div>
            <div className="mb-6 h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="mb-9 h-24 bg-gray-200 rounded"></div>
            <div className="mb-8 flex w-full max-w-[370px]">
              <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-800/5 text-primary sm:h-[70px] sm:max-w-[70px]"></div>
              <div className="w-full">
                <div className="mb-1 h-6 bg-gray-200 rounded w-32"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>

            <div className="mb-8 flex w-full max-w-[370px]">
              <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-800/5 text-primary sm:h-[70px] sm:max-w-[70px]"></div>
              <div className="w-full">
                <div className="mb-1 h-6 bg-gray-200 rounded w-32"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>

            <div className="mb-8 flex w-full max-w-[370px]">
              <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-800/5 text-primary sm:h-[70px] sm:max-w-[70px]"></div>
              <div className="w-full">
                <div className="mb-1 h-6 bg-gray-200 rounded w-32"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>

            <div className="mb-8 flex w-full max-w-[370px]">
              <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-800/5 text-primary sm:h-[70px] sm:max-w-[70px]"></div>
              <div className="w-full">
                <div className="mb-1 h-6 bg-gray-200 rounded w-32"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 py-8 lg:w-1/2 xl:w-5/12">
          <div className="relative h-full rounded-lg bg-gray-200 p-8 shadow-lg sm:p-12">
            <div className="h-full w-full bg-gray-200"></div>
          </div>
        </div>
      </div>
      <div className="h-72 w-full bg-gray-200 mt-8"></div>
    </section>
  )
}

export default Loading