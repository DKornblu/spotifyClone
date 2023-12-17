import React from "react";
import BottomPlayBar from "../Components/BottomPlayBar";
import MainComp from "../Components/MainComp";

const HomePage = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex-1 overflow-y-auto">
        <MainComp />
      </div>

      <div className="bg-spotifyblack fixed bottom-0 left-0 w-full h-20">
        <BottomPlayBar />
      </div>
    </div>
  );
};

export default HomePage;
