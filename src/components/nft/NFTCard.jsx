import { Heart, MoreHorizontal, Tag } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useMarketplace } from "../../context/MarketplaceContext";
import Button from "../common/Button";

function NFTCard({
  nft,
  onBid,
  showBidButton = true,
}) {
  const navigate = useNavigate();

  const {
    savedItems,
    toggleSaved,
  } = useMarketplace();

  if (!nft) return null;

  const isSaved = savedItems.includes(nft.id);

  const handleCardClick = () => {
    navigate(`/nft/${nft.id}`);
  };

  const handleSave = (event) => {
    event.stopPropagation();
    toggleSaved(nft.id);
  };

  const handleBid = (event) => {
    event.stopPropagation();

    if (onBid) {
      onBid(nft);
    }
  };

  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        text-[var(--text)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#6C4DF6]/40
        hover:shadow-[0_16px_40px_rgba(0,0,0,0.16)]
      "
    >
      {/* NFT Image */}
      <div
        className="
          relative
          aspect-square
          cursor-pointer
          overflow-hidden
          bg-[var(--input)]
        "
        onClick={handleCardClick}
      >
        <img
          src={nft.image}
          alt={nft.name}
          className="
            nft-image
            h-full
            w-full
            object-cover
          "
          loading="lazy"
        />

        {/* Image overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/35
            via-transparent
            to-transparent
            opacity-0
            transition
            duration-300
            group-hover:opacity-100
          "
        />

        {/* Favorite */}
        <button
          type="button"
          onClick={handleSave}
          aria-label={
            isSaved
              ? "Remove from saved items"
              : "Add to saved items"
          }
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
            backdrop-blur-md
            transition-all
            ${
              isSaved
                ? "bg-[#EB3F56] text-white"
                : "bg-black/35 text-white hover:bg-[#EB3F56]"
            }
          `}
        >
          <Heart
            size={17}
            fill={isSaved ? "currentColor" : "none"}
          />
        </button>

        {/* Category */}
        {nft.category && (
          <span
            className="
              absolute
              left-3
              top-3
              rounded-full
              bg-black/45
              px-2.5
              py-1
              text-[10px]
              font-medium
              text-white
              backdrop-blur-md
            "
          >
            {nft.category}
          </span>
        )}

        {/* View details */}
        <div
          className="
            absolute
            inset-x-3
            bottom-3
            flex
            translate-y-2
            justify-center
            opacity-0
            transition-all
            duration-300
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          <span
            className="
              rounded-lg
              bg-white/95
              px-4
              py-2
              text-xs
              font-semibold
              text-[#18152B]
              shadow-lg
            "
          >
            View Details
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title row */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3
              className="
                truncate
                text-sm
                font-semibold
                text-[var(--text)]
              "
            >
              {nft.name}
            </h3>

            <p className="mt-1 truncate text-xs text-[var(--text-muted)]">
              {nft.artist || nft.creator || "John Abraham"}
            </p>
          </div>

          <button
            type="button"
            onClick={(event) => event.stopPropagation()}
            className="
              flex
              h-7
              w-7
              shrink-0
              items-center
              justify-center
              rounded-lg
              text-[var(--text-muted)]
              transition
              hover:bg-[var(--card-hover)]
              hover:text-[var(--text)]
            "
            aria-label="More options"
          >
            <MoreHorizontal size={17} />
          </button>
        </div>

        {/* Price */}
        <div
          className="
            mt-4
            flex
            items-center
            justify-between
            gap-3
          "
        >
          <div>
            <p className="text-[10px] text-[var(--text-muted)]">
              Current Price
            </p>

            <div className="mt-1 flex items-center gap-1.5">
              <Tag
                size={13}
                className="text-[#6C4DF6]"
              />

              <span className="text-sm font-bold text-[var(--text)]">
                {nft.price || nft.value || "0.0025 ETH"}
              </span>
            </div>
          </div>

          {nft.time && (
            <div className="text-right">
              <p className="text-[10px] text-[var(--text-muted)]">
                Ends in
              </p>

              <p className="mt-1 text-[11px] font-medium text-[var(--text-secondary)]">
                {nft.time}
              </p>
            </div>
          )}
        </div>

        {/* Bid */}
        {showBidButton && (
          <Button
            fullWidth
            size="sm"
            className="mt-4"
            onClick={handleBid}
          >
            Place Bid
          </Button>
        )}
      </div>
    </article>
  );
}

export default NFTCard;