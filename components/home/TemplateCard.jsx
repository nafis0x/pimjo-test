import Image from "next/image";

export default function TemplateCard({ img }) {
  return (
    <div className="w-full">
      <Image
        src={img}
        width={408}
        height={405}
        alt="template"
        className="w-full h-auto 2xl:h-[297px] object-contain rounded-2xl"
      />
      <div className="relative mt-6">
        <div className="absolute inset-0 bg-linear-to-t from-[#F3F4F6] to-[#F3F4F600]"></div>
        <p className="text-xl font-medium text-blackTxt mb-1">
          AI Land - Creative AI Template
        </p>
        <p className="text-base font-normal text-light">
          Perfect template to build your AI startup website faster in no time.
        </p>
      </div>
    </div>
  );
}
