export const APP_NAME = "NFT Marketplace";

export const ROUTES = {
  DASHBOARD: "/",
  ACTIVE_BIDS: "/active-bids",
  BIDS: "/bids",
  SAVED: "/saved",
  COLLECTIONS: "/collections",
  PROFILE: "/profile",
  SETTINGS: "/settings",
};

export const NFT_CATEGORIES = [
  "All",
  "Artwork",
  "Book",
  "Photography",
  "Music",
  "Collectibles",
];

export const TIME_RANGES = [
  {
    label: "1D",
    value: "1D",
  },
  {
    label: "1W",
    value: "1W",
  },
  {
    label: "1M",
    value: "1M",
  },
  {
    label: "1Y",
    value: "1Y",
  },
];

export const BID_STATUS = {
  ACTIVE: "Active",
  COMPLETED: "Completed",
  CANCELLED: "Canceled",
};

export const TOAST_DURATION = 2500;

export const DEFAULT_CURRENCY = "ETH";

export const NAVIGATION_ITEMS = [
  {
    label: "Dashboard",
    path: ROUTES.DASHBOARD,
  },
  {
    label: "Active Bids",
    path: ROUTES.ACTIVE_BIDS,
  },
  {
    label: "Bids",
    path: ROUTES.BIDS,
  },
  {
    label: "Saved Items",
    path: ROUTES.SAVED,
  },
  {
    label: "Collections",
    path: ROUTES.COLLECTIONS,
  },
  {
    label: "Profile",
    path: ROUTES.PROFILE,
  },
  {
    label: "Settings",
    path: ROUTES.SETTINGS,
  },
];