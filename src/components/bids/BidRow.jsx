import {
  Clock3,
  ExternalLink,
  MoreHorizontal,
  Trash2,
} from "lucide-react";

import { useMarketplace } from "../../context/MarketplaceContext";

function BidRow({ bid }) {
  const { removeBid, showToast } = useMarketplace();

  if (!bid) return null;

  const handleRemove = () => {
    removeBid(bid.id);
  };

  const handleDetails = () => {
    showToast(`Opening ${bid.name}`);
  };

  return (
    <div
      className="
        grid
        grid-cols-[minmax(180px,1.5fr)_repeat(3,minmax(110px,1fr))_130px_50px]
        items-center
        gap-4
        border-b
        border-[var(--border)]
        px-4
        py-4
        transition
        last:border-b-0
        hover:bg-[var(--card-hover)]
        sm:px-5
      "
    >
      {/* NFT */}
      <div className="flex min-w-0 items-center gap-3">
        <img
          src={
            bid.image ||
            `/src/assets/images/nft-${
              ((bid.id - 1) % 5) + 1
            }.jpg`
          }
          alt={bid.name}
          className="
            h-11
            w-11
            shrink-0
            rounded-xl
            object-cover
            sm:h-12
            sm:w-12
          "
        />

        <div className="min-w-0">
          <h3 className="truncate text-xs font-semibold sm:text-sm">
            {bid.name}
          </h3>

          <p className="mt-1 truncate text-[10px] text-[var(--text-muted)]">
            {bid.artist || "John Abraham"}
          </p>
        </div>
      </div>

      {/* Open Price */}
      <div>
        <p className="text-[10px] text-[var(--text-muted)]">
          Open Price
        </p>

        <p className="mt-1 text-xs font-semibold">
          {bid.openPrice || "0.0025 ETH"}
        </p>
      </div>

      {/* Your Offer */}
      <div>
        <p className="text-[10px] text-[var(--text-muted)]">
          Your Offer
        </p>

        <p className="mt-1 text-xs font-semibold text-[#6C4DF6]">
          {bid.yourOffer || "0.0025 ETH"}
        </p>
      </div>

      {/* Recent Offer */}
      <div>
        <p className="text-[10px] text-[var(--text-muted)]">
          Recent Offer
        </p>

        <p className="mt-1 text-xs font-semibold">
          {bid.recentOffer || "0.0025 ETH"}
        </p>
      </div>

      {/* Time */}
      <div>
        <div className="flex items-center gap-1.5 text-[var(--text-secondary)]">
          <Clock3 size={13} />

          <span className="text-[10px]">
            Time Left
          </span>
        </div>

        <p className="mt-1 text-[11px] font-medium text-[#F5C32C]">
          {bid.timeLeft || "2 Hours 1 min 30s"}
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-1">
        <button
          type="button"
          onClick={handleDetails}
          aria-label={`View ${bid.name}`}
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-lg
            text-[var(--text-muted)]
            transition
            hover:bg-[#6C4DF6]/10
            hover:text-[#6C4DF6]
          "
        >
          <ExternalLink size={15} />
        </button>

        <button
          type="button"
          onClick={handleRemove}
          aria-label={`Remove ${bid.name} bid`}
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-lg
            text-[var(--text-muted)]
            transition
            hover:bg-[#EB3F56]/10
            hover:text-[#EB3F56]
          "
        >
          <Trash2 size={15} />
        </button>

        <button
          type="button"
          onClick={() =>
            showToast("More options selected")
          }
          aria-label="More options"
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-lg
            text-[var(--text-muted)]
            transition
            hover:bg-[var(--card-hover)]
            hover:text-[var(--text)]
          "
        >
          <MoreHorizontal size={15} />
        </button>
      </div>
    </div>
  );
}

export default BidRow;