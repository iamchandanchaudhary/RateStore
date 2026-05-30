import React from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import RoleSelectionPage from './pages/RoleSelectionPage';
import UserDashboard from './pages/UserDashboard';
import StoreOwner from './pages/StoreOwner';
import SystemAdministrator from './pages/SystemAdministrator';

const App = () => {
  return (
    <div className=''>

      <Routes>
        <Route path="/" element={<RoleSelectionPage />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/store-owner" element={<StoreOwner />} />
        <Route path="/admin" element={<SystemAdministrator />} />
      </Routes>

    </div>
  )
}

export default App;