import AnalysisCard from "@/components/dashboard/AnalysisCard";
import UserTable from "@/components/dashboard/UserTable";
import { getUsers } from "@/lib/apis";

export default async function page() {
  const users = await getUsers();
  const data = [
    {
      title: "Unique Visitors",
      state: "24.7K",
      growth: "+20%",
    },
    {
      title: "Total Pageviews",
      state: "55.9K",
      growth: "+4%",
    },
    {
      title: "Bounce Rate",
      state: "54%",
      growth: "-1.59%",
    },
    {
      title: "Visit Duration",
      state: "2m 56s",
      growth: "+7%",
    },
  ];
  return (
    <div className="min-h-screen mb-24 p-4 lg:p-10">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(306px,1fr))] gap-4">
        {data.map((d, i) => (
          <AnalysisCard key={i} data={d} />
        ))}
      </div>
      <div className="mt-[30px]">
        <UserTable users={users.data} />
      </div>
    </div>
  );
}
