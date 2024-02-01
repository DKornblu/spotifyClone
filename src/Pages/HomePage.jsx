import React from "react";

import RecommendedList from "../Components/RecommendedList";

const HomePage = () => {
  return (
    <>
      <section className="flex flex-1 flex-col h-full overflow-y-scroll bg-spotifyblack border border-green-600">
        <RecommendedList />
        {/* <RecommendedList /> */}
      </section>
    </>
  );
};

export default HomePage;
