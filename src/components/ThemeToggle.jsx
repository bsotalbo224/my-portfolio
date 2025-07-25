// ThemeToggle.jsx
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme === "dark" || (!savedTheme && prefersDark);

    setIsDark(initialTheme);
    if (initialTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    window.dispatchEvent(new Event("themeChange"));
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-full transition-all duration-300",
        "hover:scale-110 active:scale-95",
        "bg-background/80 backdrop-blur-md border border-border/50",
        "hover:bg-primary/10 hover:border-primary/30",
        "focus:outline-none focus:ring-2 focus:ring-primary/50",
        "text-foreground hover:text-primary"
      )}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
    </button>
  );
};
