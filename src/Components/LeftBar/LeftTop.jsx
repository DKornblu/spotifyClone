import React from "react";
import { GoHome, GoHomeFill } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";

const LeftTop = ({ iconSize }) => {
  return (
    <div className="flex flex-col justify-evenly h-24 border border-red-600 px-4 bg-spotifylightblack rounded-md">
      <div className="flex flex-row items-center ">
        <div className="pr-3 hover:text-white">
          <GoHomeFill size={iconSize} />
        </div>
        {/* TODO:ding icons to text when hovering */}
        <div>Home</div>
      </div>
      <div className="flex flex-row items-center">
        <div className="pr-3 hover:text-white">
          <IoSearchOutline size={iconSize} />
        </div>
        <div>Search</div>
      </div>
    </div>
  );
};

export default LeftTop;
