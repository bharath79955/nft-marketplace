import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#130e26]">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Fixed Header */}
      <Header />

      {/* Page Content */}
      <main className="min-h-screen lg:ml-[82px]">
        <Outlet />
      </main>
    </div>
  );
}