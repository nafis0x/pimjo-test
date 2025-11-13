import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export default function HeroSection() {
  return (
    <>
      <div className="grid-container  border-b border-border">
        <div className="md:block hidden border-r border-border"></div>
        <div className="grid grid-cols-1 md:grid-cols-[40px_1fr_40px] px-4 md:p-0 h-[500px] sm:h-[600px] lg:h-[1038px]">
          <div className="md:block hidden border-r border-border tilt-lines"></div>
          <div className="overflow-hidden">
            <div className="bg-[url('/imgs/hero-bg-1.png')] bg-no-repeat bg-contain bg-top h-[460px] -translate-y-2 lg:-translate-y-2.5 flex flex-col items-center justify-center">
              <div className="bg-white border border-border rounded-full w-fit flex items-center px-2.5 py-1 gap-1 md:gap-2 mb-4 md:mb-8">
                <div className="flex items-center">
                  <Image
                    src={"/imgs/pic-1.png"}
                    width={24}
                    height={24}
                    alt="avatar"
                    className="h-6 object-cover border-2 border-white rounded-full"
                  />
                  <Image
                    src={"/imgs/pic-2.png"}
                    width={24}
                    height={24}
                    alt="avatar"
                    className="h-6 object-cover border-2 border-white rounded-full -translate-x-1 z-10"
                  />
                  <Image
                    src={"/imgs/pic-3.png"}
                    width={20}
                    height={20}
                    alt="avatar"
                    className="h-6 object-cover border-2 border-white rounded-full -translate-x-2 z-10"
                  />
                  <Image
                    src={"/imgs/pic-4.png"}
                    width={20}
                    height={20}
                    alt="avatar"
                    className="h-6 object-cover border-2 border-white rounded-full -translate-x-3 z-10"
                  />
                </div>
                <p className="text-xs md:text-sm font-medium text-light">
                  Used by 65,000+ Designers worldwide
                </p>
                <div className="rounded-full bg-white border border-border flex items-center gap-1 px-2.5 py-1 text-xs font-medium">
                  <IoIosArrowForward size={12} color="#6B7280" />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <p className="text-4xl lg:text-[52px] font-semibold text-blackTxt text-center mb-[18px]">
                  The Ultimate UI Library and Design System for Figma
                </p>
                <p className="text-sm font-normal text-light text-center">
                  A complete toolkit for modern designers — 600+ functional
                  Figma UI components for landing pages, e-commerce, dashboards,
                  and more. Boost your workflow and creativity with our product.
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-3 mt-8">
                <button className="rounded-xl border border-border h-11 w-[190px] bg-white flex items-center justify-center gap-2">
                  <Image
                    src={"/imgs/figma.png"}
                    width={24}
                    height={24}
                    alt="avatar"
                    className="h-6 object-cover"
                  />
                  <p className="text-blackTxt">
                    preview <span className="text-light">figma</span>
                  </p>{" "}
                  <IoIosArrowForward size={12} color="#6B7280" />
                </button>
                <button className="rounded-xl border border-border h-11 w-[190px] bg-[#3758F9] text-white flex items-center justify-center gap-2">
                  <p>
                    Buy now <span className="text-[#FFFFFFB8]">- one time</span>
                  </p>{" "}
                  <IoIosArrowForward size={12} color="#fff" />
                </button>
              </div>
            </div>
          </div>
          <div className="md:block hidden border-l border-border tilt-lines"></div>
        </div>
        <div className="md:block hidden border-l border-border"></div>
      </div>
      <div className="grid-container">
        <div className="md:block hidden"></div>
        <div className="grid grid-cols-[40px_1fr_40px] h-[300px] w-full place-items-center -translate-y-[50%] sm:-translate-y-[70%] lg:-translate-y-[510px]">
          <div></div>
          <Image
            src={"/imgs/hero-bg.png"}
            width={0}
            height={0}
            sizes="100%"
            alt="hero"
            className="h-[550px] lg:h-[800px] w-full lg:w-[90%] object-contain"
          />
          <div></div>
        </div>
        <div className="md:block hidden"></div>
      </div>
    </>
  );
}
