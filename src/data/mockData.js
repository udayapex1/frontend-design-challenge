export const stats = {
  org: "Project X",
  owner: "Nammagiri",
  totalScans: 100,
  scheduled: 1000,
  rescans: 100,
  failed: 100,
  severities: [
    { label: "Critical Severity", count: 86, change: "+ 2% increase", color: "text-pink-500", bg: "bg-pink-100" },
    { label: "High Severity", count: 16, change: "+ 0.9% increase", color: "text-orange-500", bg: "bg-orange-100" },
    { label: "Medium Severity", count: 26, change: "- 0.9% decrease", color: "text-yellow-500", bg: "bg-yellow-100" },
    { label: "Low Severity", count: 16, change: "+ 0.9% increase", color: "text-purple-500", bg: "bg-purple-100" },
  ]
};

export const scans = [
  { id: 1, name: "Web App Servers", type: "Greybox", status: "Completed", progress: 100, vulnerabilities: [5, 12, 23, 18], lastScan: "4d ago" },
  { id: 2, name: "IoT Devices", type: "Blackbox", status: "Failed", progress: 10, vulnerabilities: [2, 4, 8, 1], lastScan: "3d ago" },
  // Add more rows as needed...
];