import React from "react";
import { HiOutlineVolumeUp } from "react-icons/hi";
import { LuPlaySquare } from "react-icons/lu";
import { HiOutlineQueueList } from "react-icons/hi2";
import { MdOutlineSpeakerGroup } from "react-icons/md";

const VolumeOptions = () => {
  const iconStyle = {
    className: "h-7 w-7 px-1 hover:text-white",
  };

  return (
    <div className="flex flex-row items-center mr-3">
      <LuPlaySquare {...iconStyle} />

      <HiOutlineQueueList {...iconStyle} />
      <MdOutlineSpeakerGroup {...iconStyle} />
      <HiOutlineVolumeUp {...iconStyle} />

      <div className="w-24 h-1 bg-white m-2 hover:bg-spotifygreen rounded-full"></div>
    </div>
  );
};

export default VolumeOptions;
