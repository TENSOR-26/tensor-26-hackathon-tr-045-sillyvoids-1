"use client";

import { cn } from "@/lib/utils";
import { LayoutDashboard, Map, Bell, Settings, Activity } from "lucide-react";
import Link from "next/link";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/", active: true },
  { icon: Map, label: "Map View", href: "#", disabled: true },
  { icon: Bell, label: "Alerts", href: "#", disabled: true },
  { icon: Activity, label: "Analytics", href: "#", disabled: true },
  { icon: Settings, label: "Settings", href: "#", disabled: true },
];

export function Sidebar() {
  return (
    <aside className="w-64 border-r border-border/40 bg-card/50 backdrop-blur-md flex flex-col h-screen fixed left-0 top-0 z-40 pt-16">
      <div className="p-4 flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                  item.active 
                    ? "bg-primary/20 text-primary border border-primary/30 shadow-[0_0_15px_rgba(255,102,0,0.15)]" 
                    : item.disabled
                    ? "text-foreground/40 cursor-not-allowed opacity-60"
                    : "text-foreground/80 hover:bg-white/5 hover:text-foreground"
                )}
                aria-disabled={item.disabled}
                onClick={(e) => item.disabled && e.preventDefault()}
              >
                <item.icon className={cn("w-5 h-5", item.active && "drop-shadow-[0_0_8px_rgba(255,102,0,0.8)]")} />
                <span className="font-medium tracking-wide">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 border-t border-border/40 text-xs text-foreground/40 text-center">
        DisasterLens OS v1.0
      </div>
    </aside>
  );
}
