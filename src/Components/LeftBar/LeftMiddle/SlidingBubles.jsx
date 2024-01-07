import React from "react";

const SlidingBubles = () => {
  let bubblesArray = ["Playlists", "Artists", "Albums", "Podcasts & Shows"];

  //   TODO: add next and prv fucntionality

  return (
    <div className="flex overflow-x-auto py-2 ">
      {bubblesArray.map((bubble, index) => (
        <div
          key={index}
          className="flex items-center justify-center bg-spotifylightblack text-white py-2 px-3 rounded-full text-xs mx-1 whitespace-nowrap "
        >
          {bubble}
        </div>
      ))}
    </div>
  );
};

export default SlidingBubles;
