import { MdMailOutline } from "react-icons/md";

import { IoIosArrowForward } from "react-icons/io";

export default function Newsletter() {
  return (
    <div className="grid-container bg-[#030712] border-b border-[#1A1E28] my-20">
      <div className="md:block hidden border-r border-[#1A1E28]"></div>
      <div className="grid grid-cols-1 md:grid-cols-[40px_1fr_40px] px-4 md:p-0">
        <div className="md:block hidden border-r border-[#1A1E28] tilt-lines-b"></div>
        <div>
          <div className="h-20 down-border-b grid grid-cols-3">
            <div className="border-r border-[#1A1E28]"></div>
            <div className="border-r border-[#1A1E28]"></div>
            <div></div>
          </div>
          <div className="h-auto down-border-b grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-0">
            <div className="sm:border-r border-[#1A1E28]">
              <p className="font-geist text-4xl font-medium text-white h-full flex justify-center items-center">
                Newsletter
              </p>
            </div>
            <div className="sm:border-r border-[#1A1E28]">
              <p className="text-[#9CA3AF] text-base font-normal h-full flex items-center">
                Get fresh updates, free resources, exclusive offers, and product
                news—straight to your inbox.
              </p>
            </div>
            <div className="sm:col-span-2 xl:col-span-1">
              <div className="relative h-[60px] xl:h-full 2xl:h-[60px]">
                <MdMailOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Quick search..."
                  className="w-full h-full pl-10 pr-16 bg-[#1A1E28] placeholder:text-[#9CA3AF]"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-[149px] h-7 text-xs text-light  rounded-md">
                  <button className="rounded-xl border border-[#2237EE] h-11 w-[149px] bg-[#3758F9] text-white flex items-center justify-center gap-2">
                    <p className="text-base">Get Offers</p>{" "}
                    <IoIosArrowForward size={12} color="#fff" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="h-20 grid grid-cols-3">
            <div className="border-r border-[#1A1E28]"></div>
            <div className="border-r border-[#1A1E28]"></div>
            <div></div>
          </div>
        </div>
        <div className="md:block hidden border-l border-[#1A1E28] tilt-lines-b"></div>
      </div>
      <div className="md:block hidden border-l border-[#1A1E28]"></div>
    </div>
  );
}
