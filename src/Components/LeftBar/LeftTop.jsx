import React from "react";
import { NavLink } from "react-router-dom";
import { GoHome, GoHomeFill } from "react-icons/go";
import { RiSearch2Line, RiSearch2Fill } from "react-icons/ri";

const LeftTop = ({ setSearchInput }) => {
  return (
    <div className="flex-none flex flex-col justify-evenly h-24  px-4 bg-spotifyblack rounded-md">
      <NavLink
        to="/"
        className={(isActive) => "nav-link" + (!isActive ? " unselected" : "")}>
        {({ isActive }) => (
          <div
            className={
              !isActive
                ? "flex flex-row items-center  hover:text-white hover:cursor-pointer"
                : "flex items-center text-white"
            }
            onClick={() => setSearchInput(false)}>
            <div className="pr-3">
              {!isActive ? (
                <GoHome className="text-2xl" />
              ) : (
                <GoHomeFill className="text-2xl text-white" />
              )}
            </div>
            <div className="font-bold max-[950px]:hidden">Home</div>
          </div>
        )}
      </NavLink>
      <NavLink
        to="/search"
        className={(isActive) => "nav-link" + (!isActive ? " unselected" : "")}>
        {({ isActive }) => (
          <div
            className={
              !isActive
                ? "flex flex-row items-center  hover:text-white hover:cursor-pointer"
                : "flex items-center text-white"
            }
            onClick={() => setSearchInput(true)}>
            <div className="pr-3">
              {!isActive ? (
                <RiSearch2Line className="text-2xl" />
              ) : (
                <RiSearch2Fill className="text-2xl text-white" />
              )}
            </div>
            <div className="font-bold max-[950px]:hidden">Search</div>
          </div>
        )}
      </NavLink>
    </div>
  );
};

export default LeftTop;
