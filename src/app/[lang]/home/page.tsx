"use client";
import { useMemo } from "react";
import dynamic from "next/dynamic";
import MapPointDetails from "@/components/map-point-details/MapPointDetails";

export default function Home() {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <div className="flex justify-center pt-8">
      <Map zoom={13} position={[51.505, -0.09]} />
      <MapPointDetails />
    </div>
  );
}
