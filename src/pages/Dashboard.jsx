import React, { useContext, useState } from "react";
import Sidebar from "../components/Sidebar";
import SeverityCard from "../components/SeverityCard";
import StatusChip from "../components/StatusChip";
import { stats, scans } from "../data/mockData";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { useNavigate } from "react-router-dom";
import {
  Search,
  SlidersHorizontal,
  Columns2,
  Plus,
  RefreshCw,
  Sun,
  Moon,
  Menu,
  House,
} from "lucide-react";

const Dashboard = () => {
  const { dark, toggle } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [toast, setToast] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filteredScans = scans.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.type.toLowerCase().includes(search.toLowerCase()),
  );

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-[#0F0F0F] font-sans">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - hidden on mobile, slides in when open */}
      <div
        className={`
        fixed lg:static inset-y-0 left-0 z-30 transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      <main className="flex-1 overflow-auto min-w-0">
        {/* Top Header */}
        <header className="flex justify-between items-center px-4 lg:px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0F0F0F] sticky top-0 z-10">
          <div className="flex items-center gap-3">
            {/* Hamburger - mobile only */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500"
            >
              <Menu size={16} />
            </button>
            {/* Breadcrumb - hidden on small mobile */}
            <div className="hidden sm:flex text-sm text-gray-500 dark:text-gray-400 items-center gap-1">
              <span>Scan</span>
              <House size={14} className="mx-1 inline-block align-middle" />
              <span>/</span>
              <span className="mx-1">Private Assets</span>
              <span>/</span>
              <span className="text-teal-500 ml-1 font-medium">New Scan</span>
            </div>
            {/* Mobile breadcrumb - short version */}
            <div className="sm:hidden text-sm text-teal-500 font-medium">
              New Scan
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => showToast("Generating export report...")}
              className="hidden sm:block px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              Export Report
            </button>
            <button
              onClick={() => showToast("Scan stopped!")}
              className="px-3 py-2 border border-red-400 text-red-500 rounded-lg text-sm hover:bg-red-50 dark:hover:bg-red-900/20 transition font-medium"
            >
              Stop Scan
            </button>
          </div>
        </header>

        <div className="p-4 lg:p-6 space-y-4">
          {/* Org Stats Bar */}
         <div className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-gray-800 rounded-xl px-4 lg:px-6 py-4">
  
  {/* Org info - equal space between items */}
  <div className="overflow-x-auto pb-2 mb-4">
    <div className="flex items-center justify-between text-sm dark:text-gray-300 min-w-max w-full gap-2">
      <span>Org: <strong className="text-black dark:text-white">Project X</strong></span>
      <span className="text-gray-300 dark:text-gray-600">|</span>
      <span>Owner: <strong className="text-black dark:text-white">Nammagiri</strong></span>
      <span className="text-gray-300 dark:text-gray-600">|</span>
      <span>Total Scans: <strong className="texst-black dark:text-white">100</strong></span>
      <span className="text-gray-300 dark:text-gray-600">|</span>
      <span>Scheduled: <strong className="text-black dark:text-white">1000</strong></span>
      <span className="text-gray-300 dark:text-gray-600">|</span>
      <span>Rescans: <strong className="text-black dark:text-white">100</strong></span>
      <span className="text-gray-300 dark:text-gray-600">|</span>
      <span>Failed Scans: <strong className="text-black dark:text-white">100</strong></span>
      <span className="text-gray-300 dark:text-gray-600">|</span>
      <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
        <RefreshCw size={13} className="text-teal-500" />
        10 mins ago
      </span>
    </div>
  </div>

  {/* Severity Cards */}
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
    {stats.severities.map((item) => (
      <SeverityCard key={item.label} {...item} />
    ))}
  </div>
</div>

          {/* Scan Table */}
          <div className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
            {/* Toolbar */}
            <div className="p-4 flex flex-wrap items-center gap-3 border-b border-gray-200 dark:border-gray-800">
              <div className="relative flex-1 min-w-[160px]">
                <Search
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search scans by name or type..."
                  className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg outline-none focus:border-teal-400 dark:text-white placeholder-gray-400 transition"
                />
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => showToast("Filter options coming soon!")}
                  className="flex items-center gap-1.5 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                >
                  <SlidersHorizontal size={14} />
                  <span className="hidden sm:inline">Filter</span>
                </button>
                <button
                  onClick={() => showToast("Column settings coming soon!")}
                  className="flex items-center gap-1.5 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                >
                  <Columns2 size={14} />
                  <span className="hidden sm:inline">Column</span>
                </button>
                <button
                  onClick={() => showToast("New scan initiated!")}
                  className="flex items-center gap-1.5 px-3 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg text-sm font-medium transition"
                >
                  <Plus size={14} />
                  <span className="hidden sm:inline">New scan</span>
                </button>
              </div>
            </div>

            {/* Table - scrollable on mobile */}
            <div className="overflow-x-auto overflow-y-auto max-h-[calc(100vh-420px)] custom-scrollbar">
              <table className="w-full text-left text-sm min-w-[640px]">
                <thead className="bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-800">
                  <tr>
                    <th className="px-4 py-3 font-medium">Scan Name</th>
                    <th className="px-4 py-3 font-medium">Type</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium">Progress</th>
                    <th className="px-4 py-3 font-medium">Vulnerability</th>
                    <th className="px-4 py-3 font-medium text-right">
                      Last Scan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredScans.map((scan) => (
                    <tr
                      key={scan.id}
                      onClick={() => navigate(`/scan/${scan.id}`)}
                      className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition"
                    >
                      <td className="px-4 py-3 font-semibold text-gray-900 dark:text-white">
                        {scan.name}
                      </td>
                      <td className="px-4 py-3 text-gray-500 dark:text-gray-400">
                        {scan.type}
                      </td>
                      <td className="px-4 py-3">
                        <StatusChip status={scan.status} />
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${scan.status === "Failed" ? "bg-red-500" : "bg-teal-500"}`}
                              style={{ width: `${scan.progress}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                            {scan.progress}%
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-1">
                          {[
                            { val: scan.vulnerabilities[0], bg: "bg-red-500" },
                            {
                              val: scan.vulnerabilities[1],
                              bg: "bg-orange-500",
                            },
                            {
                              val: scan.vulnerabilities[2],
                              bg: "bg-yellow-500",
                            },
                            {
                              val: scan.vulnerabilities[3],
                              bg: "bg-green-500",
                            },
                          ].map((v, i) =>
                            v.val != null ? (
                              <span
                                key={i}
                                className={`${v.bg} text-white text-[11px] font-bold w-7 h-7 flex items-center justify-center rounded`}
                              >
                                {v.val}
                              </span>
                            ) : null,
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-400 text-right whitespace-nowrap">
                        {scan.lastScan}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-4 py-3 flex items-center justify-between border-t border-gray-100 dark:border-gray-800">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Showing {filteredScans.length} of 100 Scans
              </span>
              <div className="flex gap-2">
                <button className="w-8 h-8 flex items-center justify-center border border-gray-200 dark:border-gray-700 rounded text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                  ‹
                </button>
                <button className="w-8 h-8 flex items-center justify-center border border-gray-200 dark:border-gray-700 rounded text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-gray-900 text-white px-5 py-3 rounded-xl shadow-lg text-sm font-medium z-50 flex items-center gap-2">
          <span className="w-2 h-2 bg-teal-400 rounded-full" />
          {toast}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
