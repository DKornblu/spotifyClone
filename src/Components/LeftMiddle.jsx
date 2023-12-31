import React from 'react';
import { VscLibrary } from 'react-icons/vsc';
import { GoPlus } from 'react-icons/go';
import { MdOutlineArrowForward } from 'react-icons/md';

const LeftMiddle = ({ iconSize }) => {
  return (
    <div className="flex flex-col h-16 p-4 border border-green-600">
      <div className="flex flex-row justify-between border border-red-400">
        <div className="flex flex-row items-center">
          <div className="pr-3">
            <VscLibrary size={iconSize} />
          </div>
          {/* Not an exact icon match to Spotify */}
          <div>Your Library</div>
        </div>
        <div className="flex flex-row items-center">
          <div>
            <GoPlus size={iconSize} />
          </div>
          <div>
            <MdOutlineArrowForward size={iconSize} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftMiddle;
