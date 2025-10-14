"use client";
import { ThemeSwitcher as ThemeSwitcher_ } from "@/components/ui/kibo-ui/theme-switcher";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeSwitcher_
      defaultValue="system"
      onChange={setTheme}
      value={
        mounted ? (theme as "light" | "dark" | "system" | undefined) : "system"
      }
    />
  );
};
