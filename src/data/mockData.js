export const stats = {
  org: "Project X",
  owner: "Nammagiri",
  totalScans: 100,
  scheduled: 1000,
  rescans: 100,
  failed: 100,
  lastUpdated: "10 mins ago",
  severities: [
    { label: "Critical Severity", count: 86, change: "+2% increase than yesterday", trend: "up", color: "text-red-500", bg: "bg-red-50", icon: "🚫" },
    { label: "High Severity", count: 16, change: "+0.9% increase than yesterday", trend: "up", color: "text-orange-500", bg: "bg-orange-50", icon: "⚠️" },
    { label: "Medium Severity", count: 26, change: "+0.9% decrease than yesterday", trend: "down", color: "text-yellow-500", bg: "bg-yellow-50", icon: "⚠️" },
    { label: "Low Severity", count: 16, change: "+0.9% increase than yesterday", trend: "up", color: "text-blue-500", bg: "bg-blue-50", icon: "🔍" },
  ]
};

export const scans = [
  { id: 1, name: "Web App Servers", type: "Greybox", status: "Completed", progress: 100, vulnerabilities: [5, 12, 23, 18], lastScan: "4d ago" },
  { id: 2, name: "Web App Servers", type: "Greybox", status: "Completed", progress: 100, vulnerabilities: [5, 12, 23, 18], lastScan: "4d ago" },
  { id: 3, name: "Web App Servers", type: "Greybox", status: "Completed", progress: 100, vulnerabilities: [5, 12, 23, 18], lastScan: "4d ago" },
  { id: 4, name: "Web App Servers", type: "Greybox", status: "Completed", progress: 100, vulnerabilities: [5, 12, 23, 18], lastScan: "4d ago" },
  { id: 5, name: "Web App Servers", type: "Greybox", status: "Completed", progress: 100, vulnerabilities: [5, 12, 23, 18], lastScan: "4d ago" },
  { id: 6, name: "Web App Servers", type: "Greybox", status: "Completed", progress: 100, vulnerabilities: [5, 12, 23, 18], lastScan: "4d ago" },
  { id: 7, name: "Web App Servers", type: "Greybox", status: "Completed", progress: 100, vulnerabilities: [5, 12, 23, 18], lastScan: "4d ago" },
  { id: 8, name: "Web App Servers", type: "Greybox", status: "Scheduled", progress: 100, vulnerabilities: [5, 12, null, null], lastScan: "4d ago" },
  { id: 9, name: "Web App Servers", type: "Greybox", status: "Scheduled", progress: 100, vulnerabilities: [5, 12, null, null], lastScan: "4d ago" },
  { id: 10, name: "IoT Devices", type: "Blackbox", status: "Failed", progress: 10, vulnerabilities: [2, 4, 8, 1], lastScan: "3d ago" },
  { id: 11, name: "Temp Data", type: "Blackbox", status: "Failed", progress: 10, vulnerabilities: [2, 4, 8, 1], lastScan: "3d ago" },
  { id: 12, name: "API Gateway", type: "Greybox", status: "Completed", progress: 100, vulnerabilities: [3, 8, 15, 22], lastScan: "5d ago" },
  { id: 13, name: "Mobile Backend", type: "Blackbox", status: "Completed", progress: 100, vulnerabilities: [1, 5, 9, 12], lastScan: "6d ago" },
  { id: 14, name: "Auth Service", type: "Greybox", status: "Scheduled", progress: 0, vulnerabilities: [null, null, null, null], lastScan: "Pending" },
  { id: 15, name: "Payment Gateway", type: "Blackbox", status: "Failed", progress: 35, vulnerabilities: [4, 7, 3, 2], lastScan: "1d ago" },
];

// Scan detail mock data for Screen 3
export const scanDetail = {
  id: 1,
  name: "New Scan",
  breadcrumb: ["Private Assets", "New Scan"],
  progress: 0,
  status: "In Progress",
  steps: [
    { label: "Spidering", active: true },
    { label: "Mapping", active: false },
    { label: "Testing", active: false },
    { label: "Validating", active: false },
    { label: "Reporting", active: false },
  ],
  meta: {
    scanType: "Grey Box",
    targets: "google.com",
    startedAt: "Nov 22, 09:00AM",
    credentials: "2 Active",
    files: "Control.pdf",
    checklists: "40/350",
  },
  logs: [
    { time: "09:00:00", message: "I'll begin a systematic penetration test on", highlight: "helpdesk.democorp.com", suffix: ". Let me start with reconnaissance and enumeration." },
    { time: "09:01:00", message: "Good! target is online. Now let me perform port scanning to identify running services.", highlight: null, suffix: null },
    { time: "09:02:00", message: "Excellent reconnaissance results:\n- helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)\nLet me probe the web server on target first to understand its structure.", highlight: null, suffix: null },
    { time: "09:03:00", message: "Great! I found a login page for a Help Desk Platform. I can see a useful comment:", highlight: '"TODO: Delete the testing account (test:test)"', suffix: ". Let me test this credential. The login redirects to", path: "/password/test" },
    { time: "09:04:00", message: "The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to", highlight: "'#'", suffix: " which means the current page. Let me try a different approach." },
    { time: "09:05:00", message: "It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the", highlight: "test:test", suffix: " password directly on other endpoints." },
    { time: "09:06:00", message: "Great! I can access the dashboard using the", highlight: "'X-UserId: 10032'", suffix: " header. The dashboard shows 'Welcome, John Doe'. This suggests an **IDOR vulnerability** - I can access any user's dashboard by just changing the X-UserId header." },
  ],
  findings: [
    { severity: "Critical", time: "10:45:23", title: "SQL Injection in Authentication Endpoint", endpoint: "/api/users/profile", description: "Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access." },
    { severity: "High", time: "10:45:23", title: "Unauthorized Access to User Metadata", endpoint: "/api/auth/login", description: "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing." },
    { severity: "Medium", time: "10:45:23", title: "Broken Authentication Rate Limiting", endpoint: "/api/search", description: "No effective rate limiting detected on login attempts. Automated brute-force attempts possible." },
  ],
  statusBar: {
    subAgents: 0,
    parallelExecutions: 2,
    operations: 1,
    critical: 0,
    high: 0,
    medium: 0,
    low: 0,
  }
};