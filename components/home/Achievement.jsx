import Image from "next/image";
import BrandSlider from "./BrandSlider";
import AchievementCard from "./AchievementCard";

export default function Achievement() {
  const data = [
    {
      number: "400+",
      title: "Widgets & Examples",
      des: "Explore a rich collection of ready-to-use widgets and examples — built to inspire and speed up your design workflow.",
    },
    {
      number: "1000+",
      title: "Components & Variant",
      des: "Discover hundreds of flexible components and variants — crafted to help you design faster and maintain consistency effortlessly.",
    },
    {
      number: "600+",
      title: "Styles, Variable & Tokens",
      des: "Access well-structured styles, variables, and tokens — ensuring seamless scalability and visual harmony across every design.",
    },
  ];
  return (
    <div className="grid-container  border-y border-border">
      <div className="md:block hidden border-r border-b border-border"></div>
      <div className="grid grid-cols-1 md:grid-cols-[40px_1fr_40px] border-b border-border">
        <div className="md:block hidden border-r border-border tilt-lines"></div>
        <div className="">
          <div className="px-10 py-11 down-border">
            <div className="grid grid-cols-1 md:grid-cols-[203px_1fr] gap-2.5">
              <div className="w-[203px]">
                <p className="text-sm font-normal text-light text-start">
                  Trusted by{" "}
                  <span className="text-blackTxt font-semibold">5000+</span>{" "}
                  individuals & companies of all sizes
                </p>
              </div>
              <div className="overflow-hidden">
                <BrandSlider autoplay speed={2500}>
                  <Image
                    src={"/imgs/brand-1.png"}
                    width={102}
                    height={38}
                    alt="brand"
                    className="h-[38px] object-contain"
                  />
                  <Image
                    src={"/imgs/brand-2.png"}
                    width={102}
                    height={38}
                    alt="brand"
                    className="h-[38px] object-contain"
                  />
                  <Image
                    src={"/imgs/brand-3.png"}
                    width={102}
                    height={38}
                    alt="brand"
                    className="h-[38px] object-contain"
                  />
                  <Image
                    src={"/imgs/brand-4.png"}
                    width={102}
                    height={38}
                    alt="brand"
                    className="h-[38px] object-contain"
                  />
                  <Image
                    src={"/imgs/brand-5.png"}
                    width={102}
                    height={38}
                    alt="brand"
                    className="h-[38px] object-contain"
                  />
                </BrandSlider>
              </div>
            </div>
          </div>
          <div className="down-border">
            <div className="w-full lg:w-1/2 mt-20 lg:ml-10 pb-10 px-4 lg:px-0">
              <p className="text-3xl lg:text-[40px] font-medium text-blackTxt text-start mt-4 mb-[18px]">
                The perfect foundation to kickstart any project.
              </p>
              <p className="text-lg font-normal text-light text-start">
                A comprehensive UI kit — thoughtfully crafted with{" "}
                <span className="text-blackTxt">
                  Auto Layout 5.0, smart variants, variables,
                </span>{" "}
                and built-in WCAG accessibility for a seamless design
                experience.
              </p>
            </div>
          </div>
          <div className="p-2.5 bg-[url('/imgs/bg-1.png')] bg-no-repeat bg-cover">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {data.map((d, i) => (
                <AchievementCard key={i} data={d} />
              ))}
            </div>
          </div>
        </div>
        <div className="md:block hidden border-l border-border tilt-lines "></div>
      </div>
      <div className="md:block hidden border-l border-b border-border"></div>
    </div>
  );
}
