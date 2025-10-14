"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { MenuIcon, X } from "lucide-react";

export const NavigationMenuTrigger = () => {
  const { state, toggleSidebar } = useSidebar();

  return (
    <button
      className="text-foreground/60 hover:text-foreground/80 transition-colors dark:text-foreground/80 dark:hover:text-foreground cursor-pointer"
      onClick={toggleSidebar}
    >
      {state === "expanded" ? <X size={26} /> : <MenuIcon size={26} />}
      <span className="sr-only">Toggle Sidebar</span>
    </button>
  );
};
