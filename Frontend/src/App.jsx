import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import RoleSelectionPage from './pages/RoleSelectionPage';

const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<RoleSelectionPage />} />
      </Routes>

    </div>
  )
}

export default App;