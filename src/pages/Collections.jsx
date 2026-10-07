import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Clock,
  Gavel,
  X,
  Check,
  ChevronRight,
} from "lucide-react";
const NFT_IMAGE =
  "https://res.cloudinary.com/owilpwin/image/upload/f_auto,q_auto/nft-1";
const PROFILE_IMAGE =
  "https://res.cloudinary.com/owilpwin/image/upload/f_auto,q_auto/profile";
const collections = [
  {
    id: 1,
    name: "Liquid Wave",
    creator: "John Abraham",
    category: "Artwork",
    price: "0.0025 ETH",
    time: "2 Hours 1 min 30s",
  },
  {
    id: 2,
    name: "Cute Cube Cool",
    creator: "John Abraham",
    category: "Artwork",
    price: "0.0025 ETH",
    time: "2 Hours 1 min 30s",
  },
  {
    id: 3,
    name: "Liquid Wave",
    creator: "John Abraham",
    category: "Artwork",
    price: "0.0025 ETH",
    time: "2 Hours 1 min 30s",
  },
  {
    id: 4,
    name: "Digital Book",
    creator: "John Abraham",
    category: "Book",
    price: "0.0025 ETH",
    time: "2 Hours 1 min 30s",
  },
  {
    id: 5,
    name: "Liquid Wave",
    creator: "John Abraham",
    category: "Artwork",
    price: "0.0025 ETH",
    time: "2 Hours 1 min 30s",
  },
  {
    id: 6,
    name: "Cute Cube Cool",
    creator: "John Abraham",
    category: "Artwork",
    price: "0.0025 ETH",
    time: "2 Hours 1 min 30s",
  },
  {
    id: 7,
    name: "Digital Book",
    creator: "John Abraham",
    category: "Book",
    price: "0.0025 ETH",
    time: "2 Hours 1 min 30s",
  },
  {
    id: 8,
    name: "Liquid Wave",
    creator: "John Abraham",
    category: "Artwork",
    price: "2 Hours 1 min 30s",
    time: "2 Hours 1 min 30s",
  },
];
function CollectionCard({
  item,
  saved,
  onSave,
  onBid,
}) {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        text-[var(--text)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={NFT_IMAGE}
          alt={item.name}
          className="
            h-[200px]
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
        {/* CATEGORY */}
        <div
          className="
            absolute
            left-3
            top-3
            rounded-full
            bg-black/60
            px-3
            py-1.5
            text-[10px]
            font-medium
            text-white
            backdrop-blur-sm
          "
        >
          {item.category}
        </div>
        {/* HEART */}
        <button
          type="button"
          onClick={() => onSave(item.id)}
          className={`
            absolute
            right-3
            top-3
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            transition
            ${
              saved
                ? "bg-[#7350ff] text-white"
                : "bg-black/60 text-white hover:bg-[#7350ff]"
            }
          `}
          aria-label="Save item"
        >
          <Heart
            size={17}
            fill={saved ? "currentColor" : "none"}
          />
        </button>
      </div>
      {/* CONTENT */}
      <div className="p-4">
        {/* CREATOR */}
        <div className="flex items-center gap-3">
          <img
            src={PROFILE_IMAGE}
            alt={item.creator}
            className="h-9 w-9 rounded-full object-cover"
          />
          <div className="min-w-0">
            <h3 className="truncate text-sm font-semibold">
              {item.name}
            </h3>
            <p className="mt-1 truncate text-[11px] text-[var(--secondary)]">
              {item.creator}
            </p>
          </div>
        </div>
        {/* TIME */}
        <div
          className="
            mt-4
            flex
            items-center
            gap-2
            rounded-lg
            border
            border-[var(--border)]
            bg-[var(--input)]
            px-3
            py-2.5
            text-[11px]
          "
        >
          <Clock
            size={13}
            className="text-[var(--secondary)]"
          />
          <span className="text-[var(--secondary)]">
            Auction time
          </span>
          <span className="ml-auto whitespace-nowrap font-medium">
            {item.time}
          </span>
        </div>
        {/* PRICE */}
        <div
          className="
            mt-4
            flex
            items-center
            justify-between
            border-t
            border-[var(--border)]
            pt-3
          "
        >
          <div>
            <p className="text-[10px] text-[var(--secondary)]">
              Current Bid
            </p>
            <p className="mt-1 text-[13px] font-semibold">
              {item.price}
            </p>
          </div>
          <Gavel
            size={17}
            className="text-[#7350ff]"
          />
        </div>
        {/* BID BUTTON */}
        <button
          type="button"
          onClick={() => onBid(item)}
          className="
            mt-4
            flex
            h-10
            w-full
            items-center
            justify-center
            gap-2
            rounded-lg
            bg-[#7350ff]
            text-xs
            font-semibold
            text-white
            transition
            hover:bg-[#6340e8]
            active:scale-[0.98]
          "
        >
          <Gavel size={14} />
          Place a Bid
        </button>
      </div>
    </div>
  );
}
export default function Collections() {
  const [filter, setFilter] = useState("All");
  const [savedItems, setSavedItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [bidAmount, setBidAmount] = useState("");
  const [toast, setToast] = useState("");
  const filters = ["All", "Artwork", "Book"];
  const filteredItems =
    filter === "All"
      ? collections
      : collections.filter(
          (item) => item.category === filter
        );
  /* TOAST */
  useEffect(() => {
    if (!toast) {
      return;
    }
    const timer = setTimeout(() => {
      setToast("");
    }, 2500);
    return () => clearTimeout(timer);
  }, [toast]);
  /* SAVE */
  const handleSave = (id) => {
    setSavedItems((previous) => {
      if (previous.includes(id)) {
        setToast("Removed from saved items.");
        return previous.filter(
          (savedId) => savedId !== id
        );
      }
      setToast("Added to saved items.");
      return [...previous, id];
    });
  };
  /* OPEN BID */
  const handleOpenBid = (item) => {
    setSelectedItem(item);
    setBidAmount("");
  };
  /* CLOSE BID */
  const handleCloseBid = () => {
    setSelectedItem(null);
    setBidAmount("");
  };
  /* SUBMIT BID */
  const handleSubmitBid = (event) => {
    event.preventDefault();
    if (!bidAmount || Number(bidAmount) <= 0) {
      setToast("Please enter a valid bid amount.");
      return;
    }
    setToast(
      `Bid placed successfully for ${selectedItem.name}.`
    );
    setSelectedItem(null);
    setBidAmount("");
  };
  return (
    <div
      className="
        min-h-screen
        bg-[var(--page)]
        px-4
        pb-16
        pt-[100px]
        text-[var(--text)]
        sm:px-6
        lg:px-8
      "
    >
      <div className="mx-auto max-w-[1120px]">
        {/* HEADER */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-xl font-bold sm:text-[22px]">
              Collections
            </h1>
            <p className="mt-1 text-sm text-[var(--secondary)]">
              Welcome Collections Page
            </p>
          </div>
          {/* BREADCRUMB */}
          <div className="hidden items-center text-sm sm:flex">
            <Link
              to="/"
              className="text-[var(--secondary)] hover:text-[#7350ff]"
            >
              Home
            </Link>
            <ChevronRight
              size={15}
              className="mx-1 text-[var(--secondary)]"
            />
            <span className="text-[var(--text)]">
              Collections
            </span>
          </div>
        </div>
        {/* FILTER BUTTONS */}
        <div className="mt-7 flex flex-wrap gap-3">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`
                rounded-lg
                px-5
                py-2.5
                text-xs
                font-medium
                transition
                ${
                  filter === item
                    ? "bg-[#7350ff] text-white"
                    : "border border-[var(--border)] bg-[var(--card)] text-[var(--secondary)] hover:text-[var(--text)]"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>
        {/* COUNT */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-xs text-[var(--secondary)]">
            {filteredItems.length} items
          </p>
          <p className="text-xs text-[var(--secondary)]">
            {filter === "All"
              ? "All Collections"
              : filter}
          </p>
        </div>
        {/* GRID */}
        <div
          className="
            mt-5
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {filteredItems.map((item) => (
            <CollectionCard
              key={item.id}
              item={item}
              saved={savedItems.includes(item.id)}
              onSave={handleSave}
              onBid={handleOpenBid}
            />
          ))}
        </div>
      </div>
      {/* TOAST */}
      {toast && (
        <div
          className="
            fixed
            right-4
            top-[90px]
            z-[9999]
            flex
            items-center
            gap-2
            rounded-xl
            bg-[#7350ff]
            px-4
            py-3
            text-xs
            font-medium
            text-white
            shadow-xl
            sm:right-6
          "
        >
          <Check size={15} />
          <span>{toast}</span>
        </div>
      )}
      {/* BID MODAL */}
      {selectedItem && (
        <div
          className="
            fixed
            inset-0
            z-[10000]
            flex
            items-center
            justify-center
            bg-black/60
            px-4
            backdrop-blur-sm
          "
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              handleCloseBid();
            }
          }}
        >
          <div
            className="
              w-full
              max-w-[420px]
              rounded-2xl
              border
              border-[var(--border)]
              bg-[var(--card)]
              p-6
              text-[var(--text)]
              shadow-2xl
            "
          >
            {/* MODAL HEADER */}
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-bold">
                  Place a Bid
                </h2>
                <p className="mt-1 text-xs text-[var(--secondary)]">
                  {selectedItem.name}
                </p>
              </div>
              <button
                type="button"
                onClick={handleCloseBid}
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  text-[var(--secondary)]
                  hover:bg-black/5
                  hover:text-[var(--text)]
                  dark:hover:bg-white/10
                "
              >
                <X size={18} />
              </button>
            </div>
            {/* CURRENT BID */}
            <div
              className="
                mt-5
                rounded-xl
                border
                border-[var(--border)]
                bg-[var(--input)]
                p-4
              "
            >
              <p className="text-[11px] text-[var(--secondary)]">
                Current Bid
              </p>
              <p className="mt-1 text-lg font-bold">
                {selectedItem.price}
              </p>
            </div>
            {/* FORM */}
            <form
              onSubmit={handleSubmitBid}
              className="mt-5"
            >
              <label className="mb-2 block text-xs font-medium">
                Your Bid
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="0.0001"
                  step="0.0001"
                  value={bidAmount}
                  onChange={(event) =>
                    setBidAmount(event.target.value)
                  }
                  placeholder="Enter bid amount"
                  className="
                    h-11
                    w-full
                    rounded-lg
                    border
                    border-[var(--border)]
                    bg-[var(--input)]
                    px-4
                    pr-14
                    text-sm
                    text-[var(--text)]
                    outline-none
                    placeholder:text-[var(--secondary)]
                    focus:border-[#7350ff]
                  "
                />
                <span
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-xs
                    font-semibold
                    text-[var(--secondary)]
                  "
                >
                  ETH
                </span>
              </div>
              <button
                type="submit"
                className="
                  mt-4
                  flex
                  h-11
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  bg-[#7350ff]
                  text-xs
                  font-semibold
                  text-white
                  hover:bg-[#6340e8]
                "
              >
                <Gavel size={14} />
                Confirm Bid
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}