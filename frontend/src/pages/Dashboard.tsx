import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";

export default function Dashboard() {
  return (
    <div className="flex bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">
          Billing Dashboard
        </h1>

        <div className="grid grid-cols-3 gap-6">
          <StatsCard title="Total Revenue" value="€12,400" />
          <StatsCard title="Pending" value="€3,800" />
          <StatsCard title="Overdue" value="€1,250" />
        </div>
      </main>
    </div>
  );
}
