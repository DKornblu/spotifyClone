import React from "react";
import { CgPentagonUp } from "react-icons/cg";
import LeftTop from "./LeftTop";
import LeftMiddle from "../LeftBar/LeftMiddle/LeftMiddle";
import LeftBottom from "./LeftBottom";

const LeftPane = () => {
  const iconSize = 25;

  return (
    <section className="flex-1 text-sm m-2 rounded-md space-y-2 flex flex-col justify-start h-5/6 border border-blue-500">
      <LeftTop iconSize={iconSize} className="flex-none" />
      <LeftMiddle iconSize={iconSize} className="flex-none" />
      <LeftBottom
        className="grow
      rounded-md bg-spotifyblack py-2 border border-zinc-100
     overflow-y-auto
     "
      />
      <div className="flex-none">
        <CgPentagonUp size={45} className="flex-1" />{" "}
        {/* Not an exact icon match to Spotify, and only when window is minimized */}
      </div>
    </section>
  );
};

export default LeftPane;
