import { useMemo, useState } from "react";
import {
  Activity,
  ChevronDown,
  TrendingUp,
} from "lucide-react";

function ETHChart({
  data = [],
  title = "ETH Overview",
}) {
  const [range, setRange] = useState("1D");
  const [openRange, setOpenRange] = useState(false);

  const ranges = ["1D", "1W", "1M", "1Y"];

  const chartData = useMemo(() => {
    if (data.length > 0) {
      return data;
    }

    return [
      { label: "10AM", value: 35 },
      { label: "11AM", value: 42 },
      { label: "12PM", value: 38 },
      { label: "1PM", value: 55 },
      { label: "2PM", value: 48 },
      { label: "3PM", value: 68 },
      { label: "4PM", value: 62 },
      { label: "5PM", value: 78 },
      { label: "6PM", value: 72 },
      { label: "7PM", value: 88 },
    ];
  }, [data]);

  const maxValue = Math.max(
    ...chartData.map((item) => Number(item.value) || 0),
    1
  );

  const minValue = Math.min(
    ...chartData.map((item) => Number(item.value) || 0),
    0
  );

  const width = 700;
  const height = 260;
  const paddingX = 12;
  const paddingY = 25;

  const points = chartData.map((item, index) => {
    const x =
      chartData.length === 1
        ? width / 2
        : paddingX +
          (index / (chartData.length - 1)) *
            (width - paddingX * 2);

    const normalized =
      (Number(item.value) - minValue) /
      Math.max(maxValue - minValue, 1);

    const y =
      height -
      paddingY -
      normalized * (height - paddingY * 2);

    return {
      ...item,
      x,
      y,
    };
  });

  const linePath = points
    .map(
      (point, index) =>
        `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`
    )
    .join(" ");

  const areaPath = `
    ${linePath}
    L ${width - paddingX} ${height}
    L ${paddingX} ${height}
    Z
  `;

  const latestValue =
    chartData[chartData.length - 1]?.value ?? 0;

  const firstValue = chartData[0]?.value ?? 0;

  const percentage =
    Number(firstValue) === 0
      ? 0
      : (
          ((Number(latestValue) - Number(firstValue)) /
            Number(firstValue)) *
          100
        ).toFixed(2);

  return (
    <div
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
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
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
            <Activity size={19} />
          </div>

          <div>
            <h3 className="text-sm font-semibold sm:text-base">
              {title}
            </h3>

            <div className="mt-1 flex items-center gap-2">
              <span className="text-lg font-bold">
                {latestValue} ETH
              </span>

              <span
                className={`
                  flex
                  items-center
                  gap-0.5
                  text-[10px]
                  font-semibold
                  ${
                    Number(percentage) >= 0
                      ? "text-[#48C95A]"
                      : "text-[#EB3F56]"
                  }
                `}
              >
                <TrendingUp size={11} />
                {percentage}%
              </span>
            </div>
          </div>
        </div>

        {/* Range selector */}
        <div className="relative">
          <button
            type="button"
            onClick={() =>
              setOpenRange((current) => !current)
            }
            className="
              flex
              h-9
              items-center
              gap-2
              rounded-lg
              border
              border-[var(--border)]
              bg-[var(--input)]
              px-3
              text-xs
              font-medium
              text-[var(--text-secondary)]
              transition
              hover:border-[#6C4DF6]/50
              hover:text-[var(--text)]
            "
          >
            {range}
            <ChevronDown
              size={14}
              className={`
                transition-transform
                ${openRange ? "rotate-180" : ""}
              `}
            />
          </button>

          {openRange && (
            <div
              className="
                absolute
                right-0
                top-11
                z-20
                min-w-[100px]
                overflow-hidden
                rounded-xl
                border
                border-[var(--border)]
                bg-[var(--card)]
                p-1
                shadow-xl
              "
            >
              {ranges.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setRange(item);
                    setOpenRange(false);
                  }}
                  className={`
                    w-full
                    rounded-lg
                    px-3
                    py-2
                    text-left
                    text-xs
                    transition
                    ${
                      range === item
                        ? "bg-[#6C4DF6] text-white"
                        : "text-[var(--text-secondary)] hover:bg-[var(--card-hover)] hover:text-[var(--text)]"
                    }
                  `}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Chart */}
      <div className="mt-6 overflow-hidden">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="h-[220px] w-full min-w-[520px] sm:h-[250px]"
          preserveAspectRatio="none"
          role="img"
          aria-label={`${title} chart`}
        >
          <defs>
            <linearGradient
              id="ethChartGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#6C4DF6"
                stopOpacity="0.28"
              />

              <stop
                offset="100%"
                stopColor="#6C4DF6"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          {/* Grid */}
          {[0, 1, 2, 3, 4].map((line) => {
            const y =
              paddingY +
              (line / 4) *
                (height - paddingY * 2);

            return (
              <line
                key={line}
                x1={paddingX}
                y1={y}
                x2={width - paddingX}
                y2={y}
                stroke="currentColor"
                strokeOpacity="0.07"
                strokeDasharray="4 5"
              />
            );
          })}

          {/* Area */}
          <path
            d={areaPath}
            fill="url(#ethChartGradient)"
          />

          {/* Line */}
          <path
            d={linePath}
            fill="none"
            stroke="#6C4DF6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Points */}
          {points.map((point, index) => (
            <circle
              key={`${point.label}-${index}`}
              cx={point.x}
              cy={point.y}
              r="4"
              fill="#6C4DF6"
              stroke="var(--card)"
              strokeWidth="2"
            />
          ))}
        </svg>
      </div>

      {/* Labels */}
      <div className="mt-1 flex justify-between gap-2 overflow-hidden px-1">
        {chartData.map((item, index) => (
          <span
            key={`${item.label}-${index}`}
            className="text-[9px] text-[var(--text-muted)] sm:text-[10px]"
          >
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ETHChart;