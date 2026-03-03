import React from 'react';
import Sidebar from '../components/Sidebar';
import SeverityCard from '../components/SeverityCard';
import StatusChip from '../components/StatusChip';
import { stats, scans } from '../data/mockData';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-[#010409]">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <div className="text-sm text-gray-500">
            Scan / Private Assets / <span className="text-teal-500">New Scan</span>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 border rounded-lg dark:text-white dark:border-gray-700">Export Report</button>
            <button className="px-4 py-2 bg-pink-500 text-white rounded-lg">Stop Scan</button>
          </div>
        </header>

        {/* Top Info Bar */}
        <div className="bg-white dark:bg-[#0D1117] border dark:border-gray-800 rounded-xl p-4 mb-6 flex justify-between text-sm dark:text-gray-300">
          <div>Org: <span className="font-bold">Project X</span></div>
          <div>Owner: <span className="font-bold">Nammagiri</span></div>
          <div>Total Scans: <span className="font-bold">100</span></div>
          <div>Scheduled: <span className="font-bold">1000</span></div>
          <div className="text-teal-500 flex items-center gap-1 cursor-pointer">↺ 10 mins ago</div>
        </div>

        {/* Severity Grid */}
        <div className="bg-white dark:bg-[#0D1117] border dark:border-gray-800 rounded-xl flex mb-6">
          {stats.severities.map(item => <SeverityCard key={item.label} {...item} />)}
        </div>

        {/* Table Container */}
        <div className="bg-white dark:bg-[#0D1117] border dark:border-gray-800 rounded-xl overflow-hidden">
          <div className="p-4 flex justify-between border-b dark:border-gray-800">
            <input type="text" placeholder="Search scans..." className="bg-gray-100 dark:bg-gray-800 rounded px-4 py-2 w-1/3 outline-none dark:text-white" />
            <button className="bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-medium">+ New scan</button>
          </div>
          
          <table className="w-full text-left text-sm dark:text-gray-300">
            <thead className="bg-gray-50 dark:bg-gray-900/50 text-gray-500">
              <tr>
                <th className="p-4">Scan Name</th>
                <th>Type</th>
                <th>Status</th>
                <th>Progress</th>
                <th>Vulnerability</th>
                <th>Last Scan</th>
              </tr>
            </thead>
            <tbody>
              {scans.map(scan => (
                <tr key={scan.id} className="border-b dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="p-4 font-medium dark:text-white">{scan.name}</td>
                  <td>{scan.type}</td>
                  <td><StatusChip status={scan.status} /></td>
                  <td className="w-32">
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-teal-500" style={{ width: `${scan.progress}%` }} />
                    </div>
                  </td>
                  <td>
                    <div className="flex gap-1">
                      {scan.vulnerabilities.map((v, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[10px]">{v}</span>
                      ))}
                    </div>
                  </td>
                  <td>{scan.lastScan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;