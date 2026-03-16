"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, X } from "lucide-react";

interface Office {
  id: string;
  name: string;
  city: string;
  address: string;
  full_address: string;
  phone1: string;
  phone2: string | null;
  latitude: number;
  longitude: number;
  image_url: string | null;
  is_hq: boolean;
}

// Static office data for initial render (matches Supabase seed data)
const offices: Office[] = [
  { id: "1", name: "Albany Office", city: "Albany", address: "2101 Dawson Rd", full_address: "2101 Dawson Rd, Albany, GA 31707", phone1: "(229) 439-7021", phone2: null, latitude: 31.602, longitude: -84.184, image_url: "/assets/offices/albany.jpg", is_hq: false },
  { id: "2", name: "Atlanta Office", city: "Atlanta", address: "4370 Peachtree Rd NE Ste 500", full_address: "4370 Peachtree Rd NE Ste 500, Atlanta, GA 30319", phone1: "404-231-2111", phone2: null, latitude: 33.8485, longitude: -84.3635, image_url: "/assets/offices/atlanta.jpg", is_hq: true },
  { id: "3", name: "Augusta Office", city: "Augusta", address: "1212 West Medical Park Rd", full_address: "1212 West Medical Park Rd, Augusta, GA 30909", phone1: "(706) 798-3244", phone2: null, latitude: 33.455, longitude: -82.046, image_url: "/assets/offices/augusta.jpg", is_hq: false },
  { id: "4", name: "Douglas Office", city: "Douglas", address: "810 North Madison Ave", full_address: "810 North Madison Ave, Douglas, GA 31533", phone1: "(912) 384-3932", phone2: null, latitude: 31.509, longitude: -82.851, image_url: "/assets/offices/douglas.jpg", is_hq: false },
  { id: "5", name: "Dublin Office", city: "Dublin", address: "120 Oak Street", full_address: "120 Oak Street, Dublin, GA 31021", phone1: "(478) 272-1312", phone2: null, latitude: 32.539, longitude: -82.923, image_url: "/assets/offices/dublin.jpg", is_hq: false },
  { id: "6", name: "Macon Office", city: "Macon", address: "1314 Hardeman Ave", full_address: "1314 Hardeman Ave, Macon, GA 31201", phone1: "(478) 745-7961", phone2: null, latitude: 32.846, longitude: -83.652, image_url: "/assets/offices/macon.jpg", is_hq: false },
  { id: "7", name: "Savannah Office", city: "Savannah", address: "2231 E Victory Dr", full_address: "2231 E Victory Dr, Savannah, GA 31414", phone1: "(912) 354-0996", phone2: null, latitude: 32.041, longitude: -81.066, image_url: "/assets/offices/savannah.jpg", is_hq: false },
  { id: "8", name: "Thomasville Office", city: "Thomasville", address: "444 E Jackson St", full_address: "444 E Jackson St, Thomasville, GA 31792", phone1: "(229) 226-9390", phone2: null, latitude: 30.835, longitude: -83.98, image_url: "/assets/offices/thomasville.jpg", is_hq: false },
];

export default function DistrictOfficesPage() {
  const [selectedOffice, setSelectedOffice] = useState<Office | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    const initMap = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const win = window as any;
      if (typeof window === "undefined" || !win.L) {
        setTimeout(initMap, 100);
        return;
      }
      const L = win.L;

      if (mapRef.current && !mapInstanceRef.current) {
        const map = L.map(mapRef.current).setView([32.84, -83.63], 7);
        mapInstanceRef.current = map;

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);

        const hqIcon = new L.Icon({
          iconUrl: "/assets/markers/marker-icon-2x-gold.png",
          shadowUrl: "/assets/markers/marker-shadow.png",
          iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41],
        });

        offices.forEach((office) => {
          const opts = office.is_hq ? { icon: hqIcon } : {};
          const marker = L.marker([office.latitude, office.longitude], opts).addTo(map);
          const label = office.is_hq
            ? `<strong>${office.name} (Headquarters)</strong><br>${office.address}`
            : `<strong>${office.name}</strong><br>${office.address}`;
          marker.bindPopup(label);
          marker.on("click", () => setSelectedOffice(office));
        });
      }
    };

    initMap();
    return () => {
      if (mapInstanceRef.current) {
        try { mapInstanceRef.current.remove(); } catch {}
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[300px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our District Offices</h1>
          <p className="text-lg text-white/90 mt-2">8 offices serving families across Georgia</p>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="border-b">
                <CardTitle className="text-center">Georgia District Offices</CardTitle>
                <p className="text-center text-sm text-muted-foreground mt-1">Click on any pin to view office details</p>
              </CardHeader>
              <CardContent className="p-6">
                <div ref={mapRef} className="w-full h-[400px] rounded-lg overflow-hidden border" style={{ zIndex: 1 }} />
              </CardContent>
            </Card>
          </div>

          {/* Office Grid */}
          <div className="max-w-5xl mx-auto mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office) => (
              <Card key={office.id} className="hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => setSelectedOffice(office)}>
                {office.image_url && (
                  <div className="h-40 overflow-hidden rounded-t-lg">
                    <img src={office.image_url} alt={`${office.city} office`} className="w-full h-full object-cover" />
                  </div>
                )}
                <CardContent className="pt-4">
                  <h3 className="font-bold text-foreground mb-1">
                    {office.city} {office.is_hq && <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full ml-2">HQ</span>}
                  </h3>
                  <p className="text-sm text-muted-foreground">{office.address}</p>
                  <p className="text-sm text-muted-foreground">{office.phone1}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Detail Modal */}
      {selectedOffice && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedOffice(null)}>
          <Card className="w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <CardHeader className="relative">
              <button onClick={() => setSelectedOffice(null)} className="absolute right-4 top-4 text-muted-foreground hover:text-foreground" aria-label="Close">
                <X className="h-5 w-5" />
              </button>
              <CardTitle className="pr-8">{selectedOffice.city} Office</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {selectedOffice.image_url && (
                <img src={selectedOffice.image_url} alt={`${selectedOffice.city} office`} className="w-full h-48 object-cover rounded-md" />
              )}
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-foreground">{selectedOffice.full_address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href={`tel:${selectedOffice.phone1.replace(/\D/g, "")}`} className="text-foreground hover:text-secondary transition-colors">
                  {selectedOffice.phone1}
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
