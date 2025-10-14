"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { AdjustMonitorToPrint } from "../AdjustMonitorToPrint/AdjustMonitorToPrint";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationMenuRoutes } from "./navigationMenuRoutes";

export const NavigationMenu = () => {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Sidebar variant="floating">
      <SidebarContent>
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Settings
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent className="p-2 flex flex-col gap-2">
                <AdjustMonitorToPrint />
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <SidebarGroup>
          <SidebarGroupLabel>Shortcuts</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationMenuRoutes.map(route => (
                <SidebarMenuItem key={route.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={mounted && pathname === route.url}
                  >
                    <Link href={route.url}>{route.title}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
