"use client";

import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

const MapComponent = dynamic(
  () => import("./MapComponent"),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex flex-col items-center justify-center bg-card/30 rounded-xl border border-border/50">
        <Loader2 className="w-8 h-8 text-primary animate-spin mb-4" />
        <span className="text-foreground/60 text-sm font-mono tracking-wider animate-pulse">
          INITIALIZING GEOSPATIAL ENGINE...
        </span>
      </div>
    )
  }
);

export function MainMap() {
  return (
    <div className="w-full h-full glass rounded-xl border border-primary/20 overflow-hidden relative shadow-[0_0_30px_rgba(255,102,0,0.05)]">
      <MapComponent />
      
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50 pointer-events-none z-[15]" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/50 pointer-events-none z-[15]" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/50 pointer-events-none z-[15]" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/50 pointer-events-none z-[15]" />
    </div>
  );
}
