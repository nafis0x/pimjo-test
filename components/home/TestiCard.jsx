import Image from "next/image";
import { TiStarFullOutline } from "react-icons/ti";

export default function TestiCard({ testi }) {
  return (
    <div className="break-inside-avoid mb-2 bg-white p-10 rounded-2xl border border-border">
      <div className="flex items-center space-x-3">
        <Image
          src={"/imgs/pic-1.png"}
          alt={"avatar"}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full">
            <span className="text-base font-medium text-blackTbl">
              {testi.name}
            </span>
            <div className="flex items-center gap-0.5">
              <TiStarFullOutline size={10} color="#FACC15" />
              <TiStarFullOutline size={10} color="#FACC15" />
              <TiStarFullOutline size={10} color="#FACC15" />
              <TiStarFullOutline size={10} color="#FACC15" />
              <TiStarFullOutline size={10} color="#FACC15" />
            </div>
          </div>
          <span className="text-sm font-normal text-light">
            {testi.company}
          </span>
        </div>
      </div>
      <div className="mt-[30px]">
        <p className="text-base font-normal text-light">{testi.msg}</p>
      </div>
    </div>
  );
}
