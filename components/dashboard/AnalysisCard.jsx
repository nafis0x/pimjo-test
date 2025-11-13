export default function AnalysisCard({ data }) {
  const isPositive = data.growth.startsWith("+");
  return (
    <div className="p-5 rounded-2xl w-full h-[104px] bg-white border border-border flex flex-col justify-between">
      <p className="text-xs font-normal text-light">{data.title}</p>
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold text-blackTxt">{data.state}</p>
        <div className="flex items-center gap-1">
          <p
            className={`px-2 py-0.5 rounded-full text-xs font-medium ${
              isPositive
                ? "bg-[#ECFDF3] text-[#039855]"
                : "bg-[#FEF3F2] text-[#D92D20]"
            }`}
          >
            {data.growth}
          </p>
          <p className="text-xs font-normal text-light">Vs last month</p>
        </div>
      </div>
    </div>
  );
}
