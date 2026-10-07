import {
  ArrowDownLeft,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  ExternalLink,
} from "lucide-react";

function RecentActivity({ activities = [] }) {
  const defaultActivities = [
    {
      id: 1,
      type: "purchase",
      title: "Liquid Wave",
      description: "You purchased an NFT",
      amount: "0.05 ETH",
      time: "2 min ago",
      status: "Completed",
      image: "/src/assets/images/nft-1.jpg",
    },
    {
      id: 2,
      type: "bid",
      title: "Cute Cube Cool",
      description: "You placed a new bid",
      amount: "0.0025 ETH",
      time: "15 min ago",
      status: "Active",
      image: "/src/assets/images/nft-2.jpg",
    },
    {
      id: 3,
      type: "sale",
      title: "Liquid Wave",
      description: "Your NFT was sold",
      amount: "+0.15 ETH",
      time: "1 hour ago",
      status: "Completed",
      image: "/src/assets/images/nft-3.jpg",
    },
    {
      id: 4,
      type: "bid",
      title: "Cute Cube Cool",
      description: "Your bid is currently active",
      amount: "0.0025 ETH",
      time: "2 hours ago",
      status: "Active",
      image: "/src/assets/images/nft-4.jpg",
    },
  ];

  const items = activities.length
    ? activities
    : defaultActivities;

  const getIcon = (type) => {
    if (type === "sale") return ArrowUpRight;
    if (type === "purchase") return ArrowDownLeft;
    return Clock3;
  };

  const getIconStyle = (type) => {
    if (type === "sale") {
      return "bg-[#48C95A]/10 text-[#48C95A]";
    }

    if (type === "purchase") {
      return "bg-[#6C4DF6]/10 text-[#6C4DF6]";
    }

    return "bg-[#F5C32C]/10 text-[#F5C32C]";
  };

  return (
    <section
      className="
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        p-4
        text-[var(--text)]
        sm:p-5
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-sm font-semibold sm:text-base">
            Recent Activity
          </h2>

          <p className="mt-1 text-xs text-[var(--text-muted)]">
            Your latest marketplace activity
          </p>
        </div>

        <button
          type="button"
          className="
            flex
            items-center
            gap-1
            rounded-lg
            px-2.5
            py-2
            text-xs
            font-medium
            text-[#6C4DF6]
            transition
            hover:bg-[#6C4DF6]/10
          "
        >
          View All
          <ExternalLink size={13} />
        </button>
      </div>

      {/* Activity list */}
      <div className="mt-5 divide-y divide-[var(--border)]">
        {items.map((item, index) => {
          const Icon = getIcon(item.type);

          return (
            <div
              key={item.id || index}
              className="
                flex
                items-center
                gap-3
                py-3.5
                first:pt-0
                last:pb-0
              "
            >
              {/* NFT image */}
              <div className="relative shrink-0">
                <img
                  src={
                    item.image ||
                    "/src/assets/images/nft-1.jpg"
                  }
                  alt={item.title || "NFT"}
                  className="
                    h-11
                    w-11
                    rounded-xl
                    object-cover
                    sm:h-12
                    sm:w-12
                  "
                />

                <div
                  className={`
                    absolute
                    -bottom-1
                    -right-1
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    ring-2
                    ring-[var(--card)]
                    ${getIconStyle(item.type)}
                  `}
                >
                  <Icon size={10} />
                </div>
              </div>

              {/* Details */}
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-xs font-semibold sm:text-sm">
                  {item.title}
                </h3>

                <p className="mt-0.5 truncate text-[10px] text-[var(--text-muted)] sm:text-xs">
                  {item.description}
                </p>

                <p className="mt-1 text-[10px] text-[var(--text-muted)]">
                  {item.time}
                </p>
              </div>

              {/* Amount */}
              <div className="shrink-0 text-right">
                <p
                  className={`
                    text-xs
                    font-semibold
                    sm:text-sm
                    ${
                      String(item.amount).startsWith("+")
                        ? "text-[#48C95A]"
                        : "text-[var(--text)]"
                    }
                  `}
                >
                  {item.amount}
                </p>

                <div className="mt-1 flex items-center justify-end gap-1">
                  {item.status === "Completed" ? (
                    <CheckCircle2
                      size={11}
                      className="text-[#48C95A]"
                    />
                  ) : (
                    <Clock3
                      size={11}
                      className="text-[#F5C32C]"
                    />
                  )}

                  <span className="text-[9px] text-[var(--text-muted)]">
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default RecentActivity;