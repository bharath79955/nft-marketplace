import { Loader2 } from "lucide-react";

function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  fullWidth = false,
  icon = null,
  className = "",
}) {
  const variants = {
    primary: `
      bg-[#6C4DF6]
      text-white
      hover:bg-[#7C5CFF]
      shadow-[0_8px_24px_rgba(108,77,246,0.18)]
    `,

    secondary: `
      bg-[var(--card)]
      text-[var(--text)]
      border border-[var(--border)]
      hover:bg-[var(--card-hover)]
    `,

    outline: `
      bg-transparent
      text-[var(--text)]
      border border-[#6C4DF6]
      hover:bg-[#6C4DF6]/10
    `,

    danger: `
      bg-[#EB3F56]
      text-white
      hover:bg-[#d9344b]
    `,

    ghost: `
      bg-transparent
      text-[var(--text-secondary)]
      hover:bg-[var(--card-hover)]
      hover:text-[var(--text)]
    `,
  };

  const sizes = {
    sm: "h-9 px-3.5 text-xs rounded-lg",
    md: "h-10 px-5 text-sm rounded-xl",
    lg: "h-12 px-6 text-sm rounded-xl",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        font-semibold
        transition-all
        duration-200
        active:scale-[0.98]
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${variants[variant] || variants.primary}
        ${sizes[size] || sizes.md}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {loading ? (
        <>
          <Loader2 size={16} className="animate-spin" />
          Processing...
        </>
      ) : (
        <>
          {icon}
          {children}
        </>
      )}
    </button>
  );
}

export default Button;