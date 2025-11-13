import Image from "next/image";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const resources = [
    "Update Logs",
    "Roadmap",
    "Tailwind UI Components",
    "Tailwind CSS",
    "Tailwind Figma",
  ];
  const usefulLinks = [
    "License",
    "Privacy policy",
    "Refund Policy",
    "Free Download",
    "NPM Package",
  ];
  const help = ["Support", "Docs", "Faqs", "Community", "Blog"];
  return (
    <div className="grid-container  border-t border-border">
      <div className="md:block hidden border-r border-border"></div>
      <div className="grid grid-cols-1 md:grid-cols-[40px_1fr_40px] px-4 md:p-0 ">
        <div className="md:block hidden border-r border-border tilt-lines"></div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 py-5 gap-5 md:gap-0 lg:px-10 lg:py-20">
            <div className="lg:col-span-2">
              <Link href={"/"}>
                <Image
                  src={"/imgs/Logo.png"}
                  width={110}
                  height={44}
                  alt="logo"
                  className="object-cover h-11"
                />
              </Link>
              <p className="text-base text-light w-[80%] mt-7 mb-12">
                Browse and effortlessly copy-paste from over 800+ components and
                templates to craft high-quality, custom Tailwind CSS websites
                without coding.
              </p>
              <div className="flex items-center gap-2">
                <div className="py-2.5 px-[9px] rounded-[9px] border border-border">
                  <FaXTwitter size={18} color="#9CA3AF" />
                </div>
                <div className="py-2.5 px-[9px] rounded-[9px] border border-border">
                  <FaGithub size={18} color="#9CA3AF" />
                </div>
                <div className="py-2.5 px-[9px] rounded-[9px] border border-border">
                  <FaDiscord size={18} color="#9CA3AF" />
                </div>
              </div>
            </div>
            <div>
              <ul className="flex flex-col items-start text-base">
                <li className="text-light font-medium mb-7">Resources</li>
                {resources.map((v, i) => (
                  <li key={i} className="font-normal text-text mb-[18px]">
                    {v}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="flex flex-col items-start text-base">
                <li className="text-light font-medium mb-7">Useful Links</li>
                {usefulLinks.map((v, i) => (
                  <li key={i} className="font-normal text-text mb-[18px]">
                    {v}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="flex flex-col items-start text-base">
                <li className="text-light font-medium mb-7">Help & Support</li>
                {help.map((v, i) => (
                  <li key={i} className="font-normal text-text mb-[18px]">
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-blackTxt mb-5 md:px-10">
              Explore our other products
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] border-t border-border">
              <div className="p-7 border-r border-b border-border flex justify-center border-l">
                <Image
                  src={"/imgs/product-1.png"}
                  width={110}
                  height={22}
                  alt="logo"
                  className="object-fill h-[22px]"
                />
              </div>
              <div className="p-7 border-r border-b border-border flex justify-center border-l">
                <Image
                  src={"/imgs/product-2.png"}
                  width={110}
                  height={22}
                  alt="logo"
                  className="object-fill h-[22px]"
                />
              </div>
              <div className="p-7 border-r border-b border-border flex justify-center border-l">
                <Image
                  src={"/imgs/product-3.png"}
                  width={110}
                  height={22}
                  alt="logo"
                  className="object-fill h-[22px]"
                />
              </div>
              <div className="p-7 border-r border-b border-border flex justify-center border-l">
                <Image
                  src={"/imgs/product-4.png"}
                  width={110}
                  height={22}
                  alt="logo"
                  className="object-fill h-[22px]"
                />
              </div>
              <div className="p-7 border-r border-b border-border flex justify-center border-l">
                <Image
                  src={"/imgs/product-5.png"}
                  width={110}
                  height={22}
                  alt="logo"
                  className="object-fill h-[22px]"
                />
              </div>
              <div className="p-7 border-r border-b border-border flex justify-center border-l">
                <Image
                  src={"/imgs/product-6.png"}
                  width={110}
                  height={22}
                  alt="logo"
                  className="object-fill h-[22px]"
                />
              </div>
            </div>
          </div>
          <div className="bg-cardbg px-10 py-[15px] md:mb-[60px] border-b border-border">
            <p className="text-sm text-light font-medium font-geist">
              © Copyright 2025 - All rights reserved.
            </p>
            <p className="text-sm text-light font-normal">
              The Tailwind name and logos are trademarks of Tailwind Labs Inc.
              is not affiliated with, associated with, or part of Tailwind Labs
              or the official Tailwind CSS.
            </p>
          </div>
        </div>
        <div className="md:block hidden border-l border-border tilt-lines"></div>
      </div>
      <div className="md:block hidden border-l border-border"></div>
    </div>
  );
}
