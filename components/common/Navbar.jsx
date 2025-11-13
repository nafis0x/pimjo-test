import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import MegaMenu from "./MegaMenu";
import SideNav from "./SideNav";
import { cookies } from "next/headers";

export default async function Navbar({ menu }) {
  const cookiesStore = await cookies();
  return (
    <div className="grid-container md:grid-rows-[68px_83px] border-b border-border">
      <div className="md:block hidden border-r border-b border-border"></div>
      <div className="border-b border-border px-4 py-2 md:p-3">
        <div className="relative bg-[#0000000A] h-full flex flex-col md:flex-row py-2 md:py-0 items-center justify-center rounded-lg gap-2 md:gap-5">
          <p className="text-light text-sm font-medium">
            We just raised our biggest updates -{" "}
            <span className="text-text">Brand V3.0 🎉</span>
          </p>
          <div className="rounded-full bg-white border border-border flex items-center gap-1 px-2.5 py-1 text-xs font-medium">
            Check it out <IoIosArrowForward size={12} color="#6B7280" />
          </div>
          <IoClose
            size={20}
            color="#9CA3AF"
            className="absolute top-1/2 right-4 -translate-y-1/2"
          />
        </div>
      </div>
      <div className="md:block hidden border-l border-b border-border"></div>

      <div className="md:block hidden border-r border-border"></div>
      <div className="border-border px-4 py-2 md:py-5 md:px-8">
        <div className="h-full flex items-center justify-between">
          <div className="flex items-center gap-11">
            <div>
              <Link href={"/"}>
                <Image
                  src={"/imgs/Logo.png"}
                  width={110}
                  height={44}
                  alt="logo"
                  className="object-cover h-11"
                />
              </Link>
            </div>
            <div className="hidden lg:block">
              <MegaMenu menu={menu} />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative hidden 2xl:block">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Quick search..."
                className="w-[250px] h-12 pl-10 pr-16 border border-border-input rounded-xl placeholder:text-[#9CA3AF]"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-7 text-xs text-light border border-[#F3F4F6] rounded-md">
                ⌘ K
              </div>
            </div>

            <div className="2xl:flex items-center gap-2 hidden">
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
            <div className="flex items-center gap-4">
              {cookiesStore.get("token") ? (
                <Link href={"/dashboard"}>Dashboard</Link>
              ) : (
                <Link href={"/login"}>Sign in</Link>
              )}
              <button className="bg-blackTxt border border-blackTxt hover:bg-transparent cursor-pointer w-[123px] h-[42px] flex items-center justify-center text-white hover:text-blackTxt text-sm font-medium rounded-xl">
                Pricing & FAQ
              </button>
              <SideNav menu={menu} />
            </div>
          </div>
        </div>
      </div>
      <div className="md:block hidden border-l border-border"></div>
    </div>
  );
}
