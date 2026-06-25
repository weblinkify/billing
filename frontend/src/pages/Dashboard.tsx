import Sidebar from "../components/Sidebar";
import { Bell } from "lucide-react";

export default function Dashboard() {

  const chartData = [
    { month: "Jan", revenue: 120, target: 150 },
    { month: "Feb", revenue: 180, target: 160 },
    { month: "Mar", revenue: 140, target: 170 },
    { month: "Apr", revenue: 220, target: 200 },
    { month: "May", revenue: 170, target: 190 },
    { month: "Jun", revenue: 260, target: 240 },
    { month: "Jul", revenue: 240, target: 230 },
  ];

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <main className="flex-1">
        {/* Header */}
        <header className="bg-white border-b px-8 py-5 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-500">
              Welcome back, Maria
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-xl border"
              />
            </div>

            <button className="p-3 bg-white rounded-xl shadow">
              <Bell size={20} />
            </button>

            <img
              src="https://i.pravatar.cc/40"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        <div className="p-8 space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-gray-900 to-indigo-600 text-white p-6 rounded-2xl shadow-lg">
              <p className="opacity-80">Revenue</p>
              <h2 className="text-3xl font-bold mt-2">€12,400</h2>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <p className="text-gray-500">Pending</p>
              <h2 className="text-3xl font-bold mt-2">€3,800</h2>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <p className="text-gray-500">Overdue</p>
              <h2 className="text-3xl font-bold mt-2">€1,250</h2>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <p className="text-gray-500">Clients</p>
              <h2 className="text-3xl font-bold mt-2">84</h2>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-3 gap-6">
            {/* Revenue Chart */}
            <div className="col-span-2 bg-white rounded-2xl shadow p-6">
              <h2 className="text-xl font-semibold mb-6">
                Revenue Overview
              </h2>

              {/* Chart */}
              <div className="h-80 flex items-end gap-4 border-b border-gray-200 pb-6">
                {chartData.map((item) => (
                  <div
                    key={item.month}
                    className="flex-1 flex flex-col items-center justify-end h-full"
                  >
                    {/* Bars container */}
                    <div className="flex items-end gap-1 w-full justify-center">
                      {/* Revenue bar */}
                      <div
                        className="w-3 bg-gray-900 rounded-t-lg"
                        style={{ height: `${item.revenue}px` }}
                      />

                      {/* Target bar */}
                      <div
                        className="w-3 bg-indigo-600 rounded-t-lg"
                        style={{ height: `${item.target}px` }}
                      />
                    </div>

                    {/* X-axis */}
                    <span className="mt-3 text-xs text-gray-500">
                      {item.month}
                    </span>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex items-center gap-6 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-900 rounded-full" />
                  <span className="text-sm text-gray-500">Revenue</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-indigo-600 rounded-full" />
                  <span className="text-sm text-gray-500">Target</span>
                </div>
              </div>
            </div>

            {/* Payment Status */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-xl font-semibold mb-6">
                Payment Status
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Paid</span>
                  <span className="text-green-600 font-semibold">
                    72%
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Pending</span>
                  <span className="text-yellow-500 font-semibold">
                    20%
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Overdue</span>
                  <span className="text-red-500 font-semibold">
                    8%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Invoices */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">
              Recent Invoices
            </h2>

            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-500">
                  <th>Invoice</th>
                  <th>Client</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["INV-001", "Acme Ltd", "€1200", "Paid"],
                  ["INV-002", "NordTech", "€860", "Pending"],
                  ["INV-003", "FixIt Oy", "€540", "Overdue"],
                ].map(([id, client, amount, status]) => (
                  <tr key={id} className="border-t h-14">
                    <td>{id}</td>
                    <td>{client}</td>
                    <td>{amount}</td>
                    <td>{status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
