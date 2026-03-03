import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { scanDetail } from "../data/mockData";
import { ThemeContext } from "../context/ThemeContext";
import {
  Sun, Moon, Menu, House,
  Activity, RotateCcw, Minus
} from "lucide-react";

const severityColors = {
  Critical: "bg-red-500",
  High: "bg-orange-500",
  Medium: "bg-yellow-500",
  Low: "bg-green-500",
};

const ScanDetail = () => {
  const { dark, toggle } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Activity Log");
  const [toast, setToast] = useState(null);
  const [showWelcome, setShowWelcome] = useState(true);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-[#0F0F0F] font-sans">

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed lg:static inset-y-0 left-0 z-30 transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      <main className="flex-1 overflow-auto min-w-0">

        {/* Header */}
        <header className="sticky top-0 z-20 flex justify-between items-center px-4 lg:px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0F0F0F]">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500"
            >
              <Menu size={16} />
            </button>
            <div className="hidden sm:flex text-sm text-gray-500 dark:text-gray-400 items-center gap-1">
              <span>Scan</span>
              <House size={14} className="mx-1" />
              <span>/</span>
              <span className="mx-1">Private Assets</span>
              <span>/</span>
              <span className="text-teal-500 ml-1 font-medium">New Scan</span>
            </div>
            <div className="sm:hidden text-sm text-teal-500 font-medium">New Scan</div>
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

          {/* Progress + Steps Card */}
          <div className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-gray-800 rounded-xl p-6">
            <div className="flex flex-col lg:flex-row gap-6">

              {/* Circular Progress */}
              <div className="flex-shrink-0 flex items-center justify-center">
                <div className="relative w-28 h-28">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" fill="none"
                      stroke={dark ? "#1f2937" : "#e5e7eb"} strokeWidth="8" />
                    <circle cx="50" cy="50" r="42" fill="none"
                      stroke="#0CC8A8" strokeWidth="8"
                      strokeDasharray={`${2 * Math.PI * 42}`}
                      strokeDashoffset={`${2 * Math.PI * 42 * (1 - 0 / 100)}`}
                      strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold dark:text-white">0%</span>
                    <span className="text-xs text-gray-500">In Progress</span>
                  </div>
                </div>
              </div>

              {/* Steps + Meta */}
              <div className="flex-1">
                {/* Step Tracker */}
                <div className="flex items-center gap-0 mb-6 overflow-x-auto pb-1">
                  {scanDetail.steps.map((step, i) => (
                    <div key={step.label} className="flex items-center">
                      <div className="flex flex-col items-center gap-1 min-w-[80px]">
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition
                          ${step.active
                            ? "border-teal-500 bg-teal-500 text-white"
                            : "border-gray-300 dark:border-gray-600 text-gray-400"}`}>
                          <Activity size={14} />
                        </div>
                        <span className={`text-xs font-medium whitespace-nowrap
                          ${step.active ? "text-teal-500" : "text-gray-400 dark:text-gray-500"}`}>
                          {step.label}
                        </span>
                      </div>
                      {i < scanDetail.steps.length - 1 && (
                        <div className={`h-0.5 w-8 mb-4 flex-shrink-0
                          ${step.active ? "bg-teal-500" : "bg-gray-200 dark:bg-gray-700"}`} />
                      )}
                    </div>
                  ))}
                </div>

                {/* Metadata Row */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-sm">
                  {[
                    { label: "Scan Type", value: scanDetail.meta.scanType },
                    { label: "Targets", value: scanDetail.meta.targets },
                    { label: "Started At", value: scanDetail.meta.startedAt },
                    { label: "Credentials", value: scanDetail.meta.credentials },
                    { label: "Files", value: scanDetail.meta.files },
                    { label: "Checklists", value: scanDetail.meta.checklists, teal: true },
                  ].map((m) => (
                    <div key={m.label}>
                      <p className="text-gray-400 text-xs mb-1">{m.label}</p>
                      <p className={`font-semibold text-sm ${m.teal ? "text-teal-500" : "dark:text-white text-gray-800"}`}>
                        {m.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Console + Findings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

            {/* Live Scan Console */}
            <div className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold dark:text-white">Live Scan Console</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full flex items-center gap-1">
                    <RotateCcw size={10} className="animate-spin" /> Running...
                  </span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Minus size={14} />
                  </button>
                </div>
              </div>

              <div className="flex border-b border-gray-200 dark:border-gray-800 px-4">
                {["Activity Log", "Verification Loops"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-2.5 px-1 mr-4 text-sm font-medium border-b-2 transition
                      ${activeTab === tab
                        ? "border-teal-500 text-teal-500"
                        : "border-transparent text-gray-400 hover:text-gray-600"}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="p-4 font-mono text-xs overflow-y-auto max-h-[380px] custom-scrollbar space-y-3 bg-white dark:bg-[#141414]">
                {activeTab === "Activity Log" ? (
                  scanDetail.logs.map((log, i) => (
                    <div key={i} className="leading-relaxed dark:text-gray-300 text-gray-700">
                      <span className="text-gray-400">[{log.time}]</span>{" "}
                      {log.message}{" "}
                      {log.highlight && <span className="text-teal-400">{log.highlight}</span>}
                      {log.suffix && <span>{log.suffix}</span>}
                      {log.path && (
                        <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-1.5 py-0.5 rounded text-[10px] ml-1">
                          {log.path}
                        </span>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-gray-400 text-center py-8">
                    No verification loops running
                  </div>
                )}
              </div>
            </div>

            {/* Finding Log */}
            <div className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800">
                <h3 className="text-sm font-semibold dark:text-white">Finding Log</h3>
              </div>
              <div className="p-4 space-y-3 overflow-y-auto max-h-[420px] custom-scrollbar">
                {scanDetail.findings.map((f, i) => (
                  <div key={i} className="border border-gray-100 dark:border-gray-800 rounded-xl p-4 hover:border-gray-300 dark:hover:border-gray-600 transition">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`${severityColors[f.severity]} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
                        {f.severity}
                      </span>
                      <span className="text-xs text-gray-400">{f.time}</span>
                    </div>
                    <p className="text-sm font-semibold dark:text-white text-gray-900 mb-1">{f.title}</p>
                    <p className="text-xs text-teal-500 font-mono mb-2">{f.endpoint}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="sticky bottom-0 bg-white dark:bg-[#141414] border-t border-gray-200 dark:border-gray-800 px-6 py-2.5 flex flex-wrap items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
            Sub-agents: <strong className="dark:text-white text-gray-700 ml-1">0</strong>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
            Parallel Executions: <strong className="dark:text-white text-gray-700 ml-1">2</strong>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
            Operations: <strong className="dark:text-white text-gray-700 ml-1">1</strong>
          </span>
          <span className="ml-auto flex items-center gap-3">
            <span className="text-red-500">Critical: <strong>0</strong></span>
            <span className="text-orange-500">High: <strong>0</strong></span>
            <span className="text-yellow-500">Medium: <strong>0</strong></span>
            <span className="text-green-500">Low: <strong>0</strong></span>
          </span>
        </div>
      </main>

      {/* Welcome Popup */}
      {showWelcome && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl shadow-2xl w-full max-w-md p-6 border border-gray-200 dark:border-gray-700">

            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-teal-400 rounded-full animate-pulse" />
                <h2 className="text-lg font-bold dark:text-white text-gray-900">
                  Scan Started 🚀
                </h2>
              </div>
              <button
                onClick={() => setShowWelcome(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition text-lg leading-none"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              Your scan is now running. Here's what you can do on this page:
            </p>

            {/* Instructions */}
            <div className="space-y-2.5 mb-6">
              {[
                { icon: "", title: "Track Progress", desc: "Circular progress shows scan completion in real-time" },
                { icon: "", title: "Follow Steps", desc: "Step tracker shows current phase — Spidering → Reporting" },
                { icon: "", title: "Live Console", desc: "Activity Log tab shows real-time terminal output" },
                { icon: "", title: "Finding Log", desc: "Critical/High/Medium findings appear as they're discovered" },
                { icon: "", title: "Status Bar", desc: "Bottom bar shows agents, operations & severity counts" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700">
                  <span className="text-lg">{item.icon}</span>
                  <div>
                    <p className="text-sm font-semibold dark:text-white text-gray-800">{item.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowWelcome(false)}
                className="flex-1 py-2.5 bg-teal-500 hover:bg-teal-600 text-white rounded-xl text-sm font-semibold transition hover:shadow-[0_0_20px_rgba(12,200,168,0.3)]"
              >
                Got it, Let's Go! 
              </button>
              <button
                onClick={() => setShowWelcome(false)}
                className="px-4 py-2.5 border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 rounded-xl text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                Skip
              </button>
            </div>
          </div>
        </div>
      )}

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

export default ScanDetail;