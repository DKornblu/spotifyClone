import { useState } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import VolumeOptions from "./VolumeOptions";

const BottomPlayBar = () => {
  const [isCurrentlyPlaying, setIsCurrentlyPlaying] = useState(true);

  return (
    <div className="bg-black w-full fixed h-20 bottom-0 border border-yellow-400 ">
      <div className="flex flex-row justify-between p-2 h-full items-center ">
        {isCurrentlyPlaying ? <>Display album</> : <div>display nothing</div>}
        <CurrentlyPlaying />
        <div className="hidden sm:block">
          <VolumeOptions />
        </div>
      </div>
    </div>
  );
};

export default BottomPlayBar;
