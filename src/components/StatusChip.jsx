import React from 'react';

const StatusChip = ({ status }) => {
  const styles = {
    Completed: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    Failed: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    Scheduled: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  };

  return (
    <span className={`px-2 py-1 rounded text-xs font-medium ${styles[status]}`}>
      {status}
    </span>
  );
};

export default StatusChip;