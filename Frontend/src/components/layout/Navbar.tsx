"use client";

import { Activity, Cpu, Hexagon } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 border-b border-border/40 bg-background/80 backdrop-blur-xl z-50 flex items-center justify-between px-6">
      {/* Brand */}
      <div className="flex items-center gap-2">
        <div className="relative flex items-center justify-center w-8 h-8 rounded bg-primary/20 text-primary border border-primary/50 shadow-[0_0_15px_rgba(255,102,0,0.3)]">
          <Hexagon className="w-5 h-5 fill-current" />
        </div>
        <span className="text-xl font-bold tracking-wider uppercase text-foreground/90 font-mono">
          Disaster<span className="text-primary">Lens</span>
        </span>
      </div>

      {/* Status Indicators & Profile */}
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-4 text-xs font-mono px-4 py-1.5 rounded-full border border-border/50 bg-black/40">
          <div className="flex items-center gap-1.5 text-foreground/70">
            <Activity className="w-3.5 h-3.5 text-primary" />
            <span>LAT: 180ms</span>
          </div>
          <div className="w-px h-3 bg-border/50" />
          <div className="flex items-center gap-1.5 text-foreground/70">
            <Cpu className="w-3.5 h-3.5 text-success" />
            <span>GPU: 72%</span>
          </div>
          <div className="w-px h-3 bg-border/50" />
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
            </span>
            <span className="text-success font-semibold tracking-wider">AI OPERATIONAL</span>
          </div>
        </div>

        {/* Profile Avatar */}
        <div className="w-9 h-9 rounded-full bg-border/50 border border-border flex items-center justify-center overflow-hidden">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=disaster-lens&backgroundColor=1a1a1a" 
            alt="User Avatar" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
}
