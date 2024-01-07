import React from "react";
import { CgPentagonUp } from "react-icons/cg";
import LeftTop from "./LeftTop";
import LeftMiddle from "./LeftMiddle";
import LeftBottom from "./LeftBottom";

const LeftPane = () => {
  const iconSize = 25;

  return (
    <section className="flex-1 text-sm m-2 rounded-md space-y-2">
      <LeftTop iconSize={iconSize} />
      <LeftMiddle iconSize={iconSize} />
      <LeftBottom />
      <div>
        <CgPentagonUp size={45} />{" "}
        {/* Not an exact icon match to Spotify, and only when window is minimized */}
      </div>
    </section>
  );
};

export default LeftPane;
