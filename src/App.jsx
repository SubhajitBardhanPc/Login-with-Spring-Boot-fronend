import { useState } from 'react'

import './App.css'
import HomePage from './pages/HomePage'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import DashboardPage from './pages/DashBoard/DashBoard'
import LoginSuccess from './pages/LoginSuccess/LoginSuccess'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/LoginSuccess" element={<LoginSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
