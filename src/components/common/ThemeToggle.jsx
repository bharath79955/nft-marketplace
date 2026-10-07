import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

function ThemeToggle({ compact = false }) {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        darkMode ? "Switch to light mode" : "Switch to dark mode"
      }
      title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      className={`
        group relative flex items-center
        rounded-xl border border-[var(--border)]
        bg-[var(--card)]
        text-[var(--text-secondary)]
        transition-all duration-200
        hover:border-[#6C4DF6]/40
        hover:text-[#6C4DF6]
        ${compact ? "h-9 w-9 justify-center" : "h-10 w-10 justify-center"}
      `}
    >
      <span
        className="
          absolute inset-0 rounded-xl
          bg-[#6C4DF6]/0
          transition
          group-hover:bg-[#6C4DF6]/5
        "
      />

      {darkMode ? (
        <Sun
          size={compact ? 17 : 18}
          strokeWidth={2}
          className="relative z-10"
        />
      ) : (
        <Moon
          size={compact ? 17 : 18}
          strokeWidth={2}
          className="relative z-10"
        />
      )}
    </button>
  );
}

export default ThemeToggle;