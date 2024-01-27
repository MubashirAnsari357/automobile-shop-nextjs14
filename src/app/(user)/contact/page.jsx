import ContactFormDecoration from "@/components/ContactFormDecoration";
import ContactUsForm from "@/components/ContactUsForm";
import Map from "@/components/Map";
import {
  EmailIcon,
  HomeIcon,
  PhoneIcon,
  WhatsappIcon,
} from "@/components/icons";
import { getWebData } from "@/lib/Data/data";

const Contact = async () => {
  const webData = await getWebData();
  return (
    <section className="relative z-10 overflow-hidden bg-white">
      <div className="-mx-4 flex flex-wrap lg:justify-between p-6 lg:p-20">
        <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
          <div className="mb-12 max-w-[570px] lg:mb-0">
            <span className="mb-4 block text-base font-semibold">
              Contact Us
            </span>
            <h2 className="mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
              GET IN TOUCH WITH US
            </h2>
            <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
              {webData?.contact?.shop_description}
            </p>
            <div className="mb-8 flex w-full max-w-[370px]">
              <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-800/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                <HomeIcon className="h-8 w-8" />
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-xl font-bold">Our Location</h4>
                <p className="text-base text-body-color dark:text-dark-6">
                  {webData?.contact?.address}
                </p>
              </div>
            </div>

            <div className="mb-8 flex w-full max-w-[370px]">
              <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-800/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                <PhoneIcon className="h-8 w-8" />
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-xl font-bold">Phone Number</h4>
                {webData?.contact?.phone?.map((mobile, index) => (
                  <a href={`tel:${mobile}`} key={index}>
                    <p className="text-base">+91 {mobile}</p>
                  </a>
                ))}
              </div>
            </div>

            <div className="mb-8 flex w-full max-w-[370px]">
              <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-800/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                <WhatsappIcon className="h-8 w-8" />
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-xl font-bold">Whatsapp</h4>
                {webData?.contact?.whatsapp?.map((mobile, index) => (
                  <a
                    href={`https://wa.me/${mobile}`}
                    key={index}
                    target="_blank"
                  >
                    <p className="text-base">+91 {mobile}</p>
                  </a>
                ))}
              </div>
            </div>

            <div className="mb-8 flex w-full max-w-[370px]">
              <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-800/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                <EmailIcon className="h-8 w-8" />
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-xl font-bold">Email Address</h4>
                <a href={`mailto:${webData?.contact?.email}`} target="_blank">
                  <p className="text-base">{webData?.contact?.email}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 py-8 lg:w-1/2 xl:w-5/12">
          <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
            <ContactUsForm />
            <ContactFormDecoration />
          </div>
        </div>
      </div>
      <Map link={webData?.contact?.map} />
    </section>
  );
};

export default Contact;
