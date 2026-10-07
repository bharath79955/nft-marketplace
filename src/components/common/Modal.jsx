import { useEffect } from "react";
import { X } from "lucide-react";

function Modal({
  open = false,
  onClose,
  title,
  children,
  size = "md",
  showClose = true,
}) {
  useEffect(() => {
    if (!open) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleEscape);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const sizes = {
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose?.();
    }
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-black/60
        p-4
        backdrop-blur-sm
      "
      onMouseDown={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={title || "Dialog"}
    >
      <div
        className={`
          relative
          w-full
          ${sizes[size] || sizes.md}
          max-h-[90vh]
          overflow-y-auto
          rounded-2xl
          border
          border-[var(--border)]
          bg-[var(--card)]
          text-[var(--text)]
          shadow-2xl
          animate-[modalIn_0.2s_ease-out]
        `}
      >
        {(title || showClose) && (
          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-[var(--border)]
              px-5
              py-4
              sm:px-6
            "
          >
            {title ? (
              <h2 className="text-base font-semibold sm:text-lg">
                {title}
              </h2>
            ) : (
              <span />
            )}

            {showClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  text-[var(--text-muted)]
                  transition
                  hover:bg-[var(--card-hover)]
                  hover:text-[var(--text)]
                "
              >
                <X size={18} />
              </button>
            )}
          </div>
        )}

        <div className="p-5 sm:p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;