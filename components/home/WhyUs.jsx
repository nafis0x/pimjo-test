import Image from "next/image";
import { FaCode } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

export default function WhyUs() {
  return (
    <div className="grid-container border-y border-border my-10 md:my-20">
      <div className="md:block hidden border-r border-border"></div>
      <div className="grid grid-cols-1 md:grid-cols-[40px_1fr_40px] px-4 md:p-0">
        <div className="md:block hidden border-r border-border tilt-lines"></div>
        <div>
          <div className="down-border">
            <div className="w-full lg:w-1/2 mt-20 lg:ml-10 mb-20 px-4 lg:px-0">
              <div className="flex items-center gap-3 rounded-[9px] px-3 py-[11px] border border-border w-fit why-us-shadow">
                <FaCode size={18} color="#6B7280" />
                <p className="text-sm font-medium text-light">Why choose us?</p>
              </div>
              <p className="text-3xl lg:text-[40px] font-medium text-blackTxt text-start mt-4 mb-[18px]">
                Smart, Collaborative, and Built for Modern Designers
              </p>
              <p className="text-lg font-normal text-light text-start">
                From smart components to real-time updates, everything works
                together to keep your team in sync.
              </p>
            </div>
            <div className="bg-cardbg grid lg:grid-cols-2 grid-cols-1 gap-10 xl:gap-[88px] p-5">
              <div className="lg:pl-10 place-content-center">
                <p className="text-4xl lg:text-[40px] font-medium text-blackTxt text-start mt-4 mb-[18px]">
                  Built with Figma’s latest features
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="bg-white flex items-center gap-3 rounded-xl p-4 border border-border w-fit why-us-shadow">
                      <FaCode size={18} color="#6B7280" />
                    </div>
                    <p className="text-base font-normal text-blackTxt text-start">
                      Built with Figma’s latest and coolest features to make
                      your workflow smarter and faster.
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="bg-white flex items-center gap-3 rounded-xl p-4 border border-border w-fit why-us-shadow">
                      <FaCode size={18} color="#6B7280" />
                    </div>
                    <p className="text-base font-normal text-blackTxt text-start">
                      Fully compatible with Auto Layout 5.0 across all pages,
                      components, and UI kits.
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="bg-white flex items-center gap-3 rounded-xl p-4 border border-border w-fit why-us-shadow">
                      <FaCode size={18} color="#6B7280" />
                    </div>
                    <p className="text-base font-normal text-blackTxt text-start">
                      Switch between Light and Dark modes effortlessly with
                      Figma’s variables for every UI component and block, all in
                      one click.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-3 mt-8">
                  <button className=" btn-animation preview-btn">
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
                  <button className="rounded-xl  h-11 w-[190px] bg-blackTxt text-white flex items-center justify-center gap-2 blk-btn btn-animation">
                    <p>
                      Buy now{" "}
                      <span className="text-[#FFFFFFB8]">- one time</span>
                    </p>{" "}
                    <IoIosArrowForward size={12} color="#fff" />
                  </button>
                </div>
              </div>
              <div className="place-content-center">
                <Image
                  src={"/imgs/whyus-1.png"}
                  alt="whyus"
                  width={700}
                  height={700}
                  className="w-full h-auto 2xl:h-[564px] object-contain 2xl:object-cover rounded-[20px]"
                />
              </div>
            </div>
          </div>
          <div className="h-20 down-border"></div>
          <div>
            <div className="bg-cardbg grid lg:grid-cols-2 grid-cols-1 gap-10 xl:gap-[88px] p-5">
              <div className="place-content-center">
                <Image
                  src={"/imgs/whyus-2.png"}
                  alt="whyus"
                  width={700}
                  height={700}
                  className="w-full h-auto 2xl:h-[564px] object-contain 2xl:object-cover rounded-[20px]"
                />
              </div>
              <div className="lg:pl-10 place-content-center">
                <p className="text-4xl lg:text-[40px] font-medium text-blackTxt text-start mt-4 mb-[18px]">
                  Built with Figma’s latest features
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="bg-white flex items-center gap-3 rounded-xl p-4 border border-border w-fit why-us-shadow">
                      <FaCode size={18} color="#6B7280" />
                    </div>
                    <p className="text-base font-normal text-blackTxt text-start">
                      Seamless shadow and blur styles designed to ensure
                      consistency across all your designs.
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="bg-white flex items-center gap-3 rounded-xl p-4 border border-border w-fit why-us-shadow">
                      <FaCode size={18} color="#6B7280" />
                    </div>
                    <p className="text-base font-normal text-blackTxt text-start">
                      A precise, versatile, and fully scalable typography
                      system—easily adjustable with a single click from
                      variables panel.
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="bg-white flex items-center gap-3 rounded-xl p-4 border border-border w-fit why-us-shadow">
                      <FaCode size={18} color="#6B7280" />
                    </div>
                    <p className="text-base font-normal text-blackTxt text-start">
                      Vibrant color palette with 253+ prebuilt colors, extensive
                      shades, and variables fully compatible with Tailwind CSS.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-3 mt-8">
                  <button className=" btn-animation preview-btn">
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
                  <button className="rounded-xl  h-11 w-[190px] bg-blackTxt text-white flex items-center justify-center gap-2 blk-btn btn-animation">
                    <p>
                      Buy now{" "}
                      <span className="text-[#FFFFFFB8]">- one time</span>
                    </p>{" "}
                    <IoIosArrowForward size={12} color="#fff" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:block hidden border-l border-border tilt-lines"></div>
      </div>
      <div className="md:block hidden border-l border-border"></div>
    </div>
  );
}
