import React from 'react';

const Sidebar = () => {
  const menuItems = ["Dashboard", "Projects", "Scans", "Schedule", "Notifications", "Settings", "Support"];
  
  return (
    <aside className="w-64 h-screen border-r border-gray-200 dark:border-gray-800 flex flex-col p-4 bg-white dark:bg-[#0B1117] text-gray-600 dark:text-gray-400">
      <div className="flex items-center gap-2 mb-8 px-2">
        <div className="w-6 h-6 bg-teal-500 rounded-full" />
        <span className="font-bold text-xl text-black dark:text-white">aps</span>
      </div>
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <div key={item} className={`p-3 rounded-lg cursor-pointer ${item === 'Dashboard' ? 'bg-teal-50 dark:bg-teal-900/20 text-teal-600 font-semibold' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
            {item}
          </div>
        ))}
      </nav>
      <div className="border-t border-gray-200 dark:border-gray-800 pt-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-yellow-400" />
        <div>
          <p className="text-sm font-medium dark:text-white">admin@edu.com</p>
          <p className="text-xs">Security Lead</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;