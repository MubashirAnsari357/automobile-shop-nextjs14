'use client';
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React, { useTransition } from "react";
import { AnimatedCircleIcon, SearchIcon } from "./icons";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(window.location.search);
    params.set('page', '1')
    if (term) {
      params.set('q', term);
    } else {
      params.delete('q'); 
    }
    startTransition(() => {
      replace(`${pathname}?${params.toString()}`);
    });
  }, 300);

  return (
    <div className="relative max-w-md">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="rounded-md shadow-sm">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
          aria-hidden="true"
        >
          <SearchIcon
            className="mr-3 h-4 w-4 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          type="search"
          name="search"
          id="search"
          // disabled={disabled}
          className="h-10 block min-w-20 w-full rounded-md border border-gray-200 px-9 sm:text-sm"
          placeholder="Search by name..."
          spellCheck={false}
          defaultValue={searchParams?.get('q')?.toString()}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      {isPending && (
        <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center">
          <AnimatedCircleIcon className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700" />
        </div>
      )}
    </div>
  );
};

export default Search;
