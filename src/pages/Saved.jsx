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

const savedNFTs = [
  {
    id: 1,
    name: "Liquid Wave",
    creator: "John Abraham",
    price: "0.0025 ETH",
    time: "2 Hours 1 min 30s",
  },
  {
    id: 2,
    name: "Cute Cube Cool",
    creator: "John Abraham",
    price: "0.0025 ETH",
    time: "2 Hours 1 min 30s",
  },
  {
    id: 3,
    name: "Liquid Wave",
    creator: "John Abraham",
    price: "0.0025 ETH",
    time: "2 Hours 1 min 30s",
  },
  {
    id: 4,
    name: "Cute Cube Cool",
    creator: "John Abraham",
    price: "0.0025 ETH",
    time: "2 Hours 1 min 30s",
  },
  {
    id: 5,
    name: "Liquid Wave",
    creator: "John Abraham",
    price: "0.0025 ETH",
    time: "2 Hours 1 min 30s",
  },
  {
    id: 6,
    name: "Liquid Wave",
    creator: "John Abraham",
    price: "0.0025 ETH",
    time: "2 Hours 1 min 30s",
  },
  {
    id: 7,
    name: "Cute Cube Cool",
    creator: "John Abraham",
    price: "0.0025 ETH",
    time: "2 Hours 1 min 30s",
  },
  {
    id: 8,
    name: "Liquid Wave",
    creator: "John Abraham",
    price: "0.0025 ETH",
    time: "2 Hours 1 min 30s",
  },
];

/* =========================================================
   NFT CARD
========================================================= */

function NFTCard({
  nft,
  onRemove,
  onBid,
}) {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-[15px]
        border
        border-[var(--border)]
        bg-[var(--card)]
        text-[var(--text)]
        shadow-sm
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
          alt={nft.name}
          className="
            h-[200px]
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
            sm:h-[210px]
          "
        />

        {/* Image Overlay */}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Remove */}

        <button
          type="button"
          onClick={() => onRemove(nft.id)}
          title="Remove from saved"
          aria-label="Remove from saved"
          className="
            absolute
            right-3
            top-3
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-black/60
            text-white
            backdrop-blur-md
            transition
            hover:bg-red-500
            active:scale-90
          "
        >
          <X size={17} />
        </button>

        {/* Saved */}

        <div
          className="
            absolute
            left-3
            top-3
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-[#7350ff]
            text-white
            shadow-lg
          "
        >
          <Heart
            size={17}
            fill="currentColor"
          />
        </div>
      </div>

      {/* CONTENT */}

      <div className="p-4">

        {/* TITLE / CREATOR */}

        <div className="mb-4 flex items-start gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-sm font-semibold">
              {nft.name}
            </h3>

            <div className="mt-2 flex items-center gap-2">
              <img
                src={PROFILE_IMAGE}
                alt={nft.creator}
                className="
                  h-6
                  w-6
                  shrink-0
                  rounded-full
                  object-cover
                  ring-1
                  ring-[var(--border)]
                "
              />

              <span className="truncate text-[11px] text-[var(--secondary)]">
                {nft.creator}
              </span>
            </div>
          </div>
        </div>

        {/* AUCTION */}

        <div
          className="
            mb-4
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
            className="shrink-0 text-[var(--secondary)]"
          />

          <span className="text-[var(--secondary)]">
            Auction time
          </span>

          <span className="ml-auto whitespace-nowrap font-medium">
            {nft.time}
          </span>
        </div>

        {/* PRICE */}

        <div
          className="
            mb-4
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
              {nft.price}
            </p>
          </div>

          <div
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-lg
              bg-[#7350ff]/10
            "
          >
            <Gavel
              size={16}
              className="text-[#7350ff]"
            />
          </div>
        </div>

        {/* BID */}

        <button
          type="button"
          onClick={() => onBid(nft)}
          className="
            flex
            h-10
            w-full
            items-center
            justify-center
            gap-2
            rounded-[9px]
            bg-[#7350ff]
            text-xs
            font-semibold
            text-white
            transition
            hover:bg-[#6340e8]
            hover:shadow-lg
            hover:shadow-purple-500/20
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

/* =========================================================
   SAVED PAGE
========================================================= */

export default function Saved() {
  const [items, setItems] = useState(savedNFTs);

  const [selectedNFT, setSelectedNFT] =
    useState(null);

  const [bidAmount, setBidAmount] =
    useState("");

  const [message, setMessage] =
    useState("");

  /* =======================================================
     TOAST
  ======================================================= */

  useEffect(() => {
    if (!message) {
      return;
    }

    const timer = setTimeout(() => {
      setMessage("");
    }, 2500);

    return () => clearTimeout(timer);
  }, [message]);

  /* =======================================================
     REMOVE SAVED ITEM
  ======================================================= */

  const removeSavedItem = (id) => {
    setItems((current) =>
      current.filter((item) => item.id !== id)
    );

    setMessage(
      "Item removed from Saved Items."
    );
  };

  /* =======================================================
     OPEN BID
  ======================================================= */

  const openBidModal = (nft) => {
    setSelectedNFT(nft);
    setBidAmount("");
  };

  /* =======================================================
     CLOSE BID
  ======================================================= */

  const closeBidModal = () => {
    setSelectedNFT(null);
    setBidAmount("");
  };

  /* =======================================================
     SUBMIT BID
  ======================================================= */

  const submitBid = (event) => {
    event.preventDefault();

    const amount = Number(bidAmount);

    if (
      !bidAmount.trim() ||
      Number.isNaN(amount) ||
      amount <= 0
    ) {
      setMessage(
        "Please enter a valid bid amount."
      );

      return;
    }

    setMessage(
      `Bid placed successfully for ${selectedNFT.name}.`
    );

    closeBidModal();
  };

  return (
    <div
      className="
        min-h-screen
        bg-[var(--page)]
        px-4
        pb-20
        pt-[100px]
        text-[var(--text)]
        sm:px-6
        lg:px-8
      "
    >
      <div className="mx-auto w-full max-w-[1120px]">

        {/* =================================================
            PAGE HEADER
        ================================================= */}

        <div className="flex items-start justify-between gap-4">
          <div>
            <h1
              className="
                text-xl
                font-bold
                tracking-tight
                sm:text-[22px]
              "
            >
              Saved Items
            </h1>

            <p className="mt-1 text-sm text-[var(--secondary)]">
              Welcome Saved Page
            </p>
          </div>

          {/* Breadcrumb */}

          <div className="hidden items-center text-sm sm:flex">
            <Link
              to="/"
              className="
                text-[var(--secondary)]
                transition
                hover:text-[#7350ff]
              "
            >
              Home
            </Link>

            <ChevronRight
              size={15}
              className="
                mx-1
                text-[var(--secondary)]
              "
            />

            <span className="text-[var(--text)]">
              Saved
            </span>
          </div>
        </div>

        {/* =================================================
            RESULT BAR
        ================================================= */}

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart
              size={15}
              className="text-[#7350ff]"
              fill="currentColor"
            />

            <span className="text-xs text-[var(--secondary)]">
              {items.length}{" "}
              {items.length === 1
                ? "saved item"
                : "saved items"}
            </span>
          </div>

          <span className="text-[11px] text-[var(--secondary)]">
            Saved NFTs
          </span>
        </div>

        {/* =================================================
            TOAST
        ================================================= */}

        {message && (
          <div
            className="
              fixed
              right-4
              top-[90px]
              z-[10000]
              flex
              max-w-[calc(100vw-32px)]
              items-center
              gap-2
              rounded-xl
              bg-[#7350ff]
              px-4
              py-3
              text-xs
              font-medium
              text-white
              shadow-2xl
              sm:right-6
            "
          >
            <Check size={15} />

            <span>{message}</span>
          </div>
        )}

        {/* =================================================
            EMPTY STATE
        ================================================= */}

        {items.length === 0 ? (
          <div
            className="
              mt-6
              flex
              min-h-[400px]
              items-center
              justify-center
              rounded-2xl
              border
              border-[var(--border)]
              bg-[var(--card)]
            "
          >
            <div className="px-5 text-center">

              <div
                className="
                  mx-auto
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-[#7350ff]/10
                "
              >
                <Heart
                  size={25}
                  className="text-[#7350ff]"
                />
              </div>

              <h2 className="mt-4 text-[17px] font-semibold">
                No Saved Items
              </h2>

              <p className="mt-2 text-xs text-[var(--secondary)]">
                You haven't saved any NFTs yet.
              </p>

              <Link
                to="/"
                className="
                  mt-5
                  inline-flex
                  rounded-lg
                  bg-[#7350ff]
                  px-5
                  py-3
                  text-xs
                  font-medium
                  text-white
                  transition
                  hover:bg-[#6340e8]
                "
              >
                Explore NFTs
              </Link>
            </div>
          </div>
        ) : (

          /* =================================================
             NFT GRID
          ================================================= */

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
            {items.map((nft) => (
              <NFTCard
                key={nft.id}
                nft={nft}
                onRemove={removeSavedItem}
                onBid={openBidModal}
              />
            ))}
          </div>
        )}
      </div>

      {/* ===================================================
          BID MODAL
      =================================================== */}

      {selectedNFT && (
        <div
          className="
            fixed
            inset-0
            z-[11000]
            flex
            items-center
            justify-center
            bg-black/60
            px-4
            backdrop-blur-sm
          "
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              closeBidModal();
            }
          }}
        >
          <div
            className="
              w-full
              max-w-[430px]
              rounded-[18px]
              border
              border-[var(--border)]
              bg-[var(--card)]
              p-5
              text-[var(--text)]
              shadow-2xl
              sm:p-6
            "
          >

            {/* MODAL HEADER */}

            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold">
                  Place a Bid
                </h2>

                <p className="mt-1 text-xs text-[var(--secondary)]">
                  {selectedNFT.name}
                </p>
              </div>

              <button
                type="button"
                onClick={closeBidModal}
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  text-[var(--secondary)]
                  transition
                  hover:bg-black/5
                  hover:text-[var(--text)]
                  dark:hover:bg-white/10
                "
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* CURRENT BID */}

            <div
              className="
                mb-5
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

              <p className="mt-1 text-lg font-semibold">
                {selectedNFT.price}
              </p>
            </div>

            {/* FORM */}

            <form onSubmit={submitBid}>
              <label className="mb-2 block text-xs text-[var(--secondary)]">
                Your Bid
              </label>

              <div className="relative">
                <input
                  type="number"
                  min="0.0001"
                  step="0.0001"
                  value={bidAmount}
                  onChange={(event) =>
                    setBidAmount(
                      event.target.value
                    )
                  }
                  placeholder="Enter ETH amount"
                  className="
                    h-12
                    w-full
                    rounded-xl
                    border
                    border-[var(--border)]
                    bg-[var(--input)]
                    px-4
                    pr-16
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
                    font-medium
                    text-[var(--secondary)]
                  "
                >
                  ETH
                </span>
              </div>

              <button
                type="submit"
                className="
                  mt-5
                  flex
                  h-11
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
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
                Confirm Bid
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}