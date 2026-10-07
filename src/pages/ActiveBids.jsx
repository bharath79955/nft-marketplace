import React from "react";
import { X } from "lucide-react";
import { useMarketplace } from "../context/MarketplaceContext";

const NFT =
  "https://res.cloudinary.com/owilpwin/image/upload/f_auto,q_auto/nft-1";

const CREATOR =
  "https://res.cloudinary.com/owilpwin/image/upload/f_auto,q_auto/creator";

const bids = [
  {
    id: 1,
    name: "Cute Cube Cool",
    image: NFT,
    price: "0.0025 ETH",
  },
  {
    id: 2,
    name: "Liquid Wave",
    image: NFT,
    price: "0.0025 ETH",
  },
  {
    id: 3,
    name: "Cute Cube Cool",
    image: NFT,
    price: "0.0025 ETH",
  },
  {
    id: 4,
    name: "Liquid Wave",
    image: NFT,
    price: "0.0025 ETH",
  },
  {
    id: 5,
    name: "Liquid Wave",
    image: NFT,
    price: "0.0025 ETH",
  },
];

export default function ActiveBids() {
  const { removeBid } = useMarketplace();

  return (
    <div className="page-content min-h-screen px-4 pb-10 pt-[100px] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1120px]">

        <h1 className="text-xl font-bold">Active Bids</h1>

        {/* Desktop table */}
        <div className="mt-8 hidden overflow-x-auto lg:block">
          <div className="min-w-[900px]">

            <div className="grid grid-cols-[55px_2fr_1fr_1fr_1.2fr_1.3fr_55px] items-center border-b border-[var(--border)] px-3 pb-3 text-xs font-semibold text-[var(--text)]">
              <span />
              <span>Item List</span>
              <span>Open Price</span>
              <span>Your Offer</span>
              <span>Recent Offer</span>
              <span>Time Left</span>
              <span>Action</span>
            </div>

            <div className="mt-3 space-y-3">
              {bids.map((bid) => (
                <div
                  key={bid.id}
                  className="market-row grid grid-cols-[55px_2fr_1fr_1fr_1.2fr_1.3fr_55px] items-center rounded-2xl px-3 py-2.5"
                >
                  <input type="checkbox" />

                  <div className="flex items-center gap-3">
                    <img
                      src={bid.image}
                      alt={bid.name}
                      className="h-10 w-14 rounded-full object-cover"
                    />

                    <div>
                      <p className="text-sm font-bold">
                        {bid.name}
                      </p>
                      <p className="text-xs text-[var(--text-secondary)]">
                        John Abraham
                      </p>
                    </div>
                  </div>

                  <span className="text-xs">{bid.price}</span>
                  <span className="text-xs">{bid.price}</span>

                  <div className="flex items-center gap-2">
                    <img
                      src={CREATOR}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <span className="text-xs">{bid.price}</span>
                  </div>

                  <span className="text-xs">
                    2 Hours 1 min 30s
                  </span>

                  <button
                    onClick={() => removeBid?.(bid.id)}
                    className="text-sm font-bold hover:text-red-500"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile / Tablet */}
        <div className="mt-6 space-y-4 lg:hidden">
          {bids.map((bid) => (
            <div
              key={bid.id}
              className="market-card rounded-2xl p-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={bid.image}
                    className="h-12 w-16 rounded-xl object-cover"
                  />

                  <div>
                    <h3 className="text-sm font-bold">
                      {bid.name}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)]">
                      John Abraham
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => removeBid?.(bid.id)}
                  className="text-[var(--text)]"
                >
                  <X size={17} />
                </button>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <p className="text-[var(--text-secondary)]">
                    Open Price
                  </p>
                  <p className="mt-1">{bid.price}</p>
                </div>

                <div>
                  <p className="text-[var(--text-secondary)]">
                    Your Offer
                  </p>
                  <p className="mt-1">{bid.price}</p>
                </div>

                <div>
                  <p className="text-[var(--text-secondary)]">
                    Recent Offer
                  </p>
                  <p className="mt-1">{bid.price}</p>
                </div>

                <div>
                  <p className="text-[var(--text-secondary)]">
                    Time Left
                  </p>
                  <p className="mt-1">2 Hours 1 min 30s</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}