import {
  ArrowUpRight,
  Heart,
  Clock3,
  Tag,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useMarketplace } from "../../context/MarketplaceContext";
import Button from "../common/Button";

function FeaturedNFT({ nft }) {
  const navigate = useNavigate();

  const {
    savedItems,
    toggleSaved,
  } = useMarketplace();

  if (!nft) return null;

  const isSaved = savedItems.includes(nft.id);

  const handleSave = () => {
    toggleSaved(nft.id);
  };

  const handleView = () => {
    navigate(`/nft/${nft.id}`);
  };

  return (
    <section
      className="
        overflow-hidden
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        text-[var(--text)]
      "
    >
      <div className="grid lg:grid-cols-[1.25fr_1fr]">
        {/* Image */}
        <div
          className="
            group
            relative
            min-h-[300px]
            overflow-hidden
            bg-[var(--input)]
            sm:min-h-[400px]
            lg:min-h-[430px]
          "
        >
          <img
            src={nft.image}
            alt={nft.name}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/65
              via-black/5
              to-transparent
            "
          />

          {/* Featured badge */}
          <div
            className="
              absolute
              left-5
              top-5
              rounded-full
              bg-[#6C4DF6]
              px-3
              py-1.5
              text-[10px]
              font-bold
              uppercase
              tracking-wider
              text-white
              shadow-lg
            "
          >
            Featured NFT
          </div>

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
              right-5
              top-5
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              backdrop-blur-md
              transition
              ${
                isSaved
                  ? "bg-[#EB3F56] text-white"
                  : "bg-black/35 text-white hover:bg-[#EB3F56]"
              }
            `}
          >
            <Heart
              size={18}
              fill={isSaved ? "currentColor" : "none"}
            />
          </button>

          {/* Image title */}
          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-xs text-white/70">
              Digital Artwork
            </p>

            <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
              {nft.name || "Brighten LQ"}
            </h2>
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col justify-between p-5 sm:p-7 lg:p-9">
          <div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-medium text-[#6C4DF6]">
                Featured Collection
              </span>

              <button
                type="button"
                onClick={handleView}
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-[var(--border)]
                  text-[var(--text-secondary)]
                  transition
                  hover:border-[#6C4DF6]
                  hover:text-[#6C4DF6]
                "
                aria-label="View NFT"
              >
                <ArrowUpRight size={17} />
              </button>
            </div>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              {nft.name || "Brighten LQ"}
            </h2>

            <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
              Discover this unique digital artwork from one of
              the featured creators in the marketplace.
            </p>

            {/* Creator */}
            <div className="mt-6 flex items-center gap-3">
              <img
                src={nft.creatorImage || "/src/assets/images/creator.jpg"}
                alt={nft.artist || "John Abraham"}
                className="
                  h-11
                  w-11
                  rounded-full
                  object-cover
                  ring-2
                  ring-[#6C4DF6]/20
                "
              />

              <div>
                <p className="text-xs text-[var(--text-muted)]">
                  Created by
                </p>

                <p className="mt-0.5 text-sm font-semibold">
                  {nft.artist || nft.creator || "John Abraham"}
                </p>
              </div>
            </div>

            {/* Price + time */}
            <div
              className="
                mt-7
                grid
                grid-cols-2
                gap-3
              "
            >
              <div
                className="
                  rounded-xl
                  border
                  border-[var(--border)]
                  bg-[var(--input)]
                  p-4
                "
              >
                <div className="flex items-center gap-2 text-[var(--text-muted)]">
                  <Tag size={14} />
                  <span className="text-xs">
                    Current Price
                  </span>
                </div>

                <p className="mt-2 text-lg font-bold">
                  {nft.price || nft.value || "0.05 ETH"}
                </p>
              </div>

              <div
                className="
                  rounded-xl
                  border
                  border-[var(--border)]
                  bg-[var(--input)]
                  p-4
                "
              >
                <div className="flex items-center gap-2 text-[var(--text-muted)]">
                  <Clock3 size={14} />
                  <span className="text-xs">
                    Auction Ends
                  </span>
                </div>

                <p className="mt-2 truncate text-sm font-bold">
                  {nft.time || "2h 15m"}
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button
              fullWidth
              onClick={handleView}
              className="sm:flex-1"
            >
              View Details
            </Button>

            <Button
              variant="outline"
              fullWidth
              onClick={handleSave}
              className="sm:flex-1"
            >
              {isSaved ? "Saved" : "Save Item"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedNFT;