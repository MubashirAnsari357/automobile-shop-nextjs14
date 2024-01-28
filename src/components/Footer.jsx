import Link from "next/link";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "./icons";
import { getWebData } from "@/lib/Data/data";
import { UserLinks } from "@/constants/Links";

const Footer = async () => {
  const webData = await getWebData();
  const getIcon = (platform) => {
    switch (platform) {
      case "facebook":
        return <FacebookIcon className="h-6 w-6" />;
      case "instagram":
        return <InstagramIcon className="h-6 w-6" />;
      case "twitter":
        return <TwitterIcon className="h-6 w-6" />;
      default:
        return null;
    }
  };
  return (
    <footer className="bg-white border">
      <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          {/* logo */}
        </div>

        <p className="mx-auto mt-4 max-w-md text-center leading-relaxed text-gray-500">
          {webData?.contact?.shop_description}
        </p>

        <ul className="mt-8 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          {UserLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className="text-gray-700 hover:text-gray-700/75"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="mt-8 flex justify-center gap-6 md:gap-8">
          {Object?.entries(webData?.contact?.social).map(([platform, link]) => (
            <li key={platform}>
              <Link
                href={link}
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75"
              >
                <span className="sr-only">{platform.toUpperCase()}</span>
                {getIcon(platform)}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 border-t border-gray-100 pt-8">
          <p className="text-center text-xs/relaxed text-gray-500">
            © Company 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
