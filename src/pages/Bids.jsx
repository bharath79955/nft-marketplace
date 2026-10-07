import { useMemo, useState } from "react";
import { Gavel, Search } from "lucide-react";

import Breadcrumb from "../components/common/Breadcrumb";
import BidStats from "../components/bids/BidStats";
import BidTable from "../components/bids/BidTable";
import { useMarketplace } from "../context/MarketplaceContext";
import { bids } from "../data/bids";

function Bids() {
  const { activeBids } = useMarketplace();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const allBids = useMemo(() => {
    const contextBids = activeBids || [];

    if (!contextBids.length) {
      return bids;
    }

    return contextBids;
  }, [activeBids]);

  const filteredBids = useMemo(() => {
    const searchText = search.toLowerCase().trim();

    return allBids.filter((bid) => {
      const matchesSearch =
        !searchText ||
        bid.name?.toLowerCase().includes(searchText) ||
        bid.artist?.toLowerCase().includes(searchText);

      const bidStatus = bid.status || "Active";

      const matchesStatus =
        status === "All" || bidStatus === status;

      return matchesSearch && matchesStatus;
    });
  }, [allBids, search, status]);

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          {
            label: "Bids",
            path: "/bids",
          },
        ]}
      />

      {/* Header */}
      <div
        className="
          flex
          flex-col
          gap-4
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <div>
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-[#6C4DF6]/10
                text-[#6C4DF6]
              "
            >
              <Gavel size={20} />
            </div>

            <h1
              className="
                text-2xl
                font-bold
                tracking-tight
                text-[var(--text)]
                sm:text-3xl
              "
            >
              Bids
            </h1>
          </div>

          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            View and manage all your NFT bids.
          </p>
        </div>

        <div className="rounded-xl bg-[#6C4DF6]/10 px-4 py-2.5">
          <p className="text-[10px] text-[var(--text-muted)]">
            Total Bids
          </p>

          <p className="mt-0.5 text-lg font-bold text-[#6C4DF6]">
            {allBids.length}
          </p>
        </div>
      </div>

      {/* Statistics */}
      <BidStats />

      {/* Filters */}
      <div
        className="
          flex
          flex-col
          gap-3
          rounded-2xl
          border
          border-[var(--border)]
          bg-[var(--card)]
          p-4
          sm:flex-row
          sm:items-center
          sm:justify-between
          sm:p-5
        "
      >
        {/* Search */}
        <div className="relative w-full sm:max-w-sm">
          <Search
            size={17}
            className="
              pointer-events-none
              absolute
              left-3.5
              top-1/2
              -translate-y-1/2
              text-[var(--text-muted)]
            "
          />

          <input
            type="search"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Search NFT or creator..."
            className="
              app-input
              h-11
              w-full
              rounded-xl
              pl-10
              pr-4
              text-sm
              outline-none
              transition
              focus:border-[#6C4DF6]
              focus:ring-2
              focus:ring-[#6C4DF6]/10
            "
          />
        </div>

        {/* Status */}
        <div className="flex gap-2 overflow-x-auto">
          {["All", "Active", "Completed", "Canceled"].map(
            (item) => (
              <button
                key={item}
                type="button"
                onClick={() => setStatus(item)}
                className={`
                  shrink-0
                  rounded-lg
                  px-3.5
                  py-2
                  text-xs
                  font-medium
                  transition
                  ${
                    status === item
                      ? "bg-[#6C4DF6] text-white"
                      : "bg-[var(--input)] text-[var(--text-secondary)] hover:text-[var(--text)]"
                  }
                `}
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>

      {/* Results */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold">
            All Bids
          </h2>

          <p className="mt-1 text-xs text-[var(--text-muted)]">
            {filteredBids.length}{" "}
            {filteredBids.length === 1 ? "result" : "results"}{" "}
            found
          </p>
        </div>

        {search && (
          <button
            type="button"
            onClick={() => setSearch("")}
            className="
              rounded-lg
              px-3
              py-2
              text-xs
              font-medium
              text-[#6C4DF6]
              transition
              hover:bg-[#6C4DF6]/10
            "
          >
            Clear Search
          </button>
        )}
      </div>

      {/* Table */}
      <BidTable bids={filteredBids} />
    </div>
  );
}

export default Bids;