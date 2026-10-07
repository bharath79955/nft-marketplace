import {
  Grid2X2,
  Heart,
  Settings,
  Shield,
  Star,
  UserCircle,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navigation = [
  {
    label: "Dashboard",
    path: "/",
    icon: Grid2X2,
  },
  {
    label: "Active Bids",
    path: "/active-bids",
    icon: Shield,
  },
  {
    label: "Bids",
    path: "/bids",
    icon: Heart,
  },
  {
    label: "Saved Items",
    path: "/saved",
    icon: Star,
  },
  {
    label: "Collections",
    path: "/collections",
    icon: Shield,
  },
  {
    label: "Profile",
    path: "/profile",
    icon: UserCircle,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

function MobileMenu({ open, onClose }) {
  if (!open) {
    return null;
  }

  return (
    <>
      {/* Overlay */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-[2px]"
      />

      {/* Drawer */}
      <aside className="fixed left-0 top-0 z-[100] flex h-dvh w-[280px] max-w-[85vw] flex-col bg-[#17132d] shadow-2xl">
        {/* Header */}
        <div className="flex h-[72px] items-center justify-between border-b border-white/[0.06] px-5">
          <NavLink
            to="/"
            onClick={onClose}
            className="flex items-center gap-3"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#6C4DF6] text-white">
              <Shield size={20} />
            </span>

            <span className="text-sm font-bold text-white">
              NFT Marketplace
            </span>
          </NavLink>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[#8d879d] transition hover:bg-white/[0.05] hover:text-white"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-5">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#625b76]">
            Menu
          </p>

          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-[#6C4DF6] text-white shadow-lg shadow-[#6C4DF6]/20"
                        : "text-[#9b94ad] hover:bg-white/[0.05] hover:text-white"
                    }`
                  }
                >
                  <Icon size={18} strokeWidth={1.9} />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] p-4">
          <div className="rounded-xl bg-[#1d1836] p-4">
            <p className="text-xs font-semibold text-white">
              NFT Marketplace
            </p>

            <p className="mt-1 text-[10px] leading-5 text-[#77718a]">
              Discover and collect unique digital assets.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

export default MobileMenu;