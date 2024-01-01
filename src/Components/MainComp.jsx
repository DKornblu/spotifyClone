import React from "react";
import LeftPane from "./LeftBar/LeftPane";
import RightPane from "./RightPane";

const MainComp = () => {
  return (
    <section className="flex flex-row h-screen w-full bg-spotifylightblack">
      <div className="flex-2 border border-indigo-600 w-1/4 bg-black">
        <LeftPane />
      </div>

      <div className="flex-7 bg-spotifyblack w-3/4">
        <RightPane />
      </div>
    </section>
  );
};

export default MainComp;
