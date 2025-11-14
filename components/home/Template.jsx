import { GrTemplate } from "react-icons/gr";
import { FiStar } from "react-icons/fi";
import TemplateCard from "./TemplateCard";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import TestiCard from "./TestiCard";

export default function Template() {
  const template = ["/imgs/temp-1.png", "/imgs/temp-2.png", "/imgs/temp-3.png"];
  const review = [
    {
      name: "Fajar Siddiq",
      company: "Serial Entrepreneur, Singapore",
      msg: "TailGrids is such a great help when comes to building landing page and web app UI for Tailwind CSS web projects with just copy-paste method!I really liked the design and it is easy to get started which saves tons of time & money for developers and designers with Figma files & source code!",
    },
    {
      name: "Athar Ahmed",
      company: "UX Designer",
      msg: "Even though I am a design person, I need to build site sometimes. TailGrids UI empowered me to do more with my little HTML/CSS skills",
    },
    {
      name: "Ostap Brehin",
      company: "Fullstack Developer",
      msg: "A landing page is the first thing your customers will see before even trying the project. You want to make sure it looks great, and this is where TailGrids comes to help!It provides a collection of beautiful hand-crafted uniquely-looking components that you can use to build your startup website, web application, or dashboard.",
    },
    {
      name: "Arnob Mukherjee",
      company: "Founder @Olvy",
      msg: "Seems like an amazing alternative to tailwindui, also the design looks amazing man 🚀",
    },
    {
      name: "",
      company: "",
      msg: "Even though I am a design person, I need to build site sometimes. TailGrids UI empowered me to do more with my little HTML/CSS skills",
    },
    {
      name: "Anamoul Rouf",
      company: "Fullstack Developer",
      msg: "good work",
    },
    {
      name: "Anamoul Rouf",
      company: "Fullstack Developer",
      msg: "good work",
    },
    {
      name: "Anamoul Rouf",
      company: "Fullstack Developer",
      msg: "TailGrids includes all the essential UI components you need to build beautiful websites with Tailwind CSS. Its consistent design, clean codebase, copy-paste interface, and detailed documentation make it organized and easy to use.",
    },
    {
      name: "Athar Ahmed",
      company: "UX Designer",
      msg: "Since I like doing engineering parts only, designing and coding landing pages is great blocker for me while I develop MVPs or try to validate a new product idea. TailGrids seems have great collection of UI components that also comes relevant contents and Figma file that I can use to play or create prototype before diving into code.",
    },
    {
      name: "Athar Ahmed",
      company: "UX Designer",
      msg: "Even though I am a design person, I need to build site sometimes. TailGrids UI empowered me to do more with my little HTML/CSS skills",
    },
  ];
  return (
    <div className="grid-container  border-y border-border">
      <div className="md:block hidden border-r border-border"></div>
      <div className="grid grid-cols-1 md:grid-cols-[40px_1fr_40px] px-4 md:p-0 ">
        <div className="md:block hidden border-r border-border tilt-lines"></div>
        <div>
          <div className="down-border">
            <div className="w-full lg:w-1/2 mt-20 lg:ml-10 pb-10 px-4 lg:px-0">
              <div className="flex items-center gap-3 rounded-[9px] px-3 py-[11px] border border-border w-fit why-us-shadow">
                <GrTemplate size={18} color="#6B7280" />
                <p className="text-sm font-medium text-light">Templates</p>
              </div>
              <p className="text-3xl lg:text-[40px] font-medium text-blackTxt text-start mt-4 mb-[18px]">
                Ready-to-use Figma templates for building websites faster.
              </p>
              <p className="text-lg font-normal text-light text-start">
                Design and explore stunning website layouts with our ready-made
                templates.
              </p>
            </div>
          </div>
          <div className="bg-cardbg">
            <div className="px-5 lg:px-10 py-5 border-b border-border">
              <ul className="flex items-center flex-wrap gap-0.5">
                <li className="hover:shadow-md px-5 py-2 rounded-full bg-cardbg border border-cardbg hover:bg-white hover:border-border transition-all duration-150 ease-linear">
                  <p className="text-base text-blackTxt font-medium">
                    AIl Templates
                  </p>
                </li>
                <li className="hover:shadow-md px-5 py-2 rounded-full bg-cardbg border border-cardbg hover:bg-white hover:border-border transition-all duration-150 ease-linear">
                  <p className="text-base text-blackTxt font-medium">Agency</p>
                </li>
                <li className="hover:shadow-md px-5 py-2 rounded-full bg-cardbg border border-cardbg hover:bg-white hover:border-border transition-all duration-150 ease-linear">
                  <p className="text-base text-blackTxt font-medium">
                    Business
                  </p>
                </li>
                <li className="hover:shadow-md px-5 py-2 rounded-full bg-cardbg border border-cardbg hover:bg-white hover:border-border transition-all duration-150 ease-linear">
                  <p className="text-base text-blackTxt font-medium">
                    E-Commerce
                  </p>
                </li>
                <li className="hover:shadow-md px-5 py-2 rounded-full bg-cardbg border border-cardbg hover:bg-white hover:border-border transition-all duration-150 ease-linear">
                  <p className="text-base text-blackTxt font-medium">
                    Dashboard
                  </p>
                </li>
              </ul>
            </div>
            <div className="p-5 lg:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-9">
                {template.map((img, i) => (
                  <TemplateCard key={i} img={img} />
                ))}
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 mt-8 ">
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
                    Buy now <span className="text-[#FFFFFFB8]">- one time</span>
                  </p>{" "}
                  <IoIosArrowForward size={12} color="#fff" />
                </button>
              </div>
            </div>
          </div>
          <div className="down-border">
            <div className="w-full lg:w-1/2 mt-20 lg:ml-10 pb-10 px-4 lg:px-0">
              <div className="flex items-center gap-3 rounded-[9px] px-3 py-[11px] border border-border w-fit why-us-shadow">
                <FiStar size={18} color="#6B7280" />
                <p className="text-sm font-medium text-light">Testimonial</p>
              </div>
              <p className="text-3xl lg:text-[40px] font-medium text-blackTxt text-start mt-4 mb-[18px]">
                Our Wall of Love - Words from Happy Customers
              </p>
              <p className="text-lg font-normal text-light text-start">
                Trusted by{" "}
                <span className="text-blackTxt">design professionals</span> and{" "}
                <span className="text-blackTxt">loved by creators</span>{" "}
                worldwide.
              </p>
            </div>
          </div>
          <div className="bg-cardbg p-5 lg:p-10">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-2">
              {review.map((re, i) => (
                <TestiCard key={i} testi={re} />
              ))}
            </div>
          </div>
        </div>
        <div className="md:block hidden border-l border-border tilt-lines"></div>
      </div>
      <div className="md:block hidden border-l border-border"></div>
    </div>
  );
}
