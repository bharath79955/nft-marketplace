import { useMemo, useState } from "react";
import { ArrowLeft, Heart, Share2, Tag, UserRound } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";

import Breadcrumb from "../components/common/Breadcrumb";
import Button from "../components/common/Button";
import Modal from "../components/common/Modal";
import BidModal from "../components/nft/BidModal";
import { nfts } from "../data/nfts";
import { useMarketplace } from "../context/MarketplaceContext";

function NFTDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    savedItems,
    toggleSaved,
    showToast,
  } = useMarketplace();

  const [bidOpen, setBidOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  const nft = useMemo(
    () => nfts.find((item) => String(item.id) === String(id)),
    [id]
  );

  if (!nft) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6C4DF6]/10 text-2xl">
            🖼️
          </div>

          <h1 className="mt-5 text-xl font-bold text-[var(--text)]">
            NFT Not Found
          </h1>

          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            The NFT you are looking for does not exist.
          </p>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="mt-5 rounded-lg bg-[#6C4DF6] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#7C5CFF]"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const isSaved = savedItems.includes(nft.id);

  const image =
    nft.image ||
    `/src/assets/images/nft-${((Number(nft.id) - 1) % 5) + 1}.jpg`;

  const price = nft.price || nft.value || "0.05 ETH";

  const handleShare = async () => {
    const shareData = {
      title: nft.name,
      text: `Check out ${nft.name} on NFT Marketplace`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        showToast("NFT link copied");
      } else {
        setShareOpen(true);
      }
    } catch {
      // User cancelled the native share dialog.
    }
  };

  return (
    <div className="space-y-6">
      <Breadcrumb
        items={[
          { label: "Dashboard", path: "/" },
          { label: nft.name },
        ]}
      />

      {/* Back */}
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] transition hover:text-[#6C4DF6]"
      >
        <ArrowLeft size={17} />
        Back
      </button>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(380px,0.85fr)]">
        {/* NFT Image */}
        <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]">
          <div className="aspect-square max-h-[720px] overflow-hidden">
            <img
              src={image}
              alt={nft.name}
              className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 sm:p-7">
            {/* Category */}
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-[#6C4DF6]/10 px-3 py-1.5 text-xs font-semibold text-[#6C4DF6]">
                {nft.category || "Artwork"}
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => toggleSaved(nft.id)}
                  aria-label={isSaved ? "Remove from saved" : "Save NFT"}
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border transition ${
                    isSaved
                      ? "border-[#EB3F56]/30 bg-[#EB3F56]/10 text-[#EB3F56]"
                      : "border-[var(--border)] text-[var(--text-secondary)] hover:border-[#6C4DF6] hover:text-[#6C4DF6]"
                  }`}
                >
                  <Heart
                    size={18}
                    fill={isSaved ? "currentColor" : "none"}
                  />
                </button>

                <button
                  type="button"
                  onClick={handleShare}
                  aria-label="Share NFT"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--text-secondary)] transition hover:border-[#6C4DF6] hover:text-[#6C4DF6]"
                >
                  <Share2 size={18} />
                </button>
              </div>
            </div>

            {/* Title */}
            <h1 className="mt-5 text-2xl font-bold tracking-tight text-[var(--text)] sm:text-3xl">
              {nft.name}
            </h1>

            <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
              Discover this unique digital collectible from{" "}
              <span className="font-medium text-[var(--text)]">
                {nft.artist || "John Abraham"}
              </span>
              .
            </p>

            {/* Creator */}
            <div className="mt-6 flex items-center gap-3 rounded-xl bg-[var(--input)] p-3">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-[#6C4DF6]/10">
                <UserRound size={20} className="text-[#6C4DF6]" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[10px] text-[var(--text-muted)]">
                  Created by
                </p>

                <p className="truncate text-sm font-semibold text-[var(--text)]">
                  {nft.artist || "John Abraham"}
                </p>
              </div>

              <span className="rounded-full bg-[#48C95A]/10 px-2.5 py-1 text-[10px] font-semibold text-[#48C95A]">
                Verified
              </span>
            </div>

            {/* Price */}
            <div className="mt-6 rounded-xl border border-[var(--border)] p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[var(--text-muted)]">
                  Current Price
                </span>

                <span className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                  <Tag size={13} />
                  {nft.category || "Artwork"}
                </span>
              </div>

              <div className="mt-2 flex items-end justify-between gap-4">
                <div>
                  <p className="text-2xl font-bold text-[var(--text)]">
                    {price}
                  </p>

                  <p className="mt-1 text-xs text-[var(--text-muted)]">
                    ≈ $2,450.00
                  </p>
                </div>

                {nft.time && (
                  <div className="text-right">
                    <p className="text-[10px] text-[var(--text-muted)]">
                      Time Left
                    </p>

                    <p className="mt-1 text-xs font-semibold text-[#F5C32C]">
                      {nft.time}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Button
                variant="primary"
                fullWidth
                onClick={() => setBidOpen(true)}
              >
                Place Bid
              </Button>

              <Button
                variant="outline"
                fullWidth
                onClick={() => {
                  toggleSaved(nft.id);
                }}
                icon={
                  <Heart
                    size={17}
                    fill={isSaved ? "currentColor" : "none"}
                  />
                }
              >
                {isSaved ? "Saved" : "Save Item"}
              </Button>
            </div>
          </div>

          {/* Additional information */}
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <InfoCard label="Collection" value="Digital Art" />
            <InfoCard label="Token Standard" value="ERC-721" />
            <InfoCard label="Blockchain" value="Ethereum" />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 sm:p-6">
        <h2 className="text-base font-semibold text-[var(--text)]">
          About this NFT
        </h2>

        <p className="mt-3 max-w-4xl text-sm leading-7 text-[var(--text-secondary)]">
          {nft.description ||
            `This is a unique digital collectible called ${nft.name}. Explore,
            collect and place your bid on this NFT from ${nft.artist || "John Abraham"}.`}
        </p>
      </div>

      {/* Bid Modal */}
      <BidModal
        open={bidOpen}
        onClose={() => setBidOpen(false)}
        nft={nft}
      />

      {/* Share fallback */}
      <Modal
        open={shareOpen}
        onClose={() => setShareOpen(false)}
        title="Share NFT"
        size="sm"
      >
        <div className="space-y-4">
          <p className="text-sm text-[var(--text-secondary)]">
            Copy the link below and share this NFT with others.
          </p>

          <div className="rounded-xl bg-[var(--input)] p-3 text-xs break-all text-[var(--text-secondary)]">
            {window.location.href}
          </div>

          <Button
            variant="primary"
            fullWidth
            onClick={async () => {
              if (navigator.clipboard) {
                await navigator.clipboard.writeText(window.location.href);
              }

              showToast("NFT link copied");
              setShareOpen(false);
            }}
          >
            Copy Link
          </Button>
        </div>
      </Modal>
    </div>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4">
      <p className="text-[10px] text-[var(--text-muted)]">{label}</p>
      <p className="mt-1 text-sm font-semibold text-[var(--text)]">{value}</p>
    </div>
  );
}

export default NFTDetails;