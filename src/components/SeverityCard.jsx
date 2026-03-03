import React from 'react';

const SeverityCard = ({ label, count, change, color }) => (
  <div className="flex-1 p-4 border-r last:border-r-0 border-gray-200 dark:border-gray-800">
    <div className="flex justify-between items-start mb-2">
      <span className="text-gray-500 text-sm">{label}</span>
      <div className={`w-6 h-6 rounded flex items-center justify-center bg-gray-100 dark:bg-gray-800 ${color}`}>!</div>
    </div>
    <div className="flex items-baseline gap-3">
      <h2 className="text-3xl font-bold dark:text-white">{count}</h2>
      <span className={`text-xs ${change.includes('increase') ? 'text-red-500' : 'text-green-500'}`}>
        {change} <span className="text-[10px] text-gray-400">than yesterday</span>
      </span>
    </div>
  </div>
);

export default SeverityCard;