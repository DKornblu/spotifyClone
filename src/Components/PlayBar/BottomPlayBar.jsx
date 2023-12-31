import React from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";

const BottomPlayBar = () => {
  return (
    <section className="flex flex-row justify-between p-2 h-full items-center">
      <div className="border border-teal-100">currently playing</div>
      <CurrentlyPlaying />
      <div className="">right side</div>
    </section>
  );
};

export default BottomPlayBar;
