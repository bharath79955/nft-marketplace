import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

function Breadcrumb({ items = [] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-5 flex items-center gap-2 overflow-x-auto text-xs"
    >
      <Link
        to="/"
        className="
          flex shrink-0 items-center gap-1.5
          text-[var(--text-muted)]
          transition
          hover:text-[#6C4DF6]
        "
      >
        <Home size={13} />
        Home
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div
            key={`${item.label}-${index}`}
            className="flex shrink-0 items-center gap-2"
          >
            <ChevronRight
              size={13}
              className="text-[var(--text-muted)]"
            />

            {item.path && !isLast ? (
              <Link
                to={item.path}
                className="
                  text-[var(--text-muted)]
                  transition
                  hover:text-[#6C4DF6]
                "
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={
                  isLast
                    ? "font-medium text-[var(--text)]"
                    : "text-[var(--text-muted)]"
                }
              >
                {item.label}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
}

export default Breadcrumb;