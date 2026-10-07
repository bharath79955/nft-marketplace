import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Gavel,
  Palette,
  Users,
  XCircle,
} from "lucide-react";

function StatCard({
  title,
  value,
  change,
  trend = "up",
  icon,
  description,
}) {
  const defaultIcons = {
    artworks: Palette,
    auction: Gavel,
    creators: Users,
    canceled: XCircle,
  };

  const Icon =
    icon ||
    defaultIcons[
      String(title || "").toLowerCase()
    ] ||
    BarChart3;

  const isPositive = trend === "up";

  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        p-4
        text-[var(--text)]
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-[#6C4DF6]/30
        hover:shadow-[0_12px_30px_rgba(0,0,0,0.10)]
        sm:p-5
      "
    >
      <div className="flex items-start justify-between gap-3">
        {/* Icon */}
        <div
          className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-[#6C4DF6]/10
            text-[#6C4DF6]
            transition
            group-hover:bg-[#6C4DF6]
            group-hover:text-white
          "
        >
          <Icon size={20} strokeWidth={1.8} />
        </div>

        {/* Trend */}
        <div
          className={`
            flex
            items-center
            gap-1
            rounded-full
            px-2
            py-1
            text-[10px]
            font-semibold
            ${
              isPositive
                ? "bg-[#48C95A]/10 text-[#48C95A]"
                : "bg-[#EB3F56]/10 text-[#EB3F56]"
            }
          `}
        >
          {isPositive ? (
            <ArrowUpRight size={12} />
          ) : (
            <ArrowDownRight size={12} />
          )}

          <span>{change || "0%"}</span>
        </div>
      </div>

      {/* Value */}
      <div className="mt-5">
        <p className="text-xs text-[var(--text-muted)]">
          {title}
        </p>

        <h3 className="mt-1 text-2xl font-bold tracking-tight sm:text-[26px]">
          {value}
        </h3>

        {description && (
          <p className="mt-1.5 text-[11px] text-[var(--text-secondary)]">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default StatCard;