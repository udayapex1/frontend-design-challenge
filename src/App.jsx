import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ScanTable from './components/ScanTable.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Default route */}
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/scans" element={<ScanTable />} />

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App