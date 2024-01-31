import React from "react";
import BottomPlayBar from "../Components/PlayBar/BottomPlayBar";
import Wrapper from "../Components/Wrapper";

const HomePage = () => {
  return (
    <section className="flex flex-col relative  w-full h-full">
      <Wrapper />

      <BottomPlayBar />
    </section>
  );
};

export default HomePage;
