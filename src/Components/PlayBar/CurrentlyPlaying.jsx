// CurrentlyPlaying.js
import React from "react";
import {
  BsShuffle,
  BsFillSkipEndFill,
  BsFillPlayFill,
  BsFillSkipStartFill,
  BsRepeat,
} from "react-icons/bs";
import "./PlayBarCSS.css";

const CurrentlyPlaying = () => {
  return (
    <div className="flex items-center justify-between p-4 flex-col border border-blue-400">
      <div className="flex space-x-6 border border-green-400 ">
        <BsShuffle className="icon-play hover:text-white" />

        <BsFillSkipStartFill className="icon-play hover:text-white" />

        <div className="icon-play-container">
          <div className="icon-play-circle bg-white rounded-full p-2">
            <BsFillPlayFill className="icon-play-sign " />
          </div>
        </div>

        <BsFillSkipEndFill className="icon-play hover:text-white" />
        <BsRepeat className="icon-play hover:text-white" />
      </div>
      {/* TODO: add profress bar */}
      <div className="flex-1 mx-4 ">
        <div className="flex items-center justify-between ">
          <span>0:00</span>

          <div className="flex-1 bg-gray-300 h-4 mx-4 rounded-full">
            <div className="bg-blue-400 h-full rounded-full"></div>
          </div>

          <span>3:30</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentlyPlaying;
