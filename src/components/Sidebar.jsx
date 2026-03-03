import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FolderKanban,
  ScanLine,
  Calendar,
  Bell,
  Settings,
  HelpCircle,
  ChevronRight,
} from "lucide-react";

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { label: "Projects", icon: FolderKanban, path: "/projects" },
  { label: "Scans", icon: ScanLine, path: "/scans" },
  { label: "Schedule", icon: Calendar, path: "/schedule" },
];

const bottomItems = [
  { label: "Notifications", icon: Bell, path: "/notifications" },
  { label: "Settings", icon: Settings, path: "/settings" },
  { label: "Support", icon: HelpCircle, path: "/support" },
];

const Sidebar = ({ onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ||
    (path === "/scans" && location.pathname.startsWith("/scan"));

  const NavItem = ({ item }) => (
    <div
      onClick={() => {
        navigate(item.path);
        onClose?.();
      }}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition text-sm font-medium
        ${
          isActive(item.path)
            ? "bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400"
            : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
        }`}
    >
      <item.icon size={18} />
      {item.label}
    </div>
  );

  return (
    <aside className="w-56 h-screen border-r border-gray-200 dark:border-gray-800 flex flex-col py-4 px-3 bg-white dark:bg-[#0B1117]">

      {/* Logo */}
      <div className="flex items-center gap-2 mb-6 px-2">
        <div className="w-7 h-7 bg-teal-500 rounded-full flex items-center justify-center">
          <div className="w-2.5 h-2.5 bg-white rounded-full" />
        </div>
        <span className="font-bold text-lg text-black dark:text-white">aps</span>
      </div>

      {/* Top nav */}
      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <NavItem key={item.label} item={item} />
        ))}
      </nav>

      {/* Bottom nav */}
      <div className="space-y-1 mb-4">
        {bottomItems.map((item) => (
          <NavItem key={item.label} item={item} />
        ))}
      </div>

      {/* User profile */}
      <div className="border-t border-gray-200 dark:border-gray-800 pt-4 px-2 flex items-center gap-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl p-2 transition">
        <div className="w-9 h-9 rounded-full bg-yellow-400 flex-shrink-0 overflow-hidden">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin"
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium dark:text-white truncate">admin@edu.com</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Security Lead</p>
        </div>
        <ChevronRight size={14} className="text-gray-400 flex-shrink-0" />
      </div>
    </aside>
  );
};

export default Sidebar;