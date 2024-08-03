import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue cursor-pointer">
              find an Apple Store
            </span>
            {" or "}
            <span className="underline text-blue cursor-pointer">
              other retailer
            </span>{" "}
            near you. <br /> Or call 1-800-MY-APPLE.
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />
        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copyright © 2021 Apple Inc. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, index) => (
              <p
                key={index}
                className="text-gray text-xs cursor-pointer font-semibold"
              >
                {link}
                {index !== footerLinks.length - 1 && (
                  <span className="max-sm:mx-1 mx-2">|</span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
