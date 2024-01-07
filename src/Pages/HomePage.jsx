import React from "react";
import BottomPlayBar from "../Components/PlayBar/BottomPlayBar";
import MainComp from "../Components/MainComp";

const HomePage = () => {
  return (
    <section className="flex flex-col relative  w-full h-full">
      <div className="flex-1 bg-slate-600">
        <MainComp />
      </div>
      <div className="bg-black w-full fixed h-20 bottom-0">
        <BottomPlayBar />
      </div>
    </section>
  );
};

export default HomePage;
