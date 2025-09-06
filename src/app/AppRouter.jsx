import { Routes, Route } from "react-router-dom";
import Zone from "./pages/Zone/Zone";
import History from "./pages/Zone/History";
import Locations from "./pages/Zone/Location";
import Anomalies from "./pages/Zone/Anomalies";
import Artifacts from "./pages/Zone/Artifacts";

import Stalkers from "./pages/Stalkers/Stalkers";
import Factions from "./pages/Stalkers/Factions";
import Legends from "./pages/Stalkers/Legends";
import Diary from "./pages/Stalkers/Diary";

import Archive from "./pages/Archive/Archive";
import Documents from "./pages/Archive/Documents";
import Gallery from "./pages/Archive/Gallery";
import Radio from "./pages/Archive/Radio";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/zone" element={<Zone />} />
      <Route path="/stalkers" element={<Stalkers />} />
      <Route path="/archive" element={<Archive />} />

      <Route path="/zone/history" element={<History />} />
      <Route path="/zone/location" element={<Locations />} />
      <Route path="/zone/anomalies" element={<Anomalies />} />
      <Route path="/zone/artifacts" element={<Artifacts />} />

      <Route path="/stalker/factions" element={<Factions />} />
      <Route path="/stalker/legends" element={<Legends />} />
      <Route path="/stalker/diary" element={<Diary />} />

      <Route path="/archive/documents" element={<Documents />} />
      <Route path="/archive/gallery" element={<Gallery />} />
      <Route path="/archive/radio" element={<Radio />} />
    </Routes>
  );
}
