"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { KpiCards } from "@/components/dashboard/KpiCards";
import { PriorityZones } from "@/components/dashboard/PriorityZones";
import { RecentAssessments } from "@/components/dashboard/RecentAssessments";
import { MainMap } from "@/components/dashboard/MainMap";

export default function Home() {
  return (
    <DashboardLayout>
      <KpiCards />
      
      {/* Main Grid Area: Map and Side Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 h-[500px]">
        {/* Map takes up 2 columns on large screens */}
        <div className="lg:col-span-2 relative">
          <MainMap />
        </div>
        
        {/* Priority Zones taking 1 column */}
        <div className="lg:col-span-1">
          <PriorityZones />
        </div>
      </div>
      
      {/* Table Section */}
      <div className="h-[400px]">
        <RecentAssessments />
      </div>
    </DashboardLayout>
  );
}
