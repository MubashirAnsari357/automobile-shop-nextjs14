"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const ShowPerPage = () => {
  const perPage = [10,20,30,40,50,60,70,80,90,100,150,200];
  
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleLimit = (limit) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1')
    params.set('limit', limit.toString());
    replace(`${pathname}?${params.toString()}`);
  };


  return (
    <div className="flex items-center pl-3">
      <p className="text-xs text-gray-400">Show</p>
      <div className="px-2 py-2 text-xs text-gray-500 ">
        <select
          name="perPage"
          id="perPage"
          className="block text-base bg-gray-100 cursor-pointer"
          onChange={(e) => handleLimit(e.target.value)}
          defaultValue={searchParams?.get('limit')?.toString()}
        >
          {perPage.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <p className="text-xs text-gray-400">entries</p>
    </div>
  );
};

export default ShowPerPage;
