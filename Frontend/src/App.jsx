import React from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import RoleSelectionPage from './pages/RoleSelectionPage';
import UserDashboard from './pages/UserDashboard';
import StoreOwner from './pages/StoreOwner';
import SystemAdministrator from './pages/SystemAdministrator';
import RoleLoginPage from './pages/RoleLoginPage';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <div className=''>

      <Routes>
        <Route path="/" element={<RoleSelectionPage />} />
        <Route path="/login/:role" element={<RoleLoginPage />} />
        <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute requiredRole="user">
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/store-owner"
          element={
            <ProtectedRoute requiredRole="store-owner">
              <StoreOwner />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredRole="admin">
              <SystemAdministrator />
            </ProtectedRoute>
          }
        />
      </Routes>

    </div>
  )
}

export default App;