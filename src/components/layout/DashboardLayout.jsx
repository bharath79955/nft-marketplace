import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="app-theme theme-transition min-h-screen">
      <Sidebar
        mobileOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      <Header
        onMenuClick={() => setMobileMenuOpen(true)}
      />

      <main className="min-h-screen lg:ml-[82px]">
        <Outlet />
      </main>
    </div>
  );
}