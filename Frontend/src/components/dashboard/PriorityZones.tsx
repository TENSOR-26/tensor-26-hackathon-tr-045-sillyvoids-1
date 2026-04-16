"use client";

import { priorityZones } from "@/lib/mock-data";
import { AlertTriangle, MapPin, Navigation2 } from "lucide-react";
import { motion } from "framer-motion";

export function PriorityZones() {
  return (
    <div className="glass rounded-xl p-5 h-full border border-danger/20 flex flex-col relative overflow-hidden">
      {/* Subtle background alert glow for priority context */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-danger/5 rounded-full blur-3xl -z-10" />
      
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-danger/20 rounded-lg text-danger border border-danger/30">
          <AlertTriangle className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-foreground tracking-wide">Priority Zones</h2>
          <p className="text-xs text-foreground/50">High alert regions requiring immediate attention</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 space-y-4">
        {priorityZones.map((zone, i) => (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            key={zone.id} 
            className="p-4 rounded-lg bg-card/80 border border-border/50 hover:bg-card hover:border-danger/40 transition-all group"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-mono text-danger font-bold bg-danger/10 px-2 py-0.5 rounded border border-danger/20">
                  {zone.id}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-danger/80">
                  P-{i + 1}
                </span>
              </div>
              <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                zone.status === 'Critical' ? 'bg-danger/20 text-danger border border-danger/30' :
                zone.status === 'High' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
              }`}>
                {zone.status}
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <Navigation2 className="w-4 h-4 text-primary" />
                <span className="font-medium">{zone.location}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-foreground/60">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Area: {zone.area}</span>
                </div>
                <span>Damage: <span className="text-foreground/90 font-medium">{zone.damage}</span></span>
              </div>
            </div>
            
            {/* Deploy Action */}
            <div className="mt-4 pt-3 border-t border-border/50 opacity-0 group-hover:opacity-100 transition-opacity h-0 group-hover:h-auto overflow-hidden">
              <button className="w-full py-1.5 rounded bg-primary/10 text-primary border border-primary/30 text-xs font-medium hover:bg-primary/20 hover:shadow-[0_0_10px_rgba(255,102,0,0.2)] transition-all">
                Dispatch Relief Unit
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
