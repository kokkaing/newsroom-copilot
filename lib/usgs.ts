import { Story } from "@/types/story";

export async function getEarthquakes(): Promise<Story[]> {
  const response = await fetch(
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson"
  );

  const data = await response.json();

return data.features.slice(0, 10).map((quake: any, index: number) => ({
  id: String(index),
  title: quake.properties.title,
  category: "Earthquake",
  priority:
    quake.properties.mag >= 5
      ? "High"
      : quake.properties.mag >= 3
      ? "Medium"
      : "Low",

  location: quake.properties.place,
  magnitude: quake.properties.mag ?? 0,
  time: new Date(quake.properties.time).toLocaleString(),
  url: quake.properties.url,
}));
}