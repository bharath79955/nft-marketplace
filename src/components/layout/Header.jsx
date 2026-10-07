import React from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Moon,
  Sun,
  Bell,
  Menu,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

const PROFILE_IMAGE =
  "https://res.cloudinary.com/owilpwin/image/upload/f_auto,q_auto/profile";

export default function Header({ onMenuClick }) {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header
      className="
        fixed
        left-0
        right-0
        top-0
        z-40
        h-[72px]
        border-b
        border-[var(--border-color)]
        bg-[var(--header-bg)]
        lg:left-[82px]
      "
    >
      <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* LEFT */}
        <div className="flex min-w-0 items-center gap-3">

          {/* Mobile / Tablet menu */}
          <button
            type="button"
            onClick={onMenuClick}
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              text-[var(--text-primary)]
              hover:bg-black/5
              lg:hidden
            "
            aria-label="Open menu"
          >
            <Menu size={21} />
          </button>

          {/* Search */}
          <div
            className="
              relative
              w-[180px]
              sm:w-[240px]
              md:w-[280px]
              lg:w-[265px]
              xl:w-[300px]
            "
          >
            <Search
              size={17}
              className="
                pointer-events-none
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-[var(--text-muted)]
              "
            />

            <input
              type="text"
              placeholder="Search Here"
              className="
                search-theme
                h-[38px]
                w-full
                rounded-[9px]
                pl-10
                pr-4
                text-sm
                outline-none
              "
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-4">

          {/* Theme */}
          <button
            type="button"
            onClick={toggleTheme}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              text-[var(--text-primary)]
              transition
              hover:bg-black/5
              dark:hover:bg-white/10
            "
            aria-label={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
          >
            {darkMode ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

          {/* Notifications */}
          <Link
            to="/notifications"
            className="
              hidden
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              text-[var(--text-primary)]
              hover:bg-black/5
              sm:flex
              dark:hover:bg-white/10
            "
          >
            <Bell size={18} />
          </Link>

          {/* Profile */}
          <Link
            to="/profile"
            className="flex items-center"
          >
            <img
              src={PROFILE_IMAGE}
              alt="Profile"
              className="
                h-9
                w-9
                rounded-full
                object-cover
                ring-2
                ring-[var(--border-color)]
              "
            />
          </Link>
        </div>
      </div>
    </header>
  );
}