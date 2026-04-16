"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { mapDamageZones } from "@/lib/mock-data";

function MapResizer() {
  const map = useMap();
  useEffect(() => {
    // Slight delay ensures the map container has its final dimensions
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 200);
    return () => clearTimeout(timer);
  }, [map]);
  return null;
}

export default function MapComponent() {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden relative">
      <MapContainer 
        center={[-6.2, 106.8]} 
        zoom={11} 
        scrollWheelZoom={true} 
        style={{ height: "100%", width: "100%", zIndex: 10 }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        <GeoJSON 
          data={mapDamageZones as any} 
          style={(feature: any) => ({
            color: feature.properties.color,
            weight: 2,
            fillOpacity: 0.35,
            dashArray: '3',
          })}
          onEachFeature={(feature, layer) => {
            if (feature.properties && feature.properties.name) {
              const popupContent = `
                <div style="background: #1a1a1a; color: white; padding: 8px; border-radius: 4px; border: 1px solid #333;">
                  <strong style="color: ${feature.properties.color}; font-size: 14px">${feature.properties.name}</strong><br/>
                  <span style="font-size: 12px; opacity: 0.8">Damage: ${feature.properties.damage}</span><br/>
                  <span style="font-size: 12px; opacity: 0.8">Area: ${feature.properties.area}</span>
                </div>
              `;
              layer.bindPopup(popupContent, {
                className: 'custom-popup'
              });
              layer.on({
                mouseover: (e) => {
                  const l = e.target;
                  l.setStyle({
                    fillOpacity: 0.7,
                    weight: 3
                  });
                },
                mouseout: (e) => {
                  const l = e.target;
                  l.setStyle({
                    fillOpacity: 0.35,
                    weight: 2
                  });
                }
              });
            }
          }}
        />
        <MapResizer />
      </MapContainer>
      
      {/* Map Overlay Labels */}
      <div className="absolute top-4 left-4 z-[20] bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 pointer-events-none">
        <h3 className="text-white font-bold text-sm">Jakarta Flood Assessment</h3>
        <p className="text-white/60 text-xs">Updated 2 hours ago</p>
      </div>

      <div className="absolute bottom-6 right-4 z-[20] flex flex-col gap-2 pointer-events-none">
        <div className="bg-black/60 backdrop-blur-md px-3 py-2 rounded border border-white/10 flex flex-col gap-1.5 text-xs text-white/80">
          <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-[#ef4444] opacity-80" /> Destroyed</div>
          <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-[#f97316] opacity-80" /> Major</div>
          <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-[#eab308] opacity-80" /> Minor</div>
          <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-[#22c55e] opacity-80" /> No Damage</div>
        </div>
      </div>
{/* Custom styles for the Leaflet popup to override default white background */}
<style dangerouslySetInnerHTML={{__html: `
.leaflet-popup-content-wrapper { background: transparent; padding: 0; box-shadow: none; }
.leaflet-popup-tip { background: #1a1a1a; }
.custom-popup .leaflet-popup-content { margin: 0; }
`}} />
    </div>
  );
}
