export const kpiData = {
  totalAssessments: 128,
  affectedArea: 342,
  activeDisasters: 3,
  avgProcessingTime: "26s",
};

export const priorityZones = [
  { id: "Z-01", area: "45 sq km", damage: "Destroyed", location: "North Jakarta", status: "Critical" },
  { id: "Z-02", area: "28 sq km", damage: "Major", location: "East Jakarta", status: "High" },
  { id: "Z-03", area: "12 sq km", damage: "Minor", location: "South Jakarta", status: "Medium" },
];

export const recentAssessments = [
  { id: "ASM-9901", type: "Flood", region: "Kampung Melayu", status: "Completed", area: "15 sq km", time: "10 mins ago" },
  { id: "ASM-9902", type: "Flood", region: "Pluit", status: "Processing", area: "8 sq km", time: "25 mins ago" },
  { id: "ASM-9903", type: "Earthquake", region: "Cianjur (Outskirts)", status: "Failed", area: "N/A", time: "1 hour ago" },
  { id: "ASM-9904", type: "Flood", region: "Kelapa Gading", status: "Completed", area: "12 sq km", time: "2 hours ago" },
  { id: "ASM-9905", type: "Flood", region: "Kemang", status: "Completed", area: "5 sq km", time: "3 hours ago" },
];

export const mapDamageZones = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "North Jakarta Coast", damage: "Destroyed", area: "45 sq km", color: "#ef4444" },
      geometry: { type: "Polygon", coordinates: [[[106.8, -6.1], [106.85, -6.1], [106.85, -6.15], [106.8, -6.15], [106.8, -6.1]]] }
    },
    {
      type: "Feature",
      properties: { name: "East Jakarta Floodplains", damage: "Major", area: "28 sq km", color: "#f97316" },
      geometry: { type: "Polygon", coordinates: [[[106.88, -6.2], [106.92, -6.2], [106.92, -6.25], [106.88, -6.25], [106.88, -6.2]]] }
    },
    {
      type: "Feature",
      properties: { name: "South Jakarta Residential", damage: "Minor", area: "12 sq km", color: "#eab308" },
      geometry: { type: "Polygon", coordinates: [[[106.78, -6.25], [106.82, -6.25], [106.82, -6.3], [106.78, -6.3], [106.78, -6.25]]] }
    },
    {
      type: "Feature",
      properties: { name: "Central Jakarta Business District", damage: "None", area: "Secure", color: "#22c55e" },
      geometry: { type: "Polygon", coordinates: [[[106.82, -6.17], [106.84, -6.17], [106.84, -6.2], [106.82, -6.2], [106.82, -6.17]]] }
    }
  ]
};
