import React from "react";
import { TubesCursor } from "../components/ui/tube-cursor";

export const Cursors = () => {
  return (
    <div className="bg-black min-h-screen">
      <TubesCursor
        title="Tubes"
        subtitle="Cursor"
        caption="Click to Change- by Rahil Vahora"
        initialColors={["#ff0000", "#00ff00", "#0000ff"]}
        lightColors={["#ffff00", "#ff00ff", "#00ffff", "#ffffff"]}
        lightIntensity={250}
        titleSize="text-[70px]"
        subtitleSize="text-[50px]"
        captionSize="text-lg"
        enableRandomizeOnClick
      />
    </div>
  );
};
