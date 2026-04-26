"use client";

import { useTheme as useNextTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useTheme() {
  const { theme, setTheme, systemTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by ensuring the component is mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Re-create the toggleTheme function for your existing components
  const toggleTheme = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    setTheme(currentTheme === "light" ? "dark" : "light");
  };

  return {
    theme: mounted ? theme : "light", // Default to light during SSR
    setTheme,
    toggleTheme,
  };
}
