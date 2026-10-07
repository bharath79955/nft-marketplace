import { useMemo, useState } from "react";
import { Heart, Shield, X } from "lucide-react";
import { useMarketplace } from "../context/MarketplaceContext";

/* =========================================================
   DIRECT IMAGE LINKS
========================================================= */

const IMAGES = {
  
  featured:
    "https://res.cloudinary.com/owilpwin/image/upload/f_auto,q_auto/featured",

  nft1:
    "https://res.cloudinary.com/owilpwin/image/upload/f_auto,q_auto/nft-1",

  profile:
    "https://res.cloudinary.com/owilpwin/image/upload/f_auto,q_auto/profile",

  creator:
    "https://res.cloudinary.com/owilpwin/image/upload/f_auto,q_auto/creator",
};

/* =========================================================
   NFT DATA
========================================================= */

const LIQUID_WAVE =
  "https://res.cloudinary.com/owilpwin/image/upload/f_auto,q_auto/nft-1";

const trendingNFTs = [
  {
    id: 1,
    name: "Liquid Wave",
    image: LIQUID_WAVE,
    auctionTime: "3h 1m 50s",
    currentBid: "0.05 ETH",
    nextBid: "0.15 ETH",
    category: "Artwork",
  },
  {
    id: 2,
    name: "Liquid Wave",
    image: LIQUID_WAVE,
    auctionTime: "3h 1m 50s",
    currentBid: "0.05 ETH",
    nextBid: "0.15 ETH",
    category: "Artwork",
  },
  {
    id: 3,
    name: "Liquid Wave",
    image: LIQUID_WAVE,
    auctionTime: "3h 1m 50s",
    currentBid: "0.05 ETH",
    nextBid: "0.15 ETH",
    category: "Artwork",
  },
  {
    id: 4,
    name: "Liquid Wave",
    image: LIQUID_WAVE,
    auctionTime: "3h 1m 50s",
    currentBid: "0.05 ETH",
    nextBid: "0.15 ETH",
    category: "Artwork",
  },
  {
    id: 5,
    name: "Liquid Wave",
    image: LIQUID_WAVE,
    auctionTime: "3h 1m 50s",
    currentBid: "0.05 ETH",
    nextBid: "0.15 ETH",
    category: "Artwork",
  },
  {
    id: 6,
    name: "Liquid Wave",
    image: LIQUID_WAVE,
    auctionTime: "3h 1m 50s",
    currentBid: "0.05 ETH",
    nextBid: "0.15 ETH",
    category: "Artwork",
  },
  {
    id: 7,
    name: "Liquid Wave",
    image: LIQUID_WAVE,
    auctionTime: "3h 1m 50s",
    currentBid: "0.05 ETH",
    nextBid: "0.15 ETH",
    category: "Artwork",
  },
  {
    id: 8,
    name: "Liquid Wave",
    image: LIQUID_WAVE,
    auctionTime: "3h 1m 50s",
    currentBid: "0.05 ETH",
    nextBid: "0.15 ETH",
    category: "Artwork",
  },
];

/* =========================================================
   ACTIVITY
========================================================= */

const activities = [
  {
    id: 1,
    text: "Purchase by you for 0.05 ETH",
    time: "12 mins ago",
  },
  {
    id: 2,
    text: "0.06ETH Received",
    time: "12 mins ago",
  },
  {
    id: 3,
    text: "Started Following you",
    time: "12 mins ago",
  },
  {
    id: 4,
    text: "Has been sold by 12.75ETH",
    time: "12 mins ago",
  },
  {
    id: 5,
    text: "Purchase by you for 0.05 ETH",
    time: "12 mins ago",
  },
];

/* =========================================================
   CREATORS
========================================================= */

const creators = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  items: "60 Items",
}));

/* =========================================================
   DASHBOARD
========================================================= */

function Dashboard() {
  const { savedItems, toggleSaved, showToast } = useMarketplace();

  const [category, setCategory] = useState("All");
  const [bidOpen, setBidOpen] = useState(false);
  const [selectedNFT, setSelectedNFT] = useState(null);
  const [bidAmount, setBidAmount] = useState("");
  const [following, setFollowing] = useState([]);

  /* =======================================================
     FILTER
  ======================================================= */

  const filteredNFTs = useMemo(() => {
    return trendingNFTs.filter((nft) => {
      return category === "All" || nft.category === category;
    });
  }, [category]);

  /* =======================================================
     OPEN BID
  ======================================================= */

  const openBid = (nft) => {
    setSelectedNFT(nft);
    setBidAmount("");
    setBidOpen(true);
  };

  /* =======================================================
     PLACE BID
  ======================================================= */

  const placeBid = () => {
    if (!bidAmount || Number(bidAmount) <= 0) {
      showToast("Please enter a valid bid amount");
      return;
    }

    showToast(`Bid placed for ${bidAmount} ETH`);

    setBidOpen(false);
    setBidAmount("");
  };

  /* =======================================================
     FOLLOW / UNFOLLOW
  ======================================================= */

  const toggleFollow = (id) => {
    const alreadyFollowing = following.includes(id);

    setFollowing((current) =>
      alreadyFollowing
        ? current.filter((item) => item !== id)
        : [...current, id]
    );

    showToast(
      alreadyFollowing
        ? "Unfollowed successfully"
        : "Following successfully"
    );
  };

  return (
    <div className="min-h-screen bg-[var(--page)] pt-[100px] text-[var(--text)]">
      <div className="px-4 pb-12 sm:px-6 lg:px-8">

        {/* =================================================
            HERO + FEATURED
        ================================================= */}

        <section className="grid gap-6 xl:grid-cols-[1.45fr_1fr]">

          {/* BANNER */}

          <div className="relative min-h-[210px] overflow-hidden rounded-[18px]">

            <img
              src={IMAGES.banner}
              alt="Discover NFTs"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#5122bd]/75 via-[#5122bd]/30 to-transparent" />

            <div className="relative z-10 flex h-full flex-col justify-center px-7 py-8 sm:px-8">

              <h1 className="max-w-[390px] text-[22px] font-bold leading-[1.45] text-white sm:text-[24px]">
                Discover, Collect, Sell
                <br />
                and Create your NFT
              </h1>

              <p className="mt-2 max-w-[430px] text-[12px] text-white/65">
                Digital marketplace for crypto collectibles
                and non fungible tokens
              </p>

              <div className="mt-6 flex flex-wrap gap-3">

                <button
                  type="button"
                  onClick={() => showToast("Explore marketplace")}
                  className="h-9 min-w-[117px] rounded-md bg-[#714bf3] px-5 text-xs font-semibold text-white transition hover:bg-[#825fff]"
                >
                  Explore
                </button>

                <button
                  type="button"
                  onClick={() => showToast("Create NFT")}
                  className="h-9 min-w-[117px] rounded-md bg-[#ed3d52] px-5 text-xs font-semibold text-white transition hover:opacity-90"
                >
                  Create
                </button>

              </div>
            </div>
          </div>

          {/* FEATURED */}

          <div className="rounded-[18px] bg-[var(--card)] p-4">

            <div className="flex gap-4">

              <div className="h-[164px] w-[50%] shrink-0 overflow-hidden rounded-[17px]">

                <img
                  src={IMAGES.featured}
                  alt="Brighten LQ"
                  className="h-full w-full object-cover"
                />

              </div>

              <div className="min-w-0 flex-1 py-1">

                <div className="flex items-center gap-2">

                  <img
                    src={IMAGES.creator}
                    alt="John Abraham"
                    className="h-9 w-9 shrink-0 rounded-full object-cover"
                  />

                  <span className="truncate text-xs font-semibold">
                    John Abraham
                  </span>

                  <span className="h-1 w-1 shrink-0 rounded-full bg-[#48c95a]" />

                </div>

                <h2 className="mt-4 text-[16px] font-bold">
                  Brighten LQ
                </h2>

                <div className="mt-1 grid grid-cols-2 gap-3 text-[11px]">

                  <div>
                    <p>Auction time</p>

                    <p className="mt-1 text-[var(--secondary)]">
                      3h 1m 50s
                    </p>
                  </div>

                  <div>
                    <p>
                      Current Bid:
                      <span className="ml-1 text-[#6c4df6]">
                        0.05 ETH
                      </span>
                    </p>

                    <p className="mt-1 text-[var(--secondary)]">
                      0.15 ETH
                    </p>
                  </div>

                </div>

                <div className="mt-4 flex gap-3">

                  <button
                    type="button"
                    onClick={() =>
                      openBid({
                        id: 99,
                        name: "Brighten LQ",
                        image: IMAGES.featured,
                        currentBid: "0.05 ETH",
                      })
                    }
                    className="h-9 flex-1 rounded-md bg-[#714bf3] text-[11px] font-semibold text-white transition hover:bg-[#825fff]"
                  >
                    Place a Bid
                  </button>

                  <button
                    type="button"
                    onClick={() => showToast("Opening Brighten LQ")}
                    className="h-9 flex-1 rounded-md bg-[#ed3d52] text-[11px] font-semibold text-white transition hover:opacity-90"
                  >
                    Details
                  </button>

                </div>

              </div>
            </div>
          </div>

        </section>

        {/* =================================================
            TRENDING BIDS
        ================================================= */}

        <section className="mt-14">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <h2 className="text-[17px] font-bold">
              Trending Bids
            </h2>

            <div className="flex items-center gap-3 text-xs">

              {["All", "Artwork", "Book"].map((item) => (

                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`rounded-full px-3 py-1 transition ${
                    category === item
                      ? "bg-[#714bf3] text-white"
                      : "text-[var(--secondary)] hover:text-[#8a6cff]"
                  }`}
                >
                  {item}
                </button>

              ))}

            </div>

          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredNFTs.map((nft) => {

              const saved = savedItems.includes(nft.id);

              return (
                <div
                  key={nft.id}
                  className="rounded-[17px] bg-[var(--card)] p-4 transition duration-300 hover:-translate-y-1"
                >

                  {/* IMAGE */}

                  <div className="relative aspect-[1.3/1] overflow-hidden rounded-[15px] bg-black">

                    <img
                      src={nft.image}
                      alt={nft.name}
                      className="h-full w-full object-cover"
                    />

                    <button
                      type="button"
                      onClick={() => toggleSaved(nft.id)}
                      className={`absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 transition ${
                        saved
                          ? "text-[#ed3d52]"
                          : "text-white"
                      }`}
                      aria-label={
                        saved
                          ? "Remove from saved"
                          : "Save NFT"
                      }
                    >
                      <Heart
                        size={15}
                        fill={
                          saved
                            ? "currentColor"
                            : "none"
                        }
                      />
                    </button>

                  </div>

                  <h3 className="mt-6 text-[16px] font-bold">
                    {nft.name}
                  </h3>

                  <div className="mt-3 grid grid-cols-2 gap-3 text-[11px]">

                    <div>
                      <p>Auction time</p>

                      <p className="mt-2 text-[var(--secondary)]">
                        {nft.auctionTime}
                      </p>
                    </div>

                    <div className="text-right">

                      <p>Current Bid</p>

                      <p className="mt-2 text-[#6c4df6]">
                        {nft.currentBid}
                      </p>

                      <p className="mt-1 text-[var(--secondary)]">
                        {nft.nextBid}
                      </p>

                    </div>

                  </div>

                  <button
                    type="button"
                    onClick={() => openBid(nft)}
                    className="mt-6 h-9 w-full rounded-md bg-[#714bf3] text-xs font-semibold text-white transition hover:bg-[#825fff]"
                  >
                    Place a Bid
                  </button>

                </div>
              );
            })}

          </div>

        </section>

        {/* =================================================
            STATISTICS
        ================================================= */}

        <section className="mt-16">

          <div className="grid gap-6 xl:grid-cols-[0.85fr_1.45fr_1fr]">

            {/* TRENDING STATS */}

            <div>

              <h2 className="mb-5 text-[16px] font-bold">
                Trending Bids
              </h2>

              <div className="space-y-6">

                <StatCard
                  value="24K"
                  label="Artworks"
                  percentage="+168.001%"
                  color="purple"
                />

                <StatCard
                  value="89"
                  label="Auction"
                  percentage="-168.001%"
                  color="red"
                />

                <StatCard
                  value="82K"
                  label="Creators"
                  percentage="+168.001%"
                  color="green"
                />

              </div>

            </div>

            {/* ETH PRICE */}

            <div>

              <h2 className="mb-5 text-[16px] font-bold">
                ETH Price
              </h2>

              <div className="h-[305px] rounded-[18px] bg-[var(--card)] p-5">
                <EthChart />
              </div>

            </div>

            {/* STATISTICS */}

            <div>

              <h2 className="mb-5 text-[16px] font-bold">
                Statistics
              </h2>

              <div className="h-[305px] rounded-[18px] bg-[var(--card)] p-5">
                <DonutChart />
              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            RECENT ACTIVITY + TOP CREATORS
        ================================================= */}

        <section className="mt-12 grid gap-6 xl:grid-cols-[1.05fr_1.55fr]">

          {/* RECENT ACTIVITY */}

          <div>

            <div className="mb-5 flex items-center justify-between">

              <h2 className="text-[16px] font-bold">
                Recent Activity
              </h2>

              <button
                type="button"
                onClick={() => showToast("Showing all activity")}
                className="text-xs text-[#6c4df6]"
              >
                See more
              </button>

            </div>

            <div className="overflow-hidden rounded-[18px] bg-[var(--card)]">

              {activities.map((item) => (

                <div
                  key={item.id}
                  className="flex items-center gap-3 border-b border-[var(--border)] px-4 py-4 last:border-b-0"
                >

                  <img
                    src={IMAGES.creator}
                    alt="Papaya"
                    className="h-10 w-10 shrink-0 rounded-full object-cover"
                  />

                  <div className="min-w-0 flex-1">

                    <p className="text-sm font-semibold">
                      Papaya
                    </p>

                    <p className="truncate text-xs">
                      {item.text}
                    </p>

                  </div>

                  <span className="shrink-0 text-[10px] text-[var(--secondary)]">
                    {item.time}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* TOP CREATORS */}

          <div>

            <h2 className="mb-5 text-[16px] font-bold">
              Top Creators
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">

              {creators.map((creator) => {

                const isFollowing =
                  following.includes(creator.id);

                return (

                  <div
                    key={creator.id}
                    className="flex items-center gap-3 rounded-[18px] bg-[var(--card)] px-4 py-4"
                  >

                    <img
                      src={IMAGES.creator}
                      alt="Papaya"
                      className="h-10 w-10 shrink-0 rounded-full object-cover"
                    />

                    <div className="min-w-0 flex-1">

                      <p className="text-sm font-semibold">
                        Papaya
                      </p>

                      <p className="text-xs text-[var(--secondary)]">
                        {creator.items}
                      </p>

                    </div>

                    <button
                      type="button"
                      onClick={() => toggleFollow(creator.id)}
                      className={`rounded-md border px-4 py-1.5 text-[11px] font-semibold transition ${
                        isFollowing
                          ? "border-[#48c95a] text-[#48c95a]"
                          : "border-[#6c4df6] text-[var(--text)] hover:bg-[#6c4df6] hover:text-white"
                      }`}
                    >
                      {isFollowing
                        ? "Following"
                        : "Follow"}
                    </button>

                  </div>

                );
              })}

            </div>

          </div>

        </section>

      </div>

      {/* =================================================
          BID MODAL
      ================================================= */}

      {bidOpen && selectedNFT && (

        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-4">

          <div className="w-full max-w-[430px] rounded-2xl bg-[var(--card)] p-6 text-[var(--text)]">

            <div className="flex items-center justify-between">

              <h2 className="text-lg font-bold">
                Place a Bid
              </h2>

              <button
                type="button"
                onClick={() => setBidOpen(false)}
                className="text-[var(--secondary)] transition hover:text-[var(--text)]"
                aria-label="Close bid modal"
              >
                <X size={20} />
              </button>

            </div>

            <div className="mt-5 flex gap-4 rounded-xl bg-black/10 p-3 dark:bg-white/5">

              <img
                src={selectedNFT.image}
                alt={selectedNFT.name}
                className="h-16 w-16 rounded-xl object-cover"
              />

              <div>

                <p className="font-semibold">
                  {selectedNFT.name}
                </p>

                <p className="mt-1 text-xs text-[var(--secondary)]">
                  Current Bid
                </p>

                <p className="mt-1 text-sm font-bold text-[#6c4df6]">
                  {selectedNFT.currentBid}
                </p>

              </div>

            </div>

            <input
              type="number"
              min="0"
              step="0.0001"
              value={bidAmount}
              onChange={(event) =>
                setBidAmount(event.target.value)
              }
              placeholder="Enter ETH amount"
              className="mt-5 h-12 w-full rounded-xl bg-[var(--input)] px-4 text-sm text-[var(--text)] outline-none placeholder:text-[var(--secondary)] focus:ring-1 focus:ring-[#6c4df6]"
            />

            <div className="mt-5 flex gap-3">

              <button
                type="button"
                onClick={() => setBidOpen(false)}
                className="h-11 flex-1 rounded-lg bg-black/5 text-sm font-semibold text-[var(--text)] dark:bg-white/5"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={placeBid}
                className="h-11 flex-1 rounded-lg bg-[#714bf3] text-sm font-semibold text-white transition hover:bg-[#825fff]"
              >
                Place Bid
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

/* =========================================================
   STAT CARD
========================================================= */

function StatCard({
  value,
  label,
  percentage,
  color,
}) {
  const colors = {
    purple: "bg-[#714bf3]",
    red: "bg-[#ed3d52]",
    green: "bg-[#48c95a]",
  };

  return (
    <div className="flex h-[84px] items-center gap-4 rounded-[17px] bg-[var(--card)] px-4">

      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${colors[color]}`}
      >
        <Shield
          size={19}
          className="text-white"
        />
      </div>

      <div className="min-w-0 flex-1">

        <p className="text-xl font-bold">
          {value}
        </p>

        <p className="text-xs text-[var(--secondary)]">
          {label}
        </p>

      </div>

      <span
        className={`self-start pt-4 text-xs ${
          color === "red"
            ? "text-[#ed3d52]"
            : "text-[#48c95a]"
        }`}
      >
        {percentage}
      </span>

    </div>
  );
}

/* =========================================================
   ETH CHART
========================================================= */

function EthChart() {
  const points = [
    [20, 230],
    [90, 165],
    [155, 180],
    [225, 130],
    [295, 145],
    [365, 90],
    [430, 160],
    [500, 180],
    [570, 125],
  ];

  return (
    <div className="relative h-full w-full overflow-hidden">

      <div className="absolute inset-y-4 left-0 z-10 flex flex-col justify-between text-[10px] text-[#574d9c]">
        <span>350</span>
        <span>300</span>
        <span>250</span>
        <span>200</span>
        <span>150</span>
        <span>100</span>
        <span>50</span>
        <span>0</span>
      </div>

      <svg
        viewBox="0 0 600 250"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full pl-8"
      >

        <path
          d="M20 230 L90 165 L155 180 L225 130 L295 145 L365 90 L430 160 L500 180 L570 125 L600 105 L600 230 L20 230 Z"
          fill="#714bf3"
          fillOpacity="0.10"
        />

        <polyline
          points="20,230 90,165 155,180 225,130 295,145 365,90 430,160 500,180 570,125 600,105"
          fill="none"
          stroke="#714bf3"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {points.map(([cx, cy]) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="5"
            fill="#714bf3"
          />
        ))}

      </svg>

    </div>
  );
}

/* =========================================================
   DONUT CHART
========================================================= */

function DonutChart() {
  return (
    <div className="flex h-full flex-col items-center justify-center">

      <div className="relative h-[205px] w-[205px]">

        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(#714bf3 0deg 180deg, #eeeef3 180deg 360deg)",
          }}
        />

        <div className="absolute inset-[20px] rounded-full bg-[var(--card)]" />

        <div className="absolute inset-[20px] rounded-full border border-[var(--border)]" />

      </div>

      <div className="mt-5 flex flex-wrap justify-center gap-5 text-[11px] text-[var(--secondary)]">

        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#714bf3]" />
          Artwork Sold
        </span>

        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full border border-[var(--border)]" />
          Artwork Cancel
        </span>

      </div>

    </div>
  );
}

export default Dashboard;