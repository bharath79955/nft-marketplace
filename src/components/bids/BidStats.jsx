import {
  ArrowDownRight,
  ArrowUpRight,
  Gavel,
  Palette,
  Users,
  XCircle,
} from "lucide-react";

function BidStats({ stats = [] }) {
  const defaultStats = [
    {
      id: 1,
      title: "Artworks",
      value: "24K",
      change: "+168.001%",
      trend: "up",
      icon: Palette,
    },
    {
      id: 2,
      title: "Auction",
      value: "82K",
      change: "+168.001%",
      trend: "up",
      icon: Gavel,
    },
    {
      id: 3,
      title: "Creators",
      value: "200",
      change: "+12.50%",
      trend: "up",
      icon: Users,
    },
    {
      id: 4,
      title: "Canceled",
      value: "89",
      change: "-168.001%",
      trend: "down",
      icon: XCircle,
    },
  ];

  const items = stats.length ? stats : defaultStats;

  return (
    <div
      className="
        grid
        grid-cols-2
        gap-3
        lg:grid-cols-4
      "
    >
      {items.map((item, index) => {
        const Icon = item.icon || defaultStats[index]?.icon || Gavel;
        const positive = item.trend !== "down";

        return (
          <div
            key={item.id || index}
            className="
              rounded-2xl
              border
              border-[var(--border)]
              bg-[var(--card)]
              p-4
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:border-[#6C4DF6]/30
              hover:shadow-[0_12px_30px_rgba(0,0,0,0.10)]
              sm:p-5
            "
          >
            <div className="flex items-start justify-between gap-2">
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#6C4DF6]/10
                  text-[#6C4DF6]
                "
              >
                <Icon size={18} />
              </div>

              <span
                className={`
                  flex
                  items-center
                  gap-0.5
                  rounded-full
                  px-2
                  py-1
                  text-[9px]
                  font-semibold
                  sm:text-[10px]
                  ${
                    positive
                      ? "bg-[#48C95A]/10 text-[#48C95A]"
                      : "bg-[#EB3F56]/10 text-[#EB3F56]"
                  }
                `}
              >
                {positive ? (
                  <ArrowUpRight size={11} />
                ) : (
                  <ArrowDownRight size={11} />
                )}

                {item.change}
              </span>
            </div>

            <p className="mt-4 text-[11px] text-[var(--text-muted)]">
              {item.title}
            </p>

            <h3 className="mt-1 text-xl font-bold sm:text-2xl">
              {item.value}
            </h3>
          </div>
        );
      })}
    </div>
  );
}

export default BidStats;