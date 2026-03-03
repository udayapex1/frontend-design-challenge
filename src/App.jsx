import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ScanDetail from './pages/ScanDetail.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/scan/:id" element={<ScanDetail />} />

          <Route path="/scans" element={<Dashboard />} />
          <Route path="/projects" element={<Dashboard />} />
          <Route path="/schedule" element={<Dashboard />} />
          <Route path="/notifications" element={<Dashboard />} />
          <Route path="/settings" element={<Dashboard />} />
          <Route path="/support" element={<Dashboard />} />

          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;