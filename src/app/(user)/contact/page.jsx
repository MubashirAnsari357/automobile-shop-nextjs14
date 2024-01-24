import ContactFormDecoration from "@/components/ContactFormDecoration";
import Map from "@/components/Map";
import { EmailIcon, HomeIcon, PhoneIcon } from "@/components/icons";

export default function Contact() {
  return (
    <section className="relative z-10 overflow-hidden bg-white">
      <div className="-mx-4 flex flex-wrap lg:justify-between lg:p-20 p-6">
        <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
          <div className="mb-12 max-w-[570px] lg:mb-0">
            <span className="mb-4 block text-base font-semibold">
              Contact Us
            </span>
            <h2 className="mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
              GET IN TOUCH WITH US
            </h2>
            <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eius tempor incididunt ut labore e dolore magna aliqua. Ut enim
              adiqua minim veniam quis nostrud exercitation ullamco
            </p>
            <div className="mb-8 flex w-full max-w-[370px]">
              <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-800/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                <HomeIcon className="h-8 w-8" />
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-xl font-bold">
                  Our Location
                </h4>
                <p className="text-base text-body-color dark:text-dark-6">
                  99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                </p>
              </div>
            </div>

            <div className="mb-8 flex w-full max-w-[370px]">
              <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-800/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                <PhoneIcon className="h-8 w-8" />
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-xl font-bold">
                  Phone Number
                </h4>
                <p className="text-base text-body-color dark:text-dark-6">
                  (+62)81 414 257 9980
                </p>
              </div>
            </div>

            <div className="mb-8 flex w-full max-w-[370px]">
              <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-800/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                <EmailIcon className="h-8 w-8" />
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-xl font-bold">
                  Email Address
                </h4>
                <p className="text-base">
                  info@yourdomain.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
          <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
            <form>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="w-full rounded border border-stroke px-[14px] py-3 text-base"
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  className="w-full rounded border border-stroke px-[14px] py-3 text-base"
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Your Phone"
                  name="phone"
                  className="w-full rounded border border-stroke px-[14px] py-3 text-base"
                />
              </div>
              <div className="mb-6">
                <textarea
                  rows="3"
                  placeholder="Your Message"
                  name="message"
                  className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base"
                  defaultValue=""
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="primary-btn w-full"
                >
                  Send Message
                </button>
              </div>
            </form>
             <ContactFormDecoration />
          </div>
        </div>
      </div>
      <Map link={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.1037649366026!2d72.62315047525782!3d23.026887079170685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8773ff7c6c23%3A0xec720bf7d9b79208!2sMubashshir%20Shahabuddin%20Ansari!5e1!3m2!1sen!2sin!4v1703860140149!5m2!1sen!2sin"} />
    </section>
  );
}
