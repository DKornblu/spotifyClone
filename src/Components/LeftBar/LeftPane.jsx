import React from "react";
import { CgPentagonUp } from "react-icons/cg";
import LeftTop from "./LeftTop";
import LeftMiddle from "../LeftBar/LeftMiddle/LeftMiddle";
import LeftBottom from "./LeftBottom";

const LeftPane = () => {
  const iconSize = 25;

  return (
    <section className="flex-1 text-sm rounded-md space-y-2 flex flex-col mt-2 justify-start w-1/5 border border-blue-500 bg-black">
      <LeftTop iconSize={iconSize} />
      <LeftMiddle iconSize={iconSize} />
      <div className="flex-4 h-full ">
        <LeftBottom
          className="
          rounded-md bg-divblack py-2 overflow-y-auto "
        />
        <div className="bg-divblack">
          <CgPentagonUp size={45} className="flex-1" />{" "}
          {/* Not an exact icon match to Spotify, and only when window is minimized */}
        </div>
      </div>
    </section>
  );
};

export default LeftPane;
