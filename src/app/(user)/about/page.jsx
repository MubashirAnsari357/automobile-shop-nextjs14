import AboutImageDecoration from "@/components/AboutImageDecoration";
import Map from "@/components/Map";
import Image from "next/image";
import Link from "next/link";

export default function About() {
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
        <div className="flex flex-wrap items-center">
          <div className="w-full px-4 mb-10 md:w-1/2 lg:mb-0 ">
            <h2 className="mb-4 text-2xl font-bold text-gray-700">
              We are providing a better facility
            </h2>
            <p className="mb-4 text-base leading-7 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              repellat expedita id voluptatum repellendus odit et? Repellendus
              in consequuntur fuga eligendi, illo porro iste corrupti quis odit
              sint veniam provident reiciendis voluptatum iure quae aut rem?
              Ratione dolores, unde cupiditate, eius totam sint consequuntur ex
              repellat consectetur maiores amet corporis non libero officia.
              Quos eligendi quasi ad. Eum animi voluptas eaque adipisci, ab ex
              sunt molestias quia magni atque dolorem officia recusandae. Id
              nobis odit unde ullam fuga non soluta.
            </p>
            <Link
              href={"/contact"}
              className="px-4 py-2 text-gray-100 bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Contact Us
            </Link>
          </div>
          <div className="relative w-full px-4 mb-10 md:w-1/2 lg:mb-0">
            <div className="relative md:h-96 h-44 w-full rounded-lg">
              <Image
                fill
                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="z-40 object-cover rounded-lg"
              />
            </div>
            <AboutImageDecoration />
          </div>
        <p className="mb-4 text-base leading-7 text-gray-500 px-4 py-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          repellat expedita id voluptatum repellendus odit et? Repellendus in
          consequuntur fuga eligendi, illo porro iste corrupti quis odit sint
          veniam provident reiciendis voluptatum iure quae aut rem? Ratione
          dolores, unde cupiditate, eius totam sint consequuntur ex repellat
          consectetur maiores amet corporis non libero officia. Quos eligendi
          quasi ad. Eum animi voluptas eaque adipisci, ab ex sunt molestias quia
          magni atque dolorem officia recusandae. Id nobis odit unde ullam fuga
          non soluta.
        </p>
        <div className="-mx-6 lg:-mx-20 flex-1 lg:-mb-20">
          <Map
            link={
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.1037649366026!2d72.62315047525782!3d23.026887079170685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8773ff7c6c23%3A0xec720bf7d9b79208!2sMubashshir%20Shahabuddin%20Ansari!5e1!3m2!1sen!2sin!4v1703860140149!5m2!1sen!2sin"
            }
          />
        </div>
        </div>
      </div>
    </section>
  );
}
