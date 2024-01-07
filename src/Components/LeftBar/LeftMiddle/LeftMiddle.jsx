import React from "react";
import { VscLibrary } from "react-icons/vsc";
import { GoPlus } from "react-icons/go";
import { MdOutlineArrowForward } from "react-icons/md";

import SlidingBubles from "./SlidingBubles";

const LeftMiddle = ({ iconSize }) => {
  return (
    <div className="flex flex-col justify-evenly h-24 border border-red-600 rounded-md bg-spotifyblack px-4">
      <div className="flex flex-row justify-between items-center border border-red-400">
        <div className="pr-3 hover:text-white">
          <VscLibrary size={iconSize} />
          {/* Not an exact icon match to Spotify */}
        </div>
        <div className="flex flex-row items-center border border-red-600 grow justify-between max-[950px]:hidden">
          <div className="font-bold">Your Library</div>
          <div className="flex flex-row ">
            <div className="hover:text-white">
              <GoPlus size={iconSize} />
            </div>
            <div className="hover:text-white">
              <MdOutlineArrowForward size={iconSize} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center ">
        <SlidingBubles />
      </div>
    </div>
  );
};

export default LeftMiddle;
