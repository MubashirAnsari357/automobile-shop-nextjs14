import Image from "next/image";
import { HoverPlayIcon } from "./icons";
import Link from "next/link";

export default function ProductCard({imgs,title,price}) {
  return (
    <div className="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <Link
        className="relative flex h-60 overflow-hidden rounded-t-lg"
        href="#"
      >
        <Image
          className="peer absolute top-0 right-0 h-full w-full object-cover group-hover:origin-center group-hover:scale-125 transition duration-500"
          fill={true}
          src={imgs[0]}
          alt="product image"
        />
        {/* <Image
          className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0"
          width={100}
          height={100}
          src={imgs[1]}
          alt="product image"
        /> */}
        {/* <div className="absolute  bottom-0 mb-4 flex space-x-4 w-full justify-center">
          <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
          <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
          <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
        </div> */}
        {/* <HoverPlayIcon className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white h-8 w-8 transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0"/>
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          39% OFF
        </span> */}
      </Link>
      <div className="mt-4 px-5 pb-5">
        <Link href="#">
          <h5 className="text-xl tracking-tight text-slate-900">
            {title}
          </h5>
        </Link>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">${price}</span>
            <span className="text-sm text-slate-900 line-through">$699</span>
          </p>
        </div>
        <Link
          href="#"
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Send Inquiry
        </Link>
      </div>
    </div>
  );
}
