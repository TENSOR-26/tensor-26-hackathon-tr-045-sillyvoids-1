"use client";

import { kpiData } from "@/lib/mock-data";
import { motion } from "framer-motion";
import { CopyCheck, Map as MapIcon, ShieldAlert, Timer } from "lucide-react";

export function KpiCards() {
  const cards = [
    {
      title: "Total Assessments",
      value: kpiData.totalAssessments,
      icon: CopyCheck,
      color: "text-blue-400",
      bgBlur: "bg-blue-400/10",
      borderGlow: "group-hover:shadow-[0_0_20px_rgba(96,165,250,0.2)]"
    },
    {
      title: "Affected Area",
      value: `${kpiData.affectedArea} sq km`,
      icon: MapIcon,
      color: "text-primary",
      bgBlur: "bg-primary/10",
      borderGlow: "group-hover:shadow-[0_0_20px_rgba(255,102,0,0.2)]"
    },
    {
      title: "Active Disasters",
      value: kpiData.activeDisasters,
      icon: ShieldAlert,
      color: "text-danger",
      bgBlur: "bg-danger/10",
      borderGlow: "group-hover:shadow-[0_0_20px_rgba(255,50,50,0.2)]"
    },
    {
      title: "Avg Process Time",
      value: kpiData.avgProcessingTime,
      icon: Timer,
      color: "text-success",
      bgBlur: "bg-success/10",
      borderGlow: "group-hover:shadow-[0_0_20px_rgba(0,255,130,0.2)]"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6"
    >
      {cards.map((card, index) => (
        <motion.div 
          key={index} 
          variants={item}
          className={`group glass rounded-xl p-5 relative overflow-hidden transition-all duration-300 ${card.borderGlow}`}
        >
          {/* Subtle background glow blob */}
          <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full blur-2xl opacity-40 ${card.bgBlur}`} />
          
          <div className="flex justify-between items-start mb-4 relative z-10">
            <h3 className="text-foreground/60 font-medium text-sm tracking-wide uppercase">{card.title}</h3>
            <div className={`p-2 rounded-lg ${card.bgBlur}`}>
              <card.icon className={`w-5 h-5 ${card.color}`} strokeWidth={2.5} />
            </div>
          </div>
          
          <div className="relative z-10">
            <div className="text-3xl font-bold font-mono text-foreground tracking-tight">
              {card.value}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
