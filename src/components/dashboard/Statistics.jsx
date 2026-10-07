import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  TrendingUp,
} from "lucide-react";

function Statistics({ stats = [] }) {
  const defaultStats = [
    {
      label: "Total Sales",
      value: "24.8K",
      change: "+12.50%",
      trend: "up",
    },
    {
      label: "Total Bids",
      value: "82.4K",
      change: "+8.42%",
      trend: "up",
    },
    {
      label: "Average Price",
      value: "0.42 ETH",
      change: "+5.21%",
      trend: "up",
    },
    {
      label: "Canceled",
      value: "89",
      change: "-3.10%",
      trend: "down",
    },
  ];

  const items = stats.length ? stats : defaultStats;

  return (
    <section
      className="
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        p-4
        sm:p-5
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                bg-[#6C4DF6]/10
                text-[#6C4DF6]
              "
            >
              <BarChart3 size={18} />
            </div>

            <h2 className="text-sm font-semibold sm:text-base">
              Statistics
            </h2>
          </div>

          <p className="mt-1 text-xs text-[var(--text-muted)]">
            Marketplace performance overview
          </p>
        </div>

        <TrendingUp
          size={19}
          className="text-[#48C95A]"
        />
      </div>

      {/* Statistics */}
      <div
        className="
          mt-5
          grid
          grid-cols-2
          divide-x
          divide-y
          divide-[var(--border)]
          overflow-hidden
          rounded-xl
          border
          border-[var(--border)]
          lg:grid-cols-4
          lg:divide-y-0
        "
      >
        {items.map((item, index) => {
          const isPositive = item.trend !== "down";

          return (
            <div
              key={`${item.label}-${index}`}
              className="
                p-4
                transition
                hover:bg-[var(--card-hover)]
                sm:p-5
              "
            >
              <p className="text-[11px] text-[var(--text-muted)]">
                {item.label}
              </p>

              <p className="mt-1.5 text-lg font-bold sm:text-xl">
                {item.value}
              </p>

              <div
                className={`
                  mt-2
                  flex
                  items-center
                  gap-1
                  text-[10px]
                  font-semibold
                  ${
                    isPositive
                      ? "text-[#48C95A]"
                      : "text-[#EB3F56]"
                  }
                `}
              >
                {isPositive ? (
                  <ArrowUpRight size={12} />
                ) : (
                  <ArrowDownRight size={12} />
                )}

                {item.change}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Statistics;