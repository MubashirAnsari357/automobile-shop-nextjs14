import Image from 'next/image';
import Link from 'next/link';

const Hero = ({image, overlayText}) => {
  return (
    <section>
      <div className="relative overflow-hidden h-[500px]">
        <Image
          src={image}
          alt="City Image"
          fill={true}
          className='object-cover'
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.75)]">
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="mt-6 mb-16 px-8 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                {overlayText}
              </h1>
              <Link
                className="mb-2 inline-block rounded-full border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 md:mr-2 md:mb-0"
                data-te-ripple-init
                data-te-ripple-color="light"
                href="/contact"
                role="button"
              >
                Get Started
              </Link>
              <Link
                className="inline-block rounded-full px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-20 hover:text-neutral-200 focus:text-neutral-200 focus:outline-none focus:ring-0 active:text-neutral-300"
                data-te-ripple-init
                data-te-ripple-color="light"
                href="/about"
                role="button"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
