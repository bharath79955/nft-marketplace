import { Gavel } from "lucide-react";
import BidRow from "./BidRow";

function BidTable({ bids = [] }) {
  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        text-[var(--text)]
      "
    >
      {/* Desktop header */}
      <div
        className="
          hidden
          min-w-[900px]
          grid-cols-[minmax(180px,1.5fr)_repeat(3,minmax(110px,1fr))_130px_50px]
          items-center
          gap-4
          border-b
          border-[var(--border)]
          bg-[var(--input)]
          px-4
          py-3
          text-[10px]
          font-semibold
          uppercase
          tracking-wide
          text-[var(--text-muted)]
          lg:grid
          sm:px-5
        "
      >
        <span>NFT</span>
        <span>Open Price</span>
        <span>Your Offer</span>
        <span>Recent Offer</span>
        <span>Time Left</span>
        <span />
      </div>

      {/* Desktop table */}
      {bids.length > 0 ? (
        <div className="hidden overflow-x-auto lg:block">
          <div className="min-w-[900px]">
            {bids.map((bid) => (
              <BidRow
                key={bid.id}
                bid={bid}
              />
            ))}
          </div>
        </div>
      ) : (
        <EmptyState />
      )}

      {/* Mobile / Tablet cards */}
      {bids.length > 0 && (
        <div className="divide-y divide-[var(--border)] lg:hidden">
          {bids.map((bid) => (
            <MobileBidCard
              key={bid.id}
              bid={bid}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function MobileBidCard({ bid }) {
  const {
    removeBid,
    showToast,
  } = requireContext();

  return (
    <div className="p-4 sm:p-5">
      <div className="flex items-center gap-3">
        <img
          src={
            bid.image ||
            `/src/assets/images/nft-${
              ((bid.id - 1) % 5) + 1
            }.jpg`
          }
          alt={bid.name}
          className="
            h-12
            w-12
            shrink-0
            rounded-xl
            object-cover
          "
        />

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-sm font-semibold">
            {bid.name}
          </h3>

          <p className="mt-1 truncate text-xs text-[var(--text-muted)]">
            {bid.artist || "John Abraham"}
          </p>
        </div>

        <button
          type="button"
          onClick={() =>
            showToast(`Opening ${bid.name}`)
          }
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-lg
            text-[var(--text-muted)]
            hover:bg-[var(--card-hover)]
            hover:text-[var(--text)]
          "
        >
          ⋯
        </button>
      </div>

      <div
        className="
          mt-4
          grid
          grid-cols-2
          gap-3
          rounded-xl
          bg-[var(--input)]
          p-3
          sm:grid-cols-4
        "
      >
        <Info
          label="Open Price"
          value={bid.openPrice || "0.0025 ETH"}
        />

        <Info
          label="Your Offer"
          value={bid.yourOffer || "0.0025 ETH"}
          highlight
        />

        <Info
          label="Recent Offer"
          value={bid.recentOffer || "0.0025 ETH"}
        />

        <Info
          label="Time Left"
          value={bid.timeLeft || "2 Hours 1 min 30s"}
          warning
        />
      </div>

      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() =>
            showToast(`Opening ${bid.name}`)
          }
          className="
            flex-1
            rounded-lg
            border
            border-[var(--border)]
            px-3
            py-2
            text-xs
            font-medium
            text-[var(--text-secondary)]
            transition
            hover:border-[#6C4DF6]
            hover:text-[#6C4DF6]
          "
        >
          View Details
        </button>

        <button
          type="button"
          onClick={() => removeBid(bid.id)}
          className="
            flex-1
            rounded-lg
            bg-[#EB3F56]/10
            px-3
            py-2
            text-xs
            font-medium
            text-[#EB3F56]
            transition
            hover:bg-[#EB3F56]
            hover:text-white
          "
        >
          Remove Bid
        </button>
      </div>
    </div>
  );
}

function Info({
  label,
  value,
  highlight = false,
  warning = false,
}) {
  return (
    <div>
      <p className="text-[9px] text-[var(--text-muted)]">
        {label}
      </p>

      <p
        className={`
          mt-1
          truncate
          text-xs
          font-semibold
          ${
            highlight
              ? "text-[#6C4DF6]"
              : warning
              ? "text-[#F5C32C]"
              : "text-[var(--text)]"
          }
        `}
      >
        {value}
      </p>
    </div>
  );
}

/*
  Small helper so the mobile card can use the same
  MarketplaceContext as BidRow without duplicating
  the entire component structure.
*/
let marketplaceContext = null;

function requireContext() {
  if (!marketplaceContext) {
    throw new Error(
      "BidTable context has not been initialized."
    );
  }

  return marketplaceContext;
}

export default BidTable;