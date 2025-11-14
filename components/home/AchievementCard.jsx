import { BsLayers } from "react-icons/bs";

export default function AchievementCard({ data }) {
  return (
    <div className="px-10 py-9 rounded-2xl border border-border bg-white">
      <div className="bg-white flex items-center gap-3 rounded-xl p-4 border border-border w-fit why-us-shadow">
        <BsLayers size={36} color="#6B7280" />
      </div>
      <p className="text-[44px] font-medium font-geist text-blackTxt text-start mt-4 mb-[18px]">
        {data.number}
      </p>
      <p className="text-2xl font-medium text-blackTxt text-start mt-4 mb-[18px]">
        {data.title}
      </p>
      <p className="text-base font-normal text-light text-start">{data.des}</p>
    </div>
  );
}
