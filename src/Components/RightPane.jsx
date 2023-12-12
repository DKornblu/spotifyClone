import React from "react";
import RecommendedList from "./RecommendedList";
import NavbarElement from "./NavbarElement";

const RightPane = () => {
  return (
    <section className="flex flex-col h-full bg-slate-300 ">
      <NavbarElement />
      <div className="flex h-full ">
        <RecommendedList />
      </div>
    </section>
  );
};

export default RightPane;
