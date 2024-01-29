import React from "react";
import BottomPlayBar from "../Components/PlayBar/BottomPlayBar";
import Wrapper from "../Components/Wrapper";

const HomePage = () => {
  return (
    <section className="flex flex-col relative  w-full h-full">
      <div className="flex-1 bg-slate-600 ">
        <Wrapper />
      </div>
      <div className="bg-black w-full  h-20 bottom-0 ">
        <BottomPlayBar />
      </div>
    </section>
  );
};

export default HomePage;
