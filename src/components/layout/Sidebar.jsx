import React from "react";
import { NavLink } from "react-router-dom";

import {
  Grid2X2,
  ClipboardList,
  Heart,
  Star,
  UserCircle,
  Settings,
  LogOut,
  X,
} from "lucide-react";

const navItems = [
  {
    path: "/",
    label: "Dashboard",
    icon: Grid2X2,
  },
  {
    path: "/active-bids",
    label: "Active Bids",
    icon: ClipboardList,
  },
  {
    path: "/saved",
    label: "Saved Items",
    icon: Heart,
  },
  {
    path: "/collections",
    label: "Collections",
    icon: Star,
  },
  {
    path: "/profile",
    label: "Profile",
    icon: UserCircle,
  },
  {
    path: "/settings",
    label: "Settings",
    icon: Settings,
  },
];

export default function Sidebar({
  mobileOpen,
  onClose,
}) {
  const getNavClass = ({ isActive }) =>
    `
      group
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-xl
      transition
      ${
        isActive
          ? "bg-[#6d4bea] text-white"
          : "text-[var(--text-secondary)] hover:bg-black/5 dark:hover:bg-white/10"
      }
    `;

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="
            fixed
            inset-0
            z-40
            bg-black/40
            lg:hidden
          "
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed
          left-0
          top-0
          z-50
          flex
          h-screen
          w-[82px]
          flex-col
          items-center
          border-r
          border-[var(--border-color)]
          bg-[var(--sidebar-bg)]
          py-5
          transition-transform
          duration-300

          lg:translate-x-0

          ${
            mobileOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* Logo */}
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            bg-[#6d4bea]
            text-white
          "
        >
          <span className="text-lg font-bold">◎</span>
        </div>

        {/* Mobile close */}
        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            right-2
            top-2
            flex
            h-7
            w-7
            items-center
            justify-center
            rounded-lg
            text-[var(--text-secondary)]
            hover:bg-black/5
            lg:hidden
          "
        >
          <X size={16} />
        </button>

        {/* Navigation */}
        <nav className="mt-8 flex flex-1 flex-col items-center gap-4">

          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={onClose}
                className={getNavClass}
                title={item.label}
              >
                <Icon size={18} strokeWidth={1.8} />
              </NavLink>
            );
          })}
        </nav>

        {/* Logout */}
        <button
          type="button"
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            text-[var(--text-secondary)]
            hover:bg-black/5
            dark:hover:bg-white/10
          "
          title="Logout"
        >
          <LogOut size={18} />
        </button>
      </aside>
    </>
  );
}