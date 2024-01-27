import AboutImageDecoration from "@/components/AboutImageDecoration";
import Map from "@/components/Map";
import { getWebData } from "@/lib/Data/data";
import Image from "next/image";
import Link from "next/link";

const About = async () => {
  const webData = await getWebData();
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
              {webData?.about?.title}
            </h2>
            <p className="mb-4 text-base leading-7 text-gray-500">
              {webData?.about?.short_description}
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
                src={webData?.about?.photo?.url}
                alt=""
                className="z-40 object-cover rounded-lg"
              />
            </div>
            <AboutImageDecoration />
          </div>
          <p className="mb-4 text-base leading-7 text-gray-500 px-4 py-10">
            {webData?.about?.full_description}
          </p>
          <div className="-mx-6 lg:-mx-20 flex-1 lg:-mb-20">
            <Map link={webData?.contact?.map} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
