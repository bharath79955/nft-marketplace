import { useEffect, useState } from "react";
import { AlertCircle, CheckCircle2, Gavel, Wallet } from "lucide-react";

import Modal from "../common/Modal";
import Button from "../common/Button";
import { useMarketplace } from "../../context/MarketplaceContext";

function BidModal({ open, onClose, nft }) {
  const { placeBid } = useMarketplace();

  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (open) {
      setAmount("");
      setError("");
    }
  }, [open, nft]);

  if (!nft) return null;

  const currentPrice = Number(
    String(nft.price || nft.value || "0.0025").replace(
      /[^0-9.]/g,
      ""
    )
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const bidAmount = Number(amount);

    if (!amount || Number.isNaN(bidAmount)) {
      setError("Please enter a valid bid amount.");
      return;
    }

    if (bidAmount <= 0) {
      setError("Bid amount must be greater than 0.");
      return;
    }

    if (bidAmount < currentPrice) {
      setError(
        `Your bid must be at least ${currentPrice} ETH.`
      );
      return;
    }

    placeBid(nft.name, bidAmount.toFixed(4));

    onClose?.();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Place Your Bid"
      size="md"
    >
      {/* NFT Preview */}
      <div
        className="
          flex
          items-center
          gap-3
          rounded-xl
          border
          border-[var(--border)]
          bg-[var(--input)]
          p-3
        "
      >
        <img
          src={nft.image}
          alt={nft.name}
          className="
            h-16
            w-16
            shrink-0
            rounded-xl
            object-cover
          "
        />

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-sm font-semibold">
            {nft.name}
          </h3>

          <p className="mt-1 text-xs text-[var(--text-muted)]">
            {nft.artist || nft.creator || "John Abraham"}
          </p>
        </div>

        <div className="text-right">
          <p className="text-[10px] text-[var(--text-muted)]">
            Current
          </p>

          <p className="mt-1 text-sm font-bold">
            {nft.price || nft.value || "0.0025 ETH"}
          </p>
        </div>
      </div>

      {/* Wallet */}
      <div
        className="
          mt-5
          flex
          items-center
          gap-3
          rounded-xl
          border
          border-[var(--border)]
          bg-[#6C4DF6]/5
          p-4
        "
      >
        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-lg
            bg-[#6C4DF6]/10
            text-[#6C4DF6]
          "
        >
          <Wallet size={19} />
        </div>

        <div>
          <p className="text-xs text-[var(--text-muted)]">
            Available Balance
          </p>

          <p className="mt-1 text-sm font-bold">
            2.458 ETH
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-6">
        <label
          htmlFor="bid-amount"
          className="mb-2 block text-sm font-medium"
        >
          Your Bid
        </label>

        <div className="relative">
          <input
            id="bid-amount"
            type="number"
            min={currentPrice}
            step="0.0001"
            value={amount}
            onChange={(event) => {
              setAmount(event.target.value);
              setError("");
            }}
            placeholder="Enter bid amount"
            className="
              app-input
              h-12
              w-full
              rounded-xl
              pl-4
              pr-16
              text-sm
              outline-none
              transition
              focus:border-[#6C4DF6]
              focus:ring-2
              focus:ring-[#6C4DF6]/10
            "
          />

          <span
            className="
              pointer-events-none
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-sm
              font-semibold
              text-[var(--text-secondary)]
            "
          >
            ETH
          </span>
        </div>

        <p className="mt-2 text-xs text-[var(--text-muted)]">
          Minimum bid: {currentPrice} ETH
        </p>

        {/* Error */}
        {error && (
          <div
            className="
              mt-4
              flex
              items-start
              gap-2
              rounded-lg
              bg-[#EB3F56]/10
              px-3
              py-2.5
              text-xs
              text-[#EB3F56]
            "
          >
            <AlertCircle
              size={15}
              className="mt-0.5 shrink-0"
            />

            <span>{error}</span>
          </div>
        )}

        {/* Info */}
        <div
          className="
            mt-5
            flex
            gap-2
            rounded-lg
            bg-[var(--input)]
            p-3
            text-xs
            text-[var(--text-secondary)]
          "
        >
          <CheckCircle2
            size={15}
            className="mt-0.5 shrink-0 text-[#48C95A]"
          />

          <p>
            Your bid will be submitted instantly and the
            seller will be notified.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row">
          <Button
            type="button"
            variant="secondary"
            fullWidth
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            fullWidth
            icon={<Gavel size={16} />}
          >
            Place Bid
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default BidModal;