"use client";

import { recentAssessments } from "@/lib/mock-data";
import { ListFilter } from "lucide-react";
import { motion } from "framer-motion";

export function RecentAssessments() {
  return (
    <div className="glass rounded-xl p-5 overflow-hidden flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-bold text-foreground tracking-wide">Recent Assessments</h2>
          <p className="text-xs text-foreground/50">Details of latest AI pipeline analysis</p>
        </div>
        <button className="p-2 border border-border/50 rounded-lg hover:bg-white/5 transition-colors text-foreground/70">
          <ListFilter className="w-4 h-4" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="text-xs text-foreground/40 uppercase bg-black/20 border-b border-border/40">
            <tr>
              <th className="px-4 py-3 font-medium rounded-tl-lg">ID</th>
              <th className="px-4 py-3 font-medium">Type</th>
              <th className="px-4 py-3 font-medium">Region</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Affected Area</th>
              <th className="px-4 py-3 font-medium rounded-tr-lg text-right">Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/20">
            {recentAssessments.map((item, index) => (
              <motion.tr 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                key={item.id} 
                className="hover:bg-white/[0.02] transition-colors group cursor-pointer"
              >
                <td className="px-4 py-3.5 font-mono text-primary/80 font-medium group-hover:text-primary transition-colors">{item.id}</td>
                <td className="px-4 py-3.5 text-foreground/80">{item.type}</td>
                <td className="px-4 py-3.5 text-foreground/90 font-medium">{item.region}</td>
                <td className="px-4 py-3.5">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    item.status === 'Completed' ? 'bg-success/10 text-success border border-success/20' :
                    item.status === 'Processing' ? 'bg-warning/10 text-warning border border-warning/20' :
                    'bg-danger/10 text-danger border border-danger/20'
                  }`}>
                    {item.status === 'Processing' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-warning animate-pulse mr-1.5" />
                    )}
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-3.5 text-foreground/70">{item.area}</td>
                <td className="px-4 py-3.5 text-foreground/50 text-right text-xs">{item.time}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
