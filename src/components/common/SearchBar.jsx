import { Search, X } from "lucide-react";

function SearchBar({
  value = "",
  onChange,
  placeholder = "Search NFT, collections...",
  className = "",
}) {
  const handleClear = () => {
    if (onChange) {
      onChange("");
    }
  };

  return (
    <div
      className={`
        relative flex h-11 w-full
        ${className}
      `}
    >
      <Search
        size={18}
        strokeWidth={1.8}
        className="
          pointer-events-none
          absolute left-4 top-1/2
          -translate-y-1/2
          text-[var(--text-muted)]
        "
      />

      <input
        type="search"
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        placeholder={placeholder}
        className="
          h-full w-full
          rounded-xl
          border border-[var(--border)]
          bg-[var(--input)]
          pl-11 pr-10
          text-sm
          text-[var(--text)]
          outline-none
          placeholder:text-[var(--text-muted)]
          transition
          focus:border-[#6C4DF6]
          focus:ring-2
          focus:ring-[#6C4DF6]/10
        "
      />

      {value && (
        <button
          type="button"
          onClick={handleClear}
          aria-label="Clear search"
          className="
            absolute right-3 top-1/2
            flex h-7 w-7
            -translate-y-1/2
            items-center justify-center
            rounded-lg
            text-[var(--text-muted)]
            transition
            hover:bg-[var(--card-hover)]
            hover:text-[var(--text)]
          "
        >
          <X size={15} />
        </button>
      )}
    </div>
  );
}

export default SearchBar;