import React from "react";
import { GoHome, GoHomeFill } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const LeftTop = ({ iconSize, searchInput, setSearchInput }) => {
  return (
    <div className="flex-none flex flex-col justify-evenly h-24  px-4 bg-spotifyblack rounded-md">
      {/* TODO: current page should have white text, ie home icon and Home to be white by default, but when press search- home turns gray and search turns white */}
      <Link to="/">
        <div
          className="flex flex-row items-center  text-white hover:text-white hover:cursor-pointer"
          onClick={() => setSearchInput(false)}>
          <div className="pr-3">
            <GoHomeFill size={iconSize} />
          </div>

          {/* TODO:ding icons to text when hovering */}
          <div className="font-bold max-[950px]:hidden">Home</div>
        </div>
      </Link>
      <Link to="/search">
        <div
          className="flex flex-row items-center  hover:text-white hover:cursor-pointer"
          onClick={() => setSearchInput(true)}>
          <div className="pr-3">
            <IoSearchOutline size={iconSize} />
          </div>
          <div className="font-bold max-[950px]:hidden">Search</div>
        </div>
      </Link>
    </div>
  );
};

export default LeftTop;
