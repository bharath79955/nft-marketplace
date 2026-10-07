import { PackageOpen } from "lucide-react";

import NFTCard from "./NFTCard";

function NFTGrid({
  nfts = [],
  onBid,
  emptyTitle = "No NFTs Found",
  emptyMessage = "There are no NFTs available at the moment.",
  showBidButton = true,
  columns = "default",
}) {
  const gridColumns = {
    default:
      "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
    compact:
      "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    wide:
      "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4",
  };

  if (!nfts.length) {
    return (
      <div
        className="
          flex
          min-h-[280px]
          flex-col
          items-center
          justify-center
          rounded-2xl
          border
          border-dashed
          border-[var(--border)]
          bg-[var(--card)]
          px-5
          text-center
        "
      >
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-[#6C4DF6]/10
            text-[#6C4DF6]
          "
        >
          <PackageOpen size={25} />
        </div>

        <h3 className="mt-4 text-base font-semibold text-[var(--text)]">
          {emptyTitle}
        </h3>

        <p className="mt-1 max-w-sm text-sm text-[var(--text-secondary)]">
          {emptyMessage}
        </p>
      </div>
    );
  }

  return (
    <div
      className={`
        grid
        gap-4
        sm:gap-5
        lg:gap-6
        ${gridColumns[columns] || gridColumns.default}
      `}
    >
      {nfts.map((nft) => (
        <NFTCard
          key={nft.id}
          nft={nft}
          onBid={onBid}
          showBidButton={showBidButton}
        />
      ))}
    </div>
  );
}

export default NFTGrid;