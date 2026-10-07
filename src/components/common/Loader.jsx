import { Loader2 } from "lucide-react";

function Loader({
  size = "md",
  text = "",
  fullScreen = false,
}) {
  const sizes = {
    sm: 16,
    md: 24,
    lg: 36,
  };

  const loaderSize = sizes[size] || sizes.md;

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[var(--bg)]">
        <div className="flex flex-col items-center gap-3">
          <Loader2
            size={loaderSize}
            className="animate-spin text-[#6C4DF6]"
          />

          {text && (
            <p className="text-sm text-[var(--text-secondary)]">
              {text}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-2 py-6">
      <Loader2
        size={loaderSize}
        className="animate-spin text-[#6C4DF6]"
      />

      {text && (
        <span className="text-sm text-[var(--text-secondary)]">
          {text}
        </span>
      )}
    </div>
  );
}

export default Loader;