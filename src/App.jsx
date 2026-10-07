import React from "react";
import { Routes, Route } from "react-router-dom";

import DashboardLayout from "./components/layout/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import Bids from "./pages/Bids";
import ActiveBids from "./pages/ActiveBids";
import Saved from "./pages/Saved";
import Collections from "./pages/Collections";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>

        <Route path="/" element={<Dashboard />} />

        <Route path="/bids" element={<Bids />} />

        <Route path="/active-bids" element={<ActiveBids />} />

        <Route path="/saved" element={<Saved />} />

        <Route path="/collections" element={<Collections />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/settings" element={<Settings />} />

        <Route path="*" element={<Dashboard />} />

      </Route>
    </Routes>
  );
}