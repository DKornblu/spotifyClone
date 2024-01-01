import React from "react";
import { VscLibrary } from "react-icons/vsc";
import { GoPlus } from "react-icons/go";
import { MdOutlineArrowForward } from "react-icons/md";

const LeftMiddle = ({ iconSize }) => {
  return (
    <div className="flex flex-col h-16 pl-3 rounded-md bg-spotifyblack justify-evenly">
      <div className="flex flex-row justify-between items-center border border-red-400 pr-2">
        <div className="flex flex-row items-center">
          <div className="pr-3 hover:text-white">
            <VscLibrary size={iconSize} />
          </div>
          {/* Not an exact icon match to Spotify */}
          <div>Your Library</div>
        </div>
        <div className="flex flex-row items-center">
          <div className="hover:text-white">
            <GoPlus size={iconSize} />
          </div>
          <div className="hover:text-white">
            <MdOutlineArrowForward size={iconSize} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftMiddle;
