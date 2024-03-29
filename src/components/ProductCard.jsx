import Image from "next/image";
import { HoverPlayIcon } from "./icons";
import Link from "next/link";

export default function ProductCard({
  id,
  photo,
  name,
  category,
  subcategory,
  description,
  manufactureDate,
}) {
  return (
    <div
      href={""}
      className="mb-10 mt-4 mx-auto flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
    >
      <Link
        href={`/products/${id}`}
        className="relative flex h-60 overflow-hidden rounded-t-lg"
      >
        <Image
          className="peer absolute top-0 right-0 h-full w-full object-cover hover:origin-center hover:scale-125 transition duration-500"
          fill={true}
          src={photo}
          alt="product image"
        />
      </Link>
      <div className="mt-4 px-5 pb-5">
        <Link href={`/products/${id}`}>
          <h5 className="text-xl font-bold tracking-tight text-slate-900 truncate">
            {name}
          </h5>
        </Link>
        <p className="truncate text-slate-900">{description}</p>

        <div className="mt-2 mb-5 flex items-center justify-between">
          <p className="text-base font-bold text-slate-900">{category}</p>
          <p className="text-base text-slate-900">{subcategory}</p>
        </div>
        <Link
          href=""
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Send Inquiry
        </Link>
      </div>
    </div>
  );
}

