import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeSwitcher } from "@/components/ThemeSwitcher/ThemeSwitcher";
import { NavigationMenu } from "@/components/NavigationMenu/NavigationMenu";
import { SidebarProvider } from "@/components/ui/sidebar";
import { NavigationMenuTrigger } from "@/components/NavigationMenu/NavigationMenuTrigger";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shortcuts",
  description: "A collection of cheat sheets of shortcuts for various tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="shortcuts-theme"
        >
          <SidebarProvider
            defaultOpen={false}
            style={
              {
                "--sidebar-width": "22rem",
                "--sidebar-width-mobile": "20rem",
              } as React.CSSProperties
            }
          >
            <aside className="fixed top-4 left-4 right-4 z-50 flex">
              <NavigationMenu />
              <div className="flex flex-1 justify-between items-center gap-4">
                <NavigationMenuTrigger />
                <ThemeSwitcher />
              </div>
            </aside>
            {children}
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
