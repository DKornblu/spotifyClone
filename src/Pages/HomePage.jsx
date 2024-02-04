import React from "react";

import RecommendedList from "../Components/RecommendedList";

const HomePage = () => {
  return (
    <>
      <section className="flex flex-1 flex-col h-screen overflow-y-scroll bg-spotifyblack ">
        <RecommendedList />
        <RecommendedList />
      </section>
    </>
  );
};

export default HomePage;
