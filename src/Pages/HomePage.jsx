import React from "react";
import BottomPlayBar from "../Components/BottomPlayBar";
import MainComp from "../Components/MainComp";

const HomePage = () => {
  return (
    <>
      <section className="main-container">
        <MainComp />
        <BottomPlayBar />
      </section>
    </>
  );
};

export default HomePage;
