import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../component/MeteoMap"), { ssr: false });

export default function App() {
  return (
    <>
      <Map />
    </>
  );
}
