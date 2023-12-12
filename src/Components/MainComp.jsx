import React from "react";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const MainComp = () => {
  return (
    <section className="flex flex-row h-screen">
      <div className="sm">
        <LeftPane />
      </div>

      <div className="flex-1">
        <RightPane />
      </div>
    </section>
  );
};

export default MainComp;
