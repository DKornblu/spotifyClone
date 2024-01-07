import React from "react";
import { GoHome, GoHomeFill } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";

const LeftTop = ({ iconSize }) => {
  return (
    <div className="flex flex-col justify-evenly h-24 border border-red-600 px-4 bg-spotifyblack rounded-md">
      {/* TODO: current page should have white text, ie home icon and Home to be white by default, but when press search- home turns gray and search turns white */}
      <div className="flex flex-row items-center border border-red-600 text-white hover:text-white hover:cursor-pointer">
        <div className="pr-3">
          <GoHomeFill size={iconSize} />
        </div>
        {/* TODO:ding icons to text when hovering */}
        <div className="font-bold max-[950px]:hidden">Home</div>
      </div>
      <div className="flex flex-row items-center border border-red-600 hover:text-white hover:cursor-pointer">
        <div className="pr-3">
          <IoSearchOutline size={iconSize} />
        </div>
        <div className="font-bold max-[950px]:hidden">Search</div>
      </div>
    </div>
  );
};

export default LeftTop;
